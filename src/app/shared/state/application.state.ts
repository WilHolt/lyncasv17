import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { FetchDeliverData } from './application.actions';
import { ApplicationStateModel, DeliveryResponseModel, defaults } from './application.model';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';
import { aggregateByDriver, aggregateByNeighborhood } from './helpers';
import { environment } from '../../../environments/environment.development';

@State<ApplicationStateModel>({
  name: 'dashboard',
  defaults
})
@Injectable()
export class ApplicationState {

  constructor(private http: HttpClient) { }

  @Action(FetchDeliverData)
  fetchDeliverData(ctx: StateContext<ApplicationStateModel>) {
    const req = this.http.get<DeliveryResponseModel[]>(environment.api);
    return req.pipe(
      map(deliveries => {
        const drivers = aggregateByDriver(deliveries);
        const byNeighborhood = aggregateByNeighborhood(deliveries);
        return { drivers, deliveries, byNeighborhood }
      }),
      tap((formattedData: ApplicationStateModel) => {
        ctx.patchState({ ...formattedData })
      })
    )
  }
}