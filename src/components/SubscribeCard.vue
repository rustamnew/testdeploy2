<script setup>
    import IconCheck from './icons/IconCheck.vue';
    import Toggle from './inputs/Toggle.vue';

</script>

<template>
    
        <div class="p-4 pt-6 md:p-6 rounded-2xl flex max-w-card shadow-md bg-white">
            <div class="flex flex-col">
                <span class="text-xs text-custom-lightgray">{{ card.subtitle }}</span>

                <h4 class="font-semibold text-xl mb-2">{{ card.title }}</h4>

                <p class="leading-5 text-custom-lightgray mb-4 text-sm">{{ card.text }}</p>

                <div class="mb-3" v-if="card.features">
                    <div class="flex md:items-center mb-2" v-for="feature in card.features">
                        <div class="mr-2"> <IconCheck/> </div>
                        
                        <span class="text-sm">{{ feature }}</span>
                    </div>
                </div>

                <Toggle size="medium" text="Уже получает 59 342 человек"/>
            </div>

            
            <div class="image h-10 w-10 md:h-20 md:w-20 ml-6 shrink-0" v-if="card.image">
                <img class="h-full w-full" :src="`/images/${card.image}`" alt="image">
            </div>
        </div>
    

            
</template>

<script>
    export default {
        props: {
            card: Object
        },
    }
</script>


<style>
</style>