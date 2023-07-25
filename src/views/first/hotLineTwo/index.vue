<template>
  <div class="container">
    <!-- 顶部 -->
    <div class="header">
      <!-- 背景图片 -->
      <div class="header-left">
        <span class="hotTitle">景区一日游</span>
        <span class="IconBox">
          <ArrowRightBold color="#77aaf9" style="width: 10px; height: 10px; margin: 5px auto" />
        </span>
      </div>
      <img src="@/assets/image/theme_12.png" alt="" />
    </div>
    <!-- 内容区域 -->
    <ul class="content">
      <li v-for="item in lineInfoArr" :key="item.number">
        <div class="left-num">
          <span class="left-num-style leftNumberStyle">
            {{ item.number }}
          </span>
        </div>
        <div class="center-img">
          <img :src="item.imgSrc" alt="" />
        </div>
        <div class="right-info">
          <div>
            <span class="cityName">
              {{ item.start_region }}
              <Right style="width: 20px; height: 20px" />
              {{ item.final_region }}
            </span>
            <span class="price">
              ￥
              <span>{{ item.price }}</span>
              起
            </span>
          </div>
          <div>
            <span class="Info-date">{{ item.date }}</span>
            <span class="Info-date">{{ item.disCount }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ArrowRightBold, Right } from '@element-plus/icons-vue'
//引入组合式API
import { reactive } from 'vue'
//热门线路信息存储
const lineInfoArr = reactive<any>([
  {
    number: '1',
    imgSrc: 'https://awesomeboy.oss-cn-chengdu.aliyuncs.com/img/202307231821912.jpg',
    start_region: '西安',
    final_region: '鄂尔多斯',
    price: '269',
    date: '2023-08-15 周二',
    disCount: '3.4'
  },
  {
    number: '2',
    imgSrc: 'https://awesomeboy.oss-cn-chengdu.aliyuncs.com/img/202307231821912.jpg',
    start_region: '西安',
    final_region: '鄂尔多斯',
    price: '269',
    date: '2023-08-15 周二',
    disCount: '3.4'
  },
  {
    number: '3',
    imgSrc: 'https://awesomeboy.oss-cn-chengdu.aliyuncs.com/img/202307231821912.jpg',
    start_region: '西安',
    final_region: '鄂尔多斯',
    price: '269',
    date: '2023-08-15 周二',
    disCount: '3.4'
  },
  {
    number: '4',
    imgSrc: 'https://awesomeboy.oss-cn-chengdu.aliyuncs.com/img/202307231821912.jpg',
    start_region: '西安',
    final_region: '鄂尔多斯',
    price: '269',
    date: '2023-08-15 周二',
    disCount: '3.4'
  },
  {
    number: '5',
    imgSrc: 'https://awesomeboy.oss-cn-chengdu.aliyuncs.com/img/202307231821912.jpg',
    start_region: '西安',
    final_region: '鄂尔多斯',
    price: '269',
    date: '2023-08-15 周二',
    disCount: '3.4'
  }
])
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
    background: url('@/assets/image/theme_bg3.jpg');
    background-size: cover;
    background-position: center;
    .header-left {
      display: flex;
      width: 150px;
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
  //内容部分的样式
  .content {
    display: flex;
    flex-direction: column;
    height: 400px;
    background-color: #ffffff;
    margin-top: -10px;
    border-radius: 6px;
    padding: 8px 0;
    li {
      display: flex;
      flex: 1;
      padding: 0 15px 0 12px;
      width: 100%;
      align-items: center;
      cursor: pointer;
      //对于序号的样式
      .left-num-style {
        display: flex;
        width: 18px;
        height: 18px;
        font-size: 12px;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        color: #ffffff;
      }
      //li左侧序号的样式
      .left-num {
        width: 40px;
        height: 66px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        margin-right: 12px;
        .leftNumberStyle {
          background-color: #ccd5e4;
        }
      }
      //li中间图片的样式
      .center-img {
        height: 66px;
        width: 88px px;
        margin-right: 16px;
        overflow: hidden;
        border-radius: 4px;
        img {
          width: 100%;
          height: 100%;
          cursor: pointer;
          display: block;
          object-fit: cover;
          border-radius: 4px;
          //过渡效果
          transition-duration: 0.3s;
          transition-timing-function: ease;
          transition-delay: 0s;
          transition-property: transform;
        }
      }

      //右边Info的信息样式
      .right-info {
        // padding: 20px 0;
        width: 200px;
        border-bottom: 1px solid #eeeeee;
        div {
          margin: 10px 0;
          display: flex;
          justify-content: space-between;
          .cityName {
            color: #333333;
            font-size: 14px;
            font-weight: 600;
            line-height: 18px;
            display: flex;
          }
          .price {
            color: #0086f6;
            font-size: 15px;
            font-weight: 600;
            line-height: 16px;
          }
          .Info-date {
            color: #999999;
            font-size: 12px;
            line-height: 16px;
          }
        }
      }
    }
    li:nth-child(1) .left-num span {
      background-color: #ff6257;
    }
    li:nth-child(2) .left-num span {
      background-color: #f78a29;
    }
    li:nth-child(3) .left-num span {
      background-color: #faca06;
    }
    li:hover img {
      transform: scale(1.2);
    }
    li:hover .right-info .cityName {
      color: #0086f6;
    }
  }
}
</style>
