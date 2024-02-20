<script setup>
import Toggle from './inputs/Toggle.vue';
import IconRight from './icons/IconRight.vue';

</script>

<template>
    <div class="form md:px-6 mb-5 md:mb-7">
        <div class="bg-white flex justify-between rounded-l-lg rounded-r-3xl overflow-hidden">
            <input type="email" placeholder="Электронная почта" class="border-transparent w-full pl-4 border-transparent focus:border-transparent focus:ring-0">
            <button class="bg-custom-blue text-base text-custom-white py-4 px-8 rounded-100 hidden md:flex">Подписаться</button>
            <button class="bg-custom-blue flex items-center justify-center w-14 h-14 text-custom-white py-4 px-8 rounded-full md:hidden"><IconRight /></button>
        </div>

        <div class="mt-4">
            <Toggle size="small" text="Подписаться на все рассылки"/>
        </div>
    </div>
</template>