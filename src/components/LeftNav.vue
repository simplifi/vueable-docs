<template lang="pug">
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
</template>
