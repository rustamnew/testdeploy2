<script setup>
import Toggle from './inputs/Toggle.vue';
import SubscribeCard from './SubscribeCard.vue';
import IconRight from './icons/IconRight.vue';

const cards = [
    {
        subtitle: 'Перед рассветом',
        title: 'Утренний бухгалтер',
        text: 'Самые важные новости и события за день. Кратко, по делу, структурировано.',
        features: [
            'Новости для бухгалтеров, ИП и директора',
            'Подборка статей за день'
        ],
        toggleText: 'Уже получает 59 342 человек',
        image: 'card1.png'
    },
    {
        subtitle: 'После заката',
        title: 'Ночной бухгалтер',
        text: 'Самая краткая газета о налогах и бухучете в мире — современная рассылка для чтения.',
        features: [
            'Анализ, оценка и только самое главное',
            'Лучшие комменты юзеров в обзоре'
        ],
        toggleText: 'Уже получает 37 480 человек',
        image: 'card2.png'
    },
    {
        subtitle: 'Раз в две недели',
        title: 'Ножницы скидок',
        text: 'Подборка самых выгодных и полезных спецпредложений от надежных компаний.',
        features: [
            'Акции и скидки от лидеров рынка',
            'Те, кто подписался – экономят много денег '
        ],
        toggleText: 'Уже получает 92 118 человек',
        image: 'card3.png'
    },
    {
        subtitle: 'По мере появления анонсов',
        title: 'Чемодан вебинаров',
        text: 'Подборка с анонсами бесплатных вебинаровна самые топовые темы при участии экспертов.',
        features: [
            'Никогда не пришлем платные вебинары',
            'Подборка топовых тем для вебинаров'
        ],
        toggleText: 'Уже получает 92 082 человек',
        image: 'card4.png'
    },
]
</script>

<template>
    <div class="subscriptions">
        <h1 class="text-black text-3.5xl md:text-3.5 font-semibold tracking-tight mt-2 md:mt-5 text-center">Подписки «Клерка»</h1>

        <div class="pt-5 md:pt-4 flex justify-center">
            <button class="bg-transparent font-semibold text-custom-gray mx-3 pb-4 border-b-2 border-custom-blue text-custom-lightblue hover:border-custom-blue hover:text-custom-lightblue">
                Рассылки
            </button>

            <button class="bg-transparent font-normal text-custom-gray mx-3 pb-4 border-b-2 border-transparent hover:border-custom-blue hover:text-custom-lightblue">
                Соцсети
            </button>

            <button class="bg-transparent font-normal text-custom-gray mx-3 pb-4 border-b-2 border-transparent hover:border-custom-blue hover:text-custom-lightblue">
                Мессенджеры
            </button>
        </div>

        <div class="content  bg-custom-graybg rounded-2xl p-4 pt-8 md:p-6 md:pt-12">
            <h3 class="text-2xl md:text-center font-semibold tracking-tighter mb-6">Выберите рассылки, которые подходят именно вам</h3>

            <div class="form md:px-4 mb-8">
                <div class="bg-white flex justify-between rounded-l-lg rounded-r-3xl overflow-hidden">
                    <input type="email" placeholder="Электронная почта" class="border-transparent w-full border-transparent focus:border-transparent focus:ring-0">
                    <button class="bg-custom-blue text-custom-white py-4 px-8 rounded-100 hidden md:flex">Подписаться</button>
                    <button class="bg-custom-blue flex items-center justify-center w-14 h-14 text-custom-white py-4 px-8 rounded-full md:hidden"><IconRight /></button>
                </div>

                <div class="mt-4">
                    <Toggle size="small" text="Подписаться на все рассылки"/>
                </div>
            </div>

            <div class="flex flex-wrap justify-center lg:grid grid-cols-2 gap-6">
                <SubscribeCard v-for="card in cards" :card="card"/>
            </div>
        </div>
    </div>
</template>
