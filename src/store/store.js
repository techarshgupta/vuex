import Vue from 'vue';
import Vuex from 'vuex';
import myName from './Modules/name';
import myAge from './Modules/age';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        car:'ferrari',
        model: 'tree'
    },
    getters:{
        showName(state){
            return state.name
        },
    },
    mutations:{

    },
    actions:{

    },
    modules:{
        myName,
        myAge,
    },
})