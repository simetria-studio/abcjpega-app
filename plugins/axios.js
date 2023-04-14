import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://painel-pega.devsquad.dev.br/api",
  // Aqui você pode definir a URL base da sua API
  timeout: 30000, // Aqui você pode definir o tempo limite para a solicitação (em milissegundos)
});

export default ({ app }, inject) => {
  inject("axios", axiosInstance);
};
