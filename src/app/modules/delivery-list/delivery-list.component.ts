import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngxs/store';
import { PoCheckboxGroupModule, PoCheckboxGroupOption, PoDynamicModule, PoDynamicViewField, PoInfoModule, PoListViewModule, PoModalAction, PoModalComponent, PoModalModule, PoPageFilter, PoPageListComponent, PoPageModule, PoTableModule } from '@po-ui/ng-components';
import { ApplicationSelectors } from '../../shared/state/application.selectors';
import { tap } from 'rxjs';
import { FetchDeliverData } from '../../shared/state/application.actions';
import { AddressPipe } from '../../shared/address.pipe';
import { FormsModule } from '@angular/forms';
import { DeliverytableItemModel } from './delivery-list.model';
import { DeliveryResponseModel } from '../../shared/state/application.model';
import { DeliverylistBreadcrumbs } from './models/breadcrumbs';
import { statusOptions } from './models/status-options';

@Component({
  selector: 'lcs-delivery-list',
  standalone: true,
  imports: [PoPageModule, PoTableModule, PoListViewModule, PoInfoModule, AddressPipe, PoModalModule, PoDynamicModule, FormsModule, PoCheckboxGroupModule],
  providers: [Store],
  templateUrl: './delivery-list.component.html',
  styleUrl: './delivery-list.component.scss'
})
export class DeliveryListComponent {
  @ViewChild('advancedFilterModal', { static: true }) advancedFilterModal!: PoModalComponent;
  @ViewChild('poPageList', { static: true }) poPageList!: PoPageListComponent;
  breadcrumbs = { items: DeliverylistBreadcrumbs };
  public readonly filterSettings: PoPageFilter = {
    action: this.filterAction.bind(this),
    advancedAction: this.advancedFilterActionModal.bind(this),
    placeholder: 'Pesquisar'
  };
  status: Array<string> = [];
  statusOptions: Array<PoCheckboxGroupOption> = statusOptions;

  advancedFilterPrimaryAction: PoModalAction = {
    action: this.handleFilters.bind(this),
    label: 'Aplicar Filtros'
  };

  deliveryItems!: Array<DeliverytableItemModel>;
  filteredDeliveryItems!: Array<DeliverytableItemModel>;

  readonly detailFields: Array<PoDynamicViewField> = [{ property: 'country' }, { property: 'name' }];

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new FetchDeliverData());
    this.store.select(ApplicationSelectors.getDeliveries).pipe(
      tap(deliveries => {
        this.deliveryItems = deliveries.map<DeliverytableItemModel>((delivery: DeliveryResponseModel) => {
          return ({
            id: delivery.id,
            name: delivery.motorista.nome,
            document: delivery.documento,
            originCostumer: delivery.cliente_origem.nome,
            originAddress: delivery.cliente_origem.endereco,
            originCity: delivery.cliente_origem.cidade,
            originNeighborhood: delivery.cliente_origem.bairro,
            destinationCostumer: delivery.cliente_destino.nome,
            destinationAddress: delivery.cliente_destino.endereco,
            destinationCity: delivery.cliente_destino.cidade,
            destinationNeighborhood: delivery.cliente_destino.bairro,
            status: delivery.status_entrega,
          });
        })

        this.filteredDeliveryItems = this.deliveryItems;
      }
      )
    ).subscribe();
  }

  itemTitle(item: any) {
    return `#${item.id} - ${item.destinationAddress}`
  }

  filterAction(name: string) {
    return this.filteredDeliveryItems = this.deliveryItems.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));

  }

  filterByStatuses(statuses: Array<string>) {
    this.filteredDeliveryItems = this.deliveryItems.filter((item) => statuses.some(status => status === item.status));
  }


  advancedFilterActionModal() {
    this.advancedFilterModal.open();
  }

  handleFilters() {
    this.poPageList.clearInputSearch();
    this.advancedFilterModal.close();
    this.filterByStatuses(this.status);
  }

  updateStatus(statuses: Array<string>) {
    this.status = statuses;
  }
}
