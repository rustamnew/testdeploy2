<script setup>
    const items = [
        {
            title: 'Главная',
            link: '#'
        },
        {
            title: 'Рассылки',
            link: '#'
        },
        {
            title: 'Хлебные крошки',
            link: '#'
        },
    ]
</script>

<template>
    <div class="breadcrumbs text-xxs text-custom-lightgray flex items-center pt-1">
        <template v-for="item, index in items">
            <span class="mx-2 pb-px" v-if="index > 0">→</span>

            <a :href="item.link" class="border-b border-custom-lightblue2 pb-px leading-none hover:text-custom-gray">{{ item.title }}</a>
        </template>
    </div>
</template>