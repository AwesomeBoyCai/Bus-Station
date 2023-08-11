//引入二次封装axios
import request from '@/utils/request'
//引入对应接口ts类型
import { userProfileInfoType } from '@/api/user/type'
//枚举类型
enum API {
  USERLOGIN_URL = '/user/login',
  USERINFO_URL = '/user/getProfile'
}

//请求的二次封装
//用户登录借口
export const reqUserLogin = (params: any) =>
  request<any>({
    url: API.USERLOGIN_URL,
    method: 'POST',
    data: params
  })
//获取用户信息接口
export const reqUserInfo = () =>
  request<any, userProfileInfoType>({
    url: API.USERINFO_URL,
    method: 'GET'
  })
