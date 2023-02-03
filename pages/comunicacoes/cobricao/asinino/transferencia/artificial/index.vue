<template>
    <div>
        <div class="my-4">
            <h2 class="text-center font-medium text-xl">Cobrição</h2>
        </div>
        <component v-bind:is="steps[currentStep].component" v-bind:formData=formData[steps[currentStep].label] />
        <div class="flex items-center justify-center space-x-3">
            <button
                class="border border-red-900 rounded-lg p-2 bg-red-900 text-white hover:bg-red-800  focus:outline-none focus:border-red-900 focus:ring focus:ring-red-200"
                v-on:click="prev" v-if="currentStep !== 0">Voltar
            </button>
            <button
                class="border border-red-900 rounded-lg p-2 bg-red-900 text-white hover:bg-red-800  focus:outline-none focus:border-red-900 focus:ring focus:ring-red-200"
                v-on:click="next" v-if="currentStep < steps.length - 1">Próximo
            </button>
            <button
                class="border border-red-900 rounded-lg p-2 bg-red-900 text-white hover:bg-red-800  focus:outline-none focus:border-red-900 focus:ring focus:ring-red-200"
                v-else v-on:click="submit">Concluir
            </button>
        </div>
    </div>
</template>
<script>
import step1 from './steps/step-1.vue';
import step2 from './steps/step-2.vue';
import step3 from './steps/step-3.vue';
export default {
    name: "transferencia-artificial",
    layout: "default",
    data() {
        return {
            currentStep: 0,
            formData: {
                step1: {},
                step2: {},
                step3: {},
            },
            steps: [
                {
                    component: step1,
                },
                {
                    component: step2,

                },
                {
                    component: step3,

                }
            ],
        };
    },
    components: {
        step1,
        step2,
        step3,
    },
    methods: {
        next() {
            this.currentStep += 1;
        },
        prev() {
            this.currentStep -= 1;
        },
        submitForm() {
            if (this.$v.$invalid) {
                this.$v.$touch();
            } else {

            }
        },

    },
}
</script>

