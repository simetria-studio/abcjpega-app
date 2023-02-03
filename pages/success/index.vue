<template>
    <div>
        <div class="h-full grid place-items-center mx-4">

            <div class="text-center text-2xl my-8 text-red-900 font-semibold">
                <h1>Tudo Pronto!</h1>
            </div>
            <div class="my-4">
                <nuxt-link to="/">
                    <img src="~/assets/img/home.png" class="w-32 h-26" alt="">
                </nuxt-link>
            </div>
            <div class="text-center text-lg text-zinc-600 font-medium">
                <h1>Nossos profissionais estão fazendo a análise dos arquivos enviados, aguarde o retorno dos nossos
                    profissionais.</h1>
            </div>


            <nuxt-link to="/" class=" text-red-900 text-lg font-normal  my-3 ">
                Voltar para a página inicial
            </nuxt-link>


        </div>
    </div>
</template>

<script>
export default {
    name: "success",
    layout: "default",


}
</script>