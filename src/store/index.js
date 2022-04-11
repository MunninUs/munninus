import { createStore } from "vuex";

const store = createStore({
  state: {
    theme: document.body.getAttribute("theme")
      ? document.body.getAttribute("theme")
      : "light",
  },
  mutations: {
    SET_THEME: function (state, theme) {
      state.theme = theme;
    },
  },
  getters: {
    GET_THEME: function (state) {
      return state.theme;
    },
  },
  actions: {},
  modules: {},
});

export default store;
