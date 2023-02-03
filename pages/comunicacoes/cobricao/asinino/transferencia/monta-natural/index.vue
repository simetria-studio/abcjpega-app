<template>
    <div>
        <div class="my-4">
            <h2 class="text-center font-medium text-xl">Cobrição</h2>
        </div>
        <div class="mb-4">
            <h1 class="text-center font-medium">Transferência de Embrião</h1>
        </div>
        <div class="w-60 mx-auto">
            <form action="">
                <div class="mb-4">
                    <label for="reprodutor">Reprodutor</label>
                    <input type="text" name="reprodutor" id="reprodutor" class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-red-900 focus:ring focus:ring-red-200">
                </div>
                <div class="mb-4">
                    <label for="doadora">Doadora</label>
                    <input type="text" name="doadora" id="doadora" class="w-full border border-gray-300 rounded-lg p-2  focus:outline-none focus:border-red-900 focus:ring focus:ring-red-200">
                </div>
                <div class="mb-4">
                    <label for="receptora">Receptora</label>
                    <input type="text" name="receptora" id="receptora" class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-red-900 focus:ring focus:ring-red-200">
                </div>
                <div class="mb-4">
                    <label for="data-cobricao">Data da Cobrição</label>
                    <input type="date" name="data-cobricao" id="data-cobricao" class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-red-900 focus:ring focus:ring-red-200">
                </div>
                <button type="submit" class="border border-red-900 rounded-lg p-2 bg-red-900 text-white hover:bg-red-800  focus:outline-none focus:border-red-900 focus:ring focus:ring-red-200" >Protocolar</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "monta-natural",
    layout: "default",
}
</script>