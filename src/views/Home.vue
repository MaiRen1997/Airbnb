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
          <van-grid-item icon="photo-o" :text="item.title" v-for="item in logoList" :key="item.logoid" :gutter="10">
            <template #icon>
              <img
                class="grid-img"
                :src="item.logoimg"
                alt=""
              />
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
    this.getProduct();
    this.getlogo();

        // 请求数据结束
    this.$nextTick(() => {
      const bs = new BScroll(".wrapper", {
        scrollX: false,
        scrollY: true,
        click:true,
        // probeType: 3
      });
      // bs.on('scroll', (position) => {
      //   console.log(position.x, position.y)
      // });
    });
      
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
      console.log(res);
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
};
.my-swipe{
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  height: 190px;
  background-color: #39a9ed;

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
  padding: 10px 0;

  .grid-img {
    width: 100%;
  }
};

.shoes {
  overflow: hidden;
}

.pic {
  box-sizing: border-box;
  width: 50%;
  height: 160px;
  overflow: hidden;
  float: left;
  border: 1px solid rgba(128, 128, 128, 0.1);

  figure {
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
    padding: 5px
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
</style>
