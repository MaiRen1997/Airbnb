<template>
  <div class="home">
    <!-- 头部 -->
    <van-nav-bar
      @click-left="onClickLeft"
      @click-right="onClickRight"
      class="header"
    >
      <template #left>
        <van-icon name="coupon-o" size="20" />
      </template>
      <template #right>
        <van-icon name="video-o" size="22" />
      </template>
    </van-nav-bar>
    <!-- 搜索按钮 -->
    <van-button type="default" to="/search">
      <van-icon name="search" />
    </van-button>

    <!-- better-scroll盒子嵌套 -->
    <div class="wrapper">
      <div class="content">

        <!-- 轮播图 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="black">
          <van-swipe-item class="my-swipe-item" v-for="item in lunbo" :key="item.title">
             <img :src="item.imgurl" />
          </van-swipe-item>
        </van-swipe>

        <!-- 导航栏 -->
        <!-- :gutter设置格子间距 -->
        <van-grid class="nav" :border="false">
          <van-grid-item :text="item.title" v-for="item in logoList" :key="item.logoid" :gutter="6">
            <template #icon>
              <figure>
                <img
                class="grid-img"
                :src="item.logoimg"
                alt=""
              />
              </figure>
            </template>
          </van-grid-item>
        </van-grid>

        <!-- 产品 -->
        <div class="shoes">
          <div class="pic" v-for="item in productList" :key="item.productid">
            <figure>
              <img :src="item.imgurl" alt="">
            </figure>
            <p>{{ item.title }}</p>
            <div class="buyitem">
              <span>￥{{ item.price }}</span>
              <span class="sell">{{ item.people }}人付款</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import textImg from '../assets/logo.png';
import BScroll from 'better-scroll';
import { getSwipePicApi, getProductPicApi, getLogoApi } from '../utils/api.ts'

export default {
  data() {
    return {
      lunbo: [],
      logoList:[],
      productList:[],
      pic: [
        {
        img: textImg,
        name: "Nike M2k Tekno",
        price: 539,
        sell: 7888
      },
      {
        img: textImg,
        name: "Nike M2k Tekno",
        price: 539,
        sell: 7888
      },
      {
        img: textImg,
        name: "Nike M2k Tekno",
        price: 539,
        sell: 7888
      },
      {
        img: textImg,
        name: "Nike M2k Tekno",
        price: 539,
        sell: 7888
      }
      ],
      imgurl:[]
    };
  },
  mounted() {
    this.getdata();
    this.getlogo();
    this.getProduct();

        // 请求数据结束

      // bs.on('scroll', (position) => {
      //   console.log(position.x, position.y)
      // });

      
  },

  methods: {
    //请求数据
    async getdata() {
      const res = await getSwipePicApi();
        this.lunbo = res;
        console.log(res);
    },
    async getProduct() {
      const res = await getProductPicApi();
      this.productList = res;

      //better-scroll车轮滚滚启动
      this.$nextTick(() => {
      new BScroll(".wrapper", {
        scrollX: false,
        scrollY: true,
        click:true,
        // probeType: 3
      });
      });
    },async getlogo() {
      const res = await getLogoApi();
      this.logoList = res;
      console.log(res);
    },
    onClickRight() {
      Toast('按钮');
    }
    
  }
};
</script>
<style lang="less" scope>
@import "../assets/css/style.less";

.home {
  overflow: hidden;
  background: #efefef!important;
}
.header {
  height: 46px;
  position: relative;
};

.wrapper {
  position: absolute;
  top: 46px;
  left: 0;
  right: 0;
  bottom: 50px;
  overflow: hidden;
  background: @background-color;
};

.my-swipe{
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  height: 190px;

  .my-swipe-item {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  img {
    height: 100%
  }
};

.nav {
  padding-top: 5px;
  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }
  .grid-img {
    max-width: 60px;
    max-height: 100%;
  }
};

.shoes {
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  align-content: flex-start;
  flex-wrap: wrap;
 
  .pic {
    margin-top: 5px;
    box-sizing: border-box;
    width: 180px;
    height: 160px;
    overflow: hidden;
    float: left; 
    background: white;

    figure {
      width: 100%;
      height: 100px;
      overflow: hidden;
    }
    img {
      width: 100%;
      margin-bottom: 10px;
    };
    
    p {
      font-size: 11px;
      color: grey;
      font-weight: lighter;
      padding: 13px 0;
    };

    .buyitem {
      display: flex;
      justify-content: space-between;
      padding: 0 5px 5px;
      font-size: 11px;
      font-weight: lighter;

      .sell {
        color: grey;
      }
    }
  }
}
</style>
