<template>
  <div class="my-8">
    <div class="m-4 text-red-900">
      <nuxt-link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
      </nuxt-link>
    </div>
    <div class="my-5">
      <h1 class="text-center font-semibold text-xl">Comunicacões</h1>
    </div>
    <div class="text-center w-64 mx-auto">
      <nuxt-link to="/comunicacoes/cobricao"
        class="border cursor-pointer drop-shadow block w-full mb-5 p-2 bg-zinc-100 rounded-xl border-zinc-100 focus:outline-none focus:border-red-800 focus:ring focus:ring-red-300 hover:border-red-900">
        Cobrição
      </nuxt-link>
      <nuxt-link to="/comunicacoes/nascimento"
        class="border cursor-pointer drop-shadow block w-full mb-5 p-2 bg-zinc-100 rounded-xl border-zinc-100 focus:outline-none focus:border-red-800 focus:ring focus:ring-red-300 hover:border-red-900">
        Nascimento
      </nuxt-link>
      <nuxt-link to="/comunicacoes/transferencia"
        class="border cursor-pointer drop-shadow block w-full mb-5 p-2 bg-zinc-100 rounded-xl border-zinc-100 focus:outline-none focus:border-red-800 focus:ring focus:ring-red-300 hover:border-red-900">
        Transferência de propriedade
      </nuxt-link>
      <nuxt-link to="/comunicacoes/mensagem"
        class="border cursor-pointer drop-shadow block w-full mb-5 p-2 bg-zinc-100 rounded-xl border-zinc-100 focus:outline-none focus:border-red-800 focus:ring focus:ring-red-300 hover:border-red-900">
        Comunicado Oficial
      </nuxt-link>
      <nuxt-link to="/comunicacoes/chamado-tecnico"
        class="border cursor-pointer drop-shadow block w-full mb-5 p-2 bg-zinc-100 rounded-xl border-zinc-100 focus:outline-none focus:border-red-800 focus:ring focus:ring-red-300 hover:border-red-900">
        Chamado Técnico
      </nuxt-link>
      <nuxt-link to="/comunicacoes/2-via-registro"
        class="border cursor-pointer drop-shadow block w-full mb-5 p-2 bg-zinc-100 rounded-xl border-zinc-100 focus:outline-none focus:border-red-800 focus:ring focus:ring-red-300 hover:border-red-900">
        Segunda Via de registro
      </nuxt-link>
      <nuxt-link to="/comunicacoes/baixa-morte"
        class="border cursor-pointer drop-shadow block w-full mb-5 p-2 bg-zinc-100 rounded-xl border-zinc-100 focus:outline-none focus:border-red-800 focus:ring focus:ring-red-300 hover:border-red-900">
        Baixa/Morte de animal
      </nuxt-link>
      <nuxt-link to="/comunicacoes/alteracao-afixo"
        class="border cursor-pointer drop-shadow block w-full mb-5 p-2 bg-zinc-100 rounded-xl border-zinc-100 focus:outline-none focus:border-red-800 focus:ring focus:ring-red-300 hover:border-red-900">
        Alteração de afixo
      </nuxt-link>
      <nuxt-link to="./animais"
        class="border cursor-pointer drop-shadow block w-full mb-5 p-2 bg-zinc-100 rounded-xl border-zinc-100 focus:outline-none focus:border-red-800 focus:ring focus:ring-red-300 hover:border-red-900">
        Inscrição de doador sêmen/embrião
      </nuxt-link>
      <nuxt-link to="/comunicacoes/alteracao-categoria"
        class="border cursor-pointer drop-shadow block w-full mb-5 p-2 bg-zinc-100 rounded-xl border-zinc-100 focus:outline-none focus:border-red-800 focus:ring focus:ring-red-300 hover:border-red-900">
        Alteração de categoria
      </nuxt-link>
      <nuxt-link to="/comunicacoes/baixa-associado"
        class="border cursor-pointer drop-shadow block w-full mb-5 p-2 bg-zinc-100 rounded-xl border-zinc-100 focus:outline-none focus:border-red-800 focus:ring focus:ring-red-300 hover:border-red-900">
        Baixa de associado
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
  name: "comunicacoes",
  layout: "default",
  mounted() {
    const token = Cookie.get("_access_token");

    if (!token) {
      window.location.href = "/login";
    }
  }
}
</script>