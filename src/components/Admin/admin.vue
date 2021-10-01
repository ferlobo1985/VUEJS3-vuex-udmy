<template>
    <div class="row">
      <h1>Admin</h1>
      <hr />
      <div class="col-sm-5">
        <p>
          <strong>
          Change count: {{ this.$store.getters.getCount }}
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

        <button type="button" class="btn btn-primary" @click="adminAdd">
          +
        </button>
        <button type="button" class="btn btn-outline-secondary" @click="adminSubstract">
          -
        </button>
      </div>
    </div>
</template>


<script>

export default {
    data(){
      return {
        amount:1
      }
    },
    methods:{
      adminAdd(){
        this.$store.commit({
          type:'add',
          value: this.amount
        });
      },
      adminSubstract(){
        this.$store.commit('substract', { value:this.amount });
      }
    }
}
</script>