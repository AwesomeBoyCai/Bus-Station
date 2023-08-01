<template>
  <div class="cardBox">
    <!-- 基本信息展示 -->
    <el-card class="topBox">
      <div class="iconInfo">
        <el-icon style="font-size: 25px; color: #55a6fe"><User /></el-icon>
        <span>信息展示</span>
        <el-button class="editBtn" :icon="EditPen" circle @click="dialogVisible = true"></el-button>
      </div>
      <div class="userInfo">
        <div class="userInfo-title">基础设置</div>
        <!-- 展示基本的个人信息 -->
        <el-form ref="form" :model="userInfoForm" label-width="100px">
          <el-form-item label="用户名：">
            <el-input v-model="userInfoForm.userName" disabled class="formName"></el-input>
          </el-form-item>
          <el-form-item label="真实姓名：">
            <el-input v-model="userInfoForm.trueName" disabled class="formName"></el-input>
          </el-form-item>
          <el-form-item label="性&nbsp;&nbsp;&nbsp;别：">
            <el-input v-model="userInfoForm.gender" disabled class="formName"></el-input>
          </el-form-item>
          <el-form-item label="证件类型：">
            <el-input v-model="userInfoForm.cardType" disabled style="width: 300px"></el-input>
          </el-form-item>
          <el-form-item label="证件号：">
            <el-input v-model="userInfoForm.cardNumber" style="width: 300px" disabled></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <!-- 绑定部分 -->
    <el-card class="bottomBox">
      <div class="iconInfo">
        <el-icon style="font-size: 25px; color: #55a6fe"><Paperclip /></el-icon>
        <span>信息绑定</span>
        <el-button class="editBtn" :icon="Paperclip" circle @click="bindDialogVisible = true"></el-button>
      </div>
      <div class="userInfo">
        <!-- 手机绑定 -->
        <div style="margin-top: 50px">
          <div class="userInfo-title">手机绑定</div>
          <div class="userInfo-body">
            <!-- 展示基本的个人信息 -->
            <el-form ref="form" :model="userInfoForm" label-width="100px">
              <el-form-item label="手机：">
                <el-input v-model="userInfoForm.phone" disabled style="width: 300px"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <!-- 邮箱绑定 -->
        <div style="margin-top: 50px">
          <div class="userInfo-title">邮箱绑定</div>

          <div class="userInfo-body">
            <!-- 展示基本的个人信息 -->
            <el-form ref="form" :model="userInfoForm" label-width="100px">
              <el-form-item label="邮箱：">
                <el-input v-model="userInfoForm.email" disabled style="width: 300px"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </el-card>
    <!-- 修改基本信息的对话框 -->
    <el-dialog v-model="dialogVisible" title="修改信息" width="30%">
      <!-- 修改用户信息表单数据 -->
      <el-form ref="form" :model="editForm" label-width="100px">
        <el-form-item label="用户名：">
          <el-input v-model="editForm.userName" style="width: 200px" disabled></el-input>
        </el-form-item>
        <el-form-item label="真实姓名：">
          <el-input v-model="editForm.trueName" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="性&nbsp;&nbsp;&nbsp;别：">
          <el-select v-model="editForm.gender" class="m-2" size="large" placeholder="请选择性别">
            <el-option v-for="item in genderOpt" :key="item.value" :label="item.name" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="证件类型：">
          <el-select v-model="editForm.cardType" class="m-2" size="large" placeholder="请选择身份证类型">
            <el-option v-for="item in cardOpt" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="证件号：">
          <el-input v-model="editForm.cardNumber" style="width: 300px"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false" size="large">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false" size="large">确定</el-button>
        </span>
      </template>
    </el-dialog>
    <!-- 手机邮箱的绑定 -->
    <el-dialog v-model="bindDialogVisible" title="修改信息" width="30%">
      <!-- 修改用户信息表单数据 -->
      <el-form ref="form" :model="userInfoForm" label-width="100px">
        <el-form-item label="邮箱绑定：">
          <el-input v-model="userInfoForm.email" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="手机绑定：">
          <el-input v-model="userInfoForm.phone" style="width: 200px"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="bindDialogVisible = false" size="large">取消</el-button>
          <el-button type="primary" @click="bindDialogVisible = false" size="large">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { User, EditPen, Paperclip } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
//控制证件类型的选择器
const cardOpt = reactive([
  {
    value: '身份证',
    label: '身份证'
  },
  {
    value: '军人证',
    label: '军人证'
  },
  {
    value: '护照',
    label: '护照'
  },
  {
    value: '港澳居民来往内地通行证',
    label: '港澳居民来往内地通行证'
  },
  {
    value: '台湾居民来往内地通行证',
    label: '台湾居民来往内地通行证'
  },
  {
    value: '港澳台居民居住证',
    label: '港澳台居民居住证'
  }
])
//控制性别的选择器
const genderOpt = reactive([
  {
    name: '男',
    value: '男'
  },
  {
    name: '女',
    value: '女'
  },
  {
    name: '保密',
    value: '保密'
  }
])
//控制对话框信息的显示与隐藏
let dialogVisible = ref<boolean>(false)
//控制绑定信息的对话框显示与隐藏
let bindDialogVisible = ref<boolean>(false)
const userInfoForm = reactive({
  userName: '自知则知之',
  trueName: '张杰杰',
  gender: '男',
  cardType: ' 中华人民',
  cardNumber: '41102320021222',
  phone: '12121231',
  email: '11111@qq.com'
})
const editForm = reactive({
  userName: '自知则知之',
  trueName: '张杰杰',
  gender: '男',
  cardType: '',
  cardNumber: '41102320021222',
  phone: '12121231',
  email: '11111@qq.com'
})
</script>

<style lang="scss" scoped>
.cardBox {
  width: 100%;
  .el-card {
    min-height: 500px;
    padding: 30px;
    .iconInfo {
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
    .userInfo {
      .el-form-item {
        margin-top: 30px;
        border-bottom: 1px solid #f2f3f7;
        padding: 10px;
      }
      .userInfo-title {
        margin: 20px;
        color: #8e8e8e;
      }
      .formName {
        width: 200px;
      }
    }
  }
  .bottomBox {
    margin-top: 20px;
  }
}

.dialog-footer {
  display: flex;
  justify-content: space-around;
}
</style>
