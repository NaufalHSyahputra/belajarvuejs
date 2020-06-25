import axios from "axios";
import ls from "@/plugins/localStorage";
import * as types from "../mutation-types";
// state
export const state = {
  user: null,
  token: ls.get("token")
};

// getters
export const getters = {
  user: state => state.user,
  token: state => state.token,
  check: state => state.user !== null
};

// mutations
export const mutations = {
  [types.SAVE_TOKEN](state, { token, remember }) {
    state.token = token;
    ls.set("token", token);
  },

  [types.FETCH_USER_SUCCESS](state, { user }) {
    state.user = user;
  },

  [types.FETCH_USER_FAILURE](state) {
    state.token = null;
    ls.remove("token");
  },

  [types.LOGOUT](state) {
    state.user = null;
    state.token = null;

    ls.remove("token");
  },

  [types.UPDATE_USER](state, { user }) {
    state.user = user;
  }
};

// actions
export const actions = {
  saveToken({ commit, dispatch }, payload) {
    commit(types.SAVE_TOKEN, payload);
  },

  async fetchUser({ commit }) {
    try {
      const { data } = await axios.get("user");

      commit(types.FETCH_USER_SUCCESS, {
        user: data
      });
    } catch (e) {
      commit(types.FETCH_USER_FAILURE);
    }
  },

  updateUser({ commit }, payload) {
    commit(types.UPDATE_USER, payload);
  },

  async logout({ commit }) {
    try {
      await axios.post("logout");
    } catch (e) {
      console.log(e.response.data);
    }

    commit(types.LOGOUT);
  }
};
