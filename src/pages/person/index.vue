<template>
  <div class="box">
    <el-row :gutter="40">
      <el-col :span="6">
        <!-- 左侧导航栏 -->
        <div class="leftMenu">
          <el-menu default-active="1" class="el-menu-vertical-demo">
            <el-menu-item index="1">
              <span>基本资料</span>
            </el-menu-item>
            <el-menu-item index="2">
              <span>修改密码</span>
            </el-menu-item>
            <el-menu-item index="3">
              <span>常用乘车人</span>
            </el-menu-item>
            <el-menu-item index="4">
              <span>常用联系人</span>
            </el-menu-item>

            <el-menu-item index="5">
              <span>所有订单</span>
            </el-menu-item>
            <el-menu-item index="6">
              <span>已支付订单</span>
            </el-menu-item>
            <el-menu-item index="7">
              <span>待支付订单</span>
            </el-menu-item>
            <el-menu-item index="8">
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

<script lang="ts" setup></script>

<style lang="scss" scoped>
.box {
  min-height: 700px;
  margin-top: 30px;
  .leftMenu {
    .el-menu {
      width: 230px;
    }
  }
}
</style>
