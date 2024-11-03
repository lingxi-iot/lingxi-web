<template>
  <div ref="inspirationCanvs" class="inspiCanvs"></div>
</template>
<style scoped>
.inspiCanvs {
  width: 100%;
  height: calc(100vh - 50px);
}
</style>
<script lang="ts">
import { Inspiration } from "../../lib/inspiration/index.ts";

import { RenderContext } from "../../lib/inspiration/context.ts";
import { GraphType } from "../../lib/inspiration/common/event.ts";
import { getCurrentInstance } from "vue";

export default {
  name: "designcanvs",
  data() {
    return {
      inspiration: {} as Inspiration,
    };
  },
  components: {},
  mounted() {
    const inspCanvs: HTMLDivElement = this.$refs.inspirationCanvs as HTMLDivElement;

    this.inspiration = new Inspiration();
    var sWidth = inspCanvs.clientWidth;
    var sHeight = inspCanvs.clientHeight;
    if (inspCanvs.clientWidth <= 0 && inspCanvs.clientHeight <= 0) {
      sWidth = 1;
      sHeight = 1;
    }

    this.inspiration.init(inspCanvs, {
      width: sWidth,
      height: sHeight,
      showRuler: true,
      showBackground: false,
      showRefLine: true,
      attractResize: true,
      attractBg: true,
      attractNode: true,
    });
    let resizeObs = new ResizeObserver((entries) => {
      for (let entry of entries) {
        let { width, height } = entry.contentRect;
        if (width > 0 && height > 0) this.inspiration.resize(width, height);
      }
    });
    resizeObs.observe(inspCanvs);
    this.inspiration.redraw();
    this.$store.dispatch("createInspiration", this.inspiration);
  },
};
</script>
