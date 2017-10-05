<template lang="pug">
  div
    h1 Alerts
    p.
      Use alerts to provide users with a highly visible message. Specify the theme
      with the #[code type] property or omit it for the default theme. Available
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

    h1.heading-3 Extra Content
    p.
      To display a paragraph of text under the title, use the #[code description]
      property. For additional HTML, nest the markup within the alert component.
      Currently supported HTML includes the #[code UL] and #[code P] elements.
      If both a #[code description] property is set and HTML is nested within the
      alert, the nested HTML will override the #[code description] text.
    .box.box-neutral.box-padded
      alert(title="Headline for Default Alert" description="Additional copy placed within a paragraph element below the title")
      alert(title="Headline for Success Alert" type="success")
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

          &lt;alert title="Headline for Success Alert" type="success"&gt;
            &lt;p&gt;Additional paragraph copy&lt;/p&gt;
            &lt;ul&gt;
              &lt;li&gt;List item 1&lt;/li&gt;
              &lt;li&gt;List item 2&lt;/li&gt;
            &lt;/ul&gt;
          &lt;/alert&gt;

    h1.heading-3 Multi-line Title
    p.
      For multi-line titles, set the #[code :lightTitle] property to #[code true].
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
      #[code :small] property to #[code true].
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
      identifier icon, set the #[code :showIcon] property to #[code false].
      To hide the close icon, set the #[code :closable] property to
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
