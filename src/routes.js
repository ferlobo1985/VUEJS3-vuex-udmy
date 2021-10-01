import { createRouter, createWebHistory} from 'vue-router'
import Counter from './components/Counter';
import Admin from './components/Admin/admin.vue';

const routes = createRouter({
    history:createWebHistory(),
    routes:[
        { part:'/',component: Counter },
        { path:'/admin', component: Admin},
    ]
});



export default routes;