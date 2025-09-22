# App Angular-pwa 
## Template
Chosen: **Tailwind CSS**
Usé la plantilla Sakai (FREE) de PrimeNG, implementada con Tailwind CSS.
Fuente: Plantilla Sakai (PrimeNG). Licencia y la documentación en el repositorio.
Licencia: [https://github.com/primefaces/sakai-ng/blob/master/LICENSE.md](https://github.com/primefaces/sakai-ng/blob/master/LICENSE.md)

## UI template
Template used: **Sakai** by PrimeNG (MIT license).
Repository: https://github.com/primefaces/sakai-ng. See LICENSE-SAKAI.md included.

## Modo Offline

Esta aplicación ya soporta funcionamiento offline para la página principal (`/`) gracias a la integración de un Service Worker y configuración de precacheo.

### Archivos precacheados:
- index.html
- main.js
- styles.css
- Imágenes y recursos esenciales en `/assets`

### se probó de la siguiente manera

1. Se construyó la aplicación en modo producción con `ng build --configuration --base-href "app-angular-pwa"`.
2. Se sirvió localmente con `http-server`.
3. En Chrome DevTools, se activó el modo "Offline".
4. Se verificó que la página principal siguiera funcionando sin conexión.

