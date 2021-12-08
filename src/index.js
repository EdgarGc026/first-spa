import router from './routes'

window.addEventListener('load', router);

//generar una addeventlistener para escuchar las rutas
window.addEventListener('hashchange', router);