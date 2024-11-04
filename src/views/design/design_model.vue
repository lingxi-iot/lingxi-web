<template>
  <div class="designmodel">
    <el-row style="display: flex; align-items: center">
      <el-col :span="15">
        <el-input style="width: 130px" prefix-icon="Search" />
      </el-col>
      <el-col :span="3">
        <el-icon>
          <Plus />
        </el-icon>
      </el-col>
      <el-col :span="3">
        <el-icon>
          <Expand />
        </el-icon>
      </el-col>
      <el-col :span="3">
        <el-icon>
          <ArrowDown />
        </el-icon>
      </el-col>
    </el-row>
    <el-row>
      <el-menu style="width: 100%" default-active="1">
        <el-menu-item index="1" style="height: 30px">
          <template #title>
            <el-icon>
              <Check />
            </el-icon>
            <span>{{ $t('design.design_model.9142512-0') }}</span>
          </template>
        </el-menu-item>
        <el-menu-item index="2" style="height: 30px">
          <template #title>
            <el-icon> </el-icon>
            <span>{{ $t('design.design_model.9142512-1') }}</span>
          </template>
        </el-menu-item>
      </el-menu>
    </el-row>
    <el-row width="100%">
      <el-divider />
      <el-tree
        highlight-current
        accordion
        :data="treeData"
        :props="treeDefaultProps"
        :render-content="renderContent"
        style="width: 100%"
      >
      </el-tree>
    </el-row>
  </div>
</template>
<style scoped>
.designmodel {
  width: 100%;
  height: 100%;
}
</style>

<script lang="tsx">
export default {
  name: "designmodel",
  data() {
    return {
      treeData: [
        {
          id: "1",
          label: this.$t('design.design_model.9142512-2'),
          leaf: false,
          children: [
            {
              id: "sss",
              label: this.$t('design.design_model.9142512-3'),
              leaf: false,
            },
            {
              id: "sssss",
              label: this.$t('design.design_model.9142512-4'),
            },
          ],
        },
        {
          id: "2",
          label: this.$t('design.design_model.9142512-5'),
          leaf: false,
          children: [
            {
              id: "sss",
              label: this.$t('design.design_model.9142512-3'),
              leaf: false,
            },
            {
              id: "sssss",
              label: this.$t('design.design_model.9142512-4'),
            },
          ],
        },
        {
          id: "3",
          label: this.$t('design.design_model.9142512-6'),
          leaf: false,
          children: [
            {
              id: "sss",
              label: this.$t('design.design_model.9142512-3'),
              leaf: false,
            },
            {
              id: "sssss",
              label: this.$t('design.design_model.9142512-4'),
            },
          ],
        },
        {
          id: "4",
          label: this.$t('design.design_model.9142512-7'),
          leaf: false,
          children: [
            {
              id: "sss",
              label: this.$t('design.design_model.9142512-3'),
              leaf: false,
            },
            {
              id: "sssss",
              label: this.$t('design.design_model.9142512-4'),
            },
          ],
        },
        {
          id: "5",
          label: this.$t('design.design_model.9142512-8'),
          leaf: false,
          children: [
            {
              id: "sss",
              label: this.$t('design.design_model.9142512-3'),
              leaf: false,
            },
            {
              id: "sssss",
              label: this.$t('design.design_model.9142512-4'),
            },
          ],
        },
        {
          id: "6",
          label: this.$t('design.design_model.9142512-9'),
          leaf: false,
          children: [
            {
              id: "sss",
              label: this.$t('design.design_model.9142512-3'),
              leaf: false,
            },
            {
              id: "sssss",
              label: this.$t('design.design_model.9142512-4'),
            },
          ],
        },
        {
          id: "7",
          label: this.$t('design.design_model.9142512-10'),
          leaf: false,
          children: [
            {
              id: "sss",
              label: this.$t('design.design_model.9142512-3'),
              leaf: false,
            },
            {
              id: "sssss",
              label: this.$t('design.design_model.9142512-4'),
            },
          ],
        },
      ],
      treeDefaultProps: {
        children: "children",
        label: "label",
        isLeaf: "leaf",
      },
    };
  },
  methods: {
    renderContent(h, { node, data, store }) {
      return (
        <div style="display:flex;align-items: center;padding:2px">
          {node.level == 1 ? (
            <el-icon>
              <FullScreen />
            </el-icon>
          ) : (
            ""
          )}
          <el-text style="padding:5px"> {node.label}</el-text>
        </div>
      );
    },
  },
};
</script>
