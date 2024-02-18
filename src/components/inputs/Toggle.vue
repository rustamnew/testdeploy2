<template>
    <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer">

        <div 
        class="relative
        bg-gray-200
        rounded-full
        peer-focus:outline-none
        peer-focus:ring-4
        peer-focus:ring-blue-300
        peer
        rtl:peer-checked:after:-translate-x-full
        peer-checked:after:translate-x-full
        peer-checked:after:border-white
        peer-checked:bg-blue-600
        after:content-['']
        after:absolute
        after:bg-white
        after:border-gray-300
        after:border
        after:rounded-full
        after:transition-all" 
        :class="sizeClasses"></div>
        
        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300" v-if="text">{{ text }}</span>
    </label>
</template>

<script>
    export default {
        props: {
            size: String,
            text: String
        },
        computed: {
            sizeClasses: function () {

                if (this.size === 'small') {
                    return 'w-9 h-5 after:top-[2.5px] after:start-[2px] after:h-4 after:w-4'
                }
                else if (this.size === 'medium') {
                    return 'w-11 h-6 after:top-[2px] after:start-[2px] after:h-5 after:w-5'
                }
                else if (this.size === 'large') {
                    return 'w-14 h-7 after:top-0.5 after:start-[4px] after:h-6 after:w-6'
                }
                else {
                    return 'w-11 h-6 after:top-[2px] after:start-[2px] after:h-5 after:w-5' //default
                }
                
            }
        }
    }
</script>