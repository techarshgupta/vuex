<template>
    <div class="content">
        <h2>Alter age:</h2>
        <div>
            <md-button 
                :style="{'background':'#3F51B5','color':'white'}"
                @click="addOne"
            >
                Add ONE
            </md-button>

            <md-button 
                :style="{'background':'#FF5722','color':'white'}"
                @click="restOne"
            >
                Rest ONE
            </md-button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

    export default {
        methods:{
            ...mapActions([
                'addOne',
                'restOne'
            ])
        }
    }

// import { mapMutations } from 'vuex';
//     //
//     // export default {
//     //     methods:{
//     //         addOne(){
//     //             this.$store.commit('addOne')
//     //         },
//     //         restOne(){
//     //             this.$store.commit('restOne')
//     //         }
//     //     }
//     // }
//     export default {
//         methods:{
//             ...mapMutations([
//                 'addOne',
//                 'restOne'
//             ])
//         }
//     }
</script>