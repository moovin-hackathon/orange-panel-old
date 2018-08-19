<template>
  <div class="row setup-content-3" id="step-6" v-show="show">
    <div class="col-md-12">
      <h3 class="font-weight-bold pl-0 my-4"><strong>{{ title }}</strong></h3>

      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      show: true
    }),
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
