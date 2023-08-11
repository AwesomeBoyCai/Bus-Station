import axios from 'axios'
import { ElMessage } from 'element-plus'
//引入用户仓库
// import useUserStore from '@/store/user'

//利用axios.create方法创建一个axios实例
const request = axios.create({
  baseURL: '/bus-ticket', //请求基础路径设置
  timeout: 5000 //超时的时间设置，超出5s请求就是失败
})

//请求拦截器
request.interceptors.request.use(config => {
  //如果存在token就在请求头携带token参数
  if (localStorage.getItem('token')) {
    config.headers.Authorization = localStorage.getItem('token')
  }
  return config
})

//响应拦截器
request.interceptors.response.use(
  response => {
    //响应拦截器成功的回调，一般会简化数据
    return response.data
  },
  error => {
    //处理http网络错误
    let status = error.response.status
    switch (status) {
      case 404:
        //错误信息
        ElMessage({
          type: 'error',
          message: '请求失败路径出现问题'
        })
        break
      case 500 | 501 | 502 | 503 | 504 | 505:
        //错误信息
        ElMessage({
          type: 'error',
          message: '服务器错误'
        })
        break
      case 401:
        //错误信息
        ElMessage({
          type: 'error',
          message: '参数有误'
        })
        break
    }
    return Promise.reject(new Error(error.message))
  }
)

//对外暴露axios
export default request
