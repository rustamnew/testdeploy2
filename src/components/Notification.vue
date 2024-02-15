<script setup>
import IconCheckRound from './icons/IconCheckRound.vue';
import IconX from './icons/IconX.vue';

import { useNotificationStore } from '../stores/notification';
</script>

<template>
    <div class="notification">
        <transition-group name="notification-transition">
            <template v-for="item, index in notificationStore.notifications" :key="index">
                    <div class="item" >
                        <div class="icon">
                            <IconCheckRound />
                        </div>

                        <div class="content">
                            <span class="title">{{item.title}}</span>

                            <p class="text">{{item.text}}</p>
                        </div>

                        <div class="close">
                            <button @click="removeNotification(item, index)">
                                <IconX :size="16"/>
                            </button>
                        </div>
                    </div>
                
            </template>
        </transition-group>
    </div>
    
</template>


<script>
    export default {
        data() {
            const notificationStore = useNotificationStore()
            return {
                notificationStore
            }
        },
        methods: {
            removeNotification(item, index) {
                console.log(item)
                console.log(index)
            }
        }
    }
</script>

<style scoped lang="scss">

    .notification {
        position: fixed;
        bottom: 2%;
        right: 2%;

        .item {
            width: 400px;
            border: 1px solid #E3E5E8;
            border-radius: 4px;
            box-shadow: 0px 8px 16px 0px #0000000F;
            padding: 13px 16px 16px 24px;
            overflow: hidden;
            position: relative;
            display: flex;

            &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                width: 8px;
                background-color: #22C33D;
            }

            &:not(:first-child) {
                margin-top: 30px;
            }

            .icon {
                padding-top: 3px;
                margin-right: 16px;
            }

            .content {
                .title {
                    font-weight: 600;
                    margin-bottom: 6px;
                    display: block;
                }
                .text {
                    line-height: 1.28;
                }
            }

            .close {
                position: absolute;
                right: 1px;
                top: 7px;
            }
        }
    }

    .notification-transition-enter-active,
    .notification-transition-leave-active {
        transition: all 0.5s;
    }
    .notification-transition-enter {
        transform: translateY(100px);
    }
    .notification-transition-leave {

    }
    .notification-transition-leave-to {
        opacity: 0;
        transform: translateX(100%);
    }
</style>
