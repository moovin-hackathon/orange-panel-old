<template>
  <div>
      <div class="row justify-content-center">
        <div class="align col-3">
          <div class="title">
            <h3><strong>Acertos</strong></h3>
          </div>
          <div class="result correct">
            <h3>10</h3>
          </div>
        </div>
        <div class="align col-3">
          <div class="title">
            <h3><strong>Erros</strong></h3>
          </div>
          <div class="result error">
            <h3>10</h3>
          </div>
        </div>
        <div class="align col-3">
          <div class="title">
            <h3><strong>Tempo</strong></h3>
          </div>
          <div class="result">
            <h3>10</h3>
          </div>
        </div>
        <div class="align col-3">
          <div class="title">
            <h3><strong>Nota/Média</strong></h3>
          </div>
          <div class="result">
            <h3>10</h3>
          </div>
        </div>
      </div>
      <button class="btn btn-primary float-right" type="button">Refazer</button>
  </div>
</template>

<script>
  export default {
      name: "FinishQuiz"
  }
</script>

<style scoped>
  .align {
    text-align: center;
    background-color: #8aa5f7;
    border: 2px solid #CCC;
    border-radius: 5px;
    height: 250px;
    margin-top: 100px;
    margin-right: 15px;
  }

  .title {
    margin-top: 25px;
  }

  .result {
    margin-top: 50px;
  }

  .correct {
    color: green;
  }

  .error {
    color: #de0d0d;
  }

  button {
    margin-right: 225px;
  }
</style>
