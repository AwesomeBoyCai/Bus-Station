<template>
  <div class="box">
    <el-row :gutter="40">
      <el-col :span="6">
        <!-- 左侧导航栏 -->
        <div class="leftMenu">
          <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
            <h3>账户管理</h3>
            <el-menu-item index="/person/baseInfo" @click="changeActive('/person/baseInfo')">
              <el-icon><User /></el-icon>
              <span>基本资料</span>
            </el-menu-item>
            <el-menu-item index="/person/changePassword" @click="changeActive('/person/changePassword')">
              <el-icon><Unlock /></el-icon>
              <span>修改密码</span>
            </el-menu-item>
            <el-menu-item index="/person/passenger" @click="changeActive('/person/passenger')">
              <el-icon><Van /></el-icon>
              <span>常用乘车人</span>
            </el-menu-item>
            <el-menu-item index="/person/contacts" @click="changeActive('/person/contacts')">
              <el-icon><Message /></el-icon>
              <span>常用联系人</span>
            </el-menu-item>
            <h3>订单管理</h3>
            <el-menu-item index="/person/allOrder" @click="changeActive('/person/allOrder')">
              <el-icon><List /></el-icon>
              <span>所有订单</span>
            </el-menu-item>
            <el-menu-item index="/person/paidOrder" @click="changeActive('/person/paidOrder')">
              <el-icon><Checked /></el-icon>
              <span>已支付订单</span>
            </el-menu-item>
            <el-menu-item index="/person/waitOrder" @click="changeActive('/person/waitOrder')">
              <el-icon><Clock /></el-icon>
              <span>待支付订单</span>
            </el-menu-item>
            <el-menu-item index="/person/refundOrder" @click="changeActive('/person/refundOrder')">
              <el-icon><Wallet /></el-icon>
              <span>退款</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="18">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
//引入图标
import { User, Unlock, List, Checked, Clock, Wallet, Message, Van } from '@element-plus/icons-vue'
//引入路由器跳转
import { useRouter, useRoute } from 'vue-router'
//获取当前路由信息来修改刷新高亮不成功问题
let $route = useRoute()
//创建路由器实例
const $router = useRouter()
//左侧路由切换点击的回调函数
const changeActive = (path: string) => {
  $router.push({ path })
}
</script>

<style lang="scss" scoped>
.box {
  min-height: 700px;
  margin-top: 30px;
  .leftMenu {
    .el-menu {
      width: 230px;
      text-align: center;
      padding: 20px 0;
      h3 {
        font-size: 22px;
        margin: 20px 0;
      }
    }
  }
  .el-card {
    min-height: 700px;
  }
}
</style>
