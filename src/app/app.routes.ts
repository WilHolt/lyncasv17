import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./modules/dashboard/dashboard.component').then((c) => c.DashboardComponent),
    },
    {
        path: 'entregas',
        loadComponent: () => import('./modules/delivery-list/delivery-list.component').then((c) => c.DeliveryListComponent),
    }
];
