<template>
  <div class="design-right_device">
    <el-card style="max-width: 480px" shadow="never">
      <template #header>
        <div class="card-header">
          <span>{{ $t('design.design_right_device.914230-0') }}</span>
        </div>
      </template>
      <el-radio-group v-model="linkmodel">
        <el-row v-for="item in jointype" :key="item.value">
          <el-radio :value="item.value" size="large" :label="item.label"></el-radio>
        </el-row>
      </el-radio-group>
    </el-card>
  </div>
</template>
<script lang="ts">
import { PropType } from "vue";
import { IotNodeType } from "../../lib/inspiration/plugin/iot";
import { v4 as uuidv4 } from "uuid";
import { NodeMessage } from "../../lib/inspiration/plugin/iot/iotnode";

export default {
  name: "designrightdevice",
  props: { message: { type: Object as PropType<NodeMessage> } },

  data() {
    return {
      linkmodel: "",
      jointype: [
        {
          label: this.$t('design.design_right_device.914230-1'),
          value: "Direct",
        },
        {
          label: this.$t('design.design_right_device.914230-2'),
          value: "GateWay",
        },
        {
          label: this.$t('design.design_right_device.914230-3'),
          value: "Platform",
        },
        {
          label: this.$t('design.design_right_device.914230-4'),
          value: "SDK",
        },
      ],
    };
  },
  watch: {
    linkmodel(newVal) {
      var ins = this.$store.getters.getInspiration;
      var obj = this.jointype.find((item) => {
        return item.value === newVal;
      });
      console.log(this.id);
      ins.iotScence.update([
        {
          id: this.message.id,
          text: obj?.label,
          value: obj?.value,
          type: IotNodeType.Device,
        },
      ]);
    },
  },
};
</script>
<style scoped>
.el-row {
  margin-left: 20px;
  width: 100%;
}
</style>
