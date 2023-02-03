<template>
    <div>
        <div class="my-4">
            <h2 class="text-center font-medium text-xl">Cobrição</h2>
        </div>
        <div class="mb-4">
            <div class="my-16">
                <h1 class="text-center text-2xl">
                    Gestação Natural
                </h1>
            </div>
            <div class="flex flex-wrap justify-center gap-5"> 
                <nuxt-link to="transferencia/monta-natural" class="w-32  bg-red-900 rounded-lg p-3 text-center text-white">
                    <img class="mx-auto" src="~/assets/img/monta-natural.png" alt="">
                    Monta <br> Natural
                </nuxt-link>
                <nuxt-link to="transferencia/artificial" class="w-32  bg-red-900 rounded-lg p-3 text-center text-white">
                    <img class="mx-auto" src="~/assets/img/gestacao.png" alt="">
                    Inseminação artificial
                </nuxt-link>
            </div>
        </div>
    </div>
</template>