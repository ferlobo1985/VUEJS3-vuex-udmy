<template>
    <p class="lead mb-4">{{ counterValue }}</p>
</template>

<script>
    export default {
        computed:{
            counterValue(){
                return this.$store.getters['counter/getCount']
            }
        }
    }

</script>