//定义用户相关的仓库
import { defineStore } from 'pinia'
//引入接口
import { reqUserLogin, reqUserInfo, reqUserInfoEdit } from '@/api/user/index'
//引入类型
import { userProfileInfoType } from '@/api/user/type'
//用户仓库
const useUserStore = defineStore('User', {
  state: () => {
    return {
      //用户信息,
      userInfo: JSON.parse(localStorage.getItem('userInfo') as string) || {},
      //用户登录token
      userToken: JSON.parse(localStorage.getItem('token') as string)
    }
  },
  actions: {
    //获取用户信息接口
    async getUserInfo() {
      let result: userProfileInfoType = await reqUserInfo()
      if (result.code === 200) {
        console.log(result)
        //本地持久化存储
        this.userInfo = result.profileInfo
        localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
      }
    },
    //登录接口数据
    async login(loginData: any) {
      // console.log(loginData)
      let result: any = await reqUserLogin(loginData)
      if (result.code === 200) {
        this.userToken = result.token
        //本地持久化存储
        localStorage.setItem('token', JSON.stringify(this.userToken))
      }
    },
    //修改用户信息
    async editUserInfo(params: any) {
      let result: any = await reqUserInfoEdit(params)

      //修改完成后
      // 仓库重新存储
      if (result.code === 200) {
        this.userInfo = params
        localStorage.setItem('userInfo', JSON.stringify(params))
      }
      console.log(result)
    },
    //退出登录函数
    //清除本地存储的个人信息和token
    loginOut() {
      //清空仓库的数据
      this.userInfo = {}
      this.userToken = ''
      localStorage.removeItem('userInfo')
      localStorage.removeItem('token')
    }
  },
  getters: {}
})

export default useUserStore
