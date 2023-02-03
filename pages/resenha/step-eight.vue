<template>
    <div class="m-8">
        <div class="text-center">
            <p class="font-semibold mb-3">Notas do veterinário sobre o animal:</p>
            <div class="mb-5">
                <textarea class="w-full border border-zinc-200 bg-zinc-200 rounded-xl p-3 focus:outline-none focus:border-red-800" name="notas_veterinario" id="" cols="30" rows="10" placeholder="Digite..."></textarea>
            </div>

            <p class="font-semibold mb-3">Genitais do animal:</p>

            
            <div class="radio-container mb-3">
                <label for="normal">
                    <input type="radio" id="normal" name="genitais" />
                    <div class="custom-radio">
                        <span></span>
                    </div>
                    <span>Estado Normal</span>
                </label>
            </div>
            <div class="radio-container mb-3">
                <label for="alterado">
                    <input type="radio" id="alterado" name="genitais" />
                    <div class="custom-radio">
                        <span></span>
                    </div>
                    <span>Apresenta alterações</span>
                </label>
            </div>
        </div>
    </div>
</template>