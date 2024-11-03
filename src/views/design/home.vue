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
