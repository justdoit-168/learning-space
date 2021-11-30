<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /learning-space/src/pages/sql/module/mysql/index.vue
 * @Description    : 
-->
<template>
  <div>
    <q-markdown
      v-if="MainComponent"
      :extend="extendMarkdown"
      :src="MainComponent"
    />
    <component v-else :is="`${tab}`"></component>
  </div>
</template>
<script>
import m1 from "./module/m1.vue";
import m2 from "./module/m2.vue";
import m3 from "./module/m3.vue";
//
let relative_path = "/books/english/md/";
import { compute_config_base_on_require_context } from "src/boot/require-utils.js";
let { all_components, all_modules } = compute_config_base_on_require_context(
  require.context("public/books/english/md/" , false, /\.md$/),
  "md",
  true
);
import { menu_tab_mixin, markdown_mixin } from "src/mixins/index.js";
export default {
  mixins: [menu_tab_mixin, markdown_mixin],
  components: {
    m1,
    m2,
    m3,
  },
  data() {
    return {
      relative_path,
      img_prefix: "." + relative_path,
      tab: all_modules[0].value,
      MainComponent: all_components[all_modules[0].value],
      tab_level: 2, // 右侧 菜单 一级 为 1  二级为 2
      tabs: [
        { label: "基本111", value: "m1" },
        { label: "基本222", value: "m2" },
        { label: "基本333", value: "m3" },
        ...all_modules
      ]
    };
  },
  watch: {
    tab(newValue, oldValue) {
      this.MainComponent = all_components[this.tab];
      this.compute_img_prefix();
    }
  }
};
</script>
<style lang="scss" scoped></style>
