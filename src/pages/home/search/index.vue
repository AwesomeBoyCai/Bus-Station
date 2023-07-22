<template>
  <!-- 两个标签页 -->
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" type="border-card">
    <!-- 查询车票组件 -->
    <el-tab-pane label="查询车票" name="first">
      <el-form>
        <el-form-item label="起始地址">
          <el-input v-model="form.start" placeholder="请输入起始地" size="large">
            <template #append>区/县</template>
          </el-input>
        </el-form-item>
        <el-form-item label="目的地址">
          <el-input v-model="form.end" placeholder="请输入目的地" size="large">
            <template #append>区/县</template>
          </el-input>
        </el-form-item>
        <el-form-item label="乘车日期">
          <el-date-picker v-model="dateStart" type="date" placeholder="请选择日期" size="large" />
        </el-form-item>
        <el-form-item>
          <el-button :icon="Search" type="primary" size="large">查询</el-button>
        </el-form-item>
      </el-form>
      <!-- 取验证码组件 -->
    </el-tab-pane>
    <el-tab-pane label="取票验证码" name="second">
      <el-form>
        <el-form-item label="手机号">
          <el-input v-model="phoneInfo.number" placeholder="请输入手机号" size="large"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="phoneInfo.code" placeholder="请输入验证码" size="large"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button :icon="Upload" type="primary" size="large">提交</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { Search, Upload } from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'
//引入标签页
import type { TabsPaneContext } from 'element-plus'
//存储乘车日期
let dateStart = ref<string>('')
//存储手机号和验证码
let phoneInfo = reactive({
  number: '',
  code: ''
})
//默认选中
const activeName = ref<string>('first')
//表单
const form = reactive({
  //起始地
  start: '',
  //目的地
  end: ''
})
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style lang="scss" scoped>
.el-tabs {
  width: 100%;
  height: 300px;
  box-shadow:
    0 2px 4px 0 rgba(0, 0, 0, 0.12),
    0 0 6px 0 rgba(0, 0, 0, 0.04);
  border: 1px solid #dcdfe6;
  .el-form {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    .el-form-item {
      margin: 10px 0;
    }
    .el-button {
      width: 100%;
      margin: 0 auto;
    }
  }
}
</style>
