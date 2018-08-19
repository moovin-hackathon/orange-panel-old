<template>
  <div class="form-group md-form">
    <label data-error="wrong" data-success="right">
      <span class="ds-block">{{ label }}</span>
      <slot/>
    </label>
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  label {
    text-align: left;
  }
</style>
