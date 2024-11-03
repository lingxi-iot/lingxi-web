<template>
  <div>
    <designproduct v-if="active === 'Product'" :message="curMessage"></designproduct>
    <designrightdevice
      v-if="active === 'Device'"
      :message="curMessage"
    ></designrightdevice>
    <designriqhtnetwork
      v-if="active === 'Network'"
      :message="curMessage"
    ></designriqhtnetwork>
    <designriqhteventbus
      v-if="active === 'EventBus'"
      :message="curMessage"
    ></designriqhteventbus>
    <designrightdecoder
      v-if="active === 'Decoder'"
      :message="curMessage"
    ></designrightdecoder>
    <designrightproductevent
      v-if="active === 'ProductEvent'"
      :message="curMessage"
    ></designrightproductevent>
  </div>
</template>
<script lang="ts">
import { getCurrentInstance, ref } from "vue";
import designbaseinfo from "./design_baseinfo.vue";
import designproduct from "./design_product.vue";
import designrightdevice from "./design_right_device.vue";
import designriqhtnetwork from "./design_right_network.vue";
import designriqhteventbus from "./design_right_eventbus.vue";
import designrightdecoder from "./design_right_decoder.vue";
import designrightproductevent from "./design_right_productevent.vue";

import { ElNotification } from "element-plus";
import { v4 as uuidv4 } from "uuid";
export default {
  name: "designright",
  data() {
    return {
      active: "Product",
      curMessage: {},
    };
  },
  components: {
    designbaseinfo,
    designproduct,
    designrightdevice,
    designriqhtnetwork,
    designriqhteventbus,
    designrightdecoder,
    designrightproductevent,
  },
  mounted() {
    var { $eventbus } = getCurrentInstance().appContext.config.globalProperties;
    if ($eventbus) {
      $eventbus.on("*", (type: string, e: any) => {
        if (
          type == "IotNodeClick" ||
          type == "IotMutiNodeClick" ||
          type == "IotMoreActionClick"
        ) {
          this.active = e.type;
          this.curMessage = e;
        } else {
          this.active = "Product";
          this.curMessage = {};
        }
      });
    }
  },
};
</script>
<style scoped></style>
