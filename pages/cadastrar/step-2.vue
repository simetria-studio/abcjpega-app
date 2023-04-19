<template>
    <div class="border-b border-gray-900/10 pb-12 ">
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mx-10 my-10">
            <div class="sm:col-span-3">
                <label for="endereco" class="block text-sm font-medium leading-6 text-gray-900">Endereço Atualizado</label>
                <div class="mt-2">
                    <input type="text" id="endereco" v-model="endereco"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                </div>
            </div>
            <div class="sm:col-span-3">
                <label for="inscricao_estadual" class="block text-sm font-medium leading-6 text-gray-900">Inscrição
                    estadual</label>
                <div class="mt-2">
                    <input type="text" id="inscricao_estadual" v-model="inscricao_estadual"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                </div>
            </div>
            <div class="sm:col-span-3">
                <label for="inscricao_municipal" class="block text-sm font-medium leading-6 text-gray-900">Inscrição
                    municipal</label>
                <div class="mt-2">
                    <input type="text" id="inscricao_municipal" v-model="inscricao_municipal"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                </div>
            </div>

            <!-- <div class="sm:col-span-3">
                <label for="credenciado_data_inscricao" class="block text-sm font-medium leading-6 text-gray-900">Data da Inscrição</label>
                <div class="mt-2">
                    <input type="date" name="credenciado_data_inscricao" id="credenciado_data_inscricao"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                </div>
            </div> -->

            <div class="sm:col-span-3">
                <label for="credenciado_crmv" class="block text-sm font-medium leading-6 text-gray-900">CRMV </label>
                <div class="mt-2">
                    <input type="text" id="credenciado_crmv" v-model="credenciado_crmv"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                </div>
            </div>
            <div class="sm:col-span-3">
                <label for="credenciado_crea" class="block text-sm font-medium leading-6 text-gray-900">CREA</label>
                <div class="mt-2">
                    <input type="text" id="credenciado_crea" v-model="credenciado_crea"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                </div>
            </div>
            <div class="sm:col-span-3">
                <label for="credenciado_area_atuacao" class="block text-sm font-medium leading-6 text-gray-900">Área de
                    atuação</label>
                <div class="mt-2">
                    <input type="text" id="credenciado_area_atuacao" v-model="credenciado_area_atuacao"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                </div>
            </div>
            <!-- <div class="sm:col-span-3">
                <label for="" class="block text-sm font-medium leading-6 text-gray-900">associado_data_inscricao</label>
                <div class="mt-2">
                    <input type="text" name="" id=""
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                </div>
            </div> -->
            <div class="sm:col-span-3">
                <label for="associado_tipo_afixo" class="block text-sm font-medium leading-6 text-gray-900">Tipo
                    afixo</label>
                <div class="mt-2">
                    <input type="text" id="associado_tipo_afixo" v-model="associado_tipo_afixo"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                </div>
            </div>
            <div class="sm:col-span-3">
                <label for="associado_afixo" class="block text-sm font-medium leading-6 text-gray-900">Afixo</label>
                <div class="mt-2">
                    <input type="text" id="associado_afixo" v-model="associado_afixo"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                </div>
            </div>
            <div class="sm:col-span-3">
                <label for="associado_preposicao"
                    class="block text-sm font-medium leading-6 text-gray-900">Preposição</label>
                <div class="mt-2">
                    <input type="text" id="associado_preposicao" v-model="associado_preposicao"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            endereco: '',
            inscricao_estadual: '',
            inscricao_municipal: '',
            credenciado_crmv: '',
            credenciado_crea: '',
            credenciado_area_atuacao: '',
            associado_tipo_afixo: '',
            associado_afixo: '',
            associado_preposicao: '',

        }
    },
    methods: {
        save() {
            this.$emit('form-data', {
                endereco: this.endereco,
                inscricao_estadual: this.inscricao_estadual,
                inscricao_municipal: this.inscricao_municipal,
                credenciado_crmv: this.credenciado_crmv,
                credenciado_crea: this.credenciado_crea,
                credenciado_area_atuacao: this.credenciado_area_atuacao,
                associado_tipo_afixo: this.associado_tipo_afixo,
                associado_afixo: this.associado_afixo,
                associado_preposicao: this.associado_preposicao,
            })
        }
    },

}

</script>

 
