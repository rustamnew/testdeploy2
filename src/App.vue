<script setup>
import Tasks from './components/Tasks.vue'
import Notification from './components/Notification.vue'
</script>

<template>
    <main>
        <Tasks />
        <Notification />
    </main>
</template>

<style>
    main {
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
    }
    button {
        border: none;
        background: none;
        cursor: pointer;
    }
</style>
