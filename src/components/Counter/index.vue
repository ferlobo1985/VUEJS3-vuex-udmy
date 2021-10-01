<template>

<div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">Count</h1>
    <div class="col-lg-6 mx-auto">
        <count-component></count-component>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">

        <button 
          type="button" 
          class="btn btn-primary btn-lg px-4 gap-3"
          @click="add"
        >+</button>
        <button 
          type="button" 
          class="btn btn-outline-secondary btn-lg px-4"
          @click="substract"
        >-</button>

      </div>
    </div>
  </div>

</template>


<script>
import countComponent from './count.vue'

export default {
  components:{
    countComponent
  },
  methods:{
    add(){
      this.$store.commit('add');
    },
    substract(){
      this.$store.commit('substract');
    }
  }
}
</script>