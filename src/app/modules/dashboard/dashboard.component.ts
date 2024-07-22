import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb, PoPageModule, PoTableModule, PoWidgetModule } from '@po-ui/ng-components';
import { breadcrumbs } from './models/breadcumbs';
import { DeliveryFailureQuantityItemModel, DeliveryProgressByDriverItemModel, DeliveryProgressByNeighborhoodItemModel } from './models/table-items.model';
import { Store } from '@ngxs/store';
import { FetchDeliverData } from '../../shared/state/application.actions';
import { ApplicationSelectors } from '../../shared/state/application.selectors';
import { tap } from 'rxjs';
import { ByNeighborhoodModel, DeliveryStatus, DriverModel } from '../../shared/state/application.model';
import { deliveryFailureQuantityByDriverColumns, deliveryProgressByBairroColumns, deliveryProgressByDriverColumns } from './models/table-colums';

@Component({
  selector: 'lcs-dashboard',
  standalone: true,
  imports: [PoPageModule, PoTableModule, PoWidgetModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  readonly breadcrumb: PoBreadcrumb = { items: breadcrumbs, }
  deliveryProgressByDriverColumns = deliveryProgressByDriverColumns;
  deliveryFailureQuantityByDriverColumns = deliveryFailureQuantityByDriverColumns;
  deliveryProgressByBairroColumns = deliveryProgressByBairroColumns;

  deliveryProgressByDriverItems: Array<DeliveryProgressByDriverItemModel> = []
  deliverFailureQuantityByDriverItems: Array<DeliveryFailureQuantityItemModel> = []
  deliverProgressByBairroItems: Array<DeliveryProgressByNeighborhoodItemModel> = []


  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new FetchDeliverData()).subscribe();
    this.store.select(ApplicationSelectors.getDrivers).pipe(
      tap(drivers => {
        this.populateDeliveryFailureQuantityByDriverColumns(drivers);
        this.populateDeliveryProgressByDriverItems(drivers);
      }
      )
    ).subscribe();
    this.store.select(ApplicationSelectors.getByneighborhood).pipe(
      tap(neighborhoods => {
        this.populateDeliveryProgressByNeighborhoodItems(neighborhoods);
      }
      )
    ).subscribe();


  }


  populateDeliveryProgressByNeighborhoodItems(neighborhoods: ByNeighborhoodModel[]) {
    this.deliverProgressByBairroItems = neighborhoods?.map<DeliveryProgressByNeighborhoodItemModel>(
      neighborhood => {
        return ({
          name: neighborhood.neighborhood,
          total: neighborhood.deliveries.length,
          done: neighborhood.deliveries.filter(delivery => delivery.status == DeliveryStatus.DONE).length,
        });
      }
    ) || []
  }

  populateDeliveryProgressByDriverItems(drivers: DriverModel[]) {
    this.deliveryProgressByDriverItems = drivers?.map<DeliveryProgressByDriverItemModel>(
      driver => {
        return ({
          name: driver.driver,
          done: driver.deliveries.filter(delivery => delivery.status == DeliveryStatus.DONE).length,
          total: driver.deliveries.length
        });
      }
    ) || []
  }

  populateDeliveryFailureQuantityByDriverColumns(drivers: DriverModel[]) {

    this.deliverFailureQuantityByDriverItems = drivers?.map<DeliveryFailureQuantityItemModel>(
      driver => {
        return ({
          name: driver.driver,
          quantity: driver.deliveries.filter(delivery => delivery.status === DeliveryStatus.FAILURE).length.toString()
        });
      }
    ) || []
  }

}
