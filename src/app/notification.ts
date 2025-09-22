import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() {}

  public requestPermission(): Promise<NotificationPermission> {
    if (!('Notification' in window)) {
      alert('Este navegador no soporta notificaciones.');
      return Promise.resolve('denied');
    }
    return Notification.requestPermission();
  }

  public showNotification(title: string, options?: NotificationOptions): void {
    if (Notification.permission === 'granted') {
      new Notification(title, options);
    } else {
      alert('Las notificaciones no están permitidas.');
    }
  }
}
