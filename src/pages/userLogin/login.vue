<template>
  <!-- 登录组件 -->
  <div class="loginBox">
    <h2>账号密码登录</h2>
    <el-form :model="loginData" status-icon class="demo-ruleForm" :rules="rules" ref="ruleFormRef">
      <el-form-item prop="username">
        <el-input v-model="loginData.username" autocomplete="off" placeholder="账号/用户名" size="large" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginData.password" type="password" autocomplete="off" placeholder="登录密码" size="large" />
      </el-form-item>
      <el-form-item class="buttonBox">
        <el-button type="primary" class="loginBtn" color="#FF9A14" @click="login">登录</el-button>
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
      <div @click="goCodeLogin">手机验证码登录</div>
      <div @click="goRegister">免费注册</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
//@ts-ignore
import { ElMessage } from 'element-plus'
//引入路由器
import { useRouter } from 'vue-router'
import { ref } from 'vue'
//引入仓库
// @ts-ignore
import useUserStore from '@/store/user.ts'
let userStore = useUserStore()
//登录账号密码
const loginData = ref<any>({
  username: '',
  password: ''
})

//使用路由器
let $router = useRouter()

//获取form组件实例
const ruleFormRef = ref<any>()

//自定义校验规则:账户用户名校验
//只允许数字和字母 3-15
const validatorUsername = (_rule: any, value: any, callBack: any) => {
  //rule:即为表单校验规则对象
  //value:即为当前文本的内容
  //callBack:回调函数
  if (value === '') {
    return callBack(new Error('请输入账号'))
  }
  setTimeout(() => {
    const reg = /^[a-zA-Z0-9]{3,15}$/
    if (reg.test(value)) {
      callBack()
    } else {
      callBack(new Error('请按正确格式输入账号或用户名'))
    }
  }, 1000)
}

//自定义校验密码
const validatorPassword = (_rule: any, value: any, callBack: any) => {
  if (!value) {
    return callBack(new Error('请输入密码'))
  }
  setTimeout(() => {
    const reg = /^[a-zA-Z0-9]{6,15}$/
    if (reg.test(value)) {
      callBack()
    } else {
      callBack(new Error('请按正确格式输入密码'))
    }
  }, 1000)
}

//自定义校验函数
//表单校验的规则对象
const rules = {
  //用户名校验规则
  //密码校验规则
  username: [{ trigger: 'blur', validator: validatorUsername }],
  password: [{ trigger: 'blur', validator: validatorPassword }]
}

//登录函数
const login = async () => {
  //保证表单校验两项都复合条件
  await ruleFormRef.value.validate()
  try {
    //登录 存储token
    await userStore.login(loginData.value)
    await userStore.getUserInfo()
    $router.push({
      path: '/home/first'
    })
  } catch (error) {
    ElMessage({
      type: 'error',
      message: '账号或密码错误'
    })
  }

  // console.log(result)
}
//
let goCodeLogin = () => {
  $router.push({
    path: 'codeLogin'
  })
}
//跳转注册组件函数
let goRegister = () => {
  $router.push({
    path: 'register'
  })
}
//同意勾选框
let agreeVal = ref<boolean>(false)
</script>

<style lang="scss" scoped>
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
</style>
