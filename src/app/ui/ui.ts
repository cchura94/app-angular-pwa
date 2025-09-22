import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Button } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ui',
  imports: [Button, MenuModule, CardModule, ButtonModule],
  templateUrl: './ui.html',
  styleUrl: './ui.scss',
})
export class Ui {
  items: MenuItem[] | undefined;

  constructor() {
    this.items = [
      {
        label: 'Documentos',
        items: [
          {
            label: 'Nuevo',
            icon: 'pi pi-plus',
          },
          {
            label: 'Search',
            icon: 'pi pi-search',
          },
        ],
      },
      {
        label: 'Perfil',
        items: [
          {
            label: 'Config',
            icon: 'pi pi-cog',
          },
          {
            label: 'Salir',
            icon: 'pi pi-sign-out',
          },
        ],
      },
    ];
  }
}
