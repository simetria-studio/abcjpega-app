<template>
    <div>
        <div class="my-4">
            <h1 class="text-center text-xl font-medium">Cobrição</h1>
        </div>
        <div class="h-80 grid place-items-center">
            <div>
                <p class="text-center font-medium mb-3">Espécies</p>
                <div class="grid grid-cols-2  gap-4">

                    <nuxt-link to="cobricao/asinino" class="w-32 bg-red-900 rounded-lg p-3 text-center text-white">
                        <img class="mx-auto" src="~/assets/img/burro.png" alt="">
                        Asinino
                    </nuxt-link>

                    <nuxt-link to="cobricao/equino" class="w-26  bg-red-900 rounded-lg p-3 text-center text-white">
                        <img class="mx-auto" src="~/assets/img/cavalo.png" alt="">
                        Equino
                    </nuxt-link>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "cobricao",
    layout: "default"
}
</script>