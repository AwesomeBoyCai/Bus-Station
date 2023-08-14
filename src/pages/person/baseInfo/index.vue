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
        <el-form ref="form" :model="userStore.userInfo" label-width="100px">
          <el-form-item label="用户名：">
            <el-input v-model="userStore.userInfo.nickname" disabled class="formName"></el-input>
          </el-form-item>
          <el-form-item label="真实姓名：">
            <el-input v-model="userStore.userInfo.name" disabled class="formName"></el-input>
          </el-form-item>
          <el-form-item label="性&nbsp;&nbsp;&nbsp;别：">
            <el-input v-model="userStore.userInfo.sex" disabled class="formName"></el-input>
          </el-form-item>
          <el-form-item label="证件类型：">
            <el-input v-model="cardType" disabled style="width: 300px"></el-input>
          </el-form-item>
          <el-form-item label="证件号：">
            <el-input v-model="userStore.userInfo.cardNumber" style="width: 300px" disabled></el-input>
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
            <el-form ref="form" :model="userStore.userInfo" label-width="100px">
              <el-form-item label="手机：">
                <el-input v-model="userStore.userInfo.phoneNumber" disabled style="width: 300px"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <!-- 邮箱绑定 -->
        <div style="margin-top: 50px">
          <div class="userInfo-title">邮箱绑定</div>

          <div class="userInfo-body">
            <!-- 展示基本的个人信息 -->
            <el-form ref="form" :model="userStore.userInfo" label-width="100px">
              <el-form-item label="邮箱：">
                <el-input v-model="userStore.userInfo.email" disabled style="width: 300px"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </el-card>
    <!-- 修改基本信息的对话框 -->
    <el-dialog v-model="dialogVisible" title="修改信息" width="30%">
      <!-- 修改用户信息表单数据 -->
      <el-form :model="editForm" label-width="100px" :rules="rules" ref="ruleFormRef">
        <el-form-item label="用户名：" prop="nickname">
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
          <el-select v-model="editForm.cardType" class="m-2" size="large" placeholder="请选择身份证类型">
            <el-option v-for="item in cardOpt" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="证件号：" prop="cardNumber">
          <el-input v-model="editForm.cardNumber" style="width: 300px"></el-input>
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
      <el-form :model="editForm" label-width="100px" :rules="rules" ref="ruleFormRef">
        <el-form-item label="邮箱绑定：" prop="email">
          <el-input v-model="editForm.email" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="手机绑定：" prop="phoneNumber">
          <el-input v-model="editForm.phoneNumber" style="width: 200px"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="bindDialogVisible = false" size="large">取消</el-button>
          <el-button type="primary" @click="editInfo()" size="large">确定</el-button>
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
//定义校验规则
const rules = reactive({
  nickname: [{ required: 'true', message: '请输入昵称', trigger: 'blur' }],
  cardNumber: [{ required: 'true', message: '请输入您的证件号', trigger: 'blur' }],
  email: [
    { required: 'true', message: '请输入邮箱', trigger: 'blur' },
    { pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, message: '邮箱格式不正确', trigger: 'blur' }
  ],
  phoneNumber: [
    { required: 'true', message: '请输入手机号', trigger: 'blur' },
    { pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确', trigger: 'blur' }
  ]
})
//定义校验规则
const ruleFormRef = ref(null)
//计算属性计算证件类型
const cardType = computed(() => {
  if (userStore.userInfo.cardType === '1') {
    return '身份证'
  }
  if (userStore.userInfo.cardType === '2') {
    return '军人证'
  }
  if (userStore.userInfo.cardType === '3') {
    return '护照'
  }
  if (userStore.userInfo.cardType === '4') {
    return '港澳居民来往内地通行证'
  }
  if (userStore.userInfo.cardType === '5') {
    return '台湾居民来往内地通行证'
  }
  if (userStore.userInfo.cardType === '6') {
    return '港澳台居民居住证'
  }
})
//修改用户信息
const editForm = ref<any>({
  nickname: '',
  name: '',
  sex: '',
  cardType: '',
  cardNumber: '',
  phoneNumber: '',
  email: ''
})

onMounted(() => {
  //修改用户信息
  //深拷贝给修改用户的表单
  //避免修改时候 原用户信息改变
  editForm.value = JSON.parse(JSON.stringify(userStore.userInfo))
  // console.log({ ...editForm.value })
})

//调用修改用户信息的接口
const editInfo = () => {
  let { validate } = ruleFormRef.value as any
  validate((valid: Boolean) => {
    //通过校验才发起请求
    if (valid) {
      //调用修改信息的接口
      userStore.editUserInfo({ ...editForm.value })
      dialogVisible.value = false
      bindDialogVisible.value = false
    }
  })
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
