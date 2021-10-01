import { createApp } from 'vue';
import App from './App.vue';
import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Router from './routes';
const app =  createApp(App);


app.component('app-header',Header);
app.component('app-footer',Footer);
app.use(Router);
app.mount('#app')
