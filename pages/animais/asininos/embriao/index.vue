<template>
    <div>
      <div class="m-4 text-red-900">
        <nuxt-link to="/animais/asininos">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </nuxt-link>
      </div>
      <div class="text-center my-8 text-2xl font-medium text-zinc-600">
        <h1>Inscrição de doadora de embrião</h1>
      </div>
  
      <component
        v-bind:is="steps[currentStep].components"
        v-bind:formEmbriao="formEmbriao[steps[currentStep].label]"
      />
  
      <div class="flex items-center justify-center space-x-3 mt-5">
        <button
          v-if="currentStep !== 0"
          v-on:click="previous"
          class="text-md bg-red-900 hover:bg-red-900 focus:ring-2 focus:ring-red-900/50 text-white p-2 rounded-2xl drop-shadow-xl"
        >
          Anterior
        </button>
  
        <button
          class="text-md bg-red-900 hover:bg-red-900 focus:ring-2 focus:ring-red-900/50 text-white p-2 rounded-2xl drop-shadow-xl"
          v-if="currentStep < steps.length - 1"
          v-on:click="next"
        >
          Próximo
        </button>
  
        <button
          v-else
          class="text-md bg-red-900 hover:bg-red-900 focus:ring-2 focus:ring-red-900/50 text-white p-2 rounded-2xl drop-shadow-xl"
          v-on:click="submit"
        >
          Concluír
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import identificacaoEmbriao from "./Steps/identificacao";
  import motivoEmbriao from "./Steps/motivo";
  
  export default {
    name: "embriao",
    layout: "default",
    data() {
      return {
        currentStep: 0,
        formEmbriao: {
          identificacaoEmbriao: {},
          motivoEmbriao: {},
        },
        steps: [
          {
            components: identificacaoEmbriao,
          },
          {
            components: motivoEmbriao,
          },
        ],
      };
    },
    methods: {
      next() {
        this.currentStep += 1;
      },
      previous() {
        this.currentStep -= 1;
      },
    },
    components: {
      identificacaoEmbriao,
      motivoEmbriao,
    },
  };
  </script>
  