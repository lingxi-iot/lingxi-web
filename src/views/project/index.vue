<template>
  <div class="container">
    <el-container>
      <el-aside width="240px" class="leftaside">
        <projectLeft />
      </el-aside>
      <el-main class="maincss">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="$t('project.index.231767-0')" name="first">
           <projectMain></projectMain>
        </el-tab-pane>
        <el-tab-pane :label="$t('project.index.231767-1')" name="second">
          <aidialog></aidialog>
        </el-tab-pane>
      </el-tabs>
        
      </el-main>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import projectLeft from "@/views/project/p_left.vue";
import projectMain from "@/views/project/p_main.vue";
import aidialog from "./aidialog.vue";
const activeName = ref("second");
import { ref } from "vue";
import { useI18n} from 'vue-i18n';
const { t } = useI18n();



const rightaside = ref();
const popoverVisible = ref(0);
popoverVisible.value = false;
function handleClick(tab, event) {
  console.log(rightaside.value);
  popoverVisible.value = true;

}
</script>

<style scoped>
.el-row {
  width: 100%;
}
.leftaside {
  width: 240px;
  background-color: #f8f8f8;
  height: 100vh;
}
.rightaside {
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: center;
  justify-content: center;
  padding-right: 20px;
  padding-left: 20px;
  background-color: #f8f8f8;
}
.rightasideContent {
  height: calc(100vh - 100px);
}
.maincss {
  height: 100vh;
}
.floatbtn {
  background-color: rgb(149 90 238);
  color: #fff;
  :focus {
    outline: none;
  }
}
button:focus {
  outline: none;
}
</style>
