import { DeliveryLocation, DeliveryModel, DeliveryResponseLocationModel, DeliveryResponseModel, DeliveryStatus, DeliveryStatusMapper } from "./application.model";

export const DeliveryLocationBuilder = (locationResponse: DeliveryResponseLocationModel): DeliveryLocation => {
    return {
        address: locationResponse.endereco,
        neighborhood: locationResponse.bairro,
        city: locationResponse.cidade,
        name: locationResponse.nome
    }
}

export const DeliveryBuilder = (deliveryResponse: DeliveryResponseModel): DeliveryModel => {
    type DeliveryStatusKey = keyof typeof DeliveryStatus;
    const key = DeliveryStatusMapper[deliveryResponse.status_entrega] as DeliveryStatusKey;
    return {
        id: deliveryResponse.id,
        document: deliveryResponse.documento,
        origin: DeliveryLocationBuilder(deliveryResponse.cliente_origem),
        destination: DeliveryLocationBuilder(deliveryResponse.cliente_destino),
        status: DeliveryStatus[key]
    }
}
