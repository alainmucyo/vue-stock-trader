import Vue from "vue";
import VueRouter from "vue-router"
import Home from "./components/Home.vue"
import Stocks from "./components/stock/Stocks.vue"
import Stock from "./components/stock/Stock.vue"
import Portfolio from "./components/Portfolio/Portfolio.vue"


Vue.use(VueRouter);

const routes = [
  {path: "/", component: Home},
  {path: '/stocks', component: Stocks},
  {path: '/portfolio', component: Portfolio},

];

export default new VueRouter({
  mode: 'history',
  routes
})
