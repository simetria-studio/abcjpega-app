import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://painel-pega.devsquad.dev.br/api",
  timeout: 30000,
});

export default ({ app }, inject) => {
  inject("axios", axiosInstance);
};
