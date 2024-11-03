<template>
  <div class="design-right_device">
    <el-card style="max-width: 480px" shadow="never">
      <template #header>
        <div class="card-header">
          <span>接入方式</span>
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
          label: "设备直连",
          value: "Direct",
        },
        {
          label: "网关/子设备",
          value: "GateWay",
        },
        {
          label: "平台/设备",
          value: "Platform",
        },
        {
          label: "SDK泛链接",
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
