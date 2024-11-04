<template>
  <div class="design-right-eventbus">
    <el-card style="max-width: 480px" shadow="never">
      <template #header>
        <div>
          <span>{{ $t('design.design_right_eventbus.914258-0') }}</span>
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
          label: this.$t('design.design_right_eventbus.914258-1'),
        },
        {
          value: "OPC",
          label: this.$t('design.design_right_eventbus.914258-2'),
        },
        {
          value: "Modbus",
          label: this.$t('design.design_right_eventbus.914258-3'),
        },
        {
          value: "TCP",
          label: this.$t('design.design_right_eventbus.914258-4'),
        },
        {
          value: "HTTP",
          label: this.$t('design.design_right_eventbus.914258-5'),
        },
        {
          value: "JT808",
          label: this.$t('design.design_right_eventbus.914258-6'),
        },
        {
          value: "RocketMQ",
          label: this.$t('design.design_right_eventbus.914258-7'),
        },
        {
          value: "GB28181",
          label: this.$t('design.design_right_eventbus.914258-8'),
        },
        {
          value: "STOMP",
          label: this.$t('design.design_right_eventbus.914258-9'),
        },
        {
          value: "Other",
          label: this.$t('design.design_right_eventbus.914258-10'),
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
