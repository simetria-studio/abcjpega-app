<template>
    <div class="grid place-items-center m-8">
        <div class="mb-5">
            <h1 class="text-xl font-semibold">Escreva seu Comunicado</h1>
        </div>
        <form action="">
            <div class="mb-5">
                <label for="" class="text-lg"> Assunto:
                    <br>
                    <input type="text"
                        class="bg-zinc-100 p-1 border border-zinc-100 drop-shadow rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-600 focus:outline-none hover:border-red-600">
                </label>
            </div>
            <div class="mb-5">
                <label for="" class="text-lg"> Mensagem:
                    <br>
                    <textarea name="" id="" cols="30" rows="10"
                        class="bg-zinc-100 p-1 border border-zinc-100 drop-shadow rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-600 focus:outline-none hover:border-red-600"></textarea>
                </label>
            </div>

            <div>
                <button
                    class="bg-red-800 w-32 text-white p-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-opacity-50">Enviar</button>
            </div>


        </form>
    </div>
</template>