<template lang="pug">
  div
    h1 Alerts
    p Use alerts to provide users with a highly visible message. The following are the 5 theming options.
    .box.box-neutral.box-padded
      alert(title="Headline for Default Alert")
      alert(title="Headline for Success Alert" type="success")
      alert(title="Headline for Warning Alert" type="warning")
      alert(title="Headline for Error Alert" type="error")
      alert(title="Headline for Info Alert" type="info")
    h2.heading-3 Code
    .box.box-neutral.box-code
      pre
        code
          | &lt;alert title="Headline for Default Alert"&gt;&lt;/alert&gt;
          | &lt;alert title="Headline for Success Alert" type="success"&gt;&lt;/alert&gt;
          | &lt;alert title="Headline for Warning Alert" type="warning"&gt;&lt;/alert&gt;
          | &lt;alert title="Headline for Error Alert" type="error"&gt;&lt;/alert&gt;
          | &lt;alert title="Headline for Info Alert" type="info"&gt;&lt;/alert&gt;

</template>
