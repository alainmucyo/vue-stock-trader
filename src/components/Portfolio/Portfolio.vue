<template>
  <div>
    <div class="row">
      <app-portfolio-stock v-for="stock in stocks" :stock="stock" v-if="stocks.length>=1"></app-portfolio-stock>
      <div class="col-md-12" v-if="stocks.length<1">
        <div class="alert alert-info" >No Stocks bought yet!</div>
      </div>
    </div>
  </div>
</template>

<script>

  import AppPortfolioStock from "./Stock";

  export default {

    components: {AppPortfolioStock},
    name: "portfolio",
    data() {
      return {}
    },
    computed: {
      stocks() {
        return this.$store.getters.stockPortfolio;
      }
    }

  }
</script>

<style scoped>

</style>
