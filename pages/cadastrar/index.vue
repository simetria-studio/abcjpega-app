<template>
    <div>
        <h1 class="text-center my-5 h1">Crie sua conta</h1>
        <form @submit.prevent="registerUser">
            <div v-if="currentStepIndex === 1">´
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
                        <div class="mt-2">
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
                        <label for="estado-civil" class="block text-sm font-medium leading-6 text-gray-900">Selecione o
                            estado
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
                        <label for="conjuge_nome" class="block text-sm font-medium leading-6 text-gray-900">Nome do
                            cônjuge</label>
                        <div class="mt-2">
                            <input type="text" name="conjuge_nome" id="conjuge_nome" v-model="conjuge_nome"
                                class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6">
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="tipo_pessoa" class="block text-sm font-medium leading-6 text-gray-900">Selecione o tipo
                            de
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
                        <label for="escolaridade"
                            class="block text-sm font-medium leading-6 text-gray-900">Escolaridade</label>
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
            <div v-if="currentStepIndex === 2">
                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mx-10 my-10">
                    <div class="sm:col-span-3">
                        <label for="endereco" class="block text-sm font-medium leading-6 text-gray-900">Endereço
                            Atualizado</label>
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
                        <label for="credenciado_crmv" class="block text-sm font-medium leading-6 text-gray-900">CRMV
                        </label>
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
                        <label for="credenciado_area_atuacao" class="block text-sm font-medium leading-6 text-gray-900">Área
                            de
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
            <div v-if="currentStepIndex === 3">
                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mx-10 my-10">
                    <div class="sm:col-span-3">
                        <label for="telefone" class="block text-sm font-medium leading-6 text-gray-900">Telefone</label>
                        <div class="mt-2">
                            <input type="text" v-model="telefone" id="telefone"
                                class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                        </div>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="whatsapp" class="block text-sm font-medium leading-6 text-gray-900">WhatsApp</label>
                        <div class="mt-2">
                            <input type="text" v-model="whatsapp" id="whatsapp"
                                class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                        </div>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">E-mail</label>
                        <div class="mt-2">
                            <input type="text" name="email" id="email" autocomplete="email"
                                class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                v-model="email">
                        </div>
                    </div>

                </div>
            </div>
            <div class="flex justify-center my-5">
                <div v-if="currentStepIndex > 1">
                    <button type="button" class="border w-32 py-2 bg-red-800 text-white rounded-xl mx-2"
                        @click="prevStep">Anterior</button>
                </div>
                <div v-if="currentStepIndex < 3">

                    <button type="button" class="border w-32 py-2 bg-red-800 text-white rounded-xl mx-2"
                        @click="nextStep">Próximo</button>
                </div>
                <div v-if="currentStepIndex === 3">

                    <button type="submit" class="border w-32 py-2 bg-red-800 text-white rounded-xl mx-2">Enviar</button>
                </div>
            </div>

        </form>
    </div>
</template>

<script>
import axios from "@/plugins/axios";
definePageMeta({ layout: 'auth' });
export default {
    data() {
        return {
            currentStepIndex: 1,
            nome: "",
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
            ///
            telefone: '',
            whatsapp: '',
            email: '',
            ///
            endereco: '',
            inscricao_estadual: '',
            inscricao_municipal: '',
            ///
            credenciado_data_inscricao: '',
            credenciado_crmv: '',
            credenciado_crea: '',
            credenciado_area_atuacao: '',
            ///
            associado_data_inscricao: '',
            associado_tipo_afixo: '',
            associado_afixo: '',
            associado_preposicao: '',
        }
    },

    methods: {
        nextStep() {
            this.currentStepIndex++;
        },
        prevStep() {
            this.currentStepIndex--;
        },
        async registerUser() {
            await this.$axios.post("register/store", {
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
                ///
                telefone: this.telefone,
                whatsapp: this.whatsapp,
                email: this.email,
                ///
                endereco: this.endereco,
                inscricao_estadual: this.inscricao_estadual,
                inscricao_municipal: this.inscricao_municipal,
                ///
                credenciado_data_inscricao: this.credenciado_data_inscricao,
                credenciado_crmv: this.credenciado_crmv,
                credenciado_crea: this.credenciado_crea,
                credenciado_area_atuacao: this.credenciado_area_atuacao,
                ///
                associado_data_inscricao: this.associado_data_inscricao,
                associado_tipo_afixo: this.associado_tipo_afixo,
                associado_afixo: this.associado_afixo,
                associado_preposicao: this.associado_preposicao,
            })
                .then(function (response) {
                    console.log(response);
                    Swal.fire({
                        title: "Sucesso!",
                        text: "Usuário cadastrado com sucesso!",
                        icon: "success",
                    });
                    // window.location.href = "/login";
                })
                .catch(function (error) {
                    console.log(error);
                    Swal.fire({
                        title: "Erro!",
                        text: "Erro ao cadastrar usuário!",
                        icon: "error",
                    });
                });
        },
    }
}
</script>