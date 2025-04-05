<template>
  <div class="container" id="about-page">
    <div class="tg-maser-row">Что входит услугу TG Master:</div>
    <div class="center-aligned">
      <div v-for="(item, index) in items" :key="index" class="column" ref="columns">
        <div class="row">
        </div>
        
        <div class="description-block">
          <div class="icon-column">
            <component :is="item.icon" width="200" height="200" />
            <h2>{{ item.title }}</h2>
          </div>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
    <div class="bottom-column">
      <button @click="openLink" class="yellow-button">СВЯЗАТЬСЯ</button>
      <h2 class="last_text">Если у вас есть дополнительные вопросы или нужна помощь с конкретными аспектами продвижения в Телеграме, дайте знать!</h2>
  </div>
  </div>
</template>


<script>
import { createApp } from 'vue';
import VueSmoothScroll from 'vue3-smooth-scroll';

import NeuroCommentingIcon from '@/components/NeuroCommentingIcon.vue';
import InvitingIcon from '@/components/InvitingIcon.vue';
import OtmetkiVStoriesIcon from '@/components/OtmetkiVStoriesIcon.vue';
import DostupKUmnomuBotuIcon from '@/components/DostupKUmnomuBotuIcon.vue';
import PersonalizirovannieRecomendaciiIcon from '@/components/PersonalizirovannieRecomendaciiIcon.vue';

export default {
  methods: {
    openLink() {
      window.open('https://t.me/am4I4I');
    },
  },
  components: {
    NeuroCommentingIcon,
    InvitingIcon,
    OtmetkiVStoriesIcon,
    DostupKUmnomuBotuIcon,
    PersonalizirovannieRecomendaciiIcon,
  },
  data() {
    return {
      items: [
        {
          icon: NeuroCommentingIcon,
          title: 'НЕЙРОКОММЕНТИНГ',
          description: 'Эффективный способ привлечь внимание к вашему бренду через активное взаимодействие с аудиторией в других каналах. Это создает обсуждения и повышает интерес к вашему контенту.',
        },
        {
          icon: InvitingIcon,
          title: 'ИНВАЙТИНГ',
          description: 'Создание чата для целевой аудитории позволяет собрать заинтересованных людей в одном месте, где они могут узнать больше о вашем предложении.',
        },
        {
          icon: OtmetkiVStoriesIcon,
          title: 'ОТМЕТКИ В СТОРИС',
          description: 'Использование сторис для продвижения вашего предложения и уведомление потенциальных клиентов — это отличный способ повысить видимость и вовлеченность.',
        },
        {
          icon: DostupKUmnomuBotuIcon,
          title: 'ДОСТУП К УМНОМУ БОТУ',
          description: 'Инструмент на базе ChatGPT может значительно упростить процесс генерации контента и идей, что особенно полезно для активного ведения канала.',
        },
        {
          icon: PersonalizirovannieRecomendaciiIcon,
          title: 'ПЕРСОНАЛИЗИРОВАННЫЕ РЕКОМЕНДАЦИИ',
          description: 'Персонализированные рекомендации: Индивидуальные советы помогут вам лучше адаптировать стратегию ведения канала под ваши нужды и цели.',
        },
      ],
    };
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    this.$refs.columns.forEach((column) => {
      column.style.opacity = 0;
      observer.observe(column);
    });
  },
};

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #101010;
  background-image: url('@/assets/pattern.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 20px;

}

.tg-maser-row {
  text-align: center;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 20px;
  font-family: "Roboto Condensed", Helvetica, Arial, sans-serif;
  font-size: 25px;
  font-weight: bold;
  animation: move-up-down 2s infinite;
}

.description-block {
  background: linear-gradient(to bottom right, #0f0f0f, #1a1a1a); /* Градиентный фон */
  padding: 20px;
  border-radius: 20px;
  border: 2px solid #2b2b2b;
  width: 80%;
}


.description-block p {
  font-size: 19px;
  color: #e9e9e9;
  margin-top: 30px;
  font-size: 20px;
  font-weight: 300;
  width: 90%;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  padding-left: 20px;
  border-left: 5px solid #FFC000;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  transition: opacity 0.5s;
  color: #ffffff;
}

.icon-column {
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
}

.column svg {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  margin-right: 15px;
}

.column h2, .column p {
  text-align: left;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
}

.column h2 {
  font-size:  18px;
  color: #ffffff;
  text-align: left;
}

.row {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  text-align: center;

}

.bottom-column {
  display: flex;
  flex-direction: column;
  margin: 20px;
  align-items: center;
  text-align: center;
}

.yellow-button {
  background-color: #FFC000;
  color: #000000;
  font-family: "Roboto";
  font-size: 22px;
  font-weight: bold;
  height: 61px;
  width: 100%;
  margin: 40px 0;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  box-sizing: border-box;
}

.last_text {
  text-align: center;
  width: 80%;
  color: #e9e9e9;
  font-size:16px;
  margin-bottom: 10px;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-weight: 300;
}

.svg_position {
    display: flex;
    align-items: center;
    
}
</style>
