<template>
    <div class="flex flex-wrap items-center justify-center h-80">
      <div>
        <div class="titulo">
          <div class="text-center mb-3">
            <h1 class="text-2xl font-medium text-zinc-600">Motivo</h1>
          </div>
        </div>
        <div class="w-76 mx-auto">
          <div class="flex items-center mb-5">
            <input
              class="appearance-none border-2 border-red-900 rounded-full w-5 h-5 text-red-900 bg-gray-100 focus:ring-red-800 focus:ring-1 focus:bg-red-900"
              type="radio"
              id="alto-nivel"
              name="reprodutor"
            />
            <label class="ml-2 font-medium text-gray-900" for="alto-nivel">
              Reprodutor de alto nível
            </label>
          </div>
          <div class="flex items-center mb-5">
            <input
              class="appearance-none border-2 border-red-900 rounded-full w-5 h-5 text-red-900 bg-gray-100 focus:ring-red-800 focus:ring-1 focus:bg-red-900"
              type="radio"
              id="linhagem"
              name="reprodutor"
            />
            <label class="ml-2 font-medium text-gray-900" for="linhagem">
              interesse para preservação da linhagem
            </label>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name:"motivoSemenEquino",
    layout:"default",
  };
  </script>
  