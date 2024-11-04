<template>
    <el-form label-position="top" >
    <el-form-item :label="$t('design.design_baseinfo.9142515-0')">
      <el-input :placeholder="$t('design.design_baseinfo.9142515-1')"/>
    </el-form-item>
    <el-form-item :label="$t('design.design_baseinfo.9142515-2')" >
      <el-input :placeholder="$t('design.design_baseinfo.9142515-1')"/>
    </el-form-item>
    <el-form-item :label="$t('design.design_baseinfo.9142515-3')">
      <el-input :placeholder="$t('design.design_baseinfo.9142515-1')"/>
    </el-form-item>
    <el-form-item :label="$t('design.design_baseinfo.9142515-4')">
      <el-input :placeholder="$t('design.design_baseinfo.9142515-1')"/>
    </el-form-item>
    </el-form>
</template>
<script lang="ts">
export default {
  name: "designbaseinfo"
}
</script>
 <style type="scoped">
.el-input .el-inpput__inner{
  border-top: none;
  border-left: none;
}

</style>