<script setup>
import TasksItem from './TasksItem.vue';
import IconPlus from './icons/IconPlus.vue';

import { useTaskStore } from '../stores/task';
</script>

<template>
    <div class="tasks-column" @dragover="onDragOver($event)" @drop="onDrop($event, column)">
        <div class="head" :style="column.headColor ? `background-color: ${column.headColor}` : ''">
            <span>{{column.title}}</span>
        </div>

        <div class="list">
            <TasksItem v-for="(item, index) in column.items" 
            :item="item" 
            :index="index"
            @dragstart="dragStartHandle()"
            @removeItem="removeItem(index)"/>

            <button class="add" @click="addItem()">
                <div class="icon">
                    <IconPlus />
                </div>
                
                <span>Добавить</span>
            </button>
        </div>
        
    </div>
</template>


<script>
    export default {
        props: {
            column: Object,
        },
        
        data() {
            const taskStore = useTaskStore()

            return {
                taskStore
            }
        },
        methods: {
            addItem() {
                if (!this.column.items) {
                    this.column.items = []
                }
                this.column.items.push({active: true})
            },

            removeItem(index) {
                this.taskStore.removeItem(index, this.column)
            },

            onDragOver(event) {
                event.preventDefault();
            },

            onDrop(event, column) {
                if (!column.items) {
                    column.items = []
                }

                column.items.push(this.taskStore.drag.item)
                
                this.taskStore.removeDraggedItem()
                this.taskStore.saveData()
            },

            dragStartHandle() {
                this.taskStore.drag.colFrom = this.column
            }
        }
    }
</script>

<style scoped lang="scss">
    .tasks-column {
        border: 1px solid #E3E5E8;
        border-radius: 8px;
        margin: 0 4px 8px;
        width: 177px;
        flex-shrink: 0;
        
        .head {
            padding: 5px 10px;
            text-align: center;

            border-radius: 8px  8px 0 0;

            span {
                font-weight: 700;
                font-size: 14px;
            }
            
        }
        .list {
            padding: 2px 8px 6px 5px;;
            max-height: 564px;
            overflow-y: auto;
            overflow-x: hidden;
            border-right: 3px solid transparent ;
            border-top: 4px solid transparent ;

            &::-webkit-scrollbar {
                width: 5px;
                padding-right: 4px;
            }
            &::-webkit-scrollbar-track {
                border-radius: 10px;
            }
            &::-webkit-scrollbar-thumb {
                background: #C4CAD4; 
                border-radius: 10px;
            }
            &::-webkit-scrollbar-thumb:hover {
                background: #a6a9af; 
            }


            .add {
                padding: 0;
                display: flex;
                align-items: center;

                .icon {
                    margin-right: 3px;
                }

                span {
                    color: #3D86F4;
                }
            }

            .tasksItem.active ~ .add {
                display: none;
            }
        }
    }
</style>
