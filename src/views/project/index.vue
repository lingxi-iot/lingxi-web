<template>
  <div class="container">
    <el-container>
      <el-aside width="240px" class="leftaside">
        <projectLeft />
      </el-aside>
      <el-main class="maincss">
        <el-container style="height: 100%">
          <el-main>
            <projectMain></projectMain>
          </el-main>
          <el-aside class="rightaside">
            <el-row class="custom-style">
              <el-segmented v-model="segvalue" :options="segoptions" />
            </el-row>

            <el-row style="height: 50px; justify-content: center; margin-top: 50px">
              <el-text style="font-size: 24px">{{ $t('project.index.493980-0') }}</el-text>
            </el-row>
            <el-row style="margin: 20px">
              {{ $t('project.index.493980-1') }}
            </el-row>
            <el-row>
              <el-col :span="8" style="padding: 10px">
                <el-image src="/img/jpg/ai.jpg"></el-image>
              </el-col>
              <el-col :span="8" style="padding: 10px; background-color: #fff">
                <el-row>
                  <el-text style="font-size: 12pt; font-weight: 600"
                    >{{ $t('project.index.493980-2') }}</el-text
                  >
                </el-row>
                <el-row style="margin-top: 15px; font-size: 12pt">
                  {{ $t('project.index.493980-3') }}
                </el-row>
              </el-col>
              <el-col :span="8" style="padding: 10px; background-color: #eee"
                ><el-row>
                  <el-text style="font-size: 12pt; font-weight: 600"
                    >{{ $t('project.index.493980-4') }}</el-text
                  >
                </el-row>
                <el-row style="margin-top: 15px; font-size: 12pt">
                  {{ $t('project.index.493980-5') }}
                </el-row></el-col
              >
            </el-row>
            <el-row style="height: 600px"></el-row>
            <el-row style="height: 50px">
              <el-affix position="bottom" :offset="50">
                <el-input :placeholder="$t('project.index.493980-6')" style="height: 100px; width: 550px"
                  ><template #suffix>
                    <el-icon size="large"><Service /></el-icon> </template
                ></el-input>
              </el-affix>
            </el-row>
          </el-aside>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import projectLeft from "@/views/project/p_left.vue";
import projectMain from "@/views/project/p_main.vue";
import { ref } from "vue";
import { useI18n} from 'vue-i18n';
const { t } = useI18n();

const segvalue = ref(t('project.index.493980-7'));
const segoptions = [t('project.index.493980-7'), t('project.index.493980-8'), t('project.index.493980-9'), "Lambda 3"];
const rightaside = ref();
const popoverVisible = ref(0);
popoverVisible.value = false;
function handleClick(tab, event) {
  console.log(rightaside.value);
  popoverVisible.value = true;
  //rightaside.style = "--el-aside-width: 200px;";
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
  width: 600px;
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
.custom-style {
  width: 100%;
  height: 40px;
  padding-top: 50px;
  justify-content: center;
  .el-segmented {
    padding-left: 20px;
    --el-segmented-bg-color: #fff;
    --el-segmented-item-selected-color: #fff;
    --el-segmented-item-selected-bg-color: #7a5cfc;
    --el-border-radius-base: 16px;
  }
}
</style>
