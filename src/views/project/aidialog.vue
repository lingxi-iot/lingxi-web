<template>
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
              <el-col :span="4" style="padding: 10px">
                <el-image src="/img/jpg/ai.jpg"></el-image>
              </el-col>
              <el-col :span="10" style="padding: 10px; background-color: #fff">
                <el-row>
                  <el-text style="font-size: 12pt; font-weight: 600"
                    >{{ $t('project.index.493980-2') }}</el-text
                  >
                </el-row>
                <el-row style="margin-top: 15px; font-size: 12pt">
                  {{ $t('project.index.493980-3') }}
                </el-row>
              </el-col>
              <el-col :span="10" style="padding: 10px; background-color: #eee"
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
            <el-row style="height: 100px"></el-row>
            <el-row style="width: 100%;">
              <!-- <el-affix position="bottom" :offset="50"> -->
                <el-input :placeholder="$t('project.index.493980-6')" style="height: 100px; width: 100%"
                  ><template #suffix>
                    <el-icon size="large"><Service /></el-icon> </template
                ></el-input>
              <!-- </el-affix> -->
            </el-row>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useI18n} from 'vue-i18n';
const { t } = useI18n();
const segvalue = ref(t('project.index.493980-7'));
const segoptions = [t('project.index.493980-7'), t('project.index.493980-8'), t('project.index.493980-9'), "Lambda 3"];
</script>
<style scoped>

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