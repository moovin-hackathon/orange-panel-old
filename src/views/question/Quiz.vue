<template>
  <div class="row justify-content-center">

    <div class="container col-md-7">

      <div class="title"><strong>HISTORIA</strong></div>
      <div class="question">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique erat scelerisque nulla condimentum, vel dapibus turpis sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam rhoncus nunc sit amet elementum dictum. Mauris vulputate tortor sit amet leo vulputate pellentesque. Maecenas eget magna tortor. Suspendisse consequat malesuada ante ac facilisis. Maecenas vehicula sodales ipsum sed eleifend. Cras porta tristique urna, ut condimentum risus sodales non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla et nibh non mauris elementum aliquet eu a turpis. Nam lacinia pulvinar eleifend. Cras eu mauris convallis, congue leo vel, ornare dui. Morbi ullamcorper non est facilisis finibus.
      </div>
      <div class="answer">
        <b-form-group label="Resposta">
          <b-form-radio-group id="radios1" v-model="answer" :options="answers" name="radioOpenions"/>
        </b-form-group>
      </div>

      <button class="btn btn-primary float-right" type="button">Próxima</button>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      answer: null,
      answers: [
        {text: 'Nullam quis lorem et massa laoreet accumsan eu vitae ex. Integer dignissim elementum metus, eget porttitor n', value: 1},
        {text: 'Et massa laoreet accumsan eu vi Nullam quis lorem tae ex. Integer dignissim elementum metus, eget porttitor n', value: 2},
        {text: 'Massa laoreet accu Nullam quis lorem et msan eu vitae ex. Integer dignissim elementum metus, eget porttitor n', value: 3},
        {text: 'Wu vitae ex. IntegeNullam quis lorem et massa laoreet accumsanr dignissim elementum metus, eget porttitor n', value: 4},
      ]
    })
  }
</script>

<style scoped>
  .container {
    margin-top: 50px;
    background-color: #d9edf7;
    padding: 0 25px 15px;
  }

  .title {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 50px;
    font-size: 25px;
  }

  .answer {
    margin-top: 25px;
  }

</style>
