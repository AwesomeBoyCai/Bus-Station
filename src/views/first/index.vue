<template>
  <div class="container">
    <!-- 首页的三个组件 -->
    <el-row :gutter="20">
      <el-col :span="7">
        <!-- 搜索 -->
        <Search />
      </el-col>
      <el-col :span="10">
        <!-- 轮播 -->
        <CarouselMain />
      </el-col>
      <el-col :span="7">
        <!-- 通知 -->
        <Notice />
      </el-col>
    </el-row>

    <!-- 步骤图片组件 -->
    <Process />
    <!-- 介绍车站 热门线路组件 -->
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="8">
        <HotLineOne />
      </el-col>
      <el-col :span="8">
        <HotLineTwo />
      </el-col>
      <el-col :span="8">
        <HotLineThree />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import Search from '@/views/first/search/index.vue'
//@ts-ignore
import CarouselMain from '@/views/first/carouselMain/index.vue'
import Notice from '@/views/first/notice/index.vue'
import Process from '@/views/first/process/index.vue'
//引入热门线路组件
import HotLineOne from '@/views/first/hotLineOne/index.vue'
//引入热门线路组件
import HotLineTwo from '@/views/first/hotLineTwo/index.vue'
import HotLineThree from '@/views/first/hotLineThree/index.vue'
// import StationIntro from '@/pages/home/stationIntro/index.vue'
//挂载发起请求
import { onMounted } from 'vue'
//引入获取信息请求
import { reqUserInfo } from '@/api/user/index'

onMounted(() => {
  getUserInfo()
})

const getUserInfo = () => {
  reqUserInfo()
}
</script>

<style lang="scss" scoped></style>
