<template>
  <div class="row">
    <div class="col-6">
      <div class="btn-challenger">
        <router-link to="quiz">Desafio</router-link>
      </div>
    </div>
    <div class="col-6">
      <div class="btn-challenger">
          <router-link to="personalize">Personalizar</router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
  .btn-challenger {
    background: #8aa5f7;
    text-align: center;
    padding: 100px;
    margin: 100px 50px 0 50px;
    cursor: pointer;
    border: 2px solid #ccc;
    border-radius: 5px;
    color: #FFF;
    font-size: 30px;
  }
</style>
