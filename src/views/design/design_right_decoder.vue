<template>
  <div class="design-right-decoder">
    <el-card style="max-width: 480px" shadow="never">
      <template #header>
        <div>
          <span>{{ $t('design.design_right_decoder.914259-0') }}</span>
        </div>
      </template>
      <el-radio-group v-model="curDecoder">
        <el-row v-for="item in decoder" :key="item.value">
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
import { IotNodeType } from "../../lib/inspiration/plugin/iot";
import { v4 as uuidv4 } from "uuid";
import {type NodeMessage } from "../../lib/inspiration/plugin/iot/iotnode";
import { messageConfig } from "element-plus";
import { PropType } from "vue";

export default {
  name: "designrightdecoder",
  props: { message: {type: Object as PropType<NodeMessage>}  },
  data() {
    return {
      curDecoder: this.message?.value,
      decoder: [
        {
          value: "heartbeat",
          label: this.$t('design.design_right_decoder.914259-1'),
        },
        {
          value: "openremote",
          label: this.$t('design.design_right_decoder.914259-2'),
        },
        {
          value: "pass",
          label: this.$t('design.design_right_decoder.914259-3'),
        },
      ],
    };
  },
  watch: {
    curDecoder(newVal) {
      var ins = this.$store.getters.getInspiration;
      var obj = this.decoder.find((item) => {
        return item.value === newVal;
      });

      ins.iotScence.update([
        {
          id: this.message.id,
          text: obj?.label,
          value: obj?.value,
          type: IotNodeType.Decoder,
        },
      ]);
    },
  },
};
</script>
