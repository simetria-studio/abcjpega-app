<template>
  <div class="my-8">
    <div class="m-4 text-red-900">
            <nuxt-link to="/pessoas">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </nuxt-link>
        </div>
    <div class=" py-8">
      <nuxt-link to="/">
        <img src="~/assets/img/home.png" class="mx-auto" alt="" />
      </nuxt-link>

      <p class="text-center py-3 text-lg font-medium">Administração</p>
      <span class="text-red-600 w-full flex justify-center text-xs font-medium"
        >Entre em contato com nossa diretoria!</span
      >
    </div>
    <div class="flex justify-center mb-12">
      <form class="space-y-5" action="">
        <div>
          <input
            class="drop-shadow pl-4 h-10 w-full rounded-2xl focus:outline-none placeholder:text-black"
            type="email"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            class="drop-shadow pl-4 h-10 w-full rounded-2xl focus:outline-none placeholder:text-black"
            type="text"
            placeholder="Assunto"
          />
        </div>
        <textarea
          class="drop-shadow p-4  w-full rounded-2xl focus:outline-none placeholder:text-black"
          name="texto"
          id=""
          cols="30"
          rows="8"
          placeholder="Mensagem"
        ></textarea>
        <div class="pb-12">
          <button class="bg-red-900 rounded w-28 h-10 text-white focus:ring-red-400 focus:ring-2 drop-shadow ">Enviar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  layout: "default",
};
</script>
