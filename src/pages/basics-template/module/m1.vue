<!--
 * @Date           : 2021-04-12 16:02:15
 * @FilePath       : /learning-space/src/pages/basics-template/module/m1.vue
 * @Description    : 
-->
<template>
  <div class="">
    <q-markdown   :src="MainComponent" />
  </div>
</template>
<script>
import MainComponent from "../md/demo.md";
export default {
  data() {
    return {
      MainComponent,
 
    };
  },
  methods: {
    
  }
};
</script>
<style lang="scss" scoped></style>
