<template>
  <div class="search">
    <div class="start">
      <span>出发地：</span>
      <el-input v-model="start" class="w-50 m-2" size="large" placeholder="Please Input" style="width: 200px" />
    </div>
    <div class="end">
      <span>目的地：</span>
      <el-input v-model="end" class="w-50 m-2" size="large" placeholder="Please Input" style="width: 200px" />
    </div>
    <div class="end">
      <span>乘车时间：</span>
      <el-date-picker v-model="time" type="date" placeholder="选择日期" size="large" />
    </div>
    <div class="btn">
      <el-button type="primary" size="large">搜索</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
//
let start = ref<any>('')
let end = ref<any>('')
let time = ref<any>('')
</script>

<style lang="scss" scoped>
.search {
  height: 70px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  background-color: #dce9ef;
  justify-content: space-around;
  span {
    margin-right: 20px;
  }
}
.body {
  margin-top: 30px;
}
.pagination {
  margin-top: 30px;
  float: right;
}
</style>
