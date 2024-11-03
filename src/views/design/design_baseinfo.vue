<template>
    <el-form label-position="top" >
    <el-form-item label="产品名称">
      <el-input placeholder="请输入产品名称"/>
    </el-form-item>
    <el-form-item label="产品编码" >
      <el-input placeholder="请输入产品名称"/>
    </el-form-item>
    <el-form-item label="产品型号">
      <el-input placeholder="请输入产品名称"/>
    </el-form-item>
    <el-form-item label="生产厂家">
      <el-input placeholder="请输入产品名称"/>
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