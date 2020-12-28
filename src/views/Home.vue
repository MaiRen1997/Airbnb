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
        
        <product :productList="productList"></product>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import BScroll from 'better-scroll';
import { getSwipePicApi, getProductPicApi, getLogoApi } from '../utils/api.ts';
import product from '../components/Home/ProductCom.vue';

export default {
  data() {
    return {
      num:0,
      count:4,
      start:0,
      lunbo: [],
      logoList:[],
      productList:[],
      imgurl:[]
    };
  },
  components: {
    product
  },
  mounted() {
    this.getdata();
    this.getlogo();
    this.getProduct();
  },

  methods: {
    //请求数据
    async getdata() {
      const res = await getSwipePicApi();
        this.lunbo = res;
    },
    async getProduct() {
      const res = await getProductPicApi({count: this.count, start: this.start});
      this.productList = res.result;

      //better-scroll车轮滚滚启动
      await this.$nextTick()
      const bs = new BScroll(".wrapper", {
        scrollX: false,
        scrollY: true,
        click:true,
        pullUpLoad: true
      });
      //监听滚动到底的事件
      bs.on("pullingUp", async() => {
        //整理字符串
        this.start += this.count
        //请求数据
        const res = await getProductPicApi({count: this.count, start: this.start});
        // 将请求到的数据和之前的数据做合并
        this.productList = this.productList.concat(res.result);
        //需要重新计算better-scroll的高度
        await this.$nextTick();
          bs.refresh()
        if ( this.num = this.count) {
          bs.finishPullUp();
        };
      })
    },async getlogo() {
      const res = await getLogoApi();
      this.logoList = res;
    },
    onClickRight() {
      Toast('还没做');
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
</style>
