<template>
  <div>
    <div class="row">
      <div class="col-4 result-box">
        <div class="title">
          <h3><Strong>Acertos</Strong></h3>
        </div>
        <div class="result correct">
          <h3>10</h3>
        </div>
      </div>
      <div class="col-4 result-box">
        <div class="title">
          <h3><Strong>Erros</Strong></h3>
        </div>
        <div class="result error">
          <h3>10</h3>
        </div>
      </div>
      <div class="col-4 result-box">
        <div class="title">
          <h3><Strong>Evolução</Strong></h3>
        </div>
        <div class="result">
          <h3>10</h3>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-4 result-box">
        <div class="title">
          <h3><Strong>Nota Média</Strong></h3>
        </div>
        <div class="result">
          <h3>10</h3>
        </div>
      </div>
      <div class="col-4 result-box">
        <div class="title">
          <h3><Strong>Matéria Favorita</Strong></h3>
        </div>
        <div class="result">
          <h3>10</h3>
        </div>
      </div>
      <div class="col-4 result-box">
        <div class="title">
          <h3><Strong>Matéria com Dificuldade</Strong></h3>
        </div>
        <div class="result">
          <h3>10</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .result-box {
    text-align: center;
    border: 2px solid #CCC;
    border-radius: 8px;
    padding: 25px 15px 25px 15px;
    height: 270px;
    background-color: #8aa5f7;
    margin-top: 80px;
    width: 150px;
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
</style>
