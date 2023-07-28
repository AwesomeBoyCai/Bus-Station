<template>
  <div class="box">
    <el-row :gutter="40">
      <el-col :span="6">
        <!-- 左侧导航栏 -->
        <div class="leftMenu">
          <el-menu default-active="1" class="el-menu-vertical-demo">
            <h3>账户管理</h3>
            <el-menu-item index="1">
              <el-icon><User /></el-icon>
              <span>基本资料</span>
            </el-menu-item>
            <el-menu-item index="2">
              <el-icon><Unlock /></el-icon>
              <span>修改密码</span>
            </el-menu-item>
            <el-menu-item index="3">
              <el-icon><Van /></el-icon>
              <span>常用乘车人</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><Message /></el-icon>
              <span>常用联系人</span>
            </el-menu-item>
            <h3>订单管理</h3>
            <el-menu-item index="5">
              <el-icon><List /></el-icon>
              <span>所有订单</span>
            </el-menu-item>
            <el-menu-item index="6">
              <el-icon><Checked /></el-icon>
              <span>已支付订单</span>
            </el-menu-item>
            <el-menu-item index="7">
              <el-icon><Clock /></el-icon>
              <span>待支付订单</span>
            </el-menu-item>
            <el-menu-item index="8">
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
        font-weight: 700;
        font-size: 22px;
        margin: 20px 0;
      }
    }
  }
}
</style>
