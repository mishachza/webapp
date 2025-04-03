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
const onTouchMove = (event) => {
  const currentRoute = router.currentRoute.value.name;

  const deltaY = event.touches[0].clientY - touchStartY;

  // Проверка на первую страницу
  if (currentRoute === 'home' && deltaY < 0) {
    return; // Не двигаем страницу вверх на первой странице
  }

  // Проверка на последнюю страницу
  if (currentRoute === 'about' && deltaY > 0) {
    return; // Не двигаем страницу вниз на последней странице
  }

  scrollDelta += deltaY;

  if (deltaY < 0) {
    transitionName.value = 'slide-up'; // Перелистывание вверх
  } else {
    transitionName.value = 'slide-down'; // Перелистывание вниз
  }

  if (Math.abs(scrollDelta) > 500) {
    exceededThreshold.value = true;
  }

  document.querySelector('.container').style.transform = `translateY(${deltaY}px)`;
};

const onTouchEnd = () => {
  isTouching.value = false;

  if (exceededThreshold.value && Math.abs(scrollDelta) > 500) {
    const currentRoute = router.currentRoute.value.name;

    if (currentRoute === 'home' && scrollDelta < 0) {
      return; // Не переходим на предыдущую страницу с первой
    }

    if (currentRoute === 'about' && scrollDelta > 0) {
      return; // Не переходим на следующую страницу с последней
    }

    if (scrollDelta < 0) {
      navigateToNextPage();
    } else if (scrollDelta > 0) {
      navigateToPrevPage();
    }
    scrollDelta = 0;
  } else {
    document.querySelector('.container').style.transform = '';
    scrollDelta = 0;
  }
};

const onWheel = (event) => {
  const currentRoute = router.currentRoute.value.name;

  const delta = event.deltaY;

  // Проверка на первую страницу
  if (currentRoute === 'home' && delta < 0) {
    return; // Не двигаем страницу вверх на первой странице
  }

  // Проверка на последнюю страницу
  if (currentRoute === 'about' && delta > 0) {
    return; // Не двигаем страницу вниз на последней странице
  }

  scrollDelta += delta;

  if (delta < 0) {
    transitionName.value = 'slide-up'; // Перелистывание вверх
  } else {
    transitionName.value = 'slide-down'; // Перелистывание вниз
  }

  if (Math.abs(scrollDelta) > 500) {
    exceededThreshold.value = true;
  }

  if (exceededThreshold.value && Math.abs(scrollDelta) > 500) {
    clearTimeout(timeoutId); // Очистите предыдущий таймаут, если есть
    timeoutId = setTimeout(() => {
      if (currentRoute === 'home' && scrollDelta < 0) {
        return; // Не переходим на предыдущую страницу с первой
      }

      if (currentRoute === 'about' && scrollDelta > 0) {
        return; // Не переходим на следующую страницу с последней
      }

      if (scrollDelta < 0) {
        navigateToNextPage();
      } else if (scrollDelta > 0) {
        navigateToPrevPage();
      }
      scrollDelta = 0;
    }, 200); // Задержка в 200 мс
  }
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
