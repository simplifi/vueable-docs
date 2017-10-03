<template lang="pug">
  div
    h1 {{ msg }}
    ul
      li
        a(href='/alert') Alert
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Vueable Component Library'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
