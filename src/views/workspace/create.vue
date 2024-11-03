<template>
  <el-row style="width: 100%; height: 100px">
    <el-card
      class="newcard"
      :class="selectIndex == 'project' ? 'active' : ''"
      @click="newproject()"
    >
      <el-icon><Plus /></el-icon>
      <el-text style="font-size: 12pt; margin-left: 10px">{{ $t('workspace.create.202500-0') }}</el-text>
    </el-card>
    <el-card
      class="newcard"
      :class="selectIndex == 'design' ? 'active' : ''"
      @click="newdesgin()"
    >
      <el-icon><Plus /></el-icon>
      <el-text style="font-size: 12pt; margin-left: 10px">{{ $t('workspace.create.202500-1') }}</el-text>
    </el-card>
    <el-card
      class="newcard"
      :class="selectIndex == 'warehouse' ? 'active' : ''"
      @click="newwarehouse()"
    >
      <el-icon><Plus /></el-icon>
      <el-text style="font-size: 12pt; margin-left: 10px">{{ $t('workspace.create.202500-2') }}</el-text>
    </el-card>
  </el-row>
  <el-dialog v-model="dialogProject" :title="$t('workspace.create.202500-0')" width="830px">
    <el-tabs v-model="activeNameProject">
      <el-tab-pane :label="$t('workspace.create.202500-3')" class="guide" name="first">
        <el-card class="dialogCard" shadow="never" @click="newBlankProject()">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-4') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-5') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-6') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-7') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-8') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-9') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-10') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-11') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-12') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-13') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-14') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-15') }}</el-text>
        </el-card>
      </el-tab-pane>
      <el-tab-pane :label="$t('workspace.create.202500-16')" class="guide" name="second">
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-17') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-18') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-19') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-20') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-21') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-22') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-23') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-24') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-25') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-26') }}</el-text>
        </el-card>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
  <el-dialog v-model="dialogDesign" :title="$t('workspace.create.202500-1')" width="830px">
    <el-tabs v-model="activeNameDesign">
      <el-tab-pane :label="$t('workspace.create.202500-27')" class="guide" name="first">
        <el-card class="dialogCard" shadow="never" @click="newProduct()">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">产&nbsp;品</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-29') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-30') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-31') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-32') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-33') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" src="/dns-svgrepo-com.svg">
          </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-34') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-35') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-36') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-37') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-38') }}</el-text>
        </el-card>
      </el-tab-pane>
      <el-tab-pane :label="$t('workspace.create.202500-39')" class="guide" name="second">
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-40') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-41') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-42') }}</el-text>
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
          <el-text width="100%">{{ $t('workspace.create.202500-43') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">Minio</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-44') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-45') }}</el-text>
        </el-card>
        <el-card class="dialogCard" shadow="never">
          <el-image style="height: 50px; width: 50px" :src="slogo1"> </el-image>
          <el-text width="100%">{{ $t('workspace.create.202500-46') }}</el-text>
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
