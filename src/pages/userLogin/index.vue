<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 720px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  border-radius: 0px;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  background: url('@/assets/image/olderimage1.png');
}
</style>
