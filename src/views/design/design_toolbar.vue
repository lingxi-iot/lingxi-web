<template>
  <div class="designtoolbar">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-icon-svg iconName="icon-pointer"></el-icon-svg>
        <el-icon><CaretBottom /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item style="height: 40px">
            <el-icon-svg iconName="icon-pointer"></el-icon-svg>
          </el-dropdown-item>
          <el-dropdown-item style="height: 40px">
            <el-icon-svg iconName="icon-zoomin"></el-icon-svg>
          </el-dropdown-item>
          <el-dropdown-item style="height: 40px">
            <el-icon-svg iconName="icon-zoomout"></el-icon-svg>
          </el-dropdown-item>
          <el-dropdown-item style="height: 40px">
            <el-icon-svg iconName="icon-hand"></el-icon-svg>
          </el-dropdown-item>
          <el-dropdown-item style="height: 40px">
            <el-icon-svg iconName="icon-fullscreen"></el-icon-svg>
          </el-dropdown-item>
          <el-dropdown-item style="height: 40px">
            <el-icon-svg iconName="icon-link"></el-icon-svg>
          </el-dropdown-item>
          <el-dropdown-item style="height: 40px">
            <el-icon-svg iconName="icon-ruler" @click="onRulerClick"></el-icon-svg>
          </el-dropdown-item>
          <el-dropdown-item style="height: 40px">
            <el-icon-svg
              iconName="icon-background"
              @click="onBackgroundClick"
            ></el-icon-svg>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <el-dropdown :hide-on-click="false">
      <span class="el-dropdown-link">
        <svg
          data-v-6d64af8d=""
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          style="font-size: 16px; transform: rotate(0deg)"
        >
          <defs>
            <clipPath id="mg-icon1a">
              <rect width="16" height="16" rx="0"></rect>
            </clipPath>
          </defs>
          <g clip-path="url(#mg-icon1a)">
            <path
              fill="currentcolor"
              fill-opacity=".85"
              fill-rule="evenodd"
              d="M15 1H1v14h14zM2.5 13.5v-11h11v11z"
            ></path>
            <rect
              width="7"
              height="7"
              x="4.5"
              y="4.5"
              fill="currentcolor"
              fill-opacity=".85"
              rx="0"
              style="opacity: 0.5"
            ></rect>
          </g>
        </svg>
        <el-icon><CaretBottom /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="(item, idx) of assetsSvg"
            :key="idx"
            draggable="true"
            @dragstart="onDragstart($event, item)"
            ><img :src="item.avatar || item.url" style="width: 32px; height: 32px"
          /></el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <el-dropdown :hide-on-click="false">
      <span class="el-dropdown-link">
        <svg
          data-v-6d64af8d=""
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          style="font-size: 16px; transform: rotate(0deg)"
        >
          <defs>
            <clipPath id="mg-icon210a">
              <rect width="16" height="16" rx="0"></rect>
            </clipPath>
          </defs>
          <g clip-path="url(#mg-icon210a)">
            <path
              fill="currentcolor"
              fill-opacity=".85"
              fill-rule="evenodd"
              d="M1 1h14v14H1zm1.5 1.5v11h11v-11z"
            ></path>
          </g>
        </svg>
        <el-icon><CaretBottom /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="(item, idx) of assetsImage"
            :key="idx"
            draggable="true"
            @dragstart="onDragstart($event, item)"
            ><img :src="item.avatar || item.url" style="width: 32px; height: 32px"
          /></el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <el-dropdown :hide-on-click="false">
      <span class="el-dropdown-link">
        <svg
          data-v-6d64af8d=""
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          style="font-size: 16px; transform: rotate(0deg)"
        >
          <defs>
            <clipPath id="mg-icon88a">
              <rect width="16" height="16" rx="0"></rect>
            </clipPath>
          </defs>
          <g clip-path="url(#mg-icon88a)">
            <path
              fill="currentcolor"
              fill-opacity=".85"
              fill-rule="evenodd"
              d="M1.75.75v2.375h1.5V2.25h4v11.5H6v1.5h4v-1.5H8.75V2.25h4v.875h1.5V.75z"
            ></path>
          </g>
        </svg>
        <el-icon><CaretBottom /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="(item, idx) of assetsGif"
            :key="idx"
            draggable="true"
            @dragstart="onDragstart($event, item)"
            ><img :src="item.avatar || item.url" style="width: 32px; height: 32px"
          /></el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <el-dropdown :hide-on-click="false">
      <span class="el-dropdown-link">
        <svg
          data-v-6d64af8d=""
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          style="font-size: 16px; transform: rotate(0deg)"
        >
          <defs>
            <clipPath id="mg-icon338a">
              <rect width="16" height="16" rx="0"></rect>
            </clipPath>
          </defs>
          <g clip-path="url(#mg-icon338a)">
            <path
              fill="currentcolor"
              fill-opacity=".85"
              fill-rule="evenodd"
              d="M8 15q.172 0 .343-.008.172-.009.343-.026.171-.017.341-.042t.339-.058q.168-.034.335-.076.167-.041.331-.091.164-.05.326-.108.162-.058.32-.124.16-.066.315-.14.155-.072.307-.154.151-.08.299-.169.147-.088.29-.184.143-.095.28-.197.139-.103.272-.212t.26-.224q.127-.116.249-.237.121-.122.237-.25.115-.126.224-.26.11-.132.212-.27t.197-.281q.096-.143.184-.29.088-.148.17-.3.08-.15.154-.306.073-.155.14-.314.065-.159.123-.32.058-.163.108-.327.05-.164.091-.331.042-.167.076-.335.033-.169.058-.339t.042-.34q.017-.172.026-.344Q15 8.172 15 8q0-.172-.008-.343-.009-.172-.026-.343-.017-.171-.042-.341t-.058-.339q-.034-.168-.076-.335-.041-.167-.091-.331-.05-.164-.108-.326-.058-.162-.124-.32-.066-.16-.14-.315-.072-.155-.154-.307-.08-.151-.169-.299-.088-.147-.184-.29-.095-.143-.197-.28-.103-.139-.212-.272t-.224-.26q-.116-.127-.237-.249-.122-.121-.25-.237-.126-.115-.26-.224-.132-.11-.27-.211-.138-.103-.281-.198-.143-.096-.29-.184-.148-.088-.3-.17-.15-.08-.306-.154-.155-.073-.314-.14-.159-.065-.32-.123-.163-.058-.327-.108-.164-.05-.331-.091-.167-.042-.335-.075-.169-.034-.339-.06-.17-.024-.34-.041-.172-.017-.344-.026Q8.172 1 8 1q-.172 0-.343.008-.172.009-.343.026-.171.017-.341.042t-.339.059q-.168.033-.335.075-.167.042-.331.091-.164.05-.326.108-.162.058-.32.124-.16.066-.315.14-.155.073-.307.154-.151.08-.299.169-.147.088-.29.184-.143.095-.28.198-.139.102-.272.21-.133.11-.26.225-.127.116-.249.237-.121.122-.237.25-.115.126-.224.26-.11.132-.211.27-.103.138-.198.281-.096.143-.184.29-.088.148-.17.3-.08.15-.154.306-.073.155-.14.314-.065.159-.123.32-.058.163-.108.327-.05.164-.091.331-.042.167-.075.335-.034.169-.06.339-.024.17-.041.34-.017.172-.026.344Q1 7.828 1 8v7zM2.5 8v5.5H8q2.278 0 3.89-1.61Q13.5 10.277 13.5 8t-1.61-3.89Q10.277 2.5 8 2.5T4.11 4.11Q2.5 5.723 2.5 8"
            ></path>
          </g>
        </svg>
        <el-icon><CaretBottom /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="(item, idx) of assetsJson"
            :key="idx"
            draggable="true"
            @dragstart="onDragstart($event, item)"
            ><img :src="item.avatar || item.url" style="width: 32px; height: 32px"
          /></el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-dropdown :hide-on-click="true">
      <span class="el-dropdown-link">
        <el-icon-svg iconName="icon-export"></el-icon-svg>
        <el-icon><CaretBottom /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item style="height: 40px">
            <el-icon-svg iconName="icon-line" @click="onGraphClick('Line')"></el-icon-svg>
          </el-dropdown-item>
          <el-dropdown-item style="height: 40px" @click="onGraphClick('Curve')">
            <el-icon-svg iconName="icon-curve"></el-icon-svg>
          </el-dropdown-item>
          <el-dropdown-item style="height: 40px" @click="onGraphClick('Rect')">
            <el-icon-svg iconName="icon-rect"></el-icon-svg>
          </el-dropdown-item>
          <el-dropdown-item style="height: 40px" @click="onGraphClick('Circle')">
            <el-icon-svg iconName="icon-circle"></el-icon-svg>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { el } from "element-plus/es/locales.mjs";
