<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li><router-link to='/first'>路由first</router-link></li>
      <li><router-link to='/second'>路由second</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
