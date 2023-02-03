<template>
  <div class="my-8">
    <nuxt-link to="/">
      <img src="../assets/img/home.png" class="mx-auto w-36 h-26 text-red-900" alt="" />
    </nuxt-link>
    <div class="flex justify-center my-8 text-lg font-medium">
      <p>
        Bem vindo!
        <span  class="pl-2 text-red-900"> Usuario </span>
      </p>
    </div>
    <div
      class="mx-10 grid  grid-cols-2 grid-rows-3  gap-8 text-center text-white text-xs"
    >
      <nuxt-link
        to="/pessoas"
        class="rounded-2xl border-red-400 bg-red-900 p-4 w-full "
      >
        <img
          class="mx-auto my-2 w-16 h-16"
          src="../assets/img/pessoas.png"
          alt=""
        />
        Pessoas
      </nuxt-link>
      <NuxtLink
        to="/animais"
        class="rounded-2xl border-red-400 bg-red-900 p-4 w-full "
      >
        <img
          class="mx-auto my-2 w-16 h-16"
          src="../assets/img/burro.png"
          alt=""
        />
        Animais</NuxtLink
      >
      <NuxtLink
        to="/financeiro"
        class="rounded-2xl border-red-400 bg-red-900 p-4 w-full "
      >
        <img
          class="mx-auto my-2 w-16 h-16"
          src="../assets/img/financeiro.png"
          alt=""
        />
        Financeiro</NuxtLink
      >
      <NuxtLink
        to="/resenha"
        class="rounded-2xl border-red-400 bg-red-900 p-4 w-full "
      >
        <img
          class="mx-auto my-2 w-16 h-16"
          src="../assets/img/resenha.png"
          alt=""
        />
        Resenha
      </NuxtLink>
      <NuxtLink
        to="/configuracoes"
        class="rounded-2xl border-red-400 bg-red-900 p-4 w-full "
      >
        <img
          class="mx-auto my-2 w-16 h-16"
          src="../assets/img/config.png"
          alt=""
        />
        Configurações
      </NuxtLink>
      <NuxtLink
        to="/comunicacoes"
        class="rounded-2xl border-red-400 bg-red-900 p-4 w-full "
      >
        <img
          class="mx-auto my-2 w-16 h-16"
          src="../assets/img/comunicacao.png"
          alt=""
        />
        Comunicações
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  layout: "default",


};
</script>
