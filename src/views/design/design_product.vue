<template>
  <div>
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane :label="$t('design.design_product.9142511-0')" name="first" style="padding: 10px">
        <designbaseinfo></designbaseinfo>
      </el-tab-pane>
      <el-tab-pane :label="$t('design.design_product.9142511-1')" name="second">{{ $t('design.design_product.9142511-2') }}</el-tab-pane>
      <el-tab-pane :label="$t('design.design_product.9142511-3')" name="three">{{ $t('design.design_product.9142511-3') }}</el-tab-pane>
      <el-tab-pane :label="$t('design.design_product.9142511-4')" name="four">{{ $t('design.design_product.9142511-4') }}</el-tab-pane>
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
