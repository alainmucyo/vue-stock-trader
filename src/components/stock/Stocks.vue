<template>
  <div>
    <div class="row">
      <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
  </div>
</template>

<script>
  import AppStock from "./Stock";

  export default {
    components: {AppStock},
    name: "stocks",
    data() {
      return {

      }
    },
    computed:{
      stocks(){
        return this.$store.getters.stocks;
      }
    }
  }
</script>

<style scoped>

</style>
