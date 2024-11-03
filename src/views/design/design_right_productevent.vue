<template>
  <div class="design-right-decoder">
    <el-card style="max-width: 480px" shadow="never">
      <template #header>
        <div>
          <span>产品事件</span>
        </div>
      </template>
      <el-radio-group v-model="curProductEvent">
        <el-row v-for="item in productevent" :key="item.value">
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
  name: "designrightproductevent",
  props: { message: { type: Object as PropType<NodeMessage> } },

  data() {
    return {
      curProductEvent: "",
      productevent: [
        {
          value: "heartbeat",
          label: "设备心跳",
        },
        {
          value: "openremote",
          label: "远程开门失败告警",
        },
        {
          value: "pass",
          label: "人员通行记录上报",
        },
      ],
    };
  },
  watch: {
    curProductEvent(newVal) {
      var ins = this.$store.getters.getInspiration;
      var obj = this.productevent.find((item) => {
        return item.value === newVal;
      });

      ins.iotScence.update([
        {
          id: this.message.id,
          text: obj?.label,
          value: obj?.value,
          type: IotNodeType.ProductEvent,
        },
      ]);
    },
  },
};
</script>
