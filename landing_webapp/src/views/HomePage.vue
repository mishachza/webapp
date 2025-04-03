<template>
    <div class="column">
      <div class="top-content">
        <div class="logo-block">
          {{ text1 }}
        </div>
        <div class="text-block">
          {{ text2 }}
        </div>
      </div>
      <img :src="imageUrl" alt="Изображение" class="image">
      
      <div class="bottom-content">
        <button @click="openLink" class="yellow-button">{{ buttonText }}</button>
        <svg xmlns="http://www.w3.org/2000/svg" color="white" width="40" height="40" viewBox="0 0 20 20" class="arrow-down-svg">
          <path fill="currentColor" fill-rule="evenodd" d="M16.707 10.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 1.414-1.414L9 14.586V3a1 1 0 0 1 2 0v11.586l4.293-4.293a1 1 0 0 1 1.414 0Z" clip-rule="evenodd"/>
        </svg>
      </div>
    </div>
</template>
  
  <script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import telegramImage from '@/assets/telegram.png'
    import patternSvg from '@/assets/pattern.svg';

    
    const router = useRouter()
    
    const text1 = ref('TG МАСТЕР')
    const text2 = ref('УНИВЕРСАЛЬНОЕ РЕШЕНИЕ ДЛЯ ОНЛАЙН РЕКЛАМЫ ВАШИХ ПРОДУКТОВ')
    const buttonText = ref('СВЯЗАТЬСЯ')
    const imageUrl = ref(telegramImage)
    function openLink() {
      window.open('https://t.me/am4I4I');
    }
    
  </script>
  
  
  <style scoped>
.column {
  width: 100%;
  max-width: 100%;
  height: 100vh;
  display: flex;
  padding: 25px;
  align-items: center;
  font-family: "Roboto Condensed", Helvetica, Arial, sans-serif;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  background-color: #101010;
  background-image: url('@/assets/pattern.svg');
  background-size: cover; /* Установите размер фона */
  background-position: center; /* Установите позицию фона */
  background-repeat: no-repeat; /* Установите повторение фона */
  overflow-y: hidden;
  overflow-x: hidden;
  box-sizing: border-box;
}

.top-content {      
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-top: 20px;
}

.logo-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #FFC000;
  font-size: 50px;
  font-weight: 500;
  width: 100%;
  margin-bottom: 30px;
}

.text-block {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 19px;
  font-weight: 400;
  width: 100%;
  font-family: "Roboto Condensed", Helvetica, Arial, sans-serif;
}

.image {
  width: 300px;
  height: auto;
  margin: 20px 0; /* Добавлено для отступа между изображением и текстом/кнопкой */
}

.yellow-button {
  background-color: #FFC000;
  color: #000000;
  font-family: "Roboto";
  font-size: 22px;
  font-weight: bold;
  height: 61px;
  width: 100%;
  margin: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

.bottom-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.arrow-down-svg {
  margin: 25px;
  animation: move-up-down 2s infinite;
}

@keyframes move-up-down {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>