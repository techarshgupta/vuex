const myAge = {
    state:{
        age: 20
    },
    getters:{
        showAge(state){
            return state.age + ' years old'
        },
    },
    mutations:{
        addOne(state){
            state.age++
        },
        restOne(state){
            state.age--
        },
    },
    actions:{
        addOne(context){
            setTimeout(() =>{
                context.commit('addOne')
            },2000)
        },
        restOne(context){
            setTimeout(() =>{
                context.commit('restOne')
            },2000)
        },
    },
}

export default myAge;