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
        <el-form ref="form" :model="userForm" label-width="100px">
          <el-form-item label="用户名：">
            <el-input v-model="userForm.nickname" disabled class="formName"></el-input>
          </el-form-item>
          <el-form-item label="真实姓名：">
            <el-input v-model="userForm.name" disabled class="formName"></el-input>
          </el-form-item>
          <el-form-item label="性&nbsp;&nbsp;&nbsp;别：">
            <el-input v-model="userForm.sex" disabled class="formName"></el-input>
          </el-form-item>
          <el-form-item label="证件类型：">
            <el-input v-model="cardType" disabled style="width: 300px"></el-input>
          </el-form-item>
          <el-form-item label="证件号：">
            <el-input v-model="userForm.card_number" style="width: 300px" disabled></el-input>
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
            <el-form ref="form" :model="userForm" label-width="100px">
              <el-form-item label="手机：">
                <el-input v-model="userForm.phone_number" disabled style="width: 300px"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <!-- 邮箱绑定 -->
        <div style="margin-top: 50px">
          <div class="userInfo-title">邮箱绑定</div>

          <div class="userInfo-body">
            <!-- 展示基本的个人信息 -->
            <el-form ref="form" :model="userForm" label-width="100px">
              <el-form-item label="邮箱：">
                <el-input v-model="userForm.email" disabled style="width: 300px"></el-input>
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
          <el-input v-model="editForm.nickname" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名：">
          <el-input v-model="editForm.name" style="width: 200px" disabled></el-input>
        </el-form-item>
        <el-form-item label="性&nbsp;&nbsp;&nbsp;别：">
          <el-select v-model="editForm.sex" class="m-2" size="large" placeholder="请选择性别">
            <el-option v-for="item in genderOpt" :key="item.value" :label="item.name" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="证件类型：">
          <el-select v-model="editForm.card_type" class="m-2" size="large" placeholder="请选择身份证类型">
            <el-option v-for="item in cardOpt" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="证件号：">
          <el-input v-model="editForm.card_number" style="width: 300px"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false" size="large">取消</el-button>
          <el-button type="primary" @click="editInfo" size="large">确定</el-button>
        </span>
      </template>
    </el-dialog>
    <!-- 手机邮箱的绑定 -->
    <el-dialog v-model="bindDialogVisible" title="修改信息" width="30%">
      <!-- 修改用户信息表单数据 -->
      <el-form ref="form" :model="editForm" label-width="100px">
        <el-form-item label="邮箱绑定：">
          <el-input v-model="editForm.email" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="手机绑定：">
          <el-input v-model="editForm.phone_number" style="width: 200px"></el-input>
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
import { reactive, ref, computed, onMounted } from 'vue'
//引入个人仓库
import useUserStore from '@/store/user'
//控制证件类型的选择器
const cardOpt = reactive([
  {
    value: '1',
    label: '身份证'
  },
  {
    value: '2',
    label: '军人证'
  },
  {
    value: '3',
    label: '护照'
  },
  {
    value: '4',
    label: '港澳居民来往内地通行证'
  },
  {
    value: '5',
    label: '台湾居民来往内地通行证'
  },
  {
    value: '6',
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
//创建仓库实例
let userStore = useUserStore()
//控制对话框信息的显示与隐藏
let dialogVisible = ref<boolean>(false)
//控制绑定信息的对话框显示与隐藏
let bindDialogVisible = ref<boolean>(false)

//计算属性计算证件类型
const cardType = computed(() => {
  if (userStore.userInfo.card_type === '1') {
    return '身份证'
  }
  if (userStore.userInfo.card_type === '2') {
    return '军人证'
  }
  if (userStore.userInfo.card_type === '3') {
    return '护照'
  }
  if (userStore.userInfo.card_type === '4') {
    return '港澳居民来往内地通行证'
  }
  if (userStore.userInfo.card_type === '5') {
    return '台湾居民来往内地通行证'
  }
  if (userStore.userInfo.card_type === '6') {
    return '港澳台居民居住证'
  }
})
//用户信息
const userForm = ref({
  nickname: '',
  name: '',
  sex: '',
  card_type: '',
  card_number: '',
  phone_number: '',
  email: ''
})
//修改用户信息
const editForm = ref({
  nickname: '',
  name: '',
  sex: '',
  card_type: '',
  card_number: '',
  phone_number: '',
  email: ''
})

onMounted(() => {
  userForm.value = userStore.userInfo
  //修改用户信息
  //深拷贝给修改用户的表单
  //避免修改时候 原用户信息改变
  editForm.value = JSON.parse(JSON.stringify(userForm.value))
  // console.log({ ...editForm.value })
})

//调用修改用户信息的接口
const editInfo = () => {
  // console.log({ ...editForm.value })
  //调用修改信息的接口
  userStore.editUserInfo({ ...editForm.value })
  dialogVisible.value = false
}
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
