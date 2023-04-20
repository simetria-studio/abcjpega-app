<template>
    <div class="border-b border-gray-900/10 pb-12">
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mx-10 my-10">
            <!-- Dados Pessoais  -->
            <div class="sm:col-span-3">
                <label for="nome" class="block text-sm font-medium leading-6 text-gray-900">Nome</label>
                <div class="mt-2">
                    <input type="text" name="nome" id="nome" autocomplete="given-name"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                        v-model="nome">
                </div>
            </div>

            <div class="sm:col-span-3">
                <label for="data_nascimento" class="block text-sm font-medium leading-6 text-gray-900">Data de
                    nascimento</label>
                <div class="mt-2">
                    <input type="date" name="data_nascimento" id="data_nascimento" v-model="data_nascimento"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6">
                </div>
            </div>

            <div class="sm:col-span-3">
                <label for="rg" class="block text-sm font-medium leading-6 text-gray-900">RG</label>
                <div class="mt-2">
                    <input type="text" name="rg" id="rg" v-model="rg"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6">
                </div>
            </div>

            <div class="sm:col-span-3">
                <label for="cpf" class="block text-sm font-medium leading-6 text-gray-900">CPF</label>
                <div class="mt-2">
                    <input type="text" name="cpf" id="cpf" v-model="cpf"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6">
                </div>
            </div>

            <div class="sm:col-span-3">
                <label for="cnpj" class="block text-sm font-medium leading-6 text-gray-900">CNPJ</label>
                <div class="mt-2">
                    <input type="text" name="cnpj" id="cnpj" v-model="cnpj"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6">
                </div>
            </div>



            <div class="sm:col-span-3">
                <label for="cidade_nascimento" class="block text-sm font-medium leading-6 text-gray-900">Cidade de
                    nascimento</label>
                <div class="mt-2 ls">
                    <input type="text" name="cidade_nascimento" id="cidade_nascimento" v-model="cidade_nascimento"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6">
                </div>
            </div>
            <div class="sm:col-span-3">
                <label for="sexo" class="block text-sm font-medium leading-6 text-gray-900">Selecione o sexo</label>
                <select
                    class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    id="sexo" v-model="sexo">
                    <option value="m">Masculino</option>
                    <option value="f">Feminino</option>
                </select>
            </div>
            <div class="sm:col-span-3">
                <label for="estado-civil" class="block text-sm font-medium leading-6 text-gray-900">Selecione o estado
                    civil</label>
                <select
                    class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    id="estado-civil" v-model="estado_civil">
                    <option value="solteiro">Solteiro</option>
                    <option value="casado">Casado</option>
                    <option value="divorciado">Divorciado</option>
                    <option value="viuvo">Viúvo</option>
                </select>
            </div>


            <div class="sm:col-span-3">
                <label for="conjuge_nome" class="block text-sm font-medium leading-6 text-gray-900">Nome do cônjuge</label>
                <div class="mt-2">
                    <input type="text" name="conjuge_nome" id="conjuge_nome" v-model="conjuge_nome"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6">
                </div>
            </div>

            <div class="sm:col-span-3">
                <label for="tipo_pessoa" class="block text-sm font-medium leading-6 text-gray-900">Selecione o tipo de
                    pessoas</label>
                <div class="mt-2">
                    <select id="tipo_pessoa" name="tipo_pessoa" v-model="tipo_pessoa"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6">
                        <option value="pf">Física</option>
                        <option value="pj">Jurídica</option>
                    </select>
                </div>
            </div>

            <div class="sm:col-span-3">
                <label for="escolaridade" class="block text-sm font-medium leading-6 text-gray-900">Escolaridade</label>
                <div class="mt-2">
                    <input type="text" name="escolaridade" id="escolaridade" v-model="escolaridade"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6">
                </div>
            </div>

            <div class="sm:col-span-3">
                <label for="profissao" class="block text-sm font-medium leading-6 text-gray-900">Profissão</label>
                <div class="mt-2">
                    <input type="text" name="profissao" id="profissao" v-model="profissao"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nome: '',
            data_nascimento: '',
            rg: '',
            cpf: '',
            cnpj: '',
            cidade_nascimento: '',
            sexo: '',
            estado_civil: '',
            conjuge_nome: '',
            tipo_pessoa: '',
            escolaridade: '',
            profissao: '',
        }
    },
    methods: {
        save() {
            this.$emit('form-data', {
                nome: this.nome,
                data_nascimento: this.data_nascimento,
                rg: this.rg,
                cpf: this.cpf,
                cnpj: this.cnpj,
                cidade_nascimento: this.cidade_nascimento,
                sexo: this.sexo,
                estado_civil: this.estado_civil,
                conjuge_nome: this.conjuge_nome,
                tipo_pessoa: this.tipo_pessoa,
                escolaridade: this.escolaridade,
                profissao: this.profissao,
            })
        }
    },

}
</script>