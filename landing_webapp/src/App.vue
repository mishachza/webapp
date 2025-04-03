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
    AboutPage,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

html, body { 
  font-family: "Roboto Condensed", sans-serif; 
}

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
</style>
