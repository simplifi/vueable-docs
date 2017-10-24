<template lang="pug">
  div
    h1 Alerts
    p.
      Use alerts to provide users with a highly visible message. You can specify the type
      of alert with the #[code type] property. When omitted, the default Alert type is rendered.
      Available #[code type] values include: #[code success], #[code warning], #[code error]
      and #[code info]. The optional #[code title] property sets a heading for your alert messages,
      while the #[code description] sets the body content. If you pass an array instead of a string
      as the #[code description] the component will render an unordered list of items.
      You can override the default list rendering by passing slot content to the component.
    .box.box-neutral.box-padded
      alert(title="This is a Default Alert")
      alert(title="Success" description="Your operation was greeted with success" type="success")
      alert(title="Warning Condition Ahead. You cannot ignore it by closing the message" type="warning" :closable='false')
      alert(title="Alert for a Bunch of Errors" type="error" :description='errorsArray')
      alert(title="This Info Alert is using a slot" type="info")
        p.
          Put whatever you like in the slot:
        ul(v-for='item in messages')
          li
            i {{ item }}
    h1.heading-3 Code
    .box.box-neutral.box-code
      pre
        code.
          &lt;alert title="This is a Default Alert"&gt;&lt;/alert&gt;

          &lt;alert type="success" description="Your operation was greeted with success" title="Success" &gt;&lt;/alert&gt;

          &lt;alert type="warning" :closable="false" title="Warning Condition Ahead. You cannot ignore it by closing the message"&gt;&lt;/alert&gt;

          &lt;alert type="error" :description='errorsArray' title="Alert for a Bunch of Errors" &gt;&lt;/alert&gt;

          &lt;alert type="info" title="This Info Alert is using a slot"&gt;
            &lt;p&gt;Put whatever you like in the slot:&lt;/p&gt;
            &lt;ul v-for='item in messages'&gt;
              &lt;li&gt;
                &lt;i&gt;{{item}}&lt;/i&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
          &lt;/alert&gt;

    a(id='properties')
    h1.heading-2 Properties
    table.table
      thead
        tr
          th.tbl-width-25 Property
          th.tbl-width-75 Description
      tbody
        tr
          td
            .table--spaced title
            //- strong.pill Required
          td
            p
              code string
            p Sets a headline for the Alert.
        tr
          td description
          td
            p.
              #[code string] or #[code array]
            p.
              Used to provide body content for the Alert. An unordered list is rendered for arrays,
              which can be styled by using a slot.
        tr
          td type
          td
            p
              code string
            p The following strings are recognized. Any other value provided will result in the default type being set.
            ul
              li
                code.
                  default #[em.u-textlight (default)]
              li
                code success
              li
                code warning
              li
                code error
              li
                code info
        tr
          td closable
          td
            p
              code.
                boolean #[span.u-textlight = #[em true]]
            p When #[code #[em true]], the close button is displayed. Otherwise the close button is hidden.
        tr
          td showIcon
          td
            p
              code.
                boolean #[span.u-textlight = #[em true]]
            p When #[code #[em true]], the icon is displayed to the left of the title and description. Otherwise the icon is hidden.
        tr
          td visible
          td
            p
              code.
                boolean #[span.u-textlight = #[em true]]
            p When #[code #[em true]], the component is visible. Otherwise the component is hidden.
        tr
          td small
          td
            p
              code.
                boolean #[span.u-textlight = #[em true]]
            p When #[code #[em true]], the Alert is displayed in a compact style. Otherwise the normal styling will apply.
        tr
          td customClass
          td
            p
              code string
            p Use to apply your custom css class to the component.

    a(id='events')
    h1.heading-2 Events
    table.table
      thead
        tr
          th.tbl-width-25 Event Name
          th.tbl-width-75 Description
      tbody
        tr
          td close
          td Raised when the close button is clicked.

    a(id='examples')
    h1.heading-2 Examples

    a(id='showIcon-false')
    h1.heading-3 showIcon='false'
    p.
      The icon can be turned off by setting the #[code showIcon] property to false.
    .box.box-neutral.box-padded
      alert(:showIcon='false' title="This Alert Has No Icon")
    h3.heading-3 Code
    .box.box-neutral.box-code
      pre
        code.
          &lt;alert :showIcon='false' title="This Alert Has No Icon"&gt;&lt;/alert&gt;

    a(id='small-sized')
    h1.heading-3 Small-Sized
    p.
      To render a smaller version of the alert for cramped spaces, set the
      #[code small] property to #[code true].
    .box.box-neutral.box-padded
      alert(title="Headline for Error Alert" type="error" :small="true")
    h1.heading-3 Code
    .box.box-neutral.box-code
      pre
        code.
          &lt;alert title="Headline for Error Alert" type="error" :small="true"&gt;&lt;/alert&gt;

    a(id='custom-css')
    h1.heading-3 Custom CSS
    p.
      You can apply your own css styles using the #[code customClass] property.
    .box.box-neutral.box-padded
      alert(type='error' title="A Magenta Alert" customClass='magenta')
    h1.heading-3 Code
    .box.box-neutral.box-code
      pre
        code.
          &lt;alert type='error' title="A Magenta Alert" customClass='magenta'&gt;&lt;/alert&gt;
    h1.heading-3 SASS
    .box.box-neutral.box-code
      pre
        code.
          .vu-alert.vu-alert-error.magenta
            i.icon-exclamation-triangle
              background-color: magenta

</template>
<script>
export default {
  data() {
    return {
      errorsArray: [
        'A little tiny error happened',
        'Which caused a bad nasty error',
        'That precipitated much weeping and gnashing of teeth'
      ],
      messages: [
        'One little',
        'Two little',
        'Three little messages'
      ],
      item: "{{item}}"
    }
  }
}
</script>
<style lang='sass'>
.vu-alert.vu-alert-error.magenta
  i.icon-exclamation-triangle
    background-color: magenta
</style>
