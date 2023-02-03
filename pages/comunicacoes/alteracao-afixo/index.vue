<template>
    <div class="mx-8">
        <div class="text-center my-8">
            <h1 class="text-center font-semibold text-xl">Comunicação de alteração de afixo</h1>
        </div>
        <div class="text-center w-80 mb-8 ">
            <p>À associação Brasileira dos criadores de Jumento Pêga</p>
        </div>
        <div class="text-center mx-auto w-80 mb-8">
            <label for="buscar-tecnico" class="mb-3 font-semibold "> Afixo atual </label>
            <input
                class="text-center w-full bg-zinc-200 border border-zinc-200 drop-shadow shadow rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-900"
                type="text" id="buscar-tecnico" value="Afixo atual">
        </div>
        <div class="text-center mx-auto w-80 mb-8">
            <label for="buscar-tecnico" class="mb-3 font-semibold "> Novo afixo </label>
            <br>
            <span class="text-red-900">* verificar disponibilidade </span>
            <input
                class="text-center w-full bg-zinc-200 border border-zinc-200 drop-shadow shadow rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-900"
                type="text" id="buscar-tecnico" value="Novo afixo">
        </div>
        <div class="text-center">
            <button type="submit"
                class="mt-4 border border-red-900 rounded p-1 px-4 bg-red-900 text-white hover:bg-red-800  focus:outline-none focus:border-red-900 focus:ring focus:ring-red-200">Comunicar</button>
        </div>
        <div class="text-center">
            <p class="text-center mt-4 text-red-900 font-medium">Por esse serviço será cobrado o valor de R$50,00</p>
        </div>
    </div>
</template>