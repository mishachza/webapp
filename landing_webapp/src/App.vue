<template>
  <div id="app">
    <div class="container" @touchstart.passive="onTouchStart" @touchmove.passive="onTouchMove" @touchend.passive="onTouchEnd" @wheel.passive="onWheel">
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
let touchStartY = 0;
const transitionName = ref('slide-down');
const isTouching = ref(false);
const exceededThreshold = ref(false);

const onTouchStart = (event) => {
  touchStartY = event.touches[0].clientY;
  isTouching.value = true;
  exceededThreshold.value = false;
};

const onTouchMove = (event) => {
  const deltaY = event.touches[0].clientY - touchStartY;

  scrollDelta += deltaY;

  if (deltaY > 0) {
    transitionName.value = 'slide-up';
  } else {
    transitionName.value = 'slide-down';
  }

  if (Math.abs(scrollDelta) > 500) {
    exceededThreshold.value = true;
  }

  document.querySelector('.container').style.transform = `translateY(${deltaY}px)`;
};

const onTouchEnd = () => {
  isTouching.value = false;

  if (exceededThreshold.value && Math.abs(scrollDelta) > 500) {
    if (scrollDelta > 500) {
      navigateToPrevPage();
    } else if (scrollDelta < -500) {
      navigateToNextPage();
    }
    scrollDelta = 0;
  } else {
    document.querySelector('.container').style.transform = '';
    scrollDelta = 0;
  }
};

const onWheel = (event) => {
  const delta = event.deltaY;

  scrollDelta += delta;

  if (delta > 0) {
    transitionName.value = 'slide-down';
  } else {
    transitionName.value = 'slide-up';
  }

  if (Math.abs(scrollDelta) > 500) {
    exceededThreshold.value = true;
  }

  if (exceededThreshold.value && Math.abs(scrollDelta) > 500) {
    clearTimeout(timeoutId); // Очистите предыдущий таймаут, если есть
    timeoutId = setTimeout(() => {
      if (scrollDelta > 500) {
        navigateToNextPage();
      } else if (scrollDelta < -500) {
        navigateToPrevPage();
      }
      scrollDelta = 0;
    }, 200); // Задержка в 200 мс
  }
};

let timeoutId;

const navigateToNextPage = () => {
  const currentRoute = router.currentRoute.value.name;

  let nextRoute;
  if (currentRoute === 'home') {
    nextRoute = 'description';
  } else if (currentRoute === 'description') {
    nextRoute = 'about';
  }

  router.push({ name: nextRoute });
};

const navigateToPrevPage = () => {
  const currentRoute = router.currentRoute.value.name;

  let prevRoute;
  if (currentRoute === 'home') {
    return;
  } else if (currentRoute === 'description') {
    prevRoute = 'home';
  } else {
    prevRoute = 'description';
  }

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
   overflow: hidden; 
   scrollbar-width: none;
}

.container {
  transition: transform 0.5s ease;
}


.container::-webkit-scrollbar {
  display: none; /* Для Chrome, Safari и Opera */
}

.fake-slide {
  transform: translateY(100%);
  transition: transform 0.5s ease;
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
