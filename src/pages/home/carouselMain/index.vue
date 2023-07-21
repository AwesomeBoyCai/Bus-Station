<template>
  <div>
    <el-carousel trigger="click" height="300px">
      <el-carousel-item v-for="item in imgArr" :key="item">
        <img :src="item" alt="" style="height: 100%; width: 100%" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let imgArr = ref([
  'https://awesomeboy.oss-cn-chengdu.aliyuncs.com/img/202307211720517.jpg',
  'https://awesomeboy.oss-cn-chengdu.aliyuncs.com/img/202307211714470.jpg',
  'https://awesomeboy.oss-cn-chengdu.aliyuncs.com/img/202307211714197.jpg',
  'https://awesomeboy.oss-cn-chengdu.aliyuncs.com/img/202307211715893.jpg',
  'https://awesomeboy.oss-cn-chengdu.aliyuncs.com/img/202307211720289.jpg'
])
</script>

<style lang="scss" scoped>
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
</style>
