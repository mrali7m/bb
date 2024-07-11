import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';
import vuetify from './plugins/vuetify';
import router from './router';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap Icons CSS
import 'bootstrap-icons/font/bootstrap-icons.css';
// Import Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const app = createApp(App);

app.use(i18n);
app.use(router);
app.use(vuetify);

app.mount('#app');
