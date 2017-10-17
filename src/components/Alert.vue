<template lang="pug">
  div
    h1 Alerts
    p.
      Use alerts to provide users with a highly visible message. Specify the type
      with the #[code type] property or omit it for the default type. Available
      #[code type] values include: #[code success], #[code warning], #[code error]
      and #[code info]. Use the required #[code title] property to set the alert
      title text.
    .box.box-neutral.box-padded
      alert(title="Headline for Default Alert")
      alert(title="Headline for Success Alert" type="success")
      alert(title="Headline for Warning Alert" type="warning")
      alert(title="Headline for Error Alert" type="error")
      alert(title="Headline for Info Alert" type="info")
    h2.heading-3 Code
    .box.box-neutral.box-code
      pre
        code.
          &lt;alert title="Headline for Default Alert"&gt;&lt;/alert&gt;

          &lt;alert title="Headline for Success Alert" type="success"&gt;&lt;/alert&gt;

          &lt;alert title="Headline for Warning Alert" type="warning"&gt;&lt;/alert&gt;

          &lt;alert title="Headline for Error Alert" type="error"&gt;&lt;/alert&gt;

          &lt;alert title="Headline for Info Alert" type="info"&gt;&lt;/alert&gt;

    h1.heading-2 Properties &amp; Events
    h1.heading-3 Properties
    table.table
      thead
        tr
          th.tbl-width-25 Property
          th.tbl-width-75 Description
      tbody
        tr
          td
            .table--separator title
            strong.pill Required
          td
            p
              code string
            p For Alerts without a description or body. This will be the primary content.
        tr
          td description
          td
            p
              code string
            p Used to provide additional textual content.
        tr
          td type
          td
            p
              code string
            p The following strings are recognized. Any other value provided will result in the default type being set.
            ul
              li
                code.
                  base #[em.u-textlight (default)]
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
          td lightTitle
          td
            p
              code.
                boolean #[span.u-textlight = #[em true]]
            p When #[code #[em true]], the title text will be displayed with a normal font weight. Otherwise a bold font will apply.
        tr
          td customClass
          td
            p
              code string
            p Use to apply your custom css class to the component.

    h1.heading-3 Events
    table
      th
        td Event Name
        td Description
      tr
        td close
        td Raised when the close button is clicked.

    h1.heading-2 Sample Usage
    h1.heading-3 Extra Content
    p.
      To display a paragraph of text under the title, use the #[code description]
      property. For additional HTML, nest the markup within the alert component.
      Currently supported HTML includes the #[code UL] and #[code P] elements.
      If both a #[code description] property is set and HTML is nested within the
      alert, the nested HTML will override the #[code description] text.
    .box.box-neutral.box-padded
      alert(title="Headline for Default Alert" description="Additional copy placed within a paragraph element below the title")
      alert(title="Headline for Success Alert" type="success" description="not displayed")
        p Additional paragraph copy
        ul
          li List item 1
          li List item 2
    h2.heading-3 Code
    .box.box-neutral.box-code
      pre
        code.
          &lt;alert title="Headline for Default Alert"
                 description="Additional copy placed within a paragraph element below the title"&gt;&lt;/alert&gt;

          &lt;alert title="Headline for Success Alert" type="success" description="not displayed"&gt;
            &lt;p&gt;Additional paragraph copy&lt;/p&gt;
            &lt;ul&gt;
              &lt;li&gt;List item 1&lt;/li&gt;
              &lt;li&gt;List item 2&lt;/li&gt;
            &lt;/ul&gt;
          &lt;/alert&gt;

    h1.heading-3 Multi-line Title
    p.
      For multi-line titles, set the #[code lightTitle] property to #[code true].
    .box.box-neutral.box-padded
      alert(title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec consectetur urna. Maecenas dignissim blandit molestie. In hac habitasse platea dictumst. Cras eget fermentum nulla." type="warning" :lightTitle="true")
    h2.heading-3 Code
    .box.box-neutral.box-code
      pre
        code.
          &lt;alert title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec consectetur urna. Maecenas dignissim blandit molestie. In hac habitasse platea dictumst. Cras eget fermentum nulla."
                 type="warning" :lightTitle="true"&gt;&lt;/alert&gt;

    h1.heading-3 Small-Sized
    p.
      To render a smaller version of the alert for cramped spaces, set the
      #[code small] property to #[code true].
    .box.box-neutral.box-padded
      alert(title="Headline for Error Alert" type="error" :small="true")
    h2.heading-3 Code
    .box.box-neutral.box-code
      pre
        code.
          &lt;alert title="Headline for Error Alert" type="error" :small="true"&gt;&lt;/alert&gt;
    h1.heading-3 Toggle Identifier and Close Icons
    p.
      The identifier and close icons are displayed by default. To hide the
      identifier icon, set the #[code showIcon] property to #[code false].
      To hide the close icon, set the #[code closable] property to
      #[code false].
    .box.box-neutral.box-padded
      alert(title="Headline for Default Alert" :showIcon="false")
      alert(title="Headline for Info Alert" type="info" :closable="false")
    h2.heading-3 Code
    .box.box-neutral.box-code
      pre
        code.
          &lt;alert title="Headline for Default Alert" :showIcon="false"&gt;&lt;/alert&gt;

          &lt;alert title="Headline for Info Alert" type="info" :closable="false"&gt;&lt;/alert&gt;
</template>
