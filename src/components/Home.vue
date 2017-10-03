<template lang="pug">
  div
    h1 {{ msg }}
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Vueable Component Library - Getting Started'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
