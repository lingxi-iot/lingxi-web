<template>
  <el-row style="width: 100%; height: 100px">
    <el-card
      class="newcard"
      :class="selectIndex == 'project' ? 'active' : ''"
      @click="newproject()"
    >
      <el-icon><Plus /></el-icon>
      <el-text style="font-size: 12pt; margin-left: 10px">创建工程</el-text>
    </el-card>
    <el-card
      class="newcard"
      :class="selectIndex == 'design' ? 'active' : ''"
      @click="newdesgin()"
    >
      <el-icon><Plus /></el-icon>
      <el-text style="font-size: 12pt; margin-left: 10px">创建设计</el-text>
    </el-card>
    <el-card
      class="newcard"
      :class="selectIndex == 'warehouse' ? 'active' : ''"
      @click="newwarehouse()"
    >
      <el-icon><Plus /></el-icon>
      <el-text style="font-size: 12pt; margin-left: 10px">上传云仓</el-text>
    </el-card>
  </el-row>
  <el-dialog v-model="dialogProject" title="创建工程" width="830px">
    <el-tabs v-model="activeNameProject">
      <el-tab-pane label="场景向导" class="guide" name="first">
        <el-card class="dialogCard" shadow="never" @click="newBlankProject()">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">空工程</el-text>
        </el-card>
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
      </el-tab-pane>
      <el-tab-pane label="示例工程" class="guide" name="second">
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">智慧园区</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">智慧楼宇</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">大棚养殖</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">智能会议</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">物联网医院</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">燃气供暖</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">数字展厅</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">数字乡村</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">智慧校园</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">节能照明</el-text>
        </el-card>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
  <el-dialog v-model="dialogDesign" title="创建设计" width="830px">
    <el-tabs v-model="activeNameDesign">
      <el-tab-pane label="设计向导" class="guide" name="first">
        <el-card class="dialogCard" shadow="never" @click="newProduct()">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">产&nbsp;品</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">物模型</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo"> </el-image>
          <el-text width="100%">生产厂商</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo"> </el-image>
          <el-text width="100%">硬件设备</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo"> </el-image>
          <el-text width="100%">网络通道</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo"> </el-image>
          <el-text width="100%">存储介质</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" src="/dns-svgrepo-com.svg">
          </el-image>
          <el-text width="100%">规则插件</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">数据库驱动</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">2D模型</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo"> </el-image>
          <el-text width="100%">3D模型</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">组态模型</el-text>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="示例设计" class="guide" name="second">
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">海康门禁</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">大华门禁</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">门禁物模型</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">MQTT</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">Modbus</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">本地存储</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">Minio</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">摄像头3D</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">饼状图</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">断路器</el-text>
        </el-card>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>
<style scoped>
.guide {
  display: flex;
  flex-wrap: wrap;
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
import slogo from "../../assets/svg/api-interface-svgrepo-com.svg";
import slogo1 from "../../assets/svg/cloud-backup-svgrepo-com.svg";
import { useRouter } from "vue-router";
const router = useRouter();

const selectIndex = ref(0);
const dialogProject = ref(1);
const dialogDesign = ref(2);
const activeNameProject = ref(4);
const activeNameDesign = ref(5);

dialogProject.value = false;
dialogDesign.value = false;

activeNameProject.value = "first";
activeNameDesign.value = "first";
selectIndex.value = "project";
function newProduct() {
  router.push("/design");
}
function newproject() {
  selectIndex.value = "project";
  dialogProject.value = true;
  activeNameProject.value = "first";
}
function newdesgin() {
  selectIndex.value = "design";
  dialogDesign.value = true;
  activeNameDesign.value = "first";
}
function newwarehouse() {
  selectIndex.value = "warehouse";
}
function newBlankProject() {
  //router.push("/project");
  let url = router.resolve({
    path: "/project",
    query: {
      id: 1,
      lowCodeId: 2,
      productName: "myname",
    },
  });
  window.open(url.href);
}
</script>
