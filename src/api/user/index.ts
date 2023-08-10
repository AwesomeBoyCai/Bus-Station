//引入二次封装axios
import request from '@/utils/request'

//枚举类型
enum API {
  USERLOGIN = 'http://192.168.31.138:8060/bus-ticket/user/login',
  USERINFO = 'http://192.168.31.138:8060/bus-ticket/user/getProfile'
}

export const reqUserLogin = (data: any) => request.post<any>(API.USERLOGIN, data)
export const reqUserInfo = () => request.get<any>(API.USERINFO)
