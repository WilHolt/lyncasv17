import { DeliveryBuilder } from "./application.builder";
import { ByNeighborhoodModel, DeliveryResponseModel, DriverModel } from "./application.model";

export const aggregateByDriver = (deliveries: DeliveryResponseModel[]) => {
    const drivers = deliveries.reduce((prev: DriverModel[], curr): DriverModel[] => {
        const index = prev.findIndex(item => item.driver === curr.motorista.nome);
        if (prev[index] != undefined) {
            const delivery = DeliveryBuilder(curr);
            prev[index].deliveries = [...prev[index].deliveries, delivery]
            return [...prev];
        }
        const delivery = DeliveryBuilder(curr);
        return [...prev, { driver: curr.motorista.nome, deliveries: [delivery] }]
    }, [])
    return drivers;
}

export const aggregateByNeighborhood= (deliveries: DeliveryResponseModel[]) => {
    const drivers = deliveries.reduce((prev: ByNeighborhoodModel[], curr): ByNeighborhoodModel[] => {
        const index = prev.findIndex(item => item.neighborhood === curr.cliente_destino.bairro);
        if (prev[index] != undefined) {
            const delivery = DeliveryBuilder(curr);
            prev[index].deliveries = [...prev[index].deliveries, delivery]
            return [...prev];
        }
        const delivery = DeliveryBuilder(curr);
        return [...prev, { neighborhood: curr.cliente_destino.bairro, deliveries: [delivery] }]
    }, [])
    return drivers;
}