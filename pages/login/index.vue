<template>
  <div class="grid place-items-center h-screen">
    <div class="text-center">
      <div class="flex justify-center mb-5">
        <img src="~/assets/img/home.png" class="w-32" alt="" />
      </div>
      <div class="mb-5">
        <span class="text-sm font-semibold mb-4">Bem Vindo! Efetue o login para continuar</span>
      </div>
      <form @submit.prevent="login">
        <div class="space-y-4">
          <div class="">
            <input
              class="text-center border border-zinc-100 bg-zinc-100 rounded-xl h-11 w-80 placeholder:text-black drop-shadow focus:outline-none focus:border-red-900 focus:ring-1 focus:ring-red-200"
              type="email" v-model="email" placeholder="Login" />
          </div>
          <div>
            <input
              class="text-center border border-zinc-100 bg-zinc-100 rounded-xl h-11 w-80 placeholder:text-black drop-shadow focus:outline-none focus:border-red-900 focus:ring-1 focus:ring-red-200"
              type="password" v-model="password" placeholder="Senha" />
          </div>
          <div class="flex justify-end items-center">
            <button class="bg-red-900 text-white rounded-3xl w-20 h-7 hover:ring-2 hover:ring-red-300 shadow"
              type="submit">
              Login
            </button>
            <nuxt-link class="text-red-900 pl-5 text-xs" to="">Esqueci minha senha</nuxt-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Cookie from "js-cookie";
import axios from "axios";
definePageMeta({ layout: 'auth' });
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    async login(res) {
      await this.$axios.post("auth/login", {
        email: this.email,
        password: this.password,
      })
        .then(function (response) {
          Cookie.set("_access_token", response.data.access_token);
          window.location.href = "/";
        })
        .catch(function (error) {
          console.log(error);
          Swal.fire({
            title: "Erro!",
            text: "E-mail ou senha incorretos!",
            icon: "error",
          });
        });
    },
  },
};

</script>
