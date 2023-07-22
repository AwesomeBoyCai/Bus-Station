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
        <StationIntro />
      </el-col>
      <el-col :span="8">
        <HotLineOne />
      </el-col>
      <el-col :span="8">
        <HotLineTwo />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import Search from '@/pages/home/search/index.vue'
//@ts-ignore
import CarouselMain from '@/pages/home/carouselMain/index.vue'
import Notice from '@/pages/home/notice/index.vue'
import Process from '@/pages/home/process/index.vue'
//引入热门线路组件
import HotLineOne from '@/pages/home/hotLineOne/index.vue'
//引入热门线路组件
import HotLineTwo from '@/pages/home/hotLineTwo/index.vue'
import StationIntro from '@/pages/home/stationIntro/index.vue'
</script>

<style lang="scss" scoped>
.container {
  margin-top: 30px;
}
</style>