import { AssetInfo, GraphType } from "../../lib/inspiration/common/render";
import { assetsModules } from "./resData.ts";
import {
  Edit,
  Plus,
  Minus,
  Pointer,
  FullScreen,
  Connection,
  Filter,
  Switch,
  Files,
  ZoomOut,
} from "@element-plus/icons-vue";
import { RenderContext } from "../../lib/inspiration/context.ts";
import { getCurrentInstance } from "vue";

export default {
  name: "designtoolbar",
  data() {
    return {
      context: {} as RenderContext,
      assetsSvg: assetsModules.svg.map((item) => ({
        url: item.url,
        avatar: item.avatar,
        points: Array.isArray(item.points) ? item.points : [],
      })),
      assetsImage: assetsModules.image.map((item) => ({
        url: item.url,
        avatar: item.avatar,
        points: Array.isArray(item.points) ? item.points : [],
      })),
      assetsGif: assetsModules.gif.map((item) => ({
        url: item.url,
        avatar: item.avatar,
        points: Array.isArray(item.points) ? item.points : [],
      })),
      assetsJson: assetsModules.json.map((item) => ({
        url: item.url,
        avatar: item.avatar,
        points: Array.isArray(item.points) ? item.points : [],
      })),
    };
  },
  mounted() {},
  methods: {
    onDragstart(e: GlobalEventHandlersEventMap["dragstart"], item: AssetInfo) {
      if (e.dataTransfer) {
        e.dataTransfer.setData("src", item.url);
        e.dataTransfer.setData("points", JSON.stringify(item.points)); // 传递连接点信息
        e.dataTransfer.setData("type", item.url.match(/([^./]+)\.([^./]+)$/)?.[2] ?? "");
      }
    },
    onRulerClick() {
      var ins = this.$store.getters.getInspiration;
      ins.toggleShowRuler();
    },
    onBackgroundClick() {
      var ins = this.$store.getters.getInspiration;
      ins.toggleShowBackground();
    },
    onGraphClick(type) {
      var ins = this.$store.getters.getInspiration;
      ins.context.changeGraphType(type);
    },
  },
};
</script>
<style scoped>
.designtoolbar {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  padding: 10px;
}
.el-dropdown-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  margin-right: 20px;
}
.el-dropdown-link:hover {
  background-color: #3670f7;
  color: #ffffff;
  border-radius: 5px;
}
.svgClass {
  background-color: #3670f7;
  color: #ffffff;
  border-radius: 5px;
}
</style>
