//定义用户相关的仓库
import { defineStore } from 'pinia'

//引入接口
import { reqUserLogin } from '@/api/user/index'
//用户仓库
const useUserStore = defineStore('User', {
  state: () => {
    return {
      userToken: ''
    }
  },
  actions: {
    async login(loginData: any) {
      console.log(loginData)
      let result: any = await reqUserLogin(loginData)
      if (result.code === 200) {
        this.userToken = result.token
        //本地持久化存储
        localStorage.setItem('token', JSON.stringify(result.token))
      }
    }
  },
  getters: {}
})

export default useUserStore
