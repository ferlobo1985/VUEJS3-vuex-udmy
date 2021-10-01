<template>

<div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">Count</h1>
    <div class="col-lg-6 mx-auto">
        <count-component></count-component>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">

        <button 
          type="button" 
          class="btn btn-primary btn-lg px-4 gap-3"
          @click="add()"
        >+</button>
        <button 
          type="button" 
          class="btn btn-outline-secondary btn-lg px-4"
          @click="substract()"
        >-</button>
        <hr/>
        <button 
          type="button" 
          class="btn btn-outline-secondary btn-lg px-4"
          @click="getPrize"
        >Get prize</button>

      </div>
    </div>
  </div>

</template>


<script>
import countComponent from './count.vue';
import { mapGetters, mapMutations } from 'vuex'

export default {
  components:{
    countComponent
  },
  computed:{
    ...mapGetters('counter',{
      prize: 'getPrize'
    }),
    // ...mapGetters(['getPrize'])
    // prize(){
    //   return this.$store.getters.getPrize;
    // },
  },
  methods:{
    ...mapMutations('counter',['add','substract']),
    // add(){
    //   this.$store.commit('add');
    // },
    // substract(){
    //   this.$store.commit('substract');
    // },
    getPrize(){
      const obj = this.prize;

      alert(`Your prize: ${obj.prize}, in ${obj.attempts} attempt/s`)
    }
  }
}
</script>