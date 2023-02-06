<template>
  <div class="grid place-items-center h-screen">
    <div class="text-center">
      <div class="flex justify-center mb-5">
        <img src="~/assets/img/home.png" class="w-32" alt="" />
      </div>
      <div class="mb-5">
        <span class="text-sm font-semibold mb-4">Bem Vindo! Efetue o login para continuar</span>
      </div>
      <form action="">
        <div class="space-y-4">
          <div class="">
            <input
              class="text-center border border-zinc-100 bg-zinc-100 rounded-xl h-11 w-80 placeholder:text-black drop-shadow focus:outline-none focus:border-red-900 focus:ring-1 focus:ring-red-200"
              type="email" name="" id="" placeholder="Login" />
          </div>
          <div>
            <input
              class="text-center border border-zinc-100 bg-zinc-100 rounded-xl h-11 w-80 placeholder:text-black drop-shadow focus:outline-none focus:border-red-900 focus:ring-1 focus:ring-red-200"
              type="password" name="" id="" placeholder="Senha" />
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
definePageMeta({ layout: 'auth' });
export default {
  
  name: "login",

};
</script>
