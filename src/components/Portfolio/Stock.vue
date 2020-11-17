<template>

  <div class="col-md-4 col-sm-6 mb-4">
    <div class="card">
      <div class="card-header">
        {{ stock.name }} (Price: {{ stock.price }} | Quantity: {{ stock.quantity}})
      </div>
      <div class="card-body">
        <form @submit.prevent="sell">
          <div class="float-left">
            <input type="number" class="form-control" placeholder="Quantity" v-model="quantity"/>
          </div>
          <div class="float-right">
            <button class="btn btn-info" :disabled="quantity <=0 || insufficientQuantity" >{{ insufficientQuantity?"Can't":"Sell" }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>


</template>

<script>
  import {mapActions} from "vuex";

  export default {
    name: "app-portfolio-stock",
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    methods: {

      sell() {
        const order = {
          stockId: this.stock.id,
          quantity: parseInt(this.quantity),
          stockPrice: this.stock.price
        };
        this.$store.dispatch("sellStock", order);
        this.quantity = 0;
      }
    },
    computed:{
      insufficientQuantity(){
        return this.quantity > this.stock.quantity
      }
    }
  }
</script>

<style scoped>

</style>
