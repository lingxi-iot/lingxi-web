<template>
  <div class="design-right-network">
    <el-card style="max-width: 480px" shadow="never">
      <template #header>
        <div>
          <span>网络通道</span>
        </div>
      </template>
      <el-radio-group v-model="curNetwork">
        <el-row v-for="item in network" :key="item.value">
          <el-radio :value="item.value" :label="item.label"></el-radio>
        </el-row>
      </el-radio-group>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.el-row {
  margin-left: 20;
  width: 100%;
}
.el-card .el-card__header {
  padding: 1px !important;
}
</style>
<script lang="ts">
import { PropType } from "vue";
import { IotNodeType } from "../../lib/inspiration/plugin/iot";
import { v4 as uuidv4 } from "uuid";
import { NodeMessage } from "../../lib/inspiration/plugin/iot/iotnode";

export default {
  name: "designrightnetwork",
  props: { message: { type: Object as PropType<NodeMessage> } },

  data() {
    return {
      curNetwork: "",
      network: [
        {
          value: "MQTT",
          label: "MQTT",
        },
        {
          value: "OPC",
          label: "OPC UA/DA",
        },
        {
          value: "Modbus",
          label: "Modbus  TCP/RTU",
        },
        {
          value: "TCP",
          label: "TCP",
        },
        {
          value: "HTTP",
          label: "HTTP/HTTPS",
        },
        {
          value: "JT808",
          label: "JT808",
        },
        {
          value: "RocketMQ",
          label: "RocketMQ",
        },
        {
          value: "GB28181",
          label: "GB28181",
        },
        {
          value: "STOMP",
          label: "STOMP",
        },
        {
          value: "Other",
          label: "其他",
        },
      ],
    };
  },
  watch: {
    curNetwork(newVal) {
      var ins = this.$store.getters.getInspiration;
      var obj = this.network.find((item) => {
        return item.value === newVal;
      });

      ins.iotScence.update([
        {
          id: this.message.id,
          text: obj?.label,
          value: obj?.value,
          type: IotNodeType.Network,
        },
      ]);
    },
  },
};
</script>
