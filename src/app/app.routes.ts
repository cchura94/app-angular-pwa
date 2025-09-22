import { Routes } from '@angular/router';
import { AppLayout } from './layout/component/app.layout';
import { Home } from './home/home';
import { Ui } from './ui/ui';

export const routes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            {
                path: '',
                component: Home,
                title: 'Inicio Admin'
            },
            {
                path: 'ui',
                component: Ui,
                title: 'Ui Componentes'
            },
            { path: '**', redirectTo: '' }
        ]

    }
];
