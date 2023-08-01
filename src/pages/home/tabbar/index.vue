<template>
  <div class="box">
    <div class="topNav">
      <el-menu :default-active="$route.path" class="el-menu-demo">
        <el-menu-item index="/home/first" @click="changeActive('/home/first')">
          <el-icon><House /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="/home/refund" @click="changeActive('/home/refund')">
          <el-icon><Tickets /></el-icon>
          <span>退票</span>
        </el-menu-item>
        <el-menu-item index="/home/help" @click="changeActive('/home/help')">
          <el-icon><Help /></el-icon>
          <span>帮助中心</span>
        </el-menu-item>
        <el-menu-item index="/home/advise" @click="changeActive('/home/advise')">
          <el-icon><Service /></el-icon>
          <span>投诉建议</span>
        </el-menu-item>
        <el-menu-item index="/home/about" @click="changeActive('/home/about')">
          <el-icon><User /></el-icon>
          <span>关于我们</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts" setup>
//引入路由
import { useRouter, useRoute } from 'vue-router'
//左侧菜单需要用到的图标
import { House, Tickets, Help, Service, User } from '@element-plus/icons-vue'
//创建路由器实例
let $router = useRouter()
//获取当前路由信息来修改刷新高亮不成功问题
let $route = useRoute()
//左侧路由切换点击的回调函数
const changeActive = (path: string) => {
  $router.push({ path })
}
</script>

<style lang="scss" scoped>
.box {
  margin-top: 30px;
  width: 100%;
  height: 80px;
  // background-color: #eef1f6;
  .content {
    min-height: 700px;
  }
  .el-menu {
    width: 100%;
    display: flex;
    .el-menu-item {
      flex: 1;
      display: flex;
      justify-content: center;
      background-color: #d3e5f1;
    }
    .el-menu-item:hover {
      font-weight: 700;
    }
    .el-menu-item.is-active {
      background-color: #55a6fe !important;
      border-bottom: 3px solid #f6cc58;
      color: #fff;
      font-weight: 600;
    }
    .el-menu-item:hover {
      background-color: #55a6fe !important;
      color: #fff;
      font-weight: 600;
    }
  }
}
</style>
