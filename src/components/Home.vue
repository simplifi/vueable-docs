<template lang="pug">
  div
    h1.heading-1 Vueable Component Library
    h1.heading-2 Introduction
    p.
      Vueable is a lightweight component library designed to be composable, simple to configure, and easy to integrate
      into existing apps.
    p.
      It takes inspiration from Element, Quasar, and Blueprint (React). As a work in progress, it is not comprehensive
      or even terribly original in its component list. But if you need a basic set of components for simple UIs, Vueable
      may be a good fit.

    h1.heading-2 Guiding Principles
    h1.heading-3 Plug and Play
    p.
      You shouldn't have to do anything special in order to use the components (such as wrap your app
      in a special tag). Using the components should only require you to install them as a plugin via:
    .box.box-neutral.box-code
      pre
        code.
          // main.js
          import Vueable, * as components from 'vueable' // or individually as you wish
          Vue.use(Vueable, { components })
    p.
      For more granular control, you can import components by name directly instead of installing it as a plugin, such as:
    .box.box-neutral.box-code
      pre
        code.
          &lt;!-- App.vue --&gt;
          &lt;script&gt;
          import { Alert } from 'vueable'
          export default {
            components: {
              'vu-alert': Alert
            }
          }
          &lt;/script&gt;

    h1.heading-3 Composability Over Configuration
    p.
      Components are designed towards composability over configuration. Each component should be focused solving a small
      distinct problem. Advanced components may be introduced in the future that apply the principle of composability to
      achieve more complex behaviors, but for now the idea is: "Do one thing, and do it well."

    h1.heading-3 Naked Components
    p.
      Vueable starts with the premise that individual components are pure html and javascript. Inline styling is not
      allowed, nor will you find any #[code &lt;style&gt;] tags in the single file components. There #[i is] a very
      minimal css normalize applied so that we can assume certain basic environmental conditions about the browser we're
      rendering in, but aside from that we expect the components to render in a more or less plain vanilla way. From
      that starting point Vueable applies an optional default stylesheet to the components, so that they look nice. You
      are welcome to use this, to customize it, or to throw it out completely and use your own. (Just don't forget to do
      the same normalize that we do with the default stylesheet.)

    h1.heading-3 Themeability
    p.
      The HTML/Javascript and CSS are built and maintained separately. (Yes, there are two separate builds.) The
      stylesheet is then applied to the components by way of CSS class names. That is the only touchpoint. The benefit
      is that we have to do the same work you have to do if you were to style the components from scratch. It makes us
      really think about what we're doing, but it also makes theming a lot easier.
    p.
      Components do assume certain classes will be made available by the stylesheet of your app in order to look right.
      But "right" by our definition and "right" by yours are probably different. So what we do is allow you to inject
      your own SASS right into the stylesheet. You can change anything about the stylesheet you want from colors, to
      margin &amp; padding, to fonts and beyond. We show you how to do this in the theming section of the guide. For
      those who want to just get started with the library's default styling all you need to do is include the default
      stylesheet in your App.vue:
    .box.box-neutral.box-code
      pre
        code.
          &lt;!-- App.vue --&gt;
          &lt;style&gt;
            @import 'vueable/dist/production/default.css';
          &lt;/style&gt;

    h1.heading-3 Desktop Over Mobile
    p.
      If you're building a mobile app, we may not wind up being the best fit for you. At least while this project is
      young the core contributor's focus is on building applications specifically designed for the desktop so our
      default stylesheet may or may not work for you.
    p.
      Our hope is that with community support that we'll be able to provide a good story to the mobile experience, but
      right now that is just not the focus. Having said that, if you like the core components but just need some styling
      please open an issue or a PR. We're happy to have help in this direction.

    h1.heading-2 A Simple Big Picture Example
    p.
      To get going with Vueable, all you need to do is import the library and include the stylesheet:
    .box.box-neutral.box-code
      pre
        code.
          // main.js
          import 'vueable/dist/production/default.css' // or include me in the style tag of your App.vue
          import Vue from 'vue'
          import Vueable, * as components from 'vueable'

          Vue.use(Vueable, { components })

          new Vue({
            el: '#app',
            render: h => h(App),
            router
          })

    h1.heading-2 Summary
    p.
      We absolutely love Vue.js and hope in this guide we do a good job of explaining what the Vueable library does, so
      that you can more easily get going with Vue. We also welcome PRs and Issues on GitHub and want to work with others
      to create a library that is truly useful. Please let us know how we are doing.

</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
