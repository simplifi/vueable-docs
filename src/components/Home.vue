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
