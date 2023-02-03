<template>
    <div>
        <div class="my-4">
            <h1 class="text-center text-xl font-medium">Cobrição</h1>
        </div>
         <div class="h-80 grid place-items-center">
            <div>
                <p class="text-center font-medium mb-3">Gestação Natural</p>
                <div class="grid grid-cols-2  gap-4">

                    <nuxt-link to="gestacao/natural" class="w-32 bg-red-900 rounded-lg p-3 text-center text-white">
                        <img class="mx-auto" src="~/assets/img/monta-natural.png" alt="">
                        Monta <br> Natural
                    </nuxt-link>

                    <nuxt-link to="gestacao/artificial" class="w-32  bg-red-900 rounded-lg p-3 text-center text-white">
                        <img class="mx-auto" src="~/assets/img/gestacao.png" alt="">
                       Inseminaçao Artificial
                    </nuxt-link>
                </div>
            </div>

        </div>
    </div>
</template>