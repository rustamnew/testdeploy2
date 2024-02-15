import { defineStore } from 'pinia'

export const useNotificationStore = defineStore('notification', {
    state: () => {
        return {
            notifications: [],
        }
    },

    actions: {
        createMessage(title, text) {
            const message = {
                title,
                text
            }

            this.notifications.push(message)

            setTimeout(() => {
                const index = this.notifications.indexOf(message)
                this.notifications.splice(index, 1)
            }, 3000)
        }
    }
})