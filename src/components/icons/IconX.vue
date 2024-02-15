<script setup>
    const props = defineProps({
        size: Number
    })
</script>

<template>
    <svg :width="size ? size : 14" :height="size ? size : 14" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="iconX">
        <path d="M15.6 5L5.60001 15M5.60001 5L15.6 15" stroke="#86949E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>

<style scoped>
    .iconX {
        cursor: pointer;
    }
</style>