<template>
    <div class="row">
      <h1>Admin</h1>
      <hr />
      <div class="col-sm-5">
        <p>
          <strong>
          Change count: {{ this.$store.getters['counter/getCount'] }}
          </strong>
        </p>

        <div>
          <label class="form-label">By how much</label>
          <input 
            type="number" 
            class="form-control" 
            v-model="amount"
          >
        </div>
        <br/>

        <button type="button" class="btn btn-primary" 
        @click="adminAdd({ value: this.amount })">
          +
        </button>
        <button type="button" class="btn btn-outline-secondary" @click="adminSubstract({ value: this.amount })">
          -
        </button>
      </div>
    </div>
</template>


<script>
import { mapMutations } from 'vuex';

export default {
    data(){
      return {
        amount:1
      }
    },
    methods:{
      ...mapMutations('counter',{
        adminAdd:'add',
        adminSubstract: 'substract'
      }),
      // adminAdd(){
      //   this.$store.commit({
      //     type:'add',
      //     value: this.amount
      //   });
      // },
      // adminSubstract(){
      //   this.$store.commit('substract', { value:this.amount });
      // }
    }
}
</script>