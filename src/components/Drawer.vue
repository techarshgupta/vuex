<template>
<div>
    <md-button 
        class="md-dense md-raised md-primary"
        @click="showNavigation = !showNavigation"
    >
        Raised
    </md-button>

    <md-drawer 
        :md-active.sync="showNavigation"
        :style="{'background':'white'}"
        :md-right="true"
    >
        
        <div class="item">
            Name: <span> {{ showName }} </span>
            <br/>
            Age: <span> {{ showAge }} </span>
        </div>
    </md-drawer>
</div>


</template>


<script>
import { mapGetters } from 'vuex';

    export default {
        data(){
            return {
                showNavigation:false
            }
        },
        computed:{
            ...mapGetters([
                'showAge',
            ]),
            ...mapGetters('myName',[
                'showName'
            ])
        }
    }

</script>