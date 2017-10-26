<template lang="pug">
div
  h1.heading-1 Layout
  p.
    Vueable includes a responsive grid system that appropriately scales up to 16 columns with respect to the size of the
    viewport. Similar to Bootstrap and other grid systems, it includes predefined classes for easy layout options, as
    well as supporting SASS mixins for generating more semantic layouts.

  h1.heading-2 Introduction
  blockquote(cite='https://getbootstrap.com/docs/3.3/css/#grid').
    Grid systems are used for creating page layouts through a series of rows and columns that house your content.
  p.
    Vueable is a 16 column grid system.

  h1.heading-2 Examples
  h1.heading-3 Basic Layouts
  p.
    Use the .vu-l-row class or Row component to render a row. Place columns inside of rows with the .vu-l-col-N classes
    or the Column component.
  div(class='vu-l-row')
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1

  p.
    On their own rows and columns do not  apply their own margin or padding, so if you want that you need to add it
    yourself. Rows should be nested inside containers that apply margin or padding.
    TODO: Insert wisdom here
  .box.box-neutral
    div(class='vu-l-row')
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1
      div(class='vu-l-col-1') .vu-l-col-1

  .box.box-neutral
    div(class='vu-l-row')
      div(class='vu-l-col-4') .vu-l-col-4
      div(class='vu-l-col-4') .vu-l-col-4
      div(class='vu-l-col-4') .vu-l-col-4
      div(class='vu-l-col-4') .vu-l-col-4

  .box.box-neutral
    div(class='vu-l-row')
      div(class='vu-l-col-8') .vu-l-col-8
      div(class='vu-l-col-8') .vu-l-col-8

  .box.box-neutral
    div(class='vu-l-row')
      div(class='vu-l-col-2') .vu-l-col-2
      div(class='vu-l-col-4') .vu-l-col-4
      div(class='vu-l-col-6') .vu-l-col-6
      div(class='vu-l-col-4') .vu-l-col-4

  h1.heading-3 Pushing and Pulling
  p.
    Columns can be pulled and pushed. TODO: Insert Wisdom Here
  .box.box-neutral
    div(class='vu-l-row')
      div(class='vu-l-col-4 vu-l-push-12') .vu-l-col-4 .vu-l-push-12
      div(class='vu-l-col-4 vu-l-pull-4') .vu-l-col-4 .vu-l-pull-4

  h1.heading-3 Expanded, Collapsed, Aligned, Centered, and Filled
  p.
    TODO: Insert explanation about how this works with examples

</template>
