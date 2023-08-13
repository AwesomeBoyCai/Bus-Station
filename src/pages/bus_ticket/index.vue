<template>
  <div>
    <!-- 进入车票流程组件的父组件 -->
    <el-card>
      <!-- 步骤条 -->
      <div class="stepBox">
        <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
          <el-step title="车票查询"></el-step>
          <el-step title="提交订单"></el-step>
          <el-step title="确认并支付"></el-step>
          <el-step title="购票成功"></el-step>
        </el-steps>
      </div>

      <!-- 路由 -->
      <div class="contentBox">
        <router-view></router-view>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.el-card {
  margin-top: 30px;
  min-height: 700px;
  .contentBox {
    margin-top: 40px;
  }
}
</style>
