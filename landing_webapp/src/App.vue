<template>
  <div>
    <div id="home-page">
      <HomePage />
    </div>
    <div id="description-page">
      <DescriptionPage />
    </div>
    <div id="about-page">
      <AboutPage />
    </div>
  </div>
</template>

<script>
import HomePage from './views/HomePage.vue';
import DescriptionPage from './views/DescriptionPage.vue';
import AboutPage from './views/AboutPage.vue';

export default {
  components: {
    HomePage,
    DescriptionPage,
    AboutPage
  },
  data() {
    return {
      lastScrollPosition: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const homePage = document.getElementById('home-page');
      const descriptionPage = document.getElementById('description-page');
      const aboutPage = document.getElementById('about-page');

      if (!homePage || !descriptionPage || !aboutPage) {
        console.error('Элементы не найдены');
        return;
      }

      const rectHome = homePage.getBoundingClientRect();
      const rectDescription = descriptionPage.getBoundingClientRect();
      const rectAbout = aboutPage.getBoundingClientRect();

      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > this.lastScrollPosition) {
        // Прокрутка вниз
        if (rectDescription.top < window.innerHeight * 0.6 && rectDescription.bottom > window.innerHeight * 0.4) {
          aboutPage.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Прокрутка вверх
        if (rectDescription.top < window.innerHeight && rectDescription.bottom > 0) {
          if (rectDescription.top > window.innerHeight / 2) {
            homePage.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }

      this.lastScrollPosition = currentScrollPosition;
    }
  }
}

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
