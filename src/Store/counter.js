/* eslint-disable */
const counterModule = {
    state(){
        return {
            counter:7,
            attempts:0,
            prizes:[
                'Car',
                'Baby',
                'Coffee',
                'Guitar',
                'Nothing :*('
            ]
        }
    },
    getters:{
        getCount(state,getters,rootState,rootGetters){
            // console.log(rootState.admin.auth);
            // console.log(rootGetters.isAuthUser)
            return state.counter;
        },
        getAttempts(state){
            return state.attempts;
        },
        getPrize(state, getters){
            let prize ='';
            state.attempts++;

            for( let step= 0; step < state.counter; step++){
                prize = state.prizes[Math.floor(Math.random()* state.prizes.length)]
            }
            return { 
                prize,
                attempts: getters.getAttempts
            };
        }
    },
    mutations:{
        add(state,payload){
            if(payload){
                state.counter = state.counter + payload.value
            } else {
                state.counter++;
            }
        },
        substract(state,payload){
            if(payload){
                state.counter = state.counter - payload.value
            } else {
                state.counter--;
            }
        }
    }
}
export default counterModule;