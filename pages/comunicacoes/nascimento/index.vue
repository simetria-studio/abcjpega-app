<template>
    <div class="m-8">
        <div class="grid place-items-center">
            <form action="">
                <h1 class="text-center text-lg font-semibold mb-5">Gestação Natural</h1>
                <label for="nome_animal">
                    Verificar disponibilidade de nome:
                </label>
                <div class="relative w-full mb-5">
                    <input type="search" name="" id="nome_animal"
                        class="border w-full px-2 py-1 rounded-md bg-zinc-100 shadow focus:outline-none  focus:border-red-800  ">
                    <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div class="mb-5">
                    <label class="">Data de nascimento:
                        <br>
                        <input type="date" name="" id=""
                            class="border w-full px-2 py-1 rounded-md bg-zinc-100 shadow focus:outline-none  focus:border-red-800  ">
                    </label>
                </div>
                <div class="mb-5">
                    <label class="">Gênero
                        <br>
                        <select name="" id=""
                            class="border w-full px-2 py-1  rounded-md bg-zinc-100 shadow focus:outline-none   focus:border-red-800 ">
                            <option value="">Macho</option>
                            <option value="">Fêmea</option>
                        </select>
                    </label>
                </div>
                <h1 class="text-center text-lg font-semibold mb-5">Genitores</h1>
                <div class="mb-5">
                    <label class="">Reprodutor
                        <br>
                        <input type="text" name="" id=""
                            class="border w-full px-2 py-1 rounded-md bg-zinc-100 shadow focus:outline-none  focus:border-red-800  ">
                    </label>
                </div>
                <div class="mb-5">
                    <label class="">Matriz
                        <br>
                        <input type="text" name="" id=""
                            class="border w-full px-2 py-1  rounded-md bg-zinc-100 shadow focus:outline-none   focus:border-red-800 ">
                    </label>
                </div>
                <div>
                    <button type="submit"
                        class="bg-red-800 text-white px-4 py-2 rounded-md shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
                        Protocolar
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

