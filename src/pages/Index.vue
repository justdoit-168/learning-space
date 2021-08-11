<!--
 * @Date           : 2021-08-12 01:29:17
 * @FilePath       : /learning-space/src/pages/Index.vue
 * @Description    : 
-->
<template>
  <div>
    <h1>sb</h1>

<q-markdown :src="markdown" />
<q-markdown :src="markdown1" />

  </div>
</template>

<script>
import markdown from './md/aaa.md'
import markdown1 from './md/aaa.md'
export default {
  name: 'PageIndex',
  data() {
    return {
      markdown,
      markdown1,
    }
  },
}
</script>
