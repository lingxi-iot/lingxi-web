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
          <el-text style="font-weight: bold">智慧大棚</el-text>
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
            首页
          </template>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon-svg
              iconName="icon-project"
              style="width: 20px; height: 20px; margin-right: 10px"
            />
            设备管理
          </template>
          <el-menu-item index="2-1">设备资产</el-menu-item>
          <el-menu-item index="2-2">产品/物模型</el-menu-item>
          <el-menu-item index="2-3">监控/日志</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon-svg
              iconName="icon-design"
              style="width: 20px; height: 20px; margin-right: 10px"
            />
            采集点位
          </template>
          <el-menu-item index="3-1">采集通道</el-menu-item>
          <el-menu-item index="3-2">采集点位</el-menu-item>
          <el-menu-item index="3-3">设备映射</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="6">
          <template #title>
            <el-icon-svg
              iconName="icon-storage"
              style="width: 20px; height: 20px; margin-right: 10px"
            />
            数据整合
          </template>
          <el-menu-item index="6-1">数据接入</el-menu-item>
          <el-menu-item index="6-2">API接入</el-menu-item>
          <el-menu-item index="6-3">视频接入</el-menu-item>
          <el-menu-item index="6-3">人工智能</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="7">
          <template #title>
            <el-icon-svg
              iconName="icon-storage"
              style="width: 20px; height: 20px; margin-right: 10px"
            />
            数据可视化
          </template>
          <el-menu-item index="7-1">数据孪生</el-menu-item>
          <el-menu-item index="7-2">工业组态</el-menu-item>
          <el-menu-item index="7-3">仪表盘</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="8">
          <template #title>
            <el-icon-svg
              iconName="icon-storage"
              style="width: 20px; height: 20px; margin-right: 10px"
            />
            互联应用
          </template>
          <el-menu-item index="8-1">应用管理</el-menu-item>
          <el-menu-item index="8-2">授权控制</el-menu-item>
          <el-menu-item index="8-3">订阅推送</el-menu-item>
          <el-menu-item index="6-4">规则引擎</el-menu-item>
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
