import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store/store";
import axios from "axios";

axios.defaults.baseURL="https://vue-axios-4792a.firebaseio.com";

Vue.filter("currency",(value)=>{
    return "$"+value.toLocaleString();
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
