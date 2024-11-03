<template>
  <div>
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="概述" name="first" style="padding: 10px">
        <designbaseinfo></designbaseinfo>
      </el-tab-pane>
      <el-tab-pane label="属性" name="second">插件</el-tab-pane>
      <el-tab-pane label="方法" name="three">方法</el-tab-pane>
      <el-tab-pane label="事件" name="four">事件</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import designbaseinfo from "./design_baseinfo.vue";

export default {
  name: "desigproduct",
  components: {
    designbaseinfo,
  },
  data() {
    return {
      activeName: ref("first"),
    };
  },
};
</script>
<style scoped>
:deep(.demo-tabs .el-tabs__nav .el-tabs__item:nth-child(2)) {
  margin-left: 10px !important;
}
:deep(.el-tabs__item) {
  padding: 0 10px;
}
</style>
