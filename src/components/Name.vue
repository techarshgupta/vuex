<template>
    <div class="content">
        <h2>Alter name:</h2>
        <input type="text" v-model="name"/>
        <br>
        <button type="submit" @click="swapName(name)">Swap name</button>
    </div>
</template>


<script>
import { mapActions } from 'vuex';

export default {
    data(){
        return {
            name: ''
        }
    },
    methods:{
        ...mapActions([
            'swapName'
        ])
    }
}

// import { mapMutations } from 'vuex';
//
//     export default {
//         data(){
//             return {
//                 name:''
//             }
//         },
//         methods:{
//             ...mapMutations([
//                 'swapName'
//             ])
//         }
//     }

</script>