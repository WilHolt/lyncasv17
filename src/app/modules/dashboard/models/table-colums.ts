import { PoTableColumn } from "@po-ui/ng-components";

export const deliveryProgressByDriverColumns: PoTableColumn[] = [
    {
        label: ' Nome',
        property: 'name',
    },
    {
        label: ' Entregas',
        property: 'total',
    },
    {
        label: ' Finalizadas',
        property: 'done',
    },
];

export const deliveryFailureQuantityByDriverColumns: PoTableColumn[] = [
    {
        label: ' Nome',
        property: 'name',
    },
    {
        label: ' Quantidade',
        property: 'quantity',
    },
  
];

export const deliveryProgressByBairroColumns: PoTableColumn[] = [
    {
        label: ' Bairro',
        property: 'name',
    },
    {
        label: ' Entregas',
        property: 'total',
    },
    {
        label: ' Finalizadas',
        property: 'done',
    },
];
