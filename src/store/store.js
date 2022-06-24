const Vuex = require('vuex');
import received_db from "../db.json";

export default new Vuex.createStore({

  actions: {
    fetchData ( context ) {
      const res = received_db
      context.commit("updateData", res)
    }
  },

  mutations: {
    updateData(state, res) {
      state.db = res;
    }
  },

  state: {
    db: []
  },

  getters: {
    getData(state){
      return state.db;
    }
  }

});