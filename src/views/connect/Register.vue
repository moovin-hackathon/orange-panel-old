<template>
  <div class="row justify-content-center">
    <div class="col-2 box">
      <b-tabs>
        <b-tab title="Cadastrar-se" active>
          <b-form-input v-model="name" type="text" placeholder="Digite seu nome"></b-form-input>
          <b-form-input v-model="email" type="text" placeholder="Digite seu email"></b-form-input>
          <b-form-input v-model="password" type="password" placeholder="Digite sua senha"></b-form-input>
        </b-tab>
        <b-tab title="Entrar">
          <b-form-input v-model="LoginEmail" type="text" placeholder="Email"></b-form-input>
          <b-form-input v-model="LoginPassword" type="password" placeholder="Senha"></b-form-input>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      name: '',
      email: '',
      password: null,
      loginEmail: '',
      LoginPassword: null
    })
  }
</script>

<style scoped>
  .box {
    border: 1px solid #988c8c;
    margin-top: 150px;
    height: 350px;
  }

  input {
    margin-top: 45px;
    width: 200px;
    margin-left: 40px;
  }
</style>
