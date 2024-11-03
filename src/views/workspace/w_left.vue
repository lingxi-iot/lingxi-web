<template>
  <el-row
    style="
      height: calc(100vh - 210px);
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
    "
  >
    <el-row style="padding: 30px 0 20px 30px; width: 100%">
      <el-col :span="8" style="display: flex; align-items: center; flex-wrap: wrap">
        <img src="../../assets/images/logo.png" />
      </el-col>
      <el-col :span="16" style="display: flex; align-items: center; flex-wrap: wrap">
        <el-row style="width: 100%">
          <el-text style="font-weight: bold">{{ $t('workspace.w_left.202501-0') }}</el-text>
        </el-row>
        <el-row style="width: 100%">
          <el-text size="small">Internet of Things</el-text>
        </el-row>
      </el-col>
    </el-row>
    <el-row style="display: flex; justify-content: center; width: 100%">
      <el-menu
        default-active="1"
        style="width: 80%; border-right: 0px; background-color: #f8f8f8"
      >
        <el-menu-item index="1">
          <el-icon-svg
            iconName="icon-home"
            style="width: 20px; height: 20px; margin-right: 10px"
          />
          {{ $t('workspace.w_left.202501-1') }}
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon-svg
            iconName="icon-project"
            style="width: 20px; height: 20px; margin-right: 10px"
          />
          {{ $t('workspace.w_left.202501-2') }}
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon-svg
            iconName="icon-design"
            style="width: 20px; height: 20px; margin-right: 10px"
          />
          {{ $t('workspace.w_left.202501-3') }}
        </el-menu-item>
        <!-- <el-menu-item index="4">
                <el-icon-svg
                  iconName="icon-app"
                  style="width: 20px; height: 20px; margin-right: 10px"
                />
                我的应用
              </el-menu-item> -->

        <el-menu-item index="5">
          <el-icon-svg
            iconName="icon-storage"
            style="width: 20px; height: 20px; margin-right: 10px"
          />
          {{ $t('workspace.w_left.202501-4') }}
        </el-menu-item>
      </el-menu>
    </el-row>
  </el-row>
  <el-row style="height: 100px; width: 100%">
    <el-row
      style="
        background: linear-gradient(to right, #597df9, #955bee);
        width: 100%;
        height: 50px;
        border-radius: 10px;
        margin-bottom: 20px;
        margin-left: 10px;
        margin-right: 10px;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        font-size: small;
      "
    >
      <el-icon-svg iconName="icon-warehouse"> </el-icon-svg>
      {{ $t('workspace.w_left.202501-5') }}
    </el-row>
    <el-row style="width: 100%">
      <el-row style="width: 100%">
        <el-icon-svg
          style="width: 20px; height: 20px; margin-left: 10px"
          iconName="icon-member"
        />
        <el-text style="font-size: 14px; color: #999999"> {{ $t('workspace.w_left.202501-6') }} </el-text>
      </el-row>
      <el-progress :percentage="40" style="width: 100%; margin-left: 10px" />
      <el-row style="width: 100%">
        <el-text style="font-size: 12px; color: #999999; margin-left: 10px">
          {{ $t('workspace.w_left.202501-7') }}
        </el-text>
      </el-row>
    </el-row>
    <el-divider />
    <el-row style="width: 100%">
      <el-col :span="8" style="display: flex; justify-content: center; align-items: top"
        ><el-icon><Setting /></el-icon
      ></el-col>
      <el-col :span="8" style="display: flex; justify-content: center"
        ><el-icon><User /></el-icon>
      </el-col>
      <el-col :span="8" style="display: flex; justify-content: center"
        ><el-icon><Expand /></el-icon>
      </el-col>
    </el-row>
  </el-row>
</template>
<script lang="ts" setup></script>
<style scoped>
.el-menu-item.is-active {
  color: blueviolet;
  background-color: #efefef;
}
.el-menu-item {
  border-radius: 10px;
  margin-top: 5px;
}
.el-menu-item:hover {
  background-color: #efefef;
}
</style>
