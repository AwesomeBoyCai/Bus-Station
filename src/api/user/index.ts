//引入二次封装axios
import request from '@/utils/request'
//引入对应接口ts类型
import { userProfileInfoType } from '@/api/user/type'
//枚举类型
enum API {
  // 登录接口
  USERLOGIN_URL = '/user/login',
  // 获取用户信息
  USERINFO_URL = '/user/getProfile',
  // 修改用户信息
  USERINFOEDIT_URL = '/user/modifyProfile'
}

//请求的二次封装
//用户登录借口
export const reqUserLogin = (params: any) => request.post<any, any>(API.USERLOGIN_URL, params)
//获取用户信息接口
export const reqUserInfo = () => request.get<any, userProfileInfoType>(API.USERINFO_URL)
//修改用户信息接口
export const reqUserInfoEdit = (params: userProfileInfoType) => request.post<any, any>(API.USERINFOEDIT_URL, params)
