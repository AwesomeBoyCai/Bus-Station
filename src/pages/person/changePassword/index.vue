<template>
  <div>
    <el-card class="cardBox">
      <div class="iconInfo">
        <el-icon style="font-size: 25px; color: #55a6fe"><Unlock /></el-icon>
        <span>修改密码</span>
      </div>
      <div class="changeBox">
        <el-form :model="editForm" label-width="100px">
          <el-form-item label="原密码" prop="old_password">
            <el-input v-model="editForm.old_password" :show-password="true" size="large"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="password">
            <el-input v-model="editForm.password" :show-password="true" size="large"></el-input>
          </el-form-item>
          <el-form-item label="新密码确认" prop="check_Pwd">
            <el-input v-model="editForm.check_Pwd" :show-password="true" size="large"></el-input>
          </el-form-item>

          <el-button style="width: 50%" type="danger" class="submitBtn" size="large">提 交</el-button>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { Unlock } from '@element-plus/icons-vue'
import { reactive } from 'vue'
//账号密码
const editForm = reactive({
  old_password: '',
  password: '',
  check_Pwd: ''
})
</script>

<style lang="scss" scoped>
.cardBox {
  min-height: 610px;
  padding: 30px;
  .iconInfo {
    display: flex;
    align-items: center;
    span {
      font-size: 20px;
      margin-left: 10px;
      color: #55a6fe;
    }
  }
  .changeBox {
    position: relative;
    width: 50%;
    margin: 120px auto;
    .submitBtn {
      position: absolute;
      bottom: -80px;
      transform: translateX(70%);
    }
  }
}
</style>
