<template>
  <div class="p-main">
    <el-row style="height: 50px; width: 100%; font-size: 24pt; padding-left: 20px"
      >欢迎使用智慧大棚系统</el-row
    >
    <el-divider />
    <el-row style="width: 100%; height: 100px">
      <el-card
        class="newcard"
        :class="selectIndex == 'project' ? 'active' : ''"
        @click="newSence()"
      >
        <el-icon><Plus /></el-icon>
        <el-text style="font-size: 12pt; margin-left: 10px">创建场景</el-text>
      </el-card>
      <el-card
        class="newcard"
        :class="selectIndex == 'design' ? 'active' : ''"
        @click="newdesgin()"
      >
        <el-icon><Plus /></el-icon>
        <el-text style="font-size: 12pt; margin-left: 10px">创建设备</el-text>
      </el-card>
      <el-card
        class="newcard"
        :class="selectIndex == 'warehouse' ? 'active' : ''"
        @click="newwarehouse()"
      >
        <el-icon><Plus /></el-icon>
        <el-text style="font-size: 12pt; margin-left: 10px">创建点位</el-text>
      </el-card>
    </el-row>
    <el-row
      style="height: 100px; padding-left: 20px; display: flex; align-items: flex-end"
    >
      <el-text style="font-size: 18pt">工程场景</el-text>
      <el-text style="font-size: 10pt; margin-left: 20px; color: #fff"
        >设备 / 数据 / 逻辑 / 可视化 / 应用</el-text
      >
    </el-row>
    <el-row
      style="
        padding-left: 20px;
        width: 800px;
        padding-right: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
      "
    >
      <el-col :span="6" style="display: flex; flex-wrap: wrap; align-items: center">
        <el-row
          style="width: 100%; display: flex; align-items: center; justify-content: center"
        >
          <el-icon size="40"><TakeawayBox /></el-icon>
        </el-row>
        <el-row
          style="
            height: 40px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          <el-text style="font-size: 10pt">产品 / 物模型</el-text>
        </el-row>
        <el-row
          style="width: 100%; display: flex; align-items: center; justify-content: center"
        >
          <el-text style="font-size: 26pt">4</el-text>
        </el-row>
      </el-col>
      <el-col :span="6" style="display: flex; flex-wrap: wrap; align-items: center">
        <el-row
          style="width: 100%; display: flex; align-items: center; justify-content: center"
        >
          <el-icon size="40"><Coin /></el-icon>
        </el-row>
        <el-row
          style="
            height: 40px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          <el-text style="font-size: 10pt">数据源 / API</el-text>
        </el-row>
        <el-row
          style="width: 100%; display: flex; align-items: center; justify-content: center"
        >
          <el-text style="font-size: 26pt">2</el-text>
        </el-row>
      </el-col>
      <el-col :span="6" style="display: flex; flex-wrap: wrap; align-items: center">
        <el-row
          style="width: 100%; display: flex; align-items: center; justify-content: center"
        >
          <el-icon size="40"><Cpu /></el-icon>
        </el-row>
        <el-row
          style="
            height: 40px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          <el-text style="font-size: 10pt">设备 / 采集点位</el-text>
        </el-row>
        <el-row
          style="width: 100%; display: flex; align-items: center; justify-content: center"
        >
          <el-text style="font-size: 26pt">1024</el-text>
        </el-row>
      </el-col>
      <el-col :span="6" style="display: flex; flex-wrap: wrap; align-items: center">
        <el-row
          style="width: 100%; display: flex; align-items: center; justify-content: center"
        >
          <el-icon size="40"><DataAnalysis /></el-icon>
        </el-row>
        <el-row
          style="
            height: 40px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          <el-text style="font-size: 10pt">数字孪生 / 组态 / 仪表盘</el-text>
        </el-row>
        <el-row
          style="width: 100%; display: flex; align-items: center; justify-content: center"
        >
          <el-text style="font-size: 26pt">12</el-text>
        </el-row>
      </el-col>
    </el-row>
    <el-row
      style="height: 100px; padding-left: 20px; display: flex; align-items: flex-end"
    >
      <el-text style="font-size: 20pt">视频教程</el-text>
    </el-row>
    <el-row>
      <el-card style="margin-left: 20px">
        <el-image src="/img/jpg/model.jpg" style="height: 200px"></el-image>
      </el-card>
      <el-card style="margin-left: 20px">
        <el-image src="/img/jpg/model.jpg" style="height: 200px"></el-image>
      </el-card>
      <el-card style="margin-left: 20px">
        <el-image src="/img/jpg/model.jpg" style="height: 200px"></el-image>
      </el-card>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-card style="margin-left: 20px">
        <el-image src="/img/jpg/model.jpg" style="height: 200px"></el-image>
      </el-card>
      <el-card style="margin-left: 20px">
        <el-image src="/img/jpg/model.jpg" style="height: 200px"></el-image>
      </el-card>
      <el-card style="margin-left: 20px">
        <el-image src="/img/jpg/model.jpg" style="height: 200px"></el-image>
      </el-card>
    </el-row>
    <el-dialog v-model="dialogSence" title="创建新场景" width="830px">
      <el-row class="dialogSenceCss">
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">设备接入</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">数据接入</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo"> </el-image>
          <el-text width="100%">API接入</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo"> </el-image>
          <el-text width="100%">视频接入</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo"> </el-image>
          <el-text width="100%">人工智能</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">采集点位</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo"> </el-image>
          <el-text width="100%">规则引擎</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo"> </el-image>
          <el-text width="100%">数字孪生</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">工业组态</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">仪表盘</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">互联应用</el-text>
        </el-card>
      </el-row>
    </el-dialog>
  </div>
</template>
<style scoped>
::v-deep .dialogSenceCss .el-dialog {
  display: flex;
  flex-wrap: nowrap;
}

.guide {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
::v-deep .dialogCard {
  width: 120px;
  height: 120px;
  margin: 5px;
  display: flex;
  cursor: pointer;
  flex-wrap: nowrap;
  .el-card__body {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
}
/* 定义关键帧 */
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(90deg);
  }
}
.newcard {
  width: 200px;
  background: #ffffff;
  color: #000;
  margin-left: 30px;
  height: 100px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(to right, #597df9, #e2d4ff);
    color: #ffffff;
    .el-text {
      color: #ffffff;
    }
    .el-icon {
      animation: rotate 0.5s linear forwards;
    }
  }
}
.newcard.active {
  background: linear-gradient(to right, #597df9, #e2d4ff);
  color: #ffffff;
  .el-text {
    color: #ffffff;
  }
}
</style>
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import slogo from "../../assets/svg/api-interface-svgrepo-com.svg";
import slogo1 from "../../assets/svg/cloud-backup-svgrepo-com.svg";
const dialogSence = ref(0);
const selectIndex = ref(0);
selectIndex.value = "project";
dialogSence.value = false;
const router = useRouter();
function newSence() {
  dialogSence.value = true;
}
</script>
