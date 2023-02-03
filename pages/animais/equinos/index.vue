<template>
    <div class="my-8">
        <div class="m-4 text-red-900">
            <nuxt-link to="/animais/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </nuxt-link>
        </div>
        <div class="text-center text-2xl my-5 text-red-900 font-semibold">
            <h1>Equinos</h1>
        </div>

        <div class="mx-10 grid grid-cols-2 gap-8 grid-rows-2 text-center text-white text-sm">
            <nuxt-link class="rounded-2xl border-red-900 bg-red-900 p-4 w-full " to="/animais/equinos/semen">
                <img class="mx-auto h-20" src="~/assets/img/caval-semen.png" alt="" />
                Inscrição para doador de sêmen
            </nuxt-link>

            <nuxt-link class="rounded-2xl border-red-900 bg-red-900 p-4 w-full" to="/animais/equinos/embriao">
                <img class="mx-auto h-20" src="~/assets/img/caval-embriao.png" alt="" />
                Inscrição para doadora de embrião
            </nuxt-link>

            <nuxt-link class="rounded-2xl border-red-900 bg-red-900 p-4 w-full" to="/animais/equinos/pelagem">
                <img class="mx-auto h-20" src="~/assets/img/perga.png" alt="" />
                Registro de lã e varidedade de pelagem
            </nuxt-link>
        </div>
    </div>
</template>

