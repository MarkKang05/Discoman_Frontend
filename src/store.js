import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
    plugins:[
      createPersistedState()
    ],
  state: {
    count: 0,
    username: ""
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    },
    setUsername(state, name){
        state.username = name;
    }
  },

})