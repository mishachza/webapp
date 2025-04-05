<template>
  <div class="main">
    <div class="column">
      <div class="top-content">
        <!-- <div class="image-bottom"></div> -->
        
        <div class="logo-block">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 32 32"><path fill="currentColor" d="M26.07 3.996a2.974 2.974 0 0 0-.933.223h-.004c-.285.113-1.64.683-3.7 1.547l-7.382 3.109c-5.297 2.23-10.504 4.426-10.504 4.426l.062-.024s-.359.118-.734.375a2.03 2.03 0 0 0-.586.567c-.184.27-.332.683-.277 1.11c.09.722.558 1.155.894 1.394c.34.242.664.355.664.355h.008l4.883 1.645c.219.703 1.488 4.875 1.793 5.836c.18.574.355.933.574 1.207c.106.14.23.257.379.351a1.119 1.119 0 0 0 .246.106l-.05-.012c.015.004.027.016.038.02c.04.011.067.015.118.023c.773.234 1.394-.246 1.394-.246l.035-.028l2.883-2.625l4.832 3.707l.11.047c1.007.442 2.027.196 2.566-.238c.543-.437.754-.996.754-.996l.035-.09l3.734-19.129c.106-.472.133-.914.016-1.343a1.807 1.807 0 0 0-.781-1.047a1.872 1.872 0 0 0-1.067-.27zm-.101 2.05c-.004.063.008.056-.02.177v.011l-3.699 18.93c-.016.027-.043.086-.117.145c-.078.062-.14.101-.465-.028l-5.91-4.531l-3.57 3.254l.75-4.79l9.656-9c.398-.37.265-.448.265-.448c.028-.454-.601-.133-.601-.133l-12.176 7.543l-.004-.02l-5.836-1.965v-.004l-.015-.003a.27.27 0 0 0 .03-.012l.032-.016l.031-.011s5.211-2.196 10.508-4.426c2.652-1.117 5.324-2.242 7.379-3.11a807.312 807.312 0 0 1 3.66-1.53c.082-.032.043-.032.102-.032z"/></svg>
          {{ text1 }}
        </div>

        <div class="text-block">
          {{ text2 }} <br>
          <!-- {{ text3 }} -->
        </div>

        <img :src="imageUrl" alt="Изображение" class="image">


        <button @click="openLink" class="yellow-button">{{ buttonText }}</button>

        <div class="text-block2">
          {{ text4 }}
          <span class="yellow-text">{{ text5 }}</span> 
          {{ text6 }}
        </div>

      </div>

      <div class="bottom-content">



        <svg xmlns="http://www.w3.org/2000/svg" color="white" width="40" height="40" viewBox="0 0 20 20" class="arrow-down-svg">
          <path fill="currentColor" fill-rule="evenodd" d="M16.707 10.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 1.414-1.414L9 14.586V3a1 1 0 0 1 2 0v11.586l4.293-4.293a1 1 0 0 1 1.414 0Z" clip-rule="evenodd"/>
        </svg>

      </div>

    </div>
  </div>

</template>
  
  <script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import startImage from '@/assets/property.svg'

    const router = useRouter()
    
    const text1 = ref('TG МАСТЕР')
    const text2 = ref('УНИВЕРСАЛЬНОЕ РЕШЕНИЕ ДЛЯ ОНЛАЙН РЕКЛАМЫ ВАШИХ ПРОДУКТОВ')
    const text3 = ref('для онлайн рекламы ваших продуктов')
    const text4 = ref('Лучшие инструменты по генерации прибыли в Телеграм, которые позволяют привлечь к вашему продукту или услуге')
    const text5 = ref('ЦЕЛЕВУЮ АУДИТОРИЮ')
    const text6 = ref('')
    // const text2 = ref('УНИВЕРСАЛЬНОЕ РЕШЕНИЕ ДЛЯ ОНЛАЙН РЕКЛАМЫ ВАШИХ ПРОДУКТОВ')
    const buttonText = ref('СВЯЗАТЬСЯ')
    const imageUrl = ref(startImage)
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
}

.top-content img {
  width: 70%;
  margin-bottom: 25px;
}

.logo-block {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; /* Центрирование по горизонтали */
  text-align: center;
  color: #ffffff;
  font-size: 300%;
  font-weight: bold;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 30px;
}

.logo-block svg {
  margin-right: 10px;
}

.text-block {
  display: flex;
  flex-direction: column;
  /* text-align: left; */
  font-size: 14px;
  font-weight: 300;
  width: 100%;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  /* margin-left: 60px; */
  margin-bottom: 25px;

}

.text-block2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Выравнивание по левому краю */
  text-align: left;
  margin-left: 40px;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 300;
  width: 90%;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  padding-left: 20px;
  border-left: 5px solid #FFC000;
}

.yellow-text {
  color: #FFC000; /* Желтый цвет */
  font-weight: 400;
}

.yellow-button {
  background-color: #FFC000;
  color: #000000;
  font-family: "Roboto";
  font-size: 22px;
  font-weight: bold;
  height: 61px;
  width: 100%;
  margin: 16px;
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

.bottom-content img {
  width: 100%;
}

.arrow-down-svg {
  animation: move-up-down 2s infinite;
}

.image-bottom {
  width: 100%; /* Ширина элемента */
  height: 240px; /* Высота элемента */
  background-image: url('@/assets/social2.jpeg');
  background-size: cover; /* Изображение должно заполнить весь элемент */
  background-position: center; /* Позиция изображения */
  background-repeat: no-repeat; /* Изображение не должно повторяться */
  margin-top: 30px;
  border-radius: 25px; /* Закругленные углы */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  opacity: 90%;
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