<script setup>
    import IconX from './icons/IconX.vue';

    const emit = defineEmits(['closeModal'])

    function modalClickCheck(event) {
        if (event.target.classList.contains('modal-wrapper')) {
            emit('closeModal')
        }
    }
</script>

<template>
    <div class="modal-wrapper" @click="modalClickCheck($event)">
        <div class="modal-content">
            <h4 class="title">
                <slot name="title">
                    
                </slot>
            </h4>

            <p class="message">
                <slot name="message">
                    
                </slot>
            </p>

            <div class="buttons">
                <slot name="buttons">
                    <button class="modal-button">Ок</button>
                </slot>
            </div>

            <div class="close" @click="emit('closeModal')">
                <IconX :size="24"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .modal-wrapper {
        background-color: rgba(0, 0, 0, 0.6);

        position: fixed;
        
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        .modal-content {
            background-color: #fff;
            padding: 21px 40px 40px;
            width: 500px;
            border-radius: 8px;
            box-shadow: 0px 32px 48px 0px #00000029;

            position: relative;


            .title {
                font-size: 24px;
                font-weight: 600;
                margin-bottom: 18px;
            }

            .message {
                word-break: break-word;
                margin-bottom: 20px;
            }

            .buttons {
                display: flex;

                button {
                    flex: 1;
                    width: 100%;
                    border: 1px solid #C4CAD4;
                    border-radius: 4px;
                    padding: 10px 20px;

                    margin-right: 16px;

                    &:last-child {
                        margin-right: 0;
                    }
                }
            }

            .close {
                position: absolute;
                top: 16px;
                right: 16px;
            }
        }
    }
</style>