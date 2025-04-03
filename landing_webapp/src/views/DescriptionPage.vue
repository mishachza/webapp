<template>
  <div class="container" id="description-page">
    <div class="left-aligned">
      <h2>TG МАСТЕР</h2>
      <h3>Лучшие инструменты по генерации прибыли в Телеграм, которые позволяют привлечь к вашему продукту или услуге целевую аудиторию </h3>
    </div>

    <div class="center-aligned">
      <div class="column" id="column1">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
          <path fill="#FFC000" d="M7.4 17.25q-1.05.875-2.187.8t-1.988-.775t-1.162-1.837t.412-2.338L4.35 10q-.625-.55-.987-1.325T3 7q0-1.65 1.175-2.825T7 3t2.825 1.175T11 7T9.825 9.825T7 11q-.225 0-.45-.025t-.425-.075L4.2 14.15q-.275.45-.175.888t.425.712t.775.313t.875-.313l10.5-9.025q1.05-.875 2.2-.788t2 .788t1.15 1.838t-.425 2.337L19.65 14q.625.55.988 1.325T21 17q0 1.65-1.175 2.825T17 21t-2.825-1.175T13 17t1.175-2.825T17 13q.225 0 .438.025t.412.075l1.95-3.25q.275-.45.175-.888t-.425-.712t-.775-.312t-.875.312z"/>
        </svg>
        <h2>Автоматизация рутинных процессов</h2>
      </div>
      <div class="column" id="column2">
        <svg xmlns="http://www.w3.org/2000/svg" color="#FFC000" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11M7 13l1.5-1.5l2 2l5-5L17 10l-6.5 6.5z" clip-rule="evenodd"/></svg>        <h2>Комплексный подход</h2>
      </div>
      <div class="column" id="column3">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
          <path fill="#FFC000" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm-2.9-2.55l1.2-2.75q-1.05-.375-1.813-1.162T7.3 13.7l-2.75 1.15q.575 1.6 1.775 2.8t2.775 1.8ZM7.3 10.3q.425-1.05 1.188-1.837T10.3 7.3L9.15 4.55q-1.6.6-2.8 1.8t-1.8 2.8L7.3 10.3ZM12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Zm2.9 4.45q1.575-.6 2.763-1.787T19.45 14.9l-2.75-1.2q-.375 1.05-1.15 1.813t-1.8 1.187l1.15 2.75Zm1.8-9.2l2.75-1.15q-.6-1.575-1.788-2.762T14.9 4.55l-1.15 2.8q1.025.375 1.775 1.137T16.7 10.25Z"/>
        </svg>
        <h2>Полное сопровождение</h2>
      </div>
      <div class="column" id="column4">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
          <path fill="#FFC000" d="M11.298 2.195a2 2 0 0 1 1.232-.055l.172.055l7 2.625a2 2 0 0 1 1.291 1.708l.007.165v5.363a9 9 0 0 1-4.709 7.911l-.266.139l-3.354 1.677a1.5 1.5 0 0 1-1.198.062l-.144-.062l-3.354-1.677a9 9 0 0 1-4.97-7.75l-.005-.3V6.693a2 2 0 0 1 1.145-1.808l.153-.065l7-2.625Zm4.135 6.434l-4.598 4.598l-1.768-1.768a1 1 0 0 0-1.414 1.415l2.404 2.404a1.1 1.1 0 0 0 1.556 0l5.234-5.235a1 1 0 1 0-1.414-1.414Z"/>
        </svg>
        <h2>Безопасность</h2>
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
        setTimeout(showColumn, 800); // Показывает каждый элемент через 800 мс
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
  padding: 20px;
  width: 100%;
  font-family: "Roboto Condensed", Helvetica, Arial, sans-serif;
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
  margin: 5px;
  width: 100%;
  box-sizing: border-box;
  opacity: 0; 
  transform: scale(0.9);
  transition: opacity 0.5s, transform 0.5s;
}

.column.show {
  opacity: 1;
  transform: scale(1);
}

.column svg {
  width: 50px;
  height: 50px;
  margin: 20px;
}

/* Добавьте это для управления размерами элементов */
.center-aligned {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 85%;
  margin-bottom: 20px;
  justify-content: space-between;
  flex-grow: 1; /* Позволяет элементу занимать доступное пространство */
}

.left-aligned {
  text-align: left;
  margin-bottom: 10px;
  font-weight: 300;
  margin-top: 20px;
  width: 90%;
  flex-grow: 1; /* Позволяет элементу занимать доступное пространство */
}

</style>
