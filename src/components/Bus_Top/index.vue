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
            <el-button :icon="Avatar" round color="#5678a8" @click="login">请登录</el-button>
          </li>
          <li>注册</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Avatar } from '@element-plus/icons-vue'
//引入路由器
import { useRouter } from 'vue-router'
//创造路由器实例
let $router = useRouter()

//回到主页函数
let goHome = () => {
  $router.push('/home/first')
}
//登录
let login = () => {
  $router.push('/login')
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
      }
    }
  }
}
</style>
