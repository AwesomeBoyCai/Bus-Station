<template>
  <div>
    <el-card class="cardBox">
      <div class="iconInfo">
        <el-icon style="font-size: 25px; color: #55a6fe"><Van /></el-icon>
        <span>常用乘车人</span>
        <el-button class="editBtn" :icon="Plus" circle @click="dialogVisible = true"></el-button>
      </div>
      <div class="passenger">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="index" label="序号" type="index" min-width="40px" />
          <el-table-column prop="name" label="姓名" />
          <el-table-column prop="card_type" label="证件类型" min-width="100px" />
          <el-table-column prop="card_number" label="证件号码" min-width="100px" />
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
      <!-- 修改基本信息的对话框 -->
      <el-dialog v-model="dialogVisible" title="新增常用乘车人" width="30%">
        <!-- 修改用户信息表单数据 -->
        <el-form ref="form" :model="passengerForm" label-width="100px">
          <el-form-item label="姓名：">
            <el-input v-model="passengerForm.name" style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item label="证件类型">
            <el-select v-model="passengerForm.power" placeholder="请选择">
              <el-option value="身份证">身份证</el-option>
              <el-option value="军人证">军人证</el-option>
              <el-option value="护照">护照</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="证件号：">
            <el-input v-model="passengerForm.idNumber" style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item label="手机号：">
            <el-input v-model="passengerForm.phone" style="width: 200px"></el-input>
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false" size="large">取消</el-button>
            <el-button type="primary" @click="dialogVisible = false" size="large">确定</el-button>
          </span>
        </template>
      </el-dialog>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { Van, Plus } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
//表格中乘车人的数据
const tableData = reactive<any>([
  {
    date: '2016-05-03',
    name: 'Tom',
    card_type: '中华人民共和国居民身份证',
    card_number: '512313131312323131',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    card_type: '中华人民共和国居民身份证',
    card_number: '512313131312323131',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    card_type: '中华人民共和国居民身份证',
    card_number: '512313131312323131',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    card_type: '中华人民共和国居民身份证',
    card_number: '512313131312323131',
    address: 'No. 189, Grove St, Los Angeles'
  }
])
//分页请求数据
const queryData = reactive<any>({
  page: 1,
  size: 6
})
//控制对话框显示隐藏
let dialogVisible = ref<boolean>(false)
//总数
let total = ref<number>(10)
//乘客信息
const passengerForm = reactive<any>({
  name: '',
  power: '',
  idNumber: '',
  phone: ''
})
</script>

<style lang="scss" scoped>
.cardBox {
  min-height: 700px;
  padding: 30px 0;
  .iconInfo {
    margin-left: 30px;
    display: flex;
    align-items: center;
    span {
      font-size: 20px;
      margin-left: 10px;
      color: #55a6fe;
    }
    .editBtn {
      margin-left: 50px;
      background-color: #55a6fe;
      color: #fff;
      border: none;
    }
  }
  .passenger {
    margin-top: 20px;
  }
  .pagination {
    margin-top: 30px;
    float: right;
  }
  .dialog-footer {
    display: flex;
    justify-content: space-around;
  }
}
</style>
