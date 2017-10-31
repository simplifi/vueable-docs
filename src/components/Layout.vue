<template lang="pug">
div
  h1 Layout
  p.
    Vueable offers a fluid grid system with up to 16 columns that scales based on the browser viewport. Similar to Bootstrap and other grid systems, it includes predefined classes for easy layout creation, as well as supporting SASS mixins for generating more semantic output.

  h2 Introduction
  p.
   The building blocks of the grid system are rows and columns. Top level grids provide outer horizontal padding serving as a gutter between content and viewport boundaries. Nested grids by default are positioned flush against their containing elements. Columns render padding between each other and up to 16 columns may be displayed in a single row. Several modifier classes are provided to handle different layout scenarios, as described in the examples below. Use the #[code $grid-columns] variable to set the column count (16 default), the #[code $grid-padding] variable to adjust the padding between columns (#[code 1em] default) and the #[code $grid-max-width] variable to establish the maximum grid width (#[code 78.125rem] / #[code 1250px] default).

  h2 Examples
  h3 Basic Layouts
  p.
    Use the #[code .vu-l-row] class to render a row. Place columns inside of rows with the #[code .vu-l-col-N] class where #[code N] represents the column width (1-16). The maximum number of columns can be altered with the #[code $grid-columns] variable. Columns provide horizontal padding for spacing between themselves but any other type of padding or margin must be set by other elements either wrapping the row or nested within columns.
  .box.box-neutral
    div(class="vu-l-row gridview gridview-sm")
      div(class="vu-l-col-1") .vu-l-col-1
      div(class="vu-l-col-1") .vu-l-col-1
      div(class="vu-l-col-1") .vu-l-col-1
      div(class="vu-l-col-1") .vu-l-col-1
      div(class="vu-l-col-1") .vu-l-col-1
      div(class="vu-l-col-1") .vu-l-col-1
      div(class="vu-l-col-1") .vu-l-col-1
      div(class="vu-l-col-1") .vu-l-col-1
      div(class="vu-l-col-1") .vu-l-col-1
      div(class="vu-l-col-1") .vu-l-col-1
      div(class="vu-l-col-1") .vu-l-col-1
      div(class="vu-l-col-1") .vu-l-col-1
      div(class="vu-l-col-1") .vu-l-col-1
      div(class="vu-l-col-1") .vu-l-col-1
      div(class="vu-l-col-1") .vu-l-col-1
      div(class="vu-l-col-1") .vu-l-col-1

    div(class="vu-l-row gridview")
      div(class="vu-l-col-4") .vu-l-col-4
      div(class="vu-l-col-4") .vu-l-col-4
      div(class="vu-l-col-4") .vu-l-col-4
      div(class="vu-l-col-4") .vu-l-col-4

    div(class="vu-l-row gridview")
      div(class="vu-l-col-8") .vu-l-col-8
      div(class="vu-l-col-8") .vu-l-col-8

    div(class="vu-l-row gridview")
      div(class="vu-l-col-2") .vu-l-col-2
      div(class="vu-l-col-4") .vu-l-col-4
      div(class="vu-l-col-6") .vu-l-col-6
      div(class="vu-l-col-4") .vu-l-col-4

  h3 Code
  .box.box-neutral.box-code
    pre
      code.
        &lt;div class="vu-l-row"&gt;
          &lt;div class="vu-l-col-1"&gt;.vu-l-col-1&lt;/div&gt;
          &lt;div class="vu-l-col-1"&gt;.vu-l-col-1&lt;/div&gt;
          &lt;div class="vu-l-col-1"&gt;.vu-l-col-1&lt;/div&gt;
          &lt;div class="vu-l-col-1"&gt;.vu-l-col-1&lt;/div&gt;
          &lt;div class="vu-l-col-1"&gt;.vu-l-col-1&lt;/div&gt;
          &lt;div class="vu-l-col-1"&gt;.vu-l-col-1&lt;/div&gt;
          &lt;div class="vu-l-col-1"&gt;.vu-l-col-1&lt;/div&gt;
          &lt;div class="vu-l-col-1"&gt;.vu-l-col-1&lt;/div&gt;
          &lt;div class="vu-l-col-1"&gt;.vu-l-col-1&lt;/div&gt;
          &lt;div class="vu-l-col-1"&gt;.vu-l-col-1&lt;/div&gt;
          &lt;div class="vu-l-col-1"&gt;.vu-l-col-1&lt;/div&gt;
          &lt;div class="vu-l-col-1"&gt;.vu-l-col-1&lt;/div&gt;
          &lt;div class="vu-l-col-1"&gt;.vu-l-col-1&lt;/div&gt;
          &lt;div class="vu-l-col-1"&gt;.vu-l-col-1&lt;/div&gt;
          &lt;div class="vu-l-col-1"&gt;.vu-l-col-1&lt;/div&gt;
          &lt;div class="vu-l-col-1"&gt;.vu-l-col-1&lt;/div&gt;
        &lt;/div&gt;

        &lt;div class="vu-l-row"&gt;
          &lt;div class="vu-l-col-4"&gt;.vu-l-col-4&lt;/div&gt;
          &lt;div class="vu-l-col-4"&gt;.vu-l-col-4&lt;/div&gt;
          &lt;div class="vu-l-col-4"&gt;.vu-l-col-4&lt;/div&gt;
          &lt;div class="vu-l-col-4"&gt;.vu-l-col-4&lt;/div&gt;
        &lt;/div&gt;

        &lt;div class="vu-l-row"&gt;
          &lt;div class="vu-l-col-8"&gt;.vu-l-col-8&lt;/div&gt;
          &lt;div class="vu-l-col-8"&gt;.vu-l-col-8&lt;/div&gt;
        &lt;/div&gt;

        &lt;div class="vu-l-row"&gt;
          &lt;div class="vu-l-col-2"&gt;.vu-l-col-2&lt;/div&gt;
          &lt;div class="vu-l-col-4"&gt;.vu-l-col-4&lt;/div&gt;
          &lt;div class="vu-l-col-6"&gt;.vu-l-col-6&lt;/div&gt;
          &lt;div class="vu-l-col-4"&gt;.vu-l-col-4&lt;/div&gt;
        &lt;/div&gt;

  h3 Nested Layouts
  p.
    Grids nested within other grids, no matter how deep, are modified to remove the outer padding that serves as a gutter. Any necessary padding should be applied to the elements containing nested grids.
  .box.box-neutral
    div(class="vu-l-row gridview")
      div(class="vu-l-col-12")
        | .vu-l-col-12
        div(class="vu-l-row gridview")
          div(class="vu-l-col-8") .vu-l-col-8 (nested)
          div(class="vu-l-col-8") .vu-l-col-8 (nested)
      div(class="vu-l-col-4") .vu-l-col-4
  h3 Code
  .box.box-neutral.box-code
    pre
      code.
        &lt;div class="vu-l-row"&gt;
          &lt;div class="vu-l-col-12"&gt;
            .vu-l-col-12
            &lt;div class="vu-l-row"&gt;
              &lt;div class="vu-l-col-8"&gt;.vu-l-col-8 (nested)&lt;/div&gt;
              &lt;div class="vu-l-col-8"&gt;.vu-l-col-8 (nested)&lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class="vu-l-col-4"&gt;.vu-l-col-4&lt;/div&gt;
        &lt;/div&gt;

  h3 Expanded
  p.
    A maximum width is set on top level rows through the #[code $grid-max-width] variable. This can be overriden allowing a full 100% width row no matter how wide the viewport may be. Apply the #[code .vu-l-row-expanded] modifier class to a row.
  .box.box-neutral
    div(class="vu-l-row vu-l-row-expanded gridview")
      div(class="vu-l-col-4") .vu-l-col-4
      div(class="vu-l-col-8") .vu-l-col-8
      div(class="vu-l-col-4") .vu-l-col-4
  h3 Code
  .box.box-neutral.box-code
    pre
      code.
        &lt;div class="vu-l-row vu-l-row-expanded"&gt;
          &lt;div class="vu-l-col-4"&gt;.vu-l-col-4&lt;/div&gt;
          &lt;div class="vu-l-col-8"&gt;.vu-l-col-8&lt;/div&gt;
          &lt;div class="vu-l-col-4"&gt;.vu-l-col-4&lt;/div&gt;
        &lt;/div&gt;

  h3 Collapsed
  p.
    Padding is set between columns with the #[code $grid-padding] variable. This padding can be collapsed so that the content areas of the columns are flush against each other. Outer gutter padding is preserved. Apply the #[code .vu-l-row-collapsed] modifier class to a row.
  .box.box-neutral
    div(class="vu-l-row vu-l-row-collapsed gridview")
      div(class="vu-l-col-4") .vu-l-col-4
      div(class="vu-l-col-4") .vu-l-col-4
      div(class="vu-l-col-4") .vu-l-col-4
      div(class="vu-l-col-4") .vu-l-col-4
  h3 Code
  .box.box-neutral.box-code
    pre
      code.
        &lt;div class="vu-l-row vu-l-row-collapsed"&gt;
          &lt;div class="vu-l-col-4"&gt;.vu-l-col-4&lt;/div&gt;
          &lt;div class="vu-l-col-4"&gt;.vu-l-col-4&lt;/div&gt;
          &lt;div class="vu-l-col-4"&gt;.vu-l-col-4&lt;/div&gt;
          &lt;div class="vu-l-col-4"&gt;.vu-l-col-4&lt;/div&gt;
        &lt;/div&gt;

  h3 Align Bottom / Middle
  p.
    By default, columns are vertically-aligned to the top of the row. Bottom or middle alignment can optionally be set. Bottom alignment places all columns at the bottom of the row while middle alignment vertically centers the columns in relation to the tallest column. This technique utilitizes #[code inline-block] display rendering so all whitespace must be removed between column elements. Apply the #[code .vu-l-row-alignbottom] or #[code .vu-l-row-alignmiddle] modifier class to a row.
  .box.box-neutral
    div(class="vu-l-row vu-l-row-alignbottom gridview")
      div(class="vu-l-col-8")
        | .vu-l-col-8
        br
        | column content
      div(class="vu-l-col-8")
        | .vu-l-col-8
        br
        | column content
        br
        | column content
    div(class="vu-l-row vu-l-row-alignmiddle gridview")
      div(class="vu-l-col-6")
        | .vu-l-col-6
        br
        | column content
        br
        | column content
      div(class="vu-l-col-5")
        | .vu-l-col-5
      div(class="vu-l-col-5")
        | .vu-l-col-5
        br
        | column content
  h3 Code
  .box.box-neutral.box-code
    pre
      code.
        &lt;div class="vu-l-row vu-l-row-alignbottom"&gt;
          &lt;div class="vu-l-col-8"&gt;
            .vu-l-col-8 &lt;br&gt; column content
          &lt;/div&gt;
          &lt;!-- Remove whitespace --&gt;
          &lt;div class="vu-l-col-8"&gt;
            .vu-l-col-8 &lt;br&gt; column content &lt;br&gt; column content
          &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class="vu-l-row vu-l-row-alignmiddle"&gt;
          &lt;div class="vu-l-col-6"&gt;
            .vu-l-col-6 &lt;br&gt; column content &lt;br&gt; column content
          &lt;/div&gt;
          &lt;!-- Remove whitespace --&gt;
          &lt;div class="vu-l-col-5"&gt;
            .vu-l-col-5
          &lt;/div&gt;
          &lt;!-- Remove whitespace --&gt;
          &lt;div class="vu-l-col-5"&gt;
            .vu-l-col-5 &lt;br&gt; column content
          &lt;/div&gt;
        &lt;/div&gt;

  h3 Push / Pull
  p.
    Columns can be pushed to the right or pulled to the left. A number value is specified to represent the amount of columns to move by. Useful for spacing columns or presenting content in a different order than the markup. Apply the #[code .vu-l-push-N] or #[code .vu-l-pull-N] modifier class to a column where #[code N] represents the travel distance in columns.
  .box.box-neutral
    div(class="vu-l-row gridview")
      div(class="vu-l-col-4") .vu-l-col-4
      div(class="vu-l-col-8 vu-l-push-4") .vu-l-col-8 .vu-l-push-4
    div(class="vu-l-row gridview")
      div(class="vu-l-col-4 vu-l-push-12") .vu-l-col-4 .vu-l-push-12
      div(class="vu-l-col-4 vu-l-pull-4") .vu-l-col-4 .vu-l-pull-4
  h3 Code
  .box.box-neutral.box-code
    pre
      code.
        &lt;div class="vu-l-row"&gt;
          &lt;div class="vu-l-col-4"&gt;.vu-l-col-4&lt;/div&gt;
          &lt;div class="vu-l-col-8 vu-l-push-4"&gt;.vu-l-col-8 .vu-l-push-4&lt;/div&gt;
        &lt;/div&gt;

        &lt;div class="vu-l-row"&gt;
          &lt;div class="vu-l-col-4 vu-l-push-12"&gt;.vu-l-col-4 .vu-l-push-12&lt;/div&gt;
          &lt;div class="vu-l-col-4 vu-l-pull-4"&gt;.vu-l-col-4 .vu-l-pull-4&lt;/div&gt;
        &lt;/div&gt;

  h3 Centered
  p.
    Center a solitary column within a row. Apply the #[code .vu-l-col-centered] modifier class to a column.
  .box.box-neutral
    div(class="vu-l-row gridview")
      div(class="vu-l-col-8 vu-l-col-centered") .vu-l-col-8 .vu-l-col-centered
  h3 Code
  .box.box-neutral.box-code
    pre
      code.
        &lt;div class="vu-l-row"&gt;
          &lt;div class="vu-l-col-8 vu-l-col-centered"&gt;
            .vu-l-col-8 .vu-l-col-centered
          &lt;/div&gt;
        &lt;/div&gt;

  h3 Filled
  p.
    Set all columns of a row to an equal height with the tallest column determing that height. The direct descendant element(s) of a column will require 100% width to be set. This experimental technique leverages additional CSS independent of the grid mixins. Apply the #[code .vu-l-row-filled] modifier class to a row.
  .box.box-neutral
    div(class="vu-l-row vu-l-row-filled gridview")
      div(class="vu-l-col-4") .vu-l-col-4
      div(class="vu-l-col-12")
        | .vu-l-col-12
        <br>
        | column content
        br
        | column content
        br
        | column content
  h3 Code
  .box.box-neutral.box-code
    pre
      code.
        &lt;div class="vu-l-row vu-l-row-filled"&gt;
          &lt;div class="vu-l-col-4"&gt;.vu-l-col-4&lt;/div&gt;
          &lt;div class="vu-l-col-12"&gt;
            .vu-l-col-12 &lt;br&gt; column content &lt;br&gt; column content &lt;br&gt; column content
          &lt;/div&gt;
        &lt;/div&gt;

  h3 Row Mixin
  p.
    For semantic grid row creation, include the SASS #[code row] mixin within an element's CSS style rule. By default, a row for a top level grid is generated. Optional values are #[code nest] and #[code expand].
  h3 Code
  .box.box-neutral.box-code
    pre
      code.
        .module {
          @include row;
        }

        .module-2 {
          @include row(nest);
        }

        .module-3 {
          @include row(expand);
        }

  h3 Column Mixin
  p.
    Apply the SASS #[code column] mixin to a direct descendant of a containing element with the #[code row] mixin applied. Mixin options include #[code $columns] (#[code integer]), #[code $push] (#[code integer]), #[code $pull] (#[code integer]), #[code $collapse] (#[code boolean]), #[code $align] (#[code bottom/middle]) and  #[code $center] (#[code boolean]). #[code $columns] is required while all others are optional.
  .box.box-neutral.box-code
    pre
      code.
        // Column 4 spaces wide
        .module-4 {
          @include column($columns: 4);
        }

        // 6-column push with padding collapse and bottom alignment
        .module-5 {
          @include column($columns: 4, $push: 6, $collapse: true, $align: bottom);
        }

        // Centered column
        .module-6 {
          @include column($columns: 8, $center: true);
        }

</template>
