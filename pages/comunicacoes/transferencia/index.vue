<template>
    <div class="mx-8">
        <div class="text-center my-8">
            <h1 class="text-center font-semibold text-xl">Comunicação de transferência de propriedade</h1>
        </div>
        <div class="flex flex-wrap justify-center  ">
            <div class="mb-3">
                <label>Selecionar meu animal:
                    <br>
                    <select
                        class="border-2 w-52 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none">
                        <option>Animal 1</option>
                        <option>Animal 2</option>
                        <option>Animal 3</option>
                        <option>Animal 4</option>
                        <option>Animal 5</option>
                    </select>
                </label>
            </div>

            <div class="mb-3">
                <label>Observações:
                    <br>
                    <textarea cols="16" rows="20"
                        class="border-2   border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none">
                    </textarea>
                </label>
            </div>
            <div class="mb-3 text-center">
                <label>Termos de contrato:
                    <br>
                    <input type="checkbox" id="termos" class="custom-checkbox mr-2" />
                    <label for="termos" class="text-sm">
                        Declaro que li e aceito os termos de contrato
                    </label>
                </label>
            </div>
            <div class="mb-3">
                <button class="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                    Enviar
                </button>
            </div>
        </div>

    </div>
</template>