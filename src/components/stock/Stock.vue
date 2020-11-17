<template>

  <div class="col-md-4 col-sm-6 mb-4">
    <div class="card">
      <div class="card-header">
        {{ stock.name }} (Price: {{ stock.price }})
      </div>
      <div class="card-body">
        <form @submit.prevent="buy">
          <div class="float-left">
            <input type="number" class="form-control" placeholder="Quantity" v-model="quantity"/>
          </div>
          <div class="float-right">
            <button class="btn btn-success" :disabled="quantity <=0 || insufficientFunds">{{
              insufficientFunds?"Can't":"Buy" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>


</template>

<script>
  import {mapActions} from "vuex";

  export default {
    name: "app-stock",
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    methods: {

      buy() {
        const order = {
          stockId: this.stock.id,
          quantity: parseInt(this.quantity),
          stockPrice: this.stock.price
        };

        this.$store.dispatch("buyStock", order);
        this.quantity = 0;
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
      insufficientFunds() {
        return this.quantity * this.stock.price > this.funds;
      }
    }
  }
</script>

<style scoped>

</style>
