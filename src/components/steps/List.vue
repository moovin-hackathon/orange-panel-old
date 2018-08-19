<template>
  <div>
    <slot/>
  </div>
</template>

<script>
  export default {
    async mounted () {
      for (let i in this.$slots['default']) {
        this.$slots['default'][i].show = false
      }
    }
  }
</script>

<style scoped>

</style>
