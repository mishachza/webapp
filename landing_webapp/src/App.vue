<template>
  <div id="app">
    <div class="container" @wheel.passive="onWheel">
      <transition :name="transitionName" mode="out-in">
        <router-view :key="$route.fullPath"></router-view>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { RouterView, useRouter } from 'vue-router';
import { ref } from 'vue';


const router = useRouter();
let scrollDelta = 0;
const transitionName = ref('slide-down');

const onWheel = (event) => {
  const delta = event.deltaY;

  scrollDelta += delta;

  if (delta > 0) {
    transitionName.value = 'slide-down';
  } else {
    transitionName.value = 'slide-up';
  }

  if (scrollDelta > 500) { // Переход на следующую страницу при прокрутке вниз на 500 пикселей
    navigateToNextPage();
    scrollDelta = 0;
  } else if (scrollDelta < -500) { // Переход на предыдущую страницу при прокрутке вверх на 500 пикселей
    navigateToPrevPage();
    scrollDelta = 0;
  }
};

const navigateToNextPage = () => {
  // Получаем текущий маршрут
  const currentRoute = router.currentRoute.value.name;

  // Определяем следующий маршрут
  let nextRoute;
  if (currentRoute === 'home') {
    nextRoute = 'description';
  } else if (currentRoute === 'description') {
    nextRoute = 'about';
  } 

  // Переходим на следующий маршрут
  router.push({ name: nextRoute });
};

const navigateToPrevPage = () => {
  // Получаем текущий маршрут
  const currentRoute = router.currentRoute.value.name;

  // Определяем предыдущий маршрут
  let prevRoute;
  if (currentRoute === 'home') {
    pass;
  } else if (currentRoute === 'description') {
    prevRoute = 'home';
  } else {
    prevRoute = 'description';
  }

  // Переходим на предыдущий маршрут
  router.push({ name: prevRoute });
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

html, body { font-family: "Roboto Condensed", sans-serif; }

body {
  margin: 0;
  padding: 0;
  background-color: #131313;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column; 
  align-items: center;
  font-family: "Roboto Condensed", sans-serif;
  
}

#app {
  width: 100%;
  height: 100%;
  max-width: 500px;
  color: white; /* Добавлено для видимости текста */
}

.container {
   height: 100vh;
   /* overflow: hidden; Убран скролл */
   scrollbar-width: none;
}

.container::-webkit-scrollbar {
  display: none; /* Для Chrome, Safari и Opera */
}

.slide-down-enter-active,
.slide-down-leave-active,
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease;
  height: 100vh;
}

.slide-down-enter-from {
  transform: translateY(100%);
}

.slide-down-enter-to {
  transform: translateY(0);
}

.slide-down-leave-from {
  transform: translateY(0);
}

.slide-down-leave-to {
  transform: translateY(-100%);
}

.slide-up-enter-from {
  transform: translateY(-100%);
}

.slide-up-enter-to {
  transform: translateY(0);
}

.slide-up-leave-from {
  transform: translateY(0);
}

.slide-up-leave-to {
  transform: translateY(100%);
}
</style>
