<template>
  <div>
    <el-card>
      <div class="iconInfo">
        <el-icon style="font-size: 25px; color: #55a6fe"><Tickets /></el-icon>
        <span>所有订单</span>
      </div>
      <div class="order-box">
        <!-- 筛选 -->
        <div class="search">
          <span>购票时间:</span>
          <div class="start-time">
            <span>从</span>
            <el-date-picker v-model="start_time" type="date" placeholder="选择日期" size="large" />
          </div>
          <div class="end-time">
            <span>到</span>
            <el-date-picker v-model="end_time" type="date" placeholder="选择日期" size="large" />
          </div>
          <div class="btn">
            <el-button type="success" size="large">筛选</el-button>
          </div>
        </div>

        <!-- 列表 -->
        <div class="body">
          <el-table
            :data="tableData"
            style="width: 100%"
            :header-cell-style="{ textAlign: 'center' }"
            :cell-style="{ textAlign: 'center' }"
            row-key="order_id"
            :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
          >
            <el-table-column prop="master_order_number" label="订单号" min-width="200"></el-table-column>
            <el-table-column prop="shuttle_shift_time" label="发车时间" min-width="180"></el-table-column>
            <el-table-column prop="total_amount" label="价钱"></el-table-column>
            <el-table-column prop="order_status" label="状态"></el-table-column>
            <el-table-column prop="start_region" label="始发地"></el-table-column>
            <el-table-column prop="final_region" label="到达地"></el-table-column>
            <el-table-column prop="address" label="操作">
              <template #default>
                <el-button link type="primary" size="small">修改</el-button>
                <el-button link type="primary" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="pagination">
          <el-pagination background layout="prev, pager, next" :total="total" :page-sizes="queryData.size" />
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
//引入图标
import { Tickets } from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'
//
let start_time = ref<any>('')
let end_time = ref<any>('')
//
const tableData = ref([])
//总数
let total = ref<number>(10)
//分页请求数据
const queryData = reactive<any>({
  page: 1,
  size: 6
})
</script>

<style lang="scss" scoped>
.el-card {
  min-height: 700px;
  .iconInfo {
    display: flex;
    align-items: center;
    margin: 30px;
    span {
      font-size: 20px;
      margin-left: 10px;
      color: #55a6fe;
    }
  }
  .order-box {
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
  }
}
</style>
