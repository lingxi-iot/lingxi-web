<template>
  <div class="design-right-eventbus">
    <el-card style="max-width: 480px" shadow="never">
      <template #header>
        <div>
          <span>事件总线</span>
        </div>
      </template>
      <el-radio-group v-model="curEventbus">
        <el-row v-for="item in eventbus" :key="item.value">
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
  name: "designrighteventbus",
  props: { message: { type: Object as PropType<NodeMessage> } },

  data() {
    return {
      curEventbus: "",
      eventbus: [
        {
          value: "MQTT",
          label: "MQTT过滤器",
        },
        {
          value: "OPC",
          label: "OPC过滤器",
        },
        {
          value: "Modbus",
          label: "Modbus过滤器",
        },
        {
          value: "TCP",
          label: "TCP过滤器",
        },
        {
          value: "HTTP",
          label: "HTTP过滤器",
        },
        {
          value: "JT808",
          label: "JT808过滤器",
        },
        {
          value: "RocketMQ",
          label: "RocketMQ过滤器",
        },
        {
          value: "GB28181",
          label: "GB28181过滤器",
        },
        {
          value: "STOMP",
          label: "STOMP过滤器",
        },
        {
          value: "Other",
          label: "其他过滤器",
        },
      ],
    };
  },
  watch: {
    curEventbus(newVal) {
      var ins = this.$store.getters.getInspiration;
      var obj = this.eventbus.find((item) => {
        return item.value === newVal;
      });

      ins.iotScence.update([
        {
          id: this.message.id,
          text: obj?.label,
          value: obj?.value,
          type: IotNodeType.EventBus,
        },
      ]);
    },
  },
};
</script>
