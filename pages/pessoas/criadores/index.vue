<template>
  <div class="my-8">
    <div class="m-4 text-red-900">
      <nuxt-link to="/pessoas">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
      </nuxt-link>
    </div>
    <div class="my-8">
      <nuxt-link to="/">
        <img src="~/assets/img/home.png" alt="Logotipo da ABCJPega" class="mx-auto w-32" />
      </nuxt-link>
      <div class="text-center text-lg font-medium mt-3">
        <p>
          Criadores credenciados <br />
          <strong class="text-red-900">
            ABCJPEGA
          </strong>
        </p>
      </div>
    </div>
    
    <div class="mx-10">
      <!-- <div class="rounded-2xl border-red-400 bg-red-900 p-6 text-white text-center mb-5 w-32 mx-auto">
        <img src="~/assets/img/criadores.png" alt="Icone de criadores" class="mx-auto my-2 w-9 h-9" />
        Criadores
      </div> -->
      <form class="space-y-3 w-72 mx-auto mb-5">
        <p class="text-base font-medium text-center">buscar por</p>
        <div>
          <input
            class="bg-zinc-100 border border-zinc-100 w-full rounded-lg focus:outline-none focus:border-red-900 focus:ring-1 focus:ring-red-500 text-center p-1"
            type="search" name="" id="" placeholder="Estado" />
        </div>
        <div>
          <input
            class="bg-zinc-100 border border-zinc-100 w-full rounded-lg focus:outline-none focus:border-red-900 focus:ring-1 focus:ring-red-500 text-center p-1"
            type="search" name="" id="" placeholder="Cidade" />
        </div>
        <div>
          <input
            class="bg-zinc-100 border border-zinc-100 w-full rounded-lg focus:outline-none focus:border-red-900 focus:ring-1 focus:ring-red-500 text-center p-1"
            type="search" name="" id="" placeholder="Nome" />
        </div>
        <div>
          <input
            class="bg-zinc-100 border border-zinc-100 w-full rounded-lg focus:outline-none focus:border-red-900 focus:ring-1 focus:ring-red-500 text-center p-1"
            type="search" name="" id="" placeholder="CRMV" />
        </div>
      </form>
      <div class="mb-5 flex justify-center">
        <button class="w-32 h-9 text-white bg-red-900 rounded-2xl shadow-lg hover:shadow-red-900/25" type="submit">
          Buscar
        </button>
      </div>
      <div class="py-4 text-center font-medium text-black">
        <p>Resultados</p>
      </div>
      <div class="w-full py-4 mb-5 rounded-xl bg-zinc-100 overflow-y-auto">
        <div class="mx-5 space-y-1 text-center ">
          <div>
            <a href="">Fulano (São Paulo)</a>
          </div>
          <div>
            <a href="">Beltrano (Parána) </a>
          </div>
          <div>
            <a href="">Sicrano (Minas Gerais)</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  layout: "default",
};
</script>
