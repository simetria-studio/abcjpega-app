<template>
    <div>
        <!-- input radio -->
        <div class="radio-container">
            <label for="radio">
                <input type="radio" id="radio" name="radio" />
                <div class="custom-radio">
                    <span></span>
                </div>
                <span>teste</span>
            </label>
        </div>
        <!-- input -->
        <nuxt-link to=""
            class="border cursor-pointer drop-shadow block w-full mb-5 p-3 bg-zinc-100 rounded-xl border-zinc-100 focus:outline-none focus:border-red-800 focus:ring focus:ring-red-300 hover:border-red-900">Alterar
            Senha</nuxt-link>
        <!-- Botão -->
        <div>
            <button
                class="bg-red-900 hover:bg-red-800 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-800 text-white p-2 rounded mx-2 w-24">Voltar</button>
        </div>

        <!-- Seta para voltar -->
        <div class="m-4 text-red-900">
            <nuxt-link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </nuxt-link>
        </div>
    </div>

</template>




<style>
input[type='radio'] {
    display: none;
}

.radio-container label {
    display: flex;
    align-items: center;
    column-gap: 20px;
}

.custom-radio {
    border: 1px solid #fff;
    width: 20px;
    height: 20px;
    display: grid;
    place-content: center;
    border-radius: 50%;
}

.custom-radio,
span {
    transition: 0.5s ease;
    border-color: #7f1d1d;

}

.custom-radio span {
    content: '';
    width: 12px;
    height: 12px;
    background: #fff;
    border-radius: 50%;
}

input[type='radio']:checked+.custom-radio {
    border-color: #7f1d1d;
}

input[type='radio']:checked+.custom-radio span {
    background: #7f1d1d;
}
</style>