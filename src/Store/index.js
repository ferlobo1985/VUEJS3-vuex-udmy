import { createStore } from 'vuex';
import AuthModule from './admin';
import CounterModule from './counter';

const store = createStore({
    modules:{
        admin: AuthModule,
        counter: CounterModule
    }
});

export default store;