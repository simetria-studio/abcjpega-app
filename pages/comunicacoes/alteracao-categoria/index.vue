<template>
    <div class="grid place-items-center m-8">
        <div class="mb-5">
            <h1 class="text-xl font-semibold">Alterar Categoria</h1>
        </div>
        <div>
            <div class="text-center">
                <p class="mb-5">Eu, <strong class="text-red-700">Nome de usuário,</strong> contribuinte desejo alterar
                    minha
                    categoria
                    para:</p>
            </div>

            <form action="">
                <div class="radio-container mb-8 flex justify-center">
                    <label for="radio">
                        <input type="radio" id="radio" name="radio" />
                        <div class="custom-radio">
                            <span></span>
                        </div>
                        <span class="font-semibold">Usuário</span>
                    </label>
                </div>
                <div class="flex justify-center">
                    <button
                        class="bg-red-900 hover:bg-red-800 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-800 text-white p-2 rounded mx-2 w-24">Protocolar</button>
                </div>
            </form>

        </div>
    </div>
</template>