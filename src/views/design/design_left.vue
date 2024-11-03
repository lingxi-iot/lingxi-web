<template>
  <div>
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="产品" name="first">
        <desginmodel></desginmodel>
      </el-tab-pane>
      <el-tab-pane label="插件" name="second">插件</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import desginmodel from "./design_model.vue";
export default {
  name: "designleft",
  components: {
    desginmodel,
  },
  data() {
    return {
      activeName: ref("first"),
    };
  },
};
</script>
<style scoped>
.demo-tabs {
}

:deep(.demo-tabs .el-tabs__nav .el-tabs__item:nth-child(2)) {
  margin-left: 20px !important;
}
:deep(.el-tabs__item) {
  padding: 0 20px;
}
</style>
