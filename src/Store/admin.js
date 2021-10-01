

const authModule = {
    state(){
        return {
            auth:false
        }
    },
    getters:{
        isAuthUser(state){
            return state.auth;
        }
    },
    mutations:{
        setAuth(state,payload){
            state.auth = payload.value;
        }
    },
    actions:{
        authUser(context){
            console.log(context.rootState.counter.prizes);
            console.log(context.rootGetters.getAttempts);

            context.commit('add',null,{root:true});
            // context.dispatch('SOME_ACTION',null,{root:true});

            setTimeout(()=>{
                context.commit('setAuth',{ value: true});
                context.dispatch('analytics',{username:'Francis'});
            },500);
        },
        signOut(context,payload){
            context.commit('setAuth',{ value: payload })
        },
        analytics(context,payload){
            console.log({
                title:'Ne sign in',
                username:payload.username
            })
        }
    }
};


export default authModule;