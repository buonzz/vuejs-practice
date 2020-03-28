<template>
  <div id="app">
    <router-link to="/home">Home</router-link>
    <router-link to="/posts">Posts</router-link>
    <router-link to="/contact">Contact</router-link>
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>

const default_layout = 'two-column-sidebar'

export default {
  name: 'App',
  computed : {
    layout (){
      return (this.$route.meta.layout || default_layout) + '-layout'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
