import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    SET_USERS_TO_STATE: (state, payload) => {
      state.users = payload; 
    },
    ADD_USERS_TO_STATE: (state, payload) => {
      state.users = [...state.users, ...payload];
    }
  },
  actions: {
    GET_USERS({commit}) {
      let  users = (page) => {
        axios.get(`https://reqres.in/api/users?page=${page}`)
          .then(resp => {
            if(page === 1) {
              commit('SET_USERS_TO_STATE', resp.data.data);
            } else {
              commit('ADD_USERS_TO_STATE', resp.data.data);
            }
            if (resp.data.page < resp.data.total_pages) {
              users(++page);
            }

          })
          .catch(err => {
            console.error(err);
          });
      };
      users(1);
    },
    // GET_USER_BY_ID(id) {
    //   this.state.users.find((el) => {
    //     return el.id === id;
    //   })
    // }
  },
  modules: {
  },
  getters:{
    USERS(state) {
      return state.users;
    },
    getUserById: state => id => {
      return state.users.find(user => user.id === +id);
    }
  }
})
