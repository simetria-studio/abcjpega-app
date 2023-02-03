<template>

    <div>

        <div class="w-52 mx-auto ">
            <div class="flex mb-5">
                <input type="text"
                    class="text-center text-black placeholder:text-black bg-zinc-100 p-1 rounded drop-shadow-xl shadow-lg   border-2 border-red-900 focus:ring-2  focus:ring-red-300   focus:outline-none  focus:border-red-900 "
                    placeholder="Reprodutor">
            </div>
            <div class="flex mb-5">
                <input type="text"
                    class="text-center text-black placeholder:text-black bg-zinc-100 p-1 rounded drop-shadow-xl shadow-lg  border-2 border-red-900 focus:ring-2  focus:ring-red-300   focus:outline-none  focus:border-red-900 "
                    placeholder="Matriz">
            </div>
            <div class="flex   mb-8">
                <label for="date-cobricao">Data da cobrição
                    <br>
                    <input type="date" name="date-cobricao" id="date-cobricao"
                        class=" text-center text-black placeholder:text-black bg-zinc-100 p-1 rounded drop-shadow-xl shadow-lg  border-2 border-red-900 focus:ring-2  focus:ring-red-300   focus:outline-none  focus:border-red-900 ">
                </label>
            </div>

        </div>
    </div>

</template>

<script>
export default {
    name: "step3",
    layout: "default",


}
</script>