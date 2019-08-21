const myName = {
    namespaced: true,
    state:{
        name: 'Harsh',
    },
    getters:{
        showName(state){
            return state.name
        },
    },
    mutations:{
        swapName(state, payload){
            state.name = payload
        }
    },
    actions:{
        swapName(context, payload){
            setTimeout( () => {
                context.commit('swapName', payload)
            },2000)
        },
    },
}

export default myName;