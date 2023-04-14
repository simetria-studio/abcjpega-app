import axios from "~/plugins/axios";

export const state = () => ({
  token: null,
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
};

export const actions = {
  async login({ commit }, { email, password }) {
    const { data } = await axios.post("/auth/login", { email, password });
    commit("setToken", data.token);
    localStorage.setItem("token", data.token);
  },
  async logout({ commit }) {
    commit("setToken", null);
    localStorage.removeItem("token");
  },
  async nuxtServerInit({ commit }, { req }) {
    const token = req.headers.cookie
      ?.split(";")
      .find((c) => c.trim().startsWith("token="))
      ?.split("=")[1];
    commit("setToken", token);
  },
};
