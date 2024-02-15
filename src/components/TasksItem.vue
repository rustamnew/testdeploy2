<script setup>
import { ref } from 'vue';
import IconMoreHorizontal from './icons/IconMoreHorizontal.vue'
import IconMoreHorizontalBlue from './icons/IconMoreHorizontalBlue.vue'
import IconEdit from './icons/IconEdit.vue';
import IconTrash from './icons/IconTrash.vue';
import IconCheck from './icons/IconCheck.vue';
import IconXRed from './icons/IconXRed.vue';

import { useTaskStore } from '../stores/task';


import Modal from './Modal.vue'

import { vOnClickOutside } from '@vueuse/components'


const dropdownShow = ref(false)
function showDropdown() {
    dropdownShow.value = true
}
function closeDropdown() {
    dropdownShow.value = false
}


const modal = ref(false)
function showModal() {
    modal.value = true
}
function closeModal() {
    modal.value = false
}

</script>

<template>
    <div 
    class="tasksItem" 
    :class="editMode === true ? 'active' : '' " 
    :draggable="!editMode"
    @dragstart="startDrag($event, item)">
        <template v-if="editMode === false">
            <p class="text" >{{ item.text ? item.text : '&nbsp;'}}</p>

            <div class="controls">

                <div class="relative">
                    <button class="edit" @click="showDropdown(); dropdownShowHandler($event)">
                        <div class="default"> <IconMoreHorizontal /> </div>
                        <div class="active"> <IconMoreHorizontalBlue /> </div>
                    </button>

                    <div class="dropdown" :style="`top: ${dropdownCoords.top}px; left: ${dropdownCoords.left}px`" v-on-click-outside="closeDropdown" v-if="dropdownShow">
                        <button class="item" @click="showEdit(); closeDropdown()">
                            <div class="icon"><IconEdit /></div>
                            <div class="title">Редактировать</div>
                        </button>
                        <button class="item" @click="showModal(); closeDropdown()">
                            <div class="icon"><IconTrash /></div>
                            <div class="title">Удалить</div>
                        </button>
                    </div>
                </div>
        
            </div>
            
        </template>

        <template v-else>
            <textarea 
                ref="textarea" 
                v-model="itemObj.text" 
                placeholder="Введите текст..."
                @input="resizeTextarea()">
            </textarea>

            <div class="controls col">
                <button @click="cancelEdit()"><IconXRed /></button>
                <button @click="saveValue()"><IconCheck /></button>
            </div>

        </template>
        
        
    </div>
    
    <template v-if="modal">
        <teleport to="body">
            <Modal @closeModal="closeModal()">
                <template v-slot:title>
                    Удалить задачу?
                </template>

                <template v-slot:message>
                    {{ item.text }}
                </template>

                <template v-slot:buttons>
                    <button class="modal-button" @click="removeItem(); closeModal()">Удалить</button>
                    <button class="modal-button" @click="closeModal()">Отменить</button>
                </template>
            </Modal>
        </teleport>

    </template>
    
    
</template>

<script>
    export default {
        props: {
            item: Object,
            index: Number
        },
        emits: ['dragstart', 'removeItem'],
        data() {
            const taskStore = useTaskStore()
            return {
                itemObj: this.item,
                oldVal: '',
                taskStore,
                editMode: false,
                dropdownCoords: {
                    top: 0,
                    left: 0
                }
            }
        },
        watch: { 
            item: function(newVal, oldVal) {
                this.itemObj = newVal
                this.editMode = false
            }
        },
        mounted() {
            if (this.item.active === true) {
                this.showEdit()
            }
        },
        methods: {
            resizeTextarea() {
                const element = this.$refs.textarea;
                element.style.height = "18px";
                element.style.height = element.scrollHeight + "px";
            },

            changeHandler() {
                this.$emit('change', this.itemObj.text);
            },

            showEdit() {
                this.editMode = true
                this.oldVal = this.item.text

                this.$nextTick( () => {
                    this.resizeTextarea()
                    this.$refs.textarea.focus()
                })
            },

            cancelEdit() {
                this.editMode = false
                this.item.text = this.oldVal
            },

            saveValue() {
                this.editMode = false
                this.item.active = false
                this.taskStore.saveData()
            },

            dropdownShowHandler(event) {
                const rect = event.target.closest('.controls').getBoundingClientRect()

                this.dropdownCoords.top = rect.top + 18
                this.dropdownCoords.left = rect.left
            },

            removeItem() {
                this.$emit('removeItem')
            },

            startDrag(event, item) {
                this.taskStore.drag.item = item
                this.$emit('dragstart')
            },
        }
    }
</script>

<style scoped lang="scss">
    .tasksItem {
        display: flex;
        justify-content: space-between;
        padding: 9px 23px 7px 8px;
        border: 1px solid #C4CAD4;
        border-radius: 4px;
        position: relative;
        width: 155px;
        margin-bottom: 6px;

        :last-child {
            margin-bottom: 0;
        }

        &:hover {
            box-shadow: 0px 8px 16px 0px #0000000F;
        }

        &.active {
            border-color: #3D86F4;
            min-height: 50px;
            padding: 6px 24px 24px 10px;
        }

        

        .controls {
            display: flex;
            position: absolute;
            right: 4px;
            top: 5px;

            .relative {
                position: relative;
            }

            button {
                width: 20px;
                height: 20px;

                padding: 0;
                display: flex;
                align-items: center;
                justify-content: center;

                &.edit {
                    .active {
                        display: none;
                    }

                    &:hover {
                        .default {
                            display: none;
                        }
                        .active {
                            display: block;
                        }
                    }
                }
            }

            .dropdown {
                position: fixed;
                z-index: 1000;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                box-shadow: 0px 8px 16px 0px #0000000F;
                background-color: #fff;
                border-radius: 4px;
                padding: 5px 0;
                border: 1px solid #E3E5E8;

                button.item {
                    padding: 5px 11px 3px;
                    width: 100%;
                    height: unset;

                    display: flex;
                    align-items: center;
                    justify-content: flex-start;

                    &:hover {
                        background-color: #E1F1FF;
                    }

                    .icon {
                        margin-right: 8px;
                    }
                    
                }

                
            }

            &.col {
                flex-direction: column;
            }
        }

        .text {
            word-break: break-word;
            line-height: 1.285;
        }

        textarea {
            border: none; 
            appearance: none;
            background: none;
            outline: none;
            font-family: 'TT Interfaces', sans-serif;
            font-size: 1rem;
            resize: none;
            height: 18px;
            line-height: 1.285;
            overflow: hidden;
        }
    }
</style>
