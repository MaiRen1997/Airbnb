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
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item,index) in 4" :key="index">1</van-swipe-item>
        </van-swipe>

        <!-- 导航栏 -->
        <!-- :gutter设置格子间距 -->
        <van-grid class="nav" :border="false">
          <van-grid-item icon="photo-o" text="文字" v-for="(item, index) in 8" :key="index" :gutter="10"  />
        </van-grid>

        <!-- 产品 -->
        <div class="shoes">
          <div class="pic" v-for="(item, index) in pic" :key="index">
            <figure>
              <img :src="item.img" alt="">
            </figure>
            <p>{{ item.name }}</p>
            <div class="buyitem">
              <span>￥{{ item.price }}</span>
              <span class="sell">{{ item.sell }}人付款</span>
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

export default {
  data() {
    return {
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
      ]
    };
  },

  components: {},

  computed: {},

  mounted() {
    console.log(1);
    this.getdata();
        // 请求数据结束
    this.$nextTick(() => {
      new BScroll(".wrapper", {
        scrollX: false,
        scrollY: true,
        click:true
      })
    });
  },

  methods: {
    getdata(){
      console.log(1);
      fetch("http://10.31.162.36:8088/api/user//searchUser")
      .then(res=>res.json())
      .then(res=>{
        console.log(res)
        })
    },
      onClickRight() {
      Toast('按钮');
    },
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
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
};

.nav {
  padding: 10px 0;
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
