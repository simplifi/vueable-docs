<template lang="pug">
  #app
    .box
      nav.nav-list
        h1.nav-list--title Basics
        ul.nav-list--items
          li
            a.nav-list--item(href="#") Getting Started
          li
            a.nav-list--item(href="#") Layout
        h1.nav-list--title Components
        ul.nav-list--items
          li
            a.nav-list--item(href="/alert") Alerts
          li
            a.nav-list--item(href="#") Buttons
          li
            a.nav-list--item(href="#") Tables
    main.box
      router-view
</template>

<script>
export default {
  name: 'app'
}
</script>
