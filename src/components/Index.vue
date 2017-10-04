<template lang="pug">
  #app
    .box
      nav.nav-list
        h1.nav-list--title Basics
        ul.nav-list--items
          li
            router-link.nav-list--item(:to="{ name: 'home' }"
                                       active-class="nav-list--item-is-selected"
                                       exact)
              | Getting Started
          li
            a.nav-list--item(href="#") Layout
        h1.nav-list--title Components
        ul.nav-list--items
          li
            router-link.nav-list--item(:to="{ name: 'alert' }"
                                       active-class="nav-list--item-is-selected"
                                       exact)
              | Alerts
          li
            a.nav-list--item(href="#") Buttons
          li
            a.nav-list--item(href="#") Tables
    main.box
      router-view
</template>

<style lang="sass" scoped>
  #app
    display: flex
    min-height: 800px

  #app > div.box
    flex: 1 1 20%

  #app > main.box
    flex: 1 2 80%
</style>

