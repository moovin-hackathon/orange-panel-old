<template>
  <div class="nav">
    <b-nav vertical>
      <b-nav-item to="home">Início</b-nav-item>
      <b-nav-item href="#">Histórico</b-nav-item>
      <b-nav-item to="start">Questões</b-nav-item>
      <b-nav-item href="#">Discussões</b-nav-item>
      <b-nav-item href="#">Configurações</b-nav-item>
    </b-nav>
  </div>
</template>

<script>

</script>

<style scoped>
  .nav {
    position: relative;
    top: 0;
    height: 91.5vh;
    background: #333;
  }

  .nav a {
    color: #FFF;
  }

  .nav a:hover {
    color: #4169E1;
  }

  ul {
    margin-top: 25px;
    width: 200px;
  }

  li {
    padding: 10px;
  }
</style>
