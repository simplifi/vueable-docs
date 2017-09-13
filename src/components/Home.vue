<template>
  <div>
    <h1>{{ msg }}</h1>
    <alert title='test' :showIcon='true' description='This is a test alert' :closeable='true'></alert>
  </div>
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
