<template>
  <el-row
    style="
      height: calc(100vh - 80px);
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
          <el-text style="font-weight: bold">{{ $t('project.p_left.493992-0') }}</el-text>
        </el-row>
        <el-row style="width: 100%">
          <el-text size="small">Smart Greenhouse</el-text>
        </el-row>
      </el-col>
    </el-row>
    <el-row style="display: flex; justify-content: center; width: 100%">
      <el-menu
        default-active="1"
        :unique-opened="true"
        style="width: 80%; border-right: 0px; background-color: #f8f8f8"
      >
        <el-menu-item index="1">
          <template #title>
            <el-icon-svg
              iconName="icon-home"
              style="width: 20px; height: 20px; margin-right: 10px"
            />
            {{ $t('project.p_left.493992-1') }}
          </template>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon-svg
              iconName="icon-project"
              style="width: 20px; height: 20px; margin-right: 10px"
            />
            {{ $t('project.p_left.493992-2') }}
          </template>
          <el-menu-item index="2-1">{{ $t('project.p_left.493992-3') }}</el-menu-item>
          <el-menu-item index="2-2">{{ $t('project.p_left.493992-4') }}</el-menu-item>
          <el-menu-item index="2-3">{{ $t('project.p_left.493992-5') }}</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon-svg
              iconName="icon-design"
              style="width: 20px; height: 20px; margin-right: 10px"
            />
            {{ $t('project.p_left.493992-6') }}
          </template>
          <el-menu-item index="3-1">{{ $t('project.p_left.493992-7') }}</el-menu-item>
          <el-menu-item index="3-2">{{ $t('project.p_left.493992-6') }}</el-menu-item>
          <el-menu-item index="3-3">{{ $t('project.p_left.493992-8') }}</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="6">
          <template #title>
            <el-icon-svg
              iconName="icon-storage"
              style="width: 20px; height: 20px; margin-right: 10px"
            />
            {{ $t('project.p_left.493992-9') }}
          </template>
          <el-menu-item index="6-1">{{ $t('project.p_left.493992-10') }}</el-menu-item>
          <el-menu-item index="6-2">{{ $t('project.p_left.493992-11') }}</el-menu-item>
          <el-menu-item index="6-3">{{ $t('project.p_left.493992-12') }}</el-menu-item>
          <el-menu-item index="6-3">{{ $t('project.p_left.493992-13') }}</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="7">
          <template #title>
            <el-icon-svg
              iconName="icon-storage"
              style="width: 20px; height: 20px; margin-right: 10px"
            />
            {{ $t('project.p_left.493992-14') }}
          </template>
          <el-menu-item index="7-1">{{ $t('project.p_left.493992-15') }}</el-menu-item>
          <el-menu-item index="7-2">{{ $t('project.p_left.493992-16') }}</el-menu-item>
          <el-menu-item index="7-3">{{ $t('project.p_left.493992-17') }}</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="8">
          <template #title>
            <el-icon-svg
              iconName="icon-storage"
              style="width: 20px; height: 20px; margin-right: 10px"
            />
            {{ $t('project.p_left.493992-18') }}
          </template>
          <el-menu-item index="8-1">{{ $t('project.p_left.493992-19') }}</el-menu-item>
          <el-menu-item index="8-2">{{ $t('project.p_left.493992-20') }}</el-menu-item>
          <el-menu-item index="8-3">{{ $t('project.p_left.493992-21') }}</el-menu-item>
          <el-menu-item index="6-4">{{ $t('project.p_left.493992-22') }}</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-row>
  </el-row>
  <el-row style="height: 50px; width: 100%">
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
