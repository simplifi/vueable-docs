<template lang="pug">
  #app
    .vu-l-row.vu-l-row-filled.vu-l-row-collapsed
      .vu-l-col-4
        .box.box-filled
          nav.nav-list
            h1.nav-list--title Basics
            ul.nav-list--items
              li
                router-link.nav-list--item(:to="{ name: 'index' }"
                                           active-class="nav-list--item-is-selected"
                                           :exact="true")
                  | Getting Started
              li
                a.nav-list--item(href="#") Layout
            h1.nav-list--title Components
            ul.nav-list--items
              li
                router-link.nav-list--item(:to="{ name: 'alert' }"
                                           active-class="nav-list--item-is-selected"
                                           :exact="true")
                  | Alerts
              li
                a.nav-list--item(href="#") Buttons
              li
                a.nav-list--item(href="#") Tables
      .vu-l-col-12
        main.box.box-filled.box-adjacent
          router-view
</template>

<script>
export default {
  name: 'app'
}
</script>
