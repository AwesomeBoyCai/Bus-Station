<template>
  <div>
    <el-card>
      <div class="stepBox">
        <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
          <el-step title="车票查询"></el-step>
          <el-step title="提交订单"></el-step>
          <el-step title="确认并支付"></el-step>
          <el-step title="购票成功"></el-step>
        </el-steps>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.el-card {
  margin-top: 30px;
  min-height: 700px;
}
</style>
