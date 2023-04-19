<template>
    <!-- Contatos  -->
    <div class="border-b border-gray-900/10 pb-12 ">
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
</template>

<script>
export default {
    data() {
        return {
            telefone: '',
            whatsapp: '',
            email: '',
        }
    },
    methods: {
        save() {
            this.$emit('form-data', {
                telefone: this.telefone,
                whatsapp: this.whatsapp,
                email: this.email,
            })
        }
    },

}
</script>