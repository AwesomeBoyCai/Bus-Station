<template>
  <el-tabs v-model="activeName" class="demo-tabs">
    <el-tab-pane label="最新公告" name="first">
      <!-- 表格最新公告 -->
      <el-table :data="tableData1" stripe style="width: 100%" size="small" :show-header="false" max-height="250">
        <el-table-column prop="info" />
        <el-table-column prop="date" align="right" />
      </el-table>
    </el-tab-pane>
    <el-tab-pane label="交通新闻" name="second">
      <!-- 表格交通新闻 -->
      <el-table :data="tableData2" stripe style="width: 100%" size="small" :show-header="false" max-height="250">
        <el-table-column prop="info" width="200" />
        <el-table-column prop="date" align="right" />
      </el-table>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
//引入组合式api
import { ref, reactive } from 'vue'
//选中当前选中的标签
let activeName = ref<string>('first')
//最新公告数据存储
const tableData1 = reactive([
  {
    info: '400客服系统维护公告',
    date: '2022-04-22'
  },
  {
    info: '疫情期退票规则',
    date: '2022-03-22'
  },
  {
    info: '疫情防控人人参与',
    date: '2022-02-12'
  },
  {
    info: '西安城南客运站恢复运行',
    date: '2022-01-06'
  },
  {
    info: '暂停三原客运站运行',
    date: '2021-11-08'
  },
  {
    info: '绕城高速出现极端天气',
    date: '2021-11-02'
  },
  {
    info: '绕城高速出现极端天气',
    date: '2021-11-02'
  },
  {
    info: '绕城高速出现极端天气',
    date: '2021-11-02'
  }
])
//交通新闻数据存储
const tableData2 = reactive([
  {
    info: '习近平在第二届联合国全球可...',
    date: '2021-12-08'
  },
  {
    info: '巴陕高速公路全线正式通车',
    date: '2018-11-23'
  },
  {
    info: '西安市圆满完成2019年春...',
    date: '2019-03-18'
  },
  {
    info: '春节假期西安市道路运输平安...',
    date: '2022-03-09'
  },
  {
    info: '陕西柞水至山阳高速公路通车',
    date: '2018-12-20'
  },
  {
    info: '陕西省交通运输厅调研商洛交通运输工作',
    date: '2018-08-24'
  }
])
</script>

<style lang="scss" scoped>
.demo-tabs {
  height: 300px;
  width: 100%;
  .el-table {
    //深度选择器 去除table表格中的padding值
    ::v-deep(th) {
      padding: 15px 3px;
    }
    ::v-deep(td) {
      padding: 15px 3px;
    }
    //深度选择器 鼠标悬浮 下划线
    ::v-deep(.cell) {
      cursor: pointer;
    }
    ::v-deep(.cell):hover {
      text-decoration: underline;
      font-weight: 600;
    }
  }
}
</style>
