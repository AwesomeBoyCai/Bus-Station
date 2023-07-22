<template>
  <div class="container">
    <!-- 顶部 -->
    <div class="header">
      <!-- 背景图片 -->
      <div class="header-left">
        <span class="hotTitle">热门线路</span>
        <span class="IconBox">
          <ArrowRightBold color="#ff8f6a" style="width: 10px; height: 10px; margin: 5px auto" />
        </span>
      </div>
      <img src="@/assets/image/theme_13.png" alt="" />
    </div>
    <!-- 内容区域 -->
    <div class="content"></div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRightBold } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 500px;
  border-radius: 20px;
  background-color: #eef1f6;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 68px;
    border-radius: 8px;
    background: url('@/assets/image/theme_bg2.jpg');
    background-size: cover;
    background-position: center;
    .header-left {
      display: flex;
      width: 130px;
      height: 100%;
      justify-content: space-around;
      align-items: center;
      .hotTitle {
        padding-left: 16px;
        color: #ffffff;
        font-size: 20px;
        font-weight: 600;
        line-height: 26px;
        margin-right: 8px;
      }
      .IconBox {
        display: flex;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background-color: #ffffff;
      }
    }
    img {
      width: 88px;
      height: 68px;
      display: block;
      border-radius: 8px;
      margin-right: 30px;
    }
  }
  .header:hover {
    cursor: pointer;
  }
  .content {
    // height: 400px;
    background-color: aquamarine;
  }
}
</style>
