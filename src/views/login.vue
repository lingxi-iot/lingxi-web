<template>
  <div class="login-container">
    <el-container>
      <el-aside style="display: flex; justify-content: center; align-items: center">
        <img src="../assets/images/connect.svg" height="300px" />
      </el-aside>
      <el-main style="display: flex; justify-content: center; align-items: center">
        <el-form style="width: 450px">
          <el-form-item
            style="
              display: flex;
              justify-content: flex-end;
              align-items: center;
              height: 100px;
            "
          >
            <img src="@/assets/images/logo.png" alt="" />
            <el-text style="font-size: 18pt; color: #eeeeee; font-weight: 600">
              {{$t('global.title')}}</el-text
            >
          </el-form-item>
          <el-form-item label="" style="font-size: 16pt" label-position="top">
            <el-input
              style="width: 100%; height: 50px"
              prefix-icon="User"
              :placeholder="$t('views.login.332421-0')"
            />
          </el-form-item>
          <el-form-item label="" label-position="top">
            <el-input
              style="width: 100%; height: 50px"
              prefix-icon="Hide"
              type="password"
              :placeholder="$t('views.login.332421-1')"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              style="
                float: right;
                margin-top: 20px;
                width: 100%;
                height: 50px;
                border-radius: 5px;
                border: 0px;
                background: linear-gradient(45deg, #597df9, #ba98f2);
              "
              @click="dologin"
              >{{ $t('views.login.332421-2') }}</el-button
            >
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
 import { useI18n } from "vue-i18n";

 const { t } =useI18n();

window.document.title = t('global.title')

const router = useRouter();

function dologin() {
  router.push("/workspace");
}
</script>
<style lang="css" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #ffffff, #4969d4);
}
.el-aside {
  /*background: linear-gradient(45deg, #4969d4, #ffffff);*/
  height: 100vh;
  width: 60%;
}
</style>
