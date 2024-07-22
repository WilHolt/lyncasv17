import { Selector } from "@ngxs/store";
import { ApplicationState } from "./application.state";
import { ApplicationStateModel } from "./application.model";

export class ApplicationSelectors {
    @Selector([ApplicationState])
    static getDeliveries(state: ApplicationStateModel) {
        return state.deliveries;
    }

    @Selector([ApplicationState])
    static getDrivers(state: ApplicationStateModel) {
        return state.drivers;
    }


    @Selector([ApplicationState])
    static getByneighborhood(state: ApplicationStateModel) {
        return state.byNeighborhood;
    }
}