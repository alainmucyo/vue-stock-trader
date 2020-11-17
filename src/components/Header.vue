<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <router-link class="navbar-brand" to="/">Stock Trader</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link class="nav-item" to="/portfolio" tag="li" active-class="active">
          <a class="nav-link">Portfolio <span class="sr-only">(current)</span></a>
        </router-link>
        <router-link class="nav-item" to="/stocks" tag="li" active-class="active">
          <a class="nav-link">Stocks</a>
        </router-link>
      </ul>
      <ul class="navbar-nav mr-0">
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="endDay">End Day</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">
            Save & Load
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#" @click.prevent="save">Save</a>
            <a class="dropdown-item" href="#" @click.prevent="load">Load</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Funds: {{ funds | currency }}</a>
        </li>
        <li class="nav-item" v-if="loading">
          <a class="nav-link" href="#">Loading Data....</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import axios from "axios";
import {mapGetters} from "vuex"
  export default {
    name: "app-header",
    computed: {
      ...mapGetters(["funds","stocks","stockPortfolio","loading"]),
    },
    methods: {
      endDay() {
        this.$store.dispatch("randomizeStock");
      },
      save() {
        axios.put("/data.json",{funds:this.funds,stocks:this.stocks,stockPortfolio:this.stockPortfolio})
          .then(res=>alert("Saved Successfully"))
          .catch(err=>alert(err))
        ;
      },
      load(){
this.$store.dispatch("setStocks");
      }
    }
  }
</script>

<style scoped>

</style>
