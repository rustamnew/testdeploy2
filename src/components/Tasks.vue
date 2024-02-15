<script setup>
import TasksColumn from './TasksColumn.vue';
import { useTaskStore } from '../stores/task';

</script>

<template>
    <div class="tasks">
        <TasksColumn v-for="column in taskStore.tasks.columns" :column="column"/>
    </div>
</template>

<script>
    export default {
        data() {
            const taskStore = useTaskStore()

            return {
                taskStore
            }
        },
        mounted() {
           this.taskStore.loadData()
        }
    }
</script>

<style scoped> 
    .tasks {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>
