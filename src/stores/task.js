import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

import { useNotificationStore } from './notification'

const storage = useStorage('tasks')

export const useTaskStore = defineStore('task', {
    state: () => {
        const notificationStore = useNotificationStore()
        return {
            notificationStore,
            tasks: {
                columns: [
                    {
                        title: 'На согласовании',
                        headColor: '#FF99E9',
                        items: []
                    },
                    {
                        title: 'Новые',
                        headColor: '#66B8FF'
                    },
                    {
                        title: 'В процессе',
                        headColor: '#FFD466'
                    },
                    {
                        title: 'Готово',
                        headColor: '#53C666'
                    },
                    {
                        title: 'Доработать',
                        headColor: '#F76E85'
                    },
                ]
            },
            drag: {
                colFrom: {},
                colTo: {},
                item: {}
            }
        }
    },

    actions: {
        loadData() {
            if (storage.value) {
                this.tasks = JSON.parse(storage.value)
            }
        },
        saveData() {
            storage.value = JSON.stringify(this.tasks) 
        },
        removeDraggedItem() {
            const index = this.drag.colFrom.items.indexOf(this.drag.item)
            const column = this.drag.colFrom

            this.removeItem(index, column)
        },
        removeItem(index, column, notification) {
            const text = column.items[index].text
            column.items.splice(index, 1)
            this.saveData()
            
            if (notification === true) {
                this.notificationStore.createMessage('Задача удалена', text)
            }
        }
    }
})