export enum DeliveryStatus {
    DONE = "ENTREGUE",
    PENDING = "PENDENTE",
    FAILURE = "INSUCESSO",
}
export const DeliveryStatusMapper: { [x: string]: string } = {
    ENTREGUE: "DONE",
    PENDENTE: "PENDING",
    INSUCESSO: "FAILURE",
}
export interface DeliveryLocation {
    name: string,
    address: string;
    neighborhood: string,
    city: string;
}
export interface DeliveryModel {
    id: string,
    document: string,
    origin: DeliveryLocation,
    destination: DeliveryLocation,
    status: DeliveryStatus
}

export interface DriverModel {
    driver: string;
    deliveries: DeliveryModel[];
};

export interface ByNeighborhoodModel {
    neighborhood: string;
    deliveries: DeliveryModel[];
};

export interface DeliverDataModel {
    teste: string;
}
export interface DeliveryResponseLocationModel {
    nome: string,
    endereco: string,
    bairro: string,
    cidade: string
}
export interface DeliveryResponseModel {
    id: string,
    documento: string,
    motorista: { nome: string },
    cliente_origem: DeliveryResponseLocationModel,
    cliente_destino: DeliveryResponseLocationModel,
    status_entrega: string
}

export interface ApplicationStateModel {
    deliveries: DeliveryResponseModel[];
    drivers: DriverModel[];
    byNeighborhood: ByNeighborhoodModel[];
}

export const defaults: ApplicationStateModel = {
    deliveries: [],
    drivers: [],
    byNeighborhood: []
}