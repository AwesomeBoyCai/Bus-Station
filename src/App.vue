<template>
  <div class="container">
    <BusTop />

    <!-- 展示路由组建的区域 -->
    <div class="content">
      <router-view></router-view>
    </div>

    <BusBottom />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eef1f6;
  .content {
    margin-top: 70px;
    width: 1200px;
    // min-height: 700px;
  }
}
</style>
