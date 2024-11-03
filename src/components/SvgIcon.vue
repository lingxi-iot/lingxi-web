<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconClassName"></use>
  </svg>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  // 添加自定义类名
  className: {
    type: String,
    default: "",
  },
  // iconfont中的名字
  iconName: {
    type: String,
    required: true,
  },
});

const svgClass = computed(() => {
  if (props.className) {
    return `el-icon-svg ${props.className}`;
  } else {
    return "el-icon-svg";
  }
});
const iconClassName = computed(() => `#${props.iconName}`);
</script>

<style lang="scss" scoped>
.el-icon-svg {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
