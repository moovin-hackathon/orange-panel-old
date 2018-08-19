<template>
    <div>
      <b-navbar toggleable="md" type="dark" class="menuTopBar">

        <b-collapse is-nav id="nav_collapse">

          <b-navbar-nav class="ml-auto">

            <b-nav-item-dropdown right>
              <template slot="button-content">
                <span>User</span>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>
    </div>
</template>

<script>

</script>

<style scoped>
  .menuTopBar {
    background-color: #4169E1;
  }
  li {
    padding-right: 45px;
  }

</style>
