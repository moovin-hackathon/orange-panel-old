<template>
  <div>
    <div class="row" v-if="isHome">
      <div class="col-12">
        <menu-top-bar/>
      </div>
    </div>

    <div class="row">
      <div class="col-1" v-if="isHome">
        <menu-side-bar/>
      </div>

      <div class="col-11">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import MenuTopBar from '@/components/template/MenuTopBar'
import MenuSideBar from '@/components/template/MenuSideBar'

export default {
  computed: {
    isHome() {
      return this.$router.currentRoute.name !== 'register'
    },
  },
  components: {
    MenuTopBar,
    MenuSideBar
  }
}
</script>

<style scoped>
  .content {
    margin: 20px 0
  }
</style>
