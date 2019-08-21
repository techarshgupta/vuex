<template>
    <div>
        <div class="item">
            Name: <span>{{ name }}</span>
            <br/>
            Age: <span>{{ age }}</span>
           
        </div>
    </div>
</template>

<script>
    export default {
        computed:{
            name(){
                return this.$store.getters['myName/showName']
            },
            age(){
                return this.$store.getters.showAge
            }
        }
    }
</script>