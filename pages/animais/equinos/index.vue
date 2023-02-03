<template>
    <div>
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

        <div class="grid grid-cols-2 gap-4 mx-4">
            <div class="p-5 rounded-xl text-white bg-red-900 shadow-xl text-center">
                <nuxt-link class=" " to="/animais/equinos/semen">
                    <img class="mx-auto h-20" src="~/assets/img/caval-semen.png" alt="" />
                    <div class="my-1">
                        <span class="text-sm"> Inscrição para doador de sêmen </span>
                    </div>
                </nuxt-link>
            </div>
            <div class="p-5 rounded-xl text-white bg-red-900 shadow-xl text-center">
                <nuxt-link class="" to="/animais/equinos/embriao">
                    <img class="mx-auto h-20" src="~/assets/img/caval-embriao.png" alt="" />
                    <div class="my-1">
                        <span class="text-sm"> Inscrição para doadora de embrião </span>
                    </div>
                </nuxt-link>
            </div>
            <div class="p-5 rounded-xl text-white bg-red-900 shadow-xl text-center">
                <nuxt-link class="" to="/animais/equinos/pelagem">
                    <img class="mx-auto h-20" src="~/assets/img/perga.png" alt="" />
                    <div class="my-1">
                        <span class="text-sm">
                            Registro de lã e varidedade de pelagem
                        </span>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'equinos',
    layout: 'default',
    data() {
        return {
            // ...
        }
    },
    methods: {
        // ...
    },
    computed: {
        // ...
    },
    watch: {
        // ...
    },
    mounted() {
        // ...
    },
    created() {
        // ...
    },
    beforeDestroy() {
        // ...
    },
    destroyed() {
        // ...
    }
}
</script>