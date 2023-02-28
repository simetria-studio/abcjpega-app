<template>
  <div class="my-8 ">
    <div class="m-4 text-red-900">
      <nuxt-link @click="goBack" class="">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
      </nuxt-link>
    </div>
    <div class="mx-10 grid grid-cols-2 grid-rows-3 gap-8 text-center  text-white text-xs">
      <Nuxt-Link to="/pessoas/veterinarios-zootecnologos" class="rounded-2xl border-red-400 bg-red-900 p-4 w-full  ">
        <img class="mx-auto my-2 w-16 h-16" src="~/assets/img/doctor.png" alt="" />
        Veterinários / <br> Zootecnistas
      </Nuxt-Link>
      <Nuxt-Link to="/pessoas/tecnicos" class="rounded-2xl border-red-400 bg-red-900 p-4 w-full ">
        <img class="mx-auto my-2 w-16 h-16" src="~/assets/img/tecnico.png" alt="" />
        Técnicos
      </Nuxt-Link>
      <Nuxt-Link to="/pessoas/criadores" class="rounded-2xl border-red-400 bg-red-900 p-4 w-full ">
        <img class="mx-auto my-2 w-16 h-16" src="~/assets/img/criadores.png" alt="" />
        Criadores
      </Nuxt-Link>
      <Nuxt-Link to="/pessoas/arbitros" class=" rounded-2xl border-red-400 bg-red-900 p-4 w-full">
        <img class="mx-auto my-2 w-16 h-16" src="~/assets/img/arbitro.svg" alt="">
        Árbitros
      </Nuxt-Link>
      <Nuxt-Link to="/pessoas/parceiros" class="rounded-2xl border-red-400 bg-red-900 p-4 w-full ">
        <img class="mx-auto my-2 w-16 h-16" src="~/assets/img/parceiros.png" alt="" />
        Parceiros
      </Nuxt-Link>
      <Nuxt-Link to="/pessoas/meu-perfil" class="rounded-2xl border-red-400 bg-red-900 p-4 w-full ">
        <img class="mx-auto my-2 w-16 h-16" src="~/assets/img/meu-perfil.png" alt="" />
        Meu Perfil
      </Nuxt-Link>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
