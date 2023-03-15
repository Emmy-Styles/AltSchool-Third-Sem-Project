<template>
  <NavBar />
  <RouterView></RouterView>
</template>

<script>
import NavBar from './components/Nav/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}
</style>
