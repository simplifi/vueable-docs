<template lang="pug">
  #app
    .vu-l-row.vu-l-row-filled.vu-l-row-collapsed
      .vu-l-col-4
        .box.box-filled
          left-navigation
      .vu-l-col-12
        main.box.box-filled.box-adjacent
          router-view
</template>
<script>
  import LeftNav from './LeftNav.vue'
  export default {
    components: {
      'left-navigation': LeftNav
    }
  }
</script>
