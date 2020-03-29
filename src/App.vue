<template>
  <div id="app">
    <div class="container">
      <Breadcrumb />
      <router-view/>
    </div>
  </div>
</template>
<script>
import Breadcrumb from './components/Breadcrumb'
export default {
  components: {
    Breadcrumb,
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
