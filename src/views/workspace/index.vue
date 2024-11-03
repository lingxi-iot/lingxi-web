<template>
  <div class="home-container">
    <el-container style="height: 100vh">
      <el-aside class="leftaside">
        <workspaceLeft />
      </el-aside>
      <el-main style="height: 100vh">
        <el-text style="font-size: 24pt; margin: 50px">{{ $t('workspace.index.236728-0') }}</el-text>
        <el-divider />
        <workspaceCreate />
        <el-row style="width: 100%; height: 100px">
          <el-text style="font-size: large">{{ $t('workspace.index.236728-1') }}</el-text>
        </el-row>
        <el-row style="width: 100%">
          <el-tabs class="demo-tabs" v-model="activeName">
            <el-tab-pane
              :label="$t('workspace.index.236728-2')"
              name="first"
              style="display: flex; flex-wrap: wrap"
            >
              <el-card class="mycardcss" v-for="i in 12" :key="i">
                <img
                  src="../../assets/images/demo.png"
                  style="width: 280px; height: 160px"
                  @click="handleClick"
                />
                <template #footer>
                  <el-row>
                    <el-col :span="18">{{ $t('workspace.index.236728-3') }}</el-col>
                    <el-col :span="6" style="text-align: right">
                      <el-icon><MoreFilled /></el-icon>
                    </el-col>
                  </el-row>
                </template>
              </el-card>
            </el-tab-pane>
            <el-tab-pane :label="$t('workspace.index.236728-4')" name="second">Config</el-tab-pane>
          </el-tabs></el-row
        >
      </el-main>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import workspaceLeft from "@/views/workspace/w_left.vue";
import workspaceCreate from "@/views/workspace/create.vue";
import { useRouter } from "vue-router";
const activeName = ref(3);

activeName.value = "first";
const router = useRouter();
function handleClick() {
  //router.push("/project");
  window.open("/project");
}
</script>
<style scoped>
.mycardcss {
  width: 372px;
  height: 240px;
  margin: 10px;
  cursor: pointer;
}
.home-container {
  overflow: visible;
  height: 100vh;
}
::v-deep .mycardcss .el-card__body {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.leftaside {
  width: 240px;
  background-color: #f8f8f8;
  height: 100vh;
}

.el-icon-svg {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.el-progress .el-progress--line {
  margin-bottom: 15px;
  width: 100%;
}

.el-tabs {
  width: 100%;
}
:deep(.el-tabs__active-bar) {
  background-color: blueviolet;
}
:deep(.el-tabs__item.is-active) {
  color: blueviolet;
}
:deep(.el-tabs__item:hover) {
  color: blueviolet;
}
</style>
