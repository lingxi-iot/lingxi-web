<template>
  <div>
    <el-container style="margin: 0px; padding: 0px; height: 100%">
      <el-aside
        style="width: 200px; display: flex; justify-content: left; align-items: center"
      >
        <el-icon style="cursor: pointer; margin-right: 10px" @click="goback()">
          <ArrowLeft />
        </el-icon>
        <el-icon>
          <Fold />
        </el-icon>
        <el-text style="margin-left:10px;margin-right:10px">{{ $t('design.design_top.059603-0') }}</el-text>
        <el-icon>
          <EditPen />
        </el-icon>
      </el-aside>
      <el-main style="display: flex; justify-content: center; align-items: center">
        <designtoolbar></designtoolbar>
      </el-main>
      <el-aside
        style="width: 200px; display: flex; justify-content: center; align-items: center"
      >
        <el-col
          :span="12"
          style="display: flex; justify-content: right; padding-right: 20px"
        >
          <el-avatar
            size="small"
            src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
          />
        </el-col>
        <el-col :span="12">
          <el-select
            placeholder="100%"
            style="width: 100px; border: 0px"
            suffix-icon="CaretBottom"
          >
            <el-option value="fit" :label="$t('design.design_top.914254-1')"></el-option>
            <el-option value="100%" label="100%"></el-option>
            <el-option value="80%" label="80%"></el-option>
            <el-option value="75%" label="75%"></el-option>
            <el-option value="50%" label="50%"></el-option>
            <el-option value="30%" label="30%"></el-option>
            <el-option value="20%" label="20%"></el-option>
          </el-select>
        </el-col>
      </el-aside>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import designtoolbar from "./design_toolbar.vue";
import { useRouter } from "vue-router";

const router = useRouter();

function goback() {
  router.push("/workspace");
}
// export default {
//   name: "top-header",
//   components: {
//     designtoolbar,
//   },
// };
</script>
