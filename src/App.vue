<template>
  <BusTop />
  <div class="container">
    <!-- 展示路由组建的区域 -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aquamarine;
  .content {
    margin-top: 70px;
    width: 1200px;
    // min-height: 700px;
  }
}
</style>
