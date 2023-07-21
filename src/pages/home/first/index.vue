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
  </div>
</template>

<script setup lang="ts">
import Search from '../search/index.vue'
//@ts-ignore
import CarouselMain from '../carouselMain/index.vue'
import Notice from '../notice/index.vue'
</script>

<style lang="scss" scoped>
.container {
  margin-top: 30px;
}
</style>
