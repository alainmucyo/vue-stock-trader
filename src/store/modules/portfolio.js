import axios from "axios";

const state = {
  funds: 10000,
  stocks: [],
  loading: false
};

const mutations = {
  "BUY_STOCK"(state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find(element => element.id == stockId);
    if (record)
      record.quantity += quantity;
    else
      state.stocks.push({id: stockId, quantity: quantity})

    state.funds -= stockPrice * quantity;
  },
  "SELL_STOCK"(state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find(element => element.id == stockId);
    if (record.quantity > quantity)
      record.quantity -= quantity;
    else
      state.stocks.splice(state.stocks.indexOf(record), 1);
    state.funds += quantity * stockPrice;
  },
  "SET_FUNDS"(state, funds) {
    state.funds = funds;
  },
  "SET_STOCKS"(state, stocks) {
    state.stocks = stocks ? stocks : []
  },
  "CHANGE_LOADER"(state, bool) {
    state.loading = bool
  }
};

const actions = {
  buyStock: ({commit}, stock) => {
    commit("BUY_STOCK", stock);
  },
  sellStock: ({commit}, stock) => {
    commit("SELL_STOCK", stock)
  },
  setStocks: ({commit, dispatch}) => {
    commit("CHANGE_LOADER", true);
    axios.get("/data.json").then(res => {
      if (res) {
        const data = res.data;
        commit("SET_FUNDS", data.funds);
        commit("SET_STOCKS", data.stockPortfolio);
        dispatch("initStocks", data.stocks);
        commit("CHANGE_LOADER", false);
      }
    })
      .catch(err => {
        commit("CHANGE_LOADER", false);
        alert("Network error")
      });

  }
};

const getters = {
  stockPortfolio: (state, getters) => {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    });
  },
  funds: state => {
    return state.funds;
  },
  loading:state=>{
    return state.loading;
  }
};

export default {
  state,
  mutations,
  getters,
  actions
}
