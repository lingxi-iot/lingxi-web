<template>
  <div class="appcontainer">
    <el-container class="common-layout">
      <el-header
        style="
          height: 50px;
          border: 1px solid #d8d8d8;
          margin: 0px;
          display: flex;
          align-items: center;
        "
      >
        <designtop style="width: 100%"></designtop>
      </el-header>
      <el-container>
        <el-aside width="240px">
          <designleft style="width: 100%"></designleft>
        </el-aside>
        <el-main
          style="
            background-color: #ffffff;
            width: 100%;
            padding: 0px;
            border: 1px solid #d8d8d8;
          "
        >
          <designcanvs style="width: 100%"></designcanvs>
        </el-main>
        <el-aside width="240px">
          <designright></designright>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import designtop from "./design_top.vue";
import designleft from "./design_left.vue";
import designcanvs from "./design_canvs.vue";
import designright from "./design_right.vue";
import { getCurrentInstance } from "vue";
import { ElNotification } from "element-plus";
import { ElMessage, ElMessageBox } from 'element-plus'
import { onBeforeUnmount } from 'vue';

export default {
  name: "designhome",
  components: {
    designtop,
    designleft,
    designcanvs,
    designright,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      cacheData: false
    };
  },
  mounted() {
    //console.log("mounted");
    var { $eventbus } = getCurrentInstance().appContext.config.globalProperties;
    if ($eventbus) {
      $eventbus.on("*", (type, e) => {
        console.log("=====" + type);
        console.log(e);
        // ElNotification({
        //   title: type,
        //   message: e,
        //   type: "success",
        // });
      });
    }
  },
  onBeforeUnmount(){
    console.log('组件即将卸载，防止刷新');
  },
  beforeRouteLeave(to, from, next) {
    // 在路由离开时判断是否需要缓存数据
    if (this.cacheData) {
      // 如果去往特定页面，则缓存数据
      
      next();
    } else {
      // 否则不缓存数据
      console.log('Leaving page');
    ElMessageBox.confirm(
    '该设计尚未保存，点击确定后将丢失所设计数据. 是否继续?',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(() => {
      this.cacheData = true;
      next();
    }).catch(() => {
      this.cacheData = false;
      next(false);
    });
    }
  },
  setup() {
    //const { proxy, ctx } = getCurrentInstance();
    //console.log(proxy.$eventbus);
    //return {};
  },
};
</script>

<style scoped>
body {
  font-size: 12pt;
}
.appcontainer {
  width: 100%;
}

.common-layout {
  height: calc(100vh - 50px);
}
</style>
