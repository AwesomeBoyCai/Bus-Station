<template>
  <div class="top">
    <div class="content">
      <!-- 左侧 -->
      <div class="left" @click="goHome">
        <img src="../../assets/image/logo.png" alt="" />
        <p>陕西省客运互联网售票平台</p>
      </div>
      <div class="right">
        <ul>
          <li></li>
          <li class="login">
            <!-- 未登录 -->
            <el-button :icon="Avatar" round color="#5678a8" @click="login" v-if="!userStore.userInfo.nickname">
              请登录
            </el-button>
            <div class="userInfo" v-else>
              <img :src="userStore.userInfo.photo" alt="" />
              <el-dropdown size="large">
                <span class="el-dropdown-link">
                  {{ userStore.userInfo.nickname }}
                  <el-icon class="el-icon--right">
                    <arrow-down />
                  </el-icon>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>
                      <el-icon><User /></el-icon>
                      个人中心
                    </el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                    <el-dropdown-item divided @click="loginOut">
                      <el-icon><SwitchButton /></el-icon>
                      退出登录
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </li>
          <li style="cursor: pointer" @click="goRegister" v-if="!userStore.userInfo.nickname">注册</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus'
import { Avatar, ArrowDown, SwitchButton, User } from '@element-plus/icons-vue'
//引入路由器
import { useRouter } from 'vue-router'
//引入用户仓库
import useUserStore from '@/store/user'
//创建仓库实例
let userStore = useUserStore()

//创造路由器实例
let $router = useRouter()

//回到主页函数
const goHome = () => {
  $router.push('/home/first')
}
//跳转到登录
const login = () => {
  $router.push('/login')
}
//跳转到注册页面
const goRegister = () => {
  $router.push({
    path: '/login/register'
  })
}
//退出登录
const loginOut = () => {
  //调用仓库的退出登录函数
  ElMessageBox.confirm('是否确定退出登录', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      //调用仓库中退出登录函数
      userStore.loginOut()
      ElMessage({
        type: 'success',
        message: '成功退出登录'
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消'
      })
    })
}
</script>

<style lang="scss" scoped>
.top {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: center;
  background-color: #fff;
  .content {
    width: 1200px;
    height: 70px;
    background: white;
    display: flex;
    justify-content: space-between;
    .left {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      p {
        font-size: 20px;
        color: #55a6fe;
      }
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: #bbb;
      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        li {
          margin: 0 10px;
        }
        .userInfo {
          display: flex;
          align-items: center;
          img {
            width: 40px;
            height: 40px;
            margin-right: 20px;
            border-radius: 20px;
          }
        }
      }
    }
  }
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
