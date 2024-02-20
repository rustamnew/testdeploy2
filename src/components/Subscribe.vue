<script setup>
import SubscribeForm from './SubscribeForm.vue';
import SubscribeCard from './SubscribeCard.vue';

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

const buttonActiveStyle = 'font-medium text-base border-custom-blue text-custom-lightblue '
const buttonDefaultStyle = 'font-normal text-base border-transparent text-custom-gray'

 
</script>

<template>
    <div class="subscriptions">
        <h1 class="text-black text-3.5xl md:text-3.5 font-semibold tracking-semitight mt-1 md:mt-4 text-center">Подписки «Клерка»</h1>

        <div class="pt-5 md:pt-4 flex justify-center">
            <button v-for="button, index in buttons" @click="clickButton(index)" class="bg-transparent mx-3 pb-4 border-b-2 hover:border-custom-blue hover:text-custom-lightblue" :class="buttons[index].active ? buttonActiveStyle : buttonDefaultStyle">
                {{ button.title }}
            </button>
        </div>

        <div class="bg-custom-graybg md:rounded-2xl p-4 py-8 md:px-6 md:py-12">
            <h3 class="text-2xl md:text-center font-semibold tracking-semitight pt-0.5 mb-4 md:mb-6">Выберите рассылки, которые подходят именно вам</h3>

            <SubscribeForm />

            <div class="flex flex-wrap justify-center lg:grid grid-cols-2 gap-6">
                <SubscribeCard v-for="card in cards" :card="card"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                buttons: [
                    {
                        title: 'Рассылки',
                        active: true
                    },
                    {
                        title: 'Соцсети',
                        active: false
                    },
                    {
                        title: 'Мессенджеры',
                        active: false
                    }
                ]
            }
        },
        methods: {
            clickButton(index) {
                this.buttons.forEach( (button) => {
                    button.active = false
                })
                this.buttons[index].active = !this.buttons[index].active
            }
        }

    }
</script>
