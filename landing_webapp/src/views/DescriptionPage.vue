<template>
  <div class="container" id="description-page">
    <div class="center-aligned">
      <div class="column" id="column1">
        <svg xmlns="http://www.w3.org/2000/svg" color="#FFC000"  width="48" height="48" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.928 10.53q.813.75 1.542 1.542l5.846.836a22 22 0 0 1 2.184 5.267l-3.555 4.733s.064 1.456 0 2.184l3.555 4.733a22 22 0 0 1-2.184 5.268l-5.846.835s-1.007 1.05-1.542 1.542l-.835 5.846a22 22 0 0 1-5.268 2.184l-4.733-3.555q-1.092.097-2.184 0L18.175 45.5a22 22 0 0 1-5.268-2.184l-.835-5.846a39 39 0 0 1-1.542-1.542l-5.846-.835A22 22 0 0 1 2.5 29.825l3.555-4.733s-.065-1.456 0-2.184L2.5 18.175a22 22 0 0 1 2.184-5.268l5.846-.835q.75-.792 1.542-1.542l.835-5.846A22 22 0 0 1 18.175 2.5l4.733 3.555a12.4 12.4 0 0 1 2.184 0L29.825 2.5a22 22 0 0 1 5.268 2.184z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.566 14.339l-9.8 9.8h10.469l-9.523 9.522"/></svg>        
        <h2>АВТОМАТИЗАЦИЯ РУТИННЫХ ПРОЦЕССОВ</h2>
      </div>
      <div class="column" id="column2">
        <svg xmlns="http://www.w3.org/2000/svg" color="#FFC000" width="48" height="48" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.791 32.92H13.766c-3.058-.092-4.635-.947-6.196-3.502l-2.977-5.191L14.319 7.24l4.469-.045m8.054 4.133L36.855 28.67c1.45 2.695 1.498 4.488.065 7.117l-3.007 5.174l-19.573.069l-2.273-3.847m-.448-9.042L21.63 10.8c1.609-2.603 3.138-3.541 6.13-3.615l5.985.017l9.846 16.917l-2.194 3.892"/></svg>        
        <h2>КОМПЛЕКСНЫЙ ПОДХОД</h2>
      </div>
      <div class="column" id="column3">
        <svg xmlns="http://www.w3.org/2000/svg" color="#FFC000" width="48" height="48" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.112 25.656a13.03 13.03 0 0 1 6.444-11.228a12.69 12.69 0 0 1 12.888 0a13.03 13.03 0 0 1 6.444 11.228"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.183 25.656a17.85 17.85 0 0 1 8.104-15.133a15.18 15.18 0 0 1 16.207 0a17.85 17.85 0 0 1 8.104 15.133"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.95 22.239a2.21 2.21 0 0 1-2.246 2.245h0a2.21 2.21 0 0 1-2.245-2.245h0a2.21 2.21 0 0 1 2.245-2.246h0a2.27 2.27 0 0 1 2.246 2.246m9.568 0a2.21 2.21 0 0 1-2.246 2.245h0a2.21 2.21 0 0 1-2.245-2.245h0a2.21 2.21 0 0 1 2.245-2.246h0a2.21 2.21 0 0 1 2.246 2.246M24 31.053c2.043-2.043 8.434 3.341 14.169 3.341c3.603 0 4.967-4.394 4.967-4.394s3.327 9.82-10.14 9.82A9.94 9.94 0 0 1 24 34.785a9.94 9.94 0 0 1-8.995 5.036C1.537 39.82 4.864 30 4.864 30s1.364 4.394 4.967 4.394c5.736 0 12.126-5.384 14.169-3.341"/></svg>
        <h2>ПОЛНОЕ СОПРОВОЖДЕНИЕ</h2>
      </div>
      <div class="column" id="column4">
        <svg xmlns="http://www.w3.org/2000/svg" color="#FFC000" width="48" height="48" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.5c1.693 0 15.274-7.782 15.274-16.966V6.504C35.267 6.503 24 4.5 24 4.5S12.723 6.503 8.727 6.503v20.03C8.727 35.719 22.307 43.5 24 43.5"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.705 27.637c1.043 1.357 2.35 1.863 4.169 1.863h2.516a4.24 4.24 0 0 0 4.241-4.24v-.02a4.24 4.24 0 0 0-4.24-4.24h-2.777a4.245 4.245 0 0 1-4.245-4.245h0a4.255 4.255 0 0 1 4.254-4.255h2.503c1.82 0 3.126.506 4.169 1.863"/></svg>
        <h2>БЕЗОПАСНОСТЬ</h2>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  mounted() {
    const columns = document.querySelectorAll('.column');
    let index = 0;

    function showColumn() {
      if (index < columns.length) {
        columns[index].classList.add('show');
        index++;
        setTimeout(showColumn, 800);
      }
    }

    showColumn();
  }
}

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Центрирование по вертикали */
  width: 100%;
  height: 100vh;
  background-color: #131313;
  overflow-y: auto; /* Позволяет появиться полосе прокрутки */
  overflow-x: hidden;
  box-sizing: border-box;
}

.column {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  margin: 35px 0; /* Расстояние между строками */
  width: 100%;
  box-sizing: border-box;
  opacity: 0; 
  transform: scale(0.9);
  transition: opacity 0.5s, transform 0.5s;
  font-size: 16px;
  font-weight: 300;
  font-family: "Roboto Condensed", Helvetica, Arial, sans-serif;
}

.column.show {
  opacity: 1;
  /* transform: scale(1); */
}

.column svg {
  width: 50px;
  height: 50px;
  margin-right: 15px;
}

/* Добавьте это для управления размерами элементов */
.center-aligned {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 90%;
  justify-content: space-between;
}
</style>
