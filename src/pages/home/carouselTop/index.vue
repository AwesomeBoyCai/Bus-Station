<template>
  <div class="tabbar-container">
    <el-carousel trigger="click" height="250px">
      <el-carousel-item v-for="item in imgArr" :key="item">
        <img :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts" setup>
//引入组合式api
import { ref } from 'vue'

let imgArr = ref([
  'https://awesomeboy.oss-cn-chengdu.aliyuncs.com/img/202307211523750.jpg',
  'https://awesomeboy.oss-cn-chengdu.aliyuncs.com/img/202307211523019.jpg'
])
</script>

<style lang="scss" scoped>
.tabbar-container {
  width: 100%;
  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
