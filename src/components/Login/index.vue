<template>
  <div class="container">
    <div class="loginBox">
      <h2>账号密码登录</h2>
      <el-form :model="loginParam" status-icon class="demo-ruleForm">
        <el-form-item prop="count">
          <el-input
            v-model="loginParam.count"
            type="password"
            autocomplete="off"
            placeholder="国内手机号/用户名"
            size="large"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginParam.ass" type="password" autocomplete="off" placeholder="登录密码" size="large" />
        </el-form-item>
        <el-form-item class="buttonBox">
          <el-button type="primary" class="loginBtn" color="#FF9A14">登录</el-button>
        </el-form-item>
      </el-form>
      <div class="agreeList">
        <el-checkbox v-model="agreeVal" size="small" />
        <div>
          阅读并同意
          <span style="color: #0086f6; cursor: pointer">服务协议</span>
          和
          <span style="color: #0086f6; cursor: pointer">个人信息保护政策</span>
        </div>
      </div>
      <div class="otherWay">
        <div>验证码登录</div>
        <div>免费注册</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
const loginParam = reactive<any>({
  count: '',
  password: ''
})
//同意勾选框
let agreeVal = ref<boolean>(false)
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 540px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  border-radius: 0px;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  background: url('@/assets/image/olderimage1.png');
  .loginBox {
    min-height: 422px;
    width: 380px;
    background: #fff;
    padding: 30px 30px 20px;
    min-height: 370px;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
    h2 {
      position: relative;
      padding-bottom: 16px;
      font-size: 18px;
      color: #111;
      line-height: 1;
      font-family: PingFangSC-Medium, 'Microsoft YaHei', SimSun, Tahoma, Verdana, Arial, sans-serif;
    }
    .loginBtn {
      width: 100%;
      height: 42px;
      color: #fff;
      font-size: 16px;
      border: 0;
      border-radius: 4px;
    }
    .agreeList {
      display: flex;
      align-items: center;
      color: #999;
      font-size: 12px;
      div {
        margin-left: 10px;
      }
    }
    .otherWay {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      font-size: 12px;
      color: #0086f6;
      cursor: pointer;
    }
  }
}
</style>
