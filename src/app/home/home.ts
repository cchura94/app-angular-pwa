import { Component } from '@angular/core';
import { NotificationService } from '../notification';
import { Button } from "primeng/button";

@Component({
  selector: 'app-home',
  imports: [Button],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor(private notificationService: NotificationService) {}

  permitirNotificaciones() {
    this.notificationService.requestPermission().then((permission) => {
      if (permission === 'granted') {
        alert('Permiso concedido para notificaciones.');
      } else {
        alert('Permiso denegado.');
      }
    });
  }

  probarNotificacion() {
    this.notificationService.showNotification('Notificación de prueba', {
      body: 'Esta es una notificación enviada desde la app Angular.',
      icon: 'assets/icons/icon-192x192.png',
    });
  }
}
