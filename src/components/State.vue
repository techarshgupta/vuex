<template>
    <div>
        <div class="item">
            Car: <span>{{ car }}</span>
            <br/>
            Model: <span>{{ model }}</span>
            <br />
            Name: <span>{{ name }}</span>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

    export default {
        computed:{
            ...mapState([
                'car',
                'model'
            ]),
            ...mapState('myName', [
               'name'
            ])
        }
    }
</script>