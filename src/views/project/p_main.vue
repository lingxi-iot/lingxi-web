<template>
  <div class="p-main">
    <!-- <el-row style="height: 50px; width: 100%; font-size: 24pt; padding-left: 20px"
      >{{ $t('project.p_main.493991-0') }}</el-row
    >
    <el-divider /> -->
    <el-row style="width: 100%; height: 100px">
      <el-card
        class="newcard"
        :class="selectIndex == 'project' ? 'active' : ''"
        @click="newSence()"
      >
        <el-icon><Plus /></el-icon>
        <el-text style="font-size: 12pt; margin-left: 10px">{{ $t('project.p_main.493991-1') }}</el-text>
      </el-card>
      <el-card
        class="newcard"
        :class="selectIndex == 'design' ? 'active' : ''"
        @click="newdesgin()"
      >
        <el-icon><Plus /></el-icon>
        <el-text style="font-size: 12pt; margin-left: 10px">{{ $t('project.p_main.493991-2') }}</el-text>
      </el-card>
      <el-card
        class="newcard"
        :class="selectIndex == 'warehouse' ? 'active' : ''"
        @click="newwarehouse()"
      >
        <el-icon><Plus /></el-icon>
        <el-text style="font-size: 12pt; margin-left: 10px">{{ $t('project.p_main.493991-3') }}</el-text>
      </el-card>
    </el-row>
    <el-row
      style="height: 100px; padding-left: 20px; display: flex; align-items: flex-end"
    >
      <el-text style="font-size: 18pt">{{ $t('project.p_main.493991-4') }}</el-text>
      <el-text style="font-size: 10pt; margin-left: 20px; color: #fff"
        >{{ $t('project.p_main.493991-5') }}</el-text
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
          <el-text style="font-size: 10pt">{{ $t('project.p_main.493991-6') }}</el-text>
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
          <el-text style="font-size: 10pt">{{ $t('project.p_main.493991-7') }}</el-text>
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
          <el-text style="font-size: 10pt">{{ $t('project.p_main.493991-8') }}</el-text>
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
          <el-text style="font-size: 10pt">{{ $t('project.p_main.493991-9') }}</el-text>
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
      <el-text style="font-size: 20pt">{{ $t('project.p_main.493991-10') }}</el-text>
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
    <el-dialog v-model="dialogSence" :title="$t('project.p_main.493991-11')" width="830px">
      <el-row class="dialogSenceCss">
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('project.p_main.493991-12') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('project.p_main.493991-13') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo"> </el-image>
          <el-text width="100%">{{ $t('project.p_main.493991-14') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo"> </el-image>
          <el-text width="100%">{{ $t('project.p_main.493991-15') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo"> </el-image>
          <el-text width="100%">{{ $t('project.p_main.493991-16') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('project.p_main.493991-17') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo"> </el-image>
          <el-text width="100%">{{ $t('project.p_main.493991-18') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo"> </el-image>
          <el-text width="100%">{{ $t('project.p_main.493991-19') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('project.p_main.493991-20') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('project.p_main.493991-21') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('project.p_main.493991-22') }}</el-text>
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
