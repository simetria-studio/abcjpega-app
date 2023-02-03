<template>
    <div class="grid place-items-center m-8">
        <div class="mb-5">
            <h1 class="text-xl font-semibold">Baixa de associado</h1>
        </div>

        <p class="mb-5 text-lg">Motivo:</p>
        <form action="">
            <div class="radio-container mb-3 ">
                <label for="radio">
                    <input type="radio" id="radio" name="radio" />
                    <div class="custom-radio">
                        <span></span>
                    </div>
                    <span class="font-semibold">Falecimento</span>
                </label>
            </div>
            <div class="radio-container mb-3 ">
                <label for="radio">
                    <input type="radio" id="radio" name="radio" />
                    <div class="custom-radio">
                        <span></span>
                    </div>
                    <span class="font-semibold">Não possui mais animais</span>
                </label>
            </div>
            <div class="radio-container mb-3 ">
                <label for="radio">
                    <input type="radio" id="radio" name="radio" />
                    <div class="custom-radio">
                        <span></span>
                    </div>
                    <span class="font-semibold">Jubilado</span>
                </label>
            </div>
            <div class="radio-container mb-3 ">
                <label for="radio">
                    <input type="radio" id="radio" name="radio" />
                    <div class="custom-radio">
                        <span></span>
                    </div>
                    <span class="font-semibold">Pedido de demissão</span>
                </label>
            </div>
            <div class="radio-container mb-3 ">
                <label for="radio">
                    <input type="radio" id="radio" name="radio" />
                    <div class="custom-radio">
                        <span></span>
                    </div>
                    <span class="font-semibold">Outros</span>
                </label>
                <p class="text-center mt-5 text-lg mb-3">Ou</p>
                <div class="mb-4">
                    <input type="text" class="border border-gray-300 rounded p-2 w-64 focus:outline-none" placeholder="Digite o motivo">
                </div>
            </div>

            <div class="flex justify-center">
                <button
                    class="bg-red-900 hover:bg-red-800 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-800 text-white p-2 rounded mx-2 w-24">Protocolar</button>
            </div>
        </form>

    </div>
</template>