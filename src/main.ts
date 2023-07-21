import { createApp } from 'vue'
//引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//element-ui的中文格式
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//引入清除默认样式
import '@/style/reset.scss'
//引入vue-router核心插件并安装
import router from './router'
import App from '@/App.vue'
//引入全局组件 --顶部 --底部
import BusTop from '@/components/Bus_Top/index.vue'
import BusBottom from '@/components/Bus_bottom/index.vue'
//利用createApp方法创建应用实例，且将应用实例挂载到挂载点上
const app = createApp(App)
//安装
app.use(ElementPlus, {
  locale: zhCn
})
//安装全局组件
app.component('BusTop', BusTop)
app.component('BusBottom', BusBottom)
//安装element-plus
app.use(ElementPlus)
//安装vue-router
app.use(router)
app.mount('#app')
