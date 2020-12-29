<template>
  <!-- 整个详情页面的容器 设置背景色灰色 -->
  <div class="detail">
    <!-- 第1张卡片——头部导航处 -->
    <div class="navbar">
      <van-nav-bar
        :title="detail.producttitle"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #right>
          <van-icon name="share-o" size="18" @click="showShare = true" />
        </template>
      </van-nav-bar>
    </div>
    <div class="navbar-share">
      <van-share-sheet
        v-model:show="showShare"
        :options="options"
        @select="onSelect"
      />
    </div>

    <!-- 第1张卡片——商品轮播图 -->
    <div class="my-swipe">
      <van-swipe :autoplay="3000" indicator-color="black">
        <van-swipe-item
          v-for="(item, index) in swiper"
          :key="index"
          style="background: white"
        >
          <img
            :src="item"
            alt=""
            style="width: 80%; height: 90%; margin-left: 40px"
          />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 第1张卡片——商品价格/配色/尺码 -->
    <div class="infor-all">
      <div class="infor-title">
        <p>{{ detail.producttitle }}</p>
      </div>
      <div class="infor-color">
        <span>选择配色</span>
        <span
          >全部{{ color.length }}种配色
          <van-icon name="arrow" />
        </span>
      </div>
      <div class="infor-img">
        <img
          :src="item.url"
          alt=""
          v-for="(item, index) in color"
          :key="index"
        />
      </div>
      <div class="infor-size">
        <div class="choose">
          <span>选择鞋码</span>
        </div>
        <div class="all-size">
          <ul class="size-list clearfix">
            <li v-for="(item, index) in small" :key="index">
              <p>{{ item.size }}</p>
              <p>￥{{ item.price }}</p>
            </li>

            <!-- 查看全部鞋码——弹出鞋码表 -->
            <li class="margin-zero">
              <span @click="showPopup">全部</span><br />
              <span @click="showPopup">尺码</span>
              <van-popup
                v-model:show="show"
                position="right"
                :style="{ width: '80%', height: '100%' }"
              >
                <div class="eject-title">
                  <p>{{ detail.producttitle }}</p>
                  <img src="" alt="" />图片
                  <p>收藏你想要的尺码，降价时可以通知(可多选)</p>
                </div>
                <div class="eject-size">
                  <ul class="eject-list clearfix">
                    <li
                      v-for="(item, index) in size"
                      :key="index"
                      :style="index % 4 === 3 ? 'margin-right:0px' : ''"
                    >
                      {{ item.size }}
                    </li>
                  </ul>
                </div>
                <div class="eject-btn">
                  <van-button
                    type="primary"
                    size="large"
                    color="#000"
                    @click="ejectnone"
                    >确认</van-button
                  >
                </div>
              </van-popup>
            </li>
            <van-icon name="play" class="size-jt" />
          </ul>
        </div>
      </div>
    </div>

    <!-- 第2张卡片——商品正品保障 -->
    <div class="promise">
      <div class="promise-official">
        <img src="/src/assets/detail-img/promise.png" alt="" />
      </div>
      <div class="promise-know">
        <ul class="know-list">
          <li>
            <van-icon name="passed" size="12" />
            <span>专业鉴定</span>
          </li>
          <li>
            <van-icon name="passed" size="12" />
            <span>严控商家</span>
          </li>
          <li>
            <van-icon name="passed" size="12" />
            <span>正品保障</span>
          </li>
          <li>
            <van-icon name="arrow" size="12" />
          </li>
        </ul>
      </div>
    </div>

    <!-- 第3张卡片——买家评论 -->
    <div class="discuss">
      <div class="discuss-title">
        <span>全网评论（{{ allcomment.length }}个）</span>
        <span
          >查看全部
          <van-icon name="arrow" />
        </span>
      </div>

      <div class="discuss-sign">
        <span>内容（数量）</span>
      </div>

      <div class="discuss-content">
        <div class="discuss-box" v-for="(item, index) in comment" :key="index">
          <div class="discuss-nickname">
            <img :src="item.header" alt="" />
            <span>{{ item.nico }}</span>
          </div>
          <div class="discuss-text">
            <p>
              {{ item.command }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 第4张卡片——产品参数 -->
    <div class="product-param">
      <p>产品参数</p>
      <div class="param-list">
        <ul class="param-title">
          <li>货号</li>
          <li>品牌</li>
          <li>使用场景</li>
          <li>功能分类</li>
          <li>跑鞋科技</li>
        </ul>
        <ul class="param-content">
          <li>{{ spec.num }}</li>
          <li>{{ spec.brand }}</li>
          <li>{{ spec.grand }}</li>
          <li>{{ spec.spot }}</li>
          <li>{{ spec.sci }}</li>
        </ul>
      </div>
    </div>

    <!-- 第5张卡片——穿搭推荐 -->
    <div class="wear">
      <p>穿搭推荐</p>
      <div class="wear-list">
        <ul>
          <li
            v-for="(item, index) in wear"
            :key="index"
            :style="index % 3 === 2 ? 'margin-right:0px' : ''"
          >
            <img :src="item" alt="" />
          </li>
        </ul>
      </div>

      <!-- <div class="wear-checkall">
    <span>查看全部</span>
    <van-icon name="arrow" />
  </div> -->
    </div>

    <!-- 第6张卡片——尺码表 -->
    <div class="size-chart">
      <img :src="detail.brandsize" alt="" />
    </div>

    <!-- 第7张卡片——相关推荐 -->
    <div class="recommend">
      <p>相关推荐</p>
    </div>
    <product :productList="productList" style="margin-bottom: 50px"></product>

    <!-- 商品导航 -->
    <div>
      <van-action-bar>
        <van-action-bar-icon icon="star-o" @click="onClickIcon" />
        <van-action-bar-button
          text="立即购买"
          color="#000"
          @click="onClickButton"
        />
      </van-action-bar>
    </div>
  </div>
</template>

<script>
import product from "../../components/Home/ProductCom.vue";

// import BScroll from '../better-scroll';
import {
  getSwipePicApi,
  getProductPicApi,
  getLogoApi,
  getProductdetailApi,
} from "../../utils/api.ts";
import { ref } from "vue";
import { Toast } from "vant";
export default {
  setup() {
    const show = ref(false);
    const showShare = ref(false);
    const options = [
      [
        { name: "微信", icon: "/src/assets/detail-img/weixin.png" },
        { name: "朋友圈", icon: "/src/assets/detail-img/pengyouquan.png" },
        { name: "QQ", icon: "/src/assets/detail-img/qq.png" },
        { name: "微博", icon: "/src/assets/detail-img/weibo.png" },
      ],
      [{ name: "复制链接", icon: "/src/assets/detail-img/lianjie.png" }],
    ];

    const showPopup = () => {
      show.value = true;
    };
    const onSelect = (option) => {
      Toast(option.name);
      showShare.value = false;
    };

    return {
      options,
      showShare,
      show,
      showPopup,
      onSelect,
    };
  },
  data() {
    return {
      count: 4,
      start: 0,
      productList: [],
      detail: {},
      color: [],
      size: [],
      spec: {},
      wear: [],
      swiper: [],
      comment: [],
      allcomment: [],
      small: [],
    };
  },
  components: {
    product,
  },
  mounted() {
    this.getProduct();
    this.getProductdetail();
  },
  methods: {
    async getProduct() {
      const res = await getProductPicApi({
        count: this.count,
        start: this.start,
      });
      this.productList = res.result;
      //console.log(res)
    },
    async getProductdetail() {
      const res = await getProductdetailApi({ productId: 1 }); //this.productList = res.result;
      this.detail = res.obj;
      this.color = JSON.parse(res.obj.productcolor);
      this.size = JSON.parse(res.obj.productsize);
      this.spec = JSON.parse(res.obj.params);
      this.wear = JSON.parse(res.obj.wear);
      this.swiper = JSON.parse(res.obj.productimgurl);
      this.allcomment = JSON.parse(res.obj.comment);
      this.comment = res.com;
      this.small = res.small;
      // console.log(this.comment);

      console.log(res.obj.productsize);
      // console.log(res.obj.productsize);
      // console.log(typeof(this.size));
      console.log(res.obj);
    },
    ejectnone() {
      this.show = false;
    },
  },
};
</script>

<style lang="less" scoped>
// 整个详情的背景
.detail {
  background: #ececec;
}

// 第1张卡片背景
.product-all {
  background: #fff;
}

// 第1张卡片——轮播
.my-swipe .van-swipe-item {
  color: #fff;
  height: 200px;
  background-color: #39a9ed;
}

// 第1张卡片——价格/尺码/配色
.infor-all {
  padding: 0px 10px;
  background: #fff;
  box-sizing: border-box;
  .infor-title {
    font-size: 19px;
    font-weight: 900;
  }
  .infor-color {
    font-weight: 900;
    margin-top: 20px;
    font-size: 12px;
    span:nth-of-type(2) {
      color: #858585;
      float: right;
      .van-icon {
        vertical-align: -2px;
        font-weight: 900;
      }
    }
  }

  .infor-img {
    overflow-y: hidden;
    overflow-x: auto;
    width: 350px;
    height: 80px;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
    img {
      width: 60px;
      height: 45px;
      margin-right: 15px;
      margin-top: 10px;
      border: 1px dashed #ccc;
      border-radius: 5px;
      padding: 10px 5px;
    }
  }
  .infor-size {
    margin-top: 10px;
    border-top: 1px solid #e4e4e4;
    height: 50px;
    position: relative;
    // .zhegai{
    //   background: white;
    //   box-shadow: 5px 0 2px 2px #fff;
    //   position: absolute;
    //   top:0;
    //   left: 50px;
    //   width: 25px;
    //   height: 100%;
    //   z-index: 999;
    //   opacity: 0.8;
    // }
    .choose {
      font-size: 12px;
      font-weight: 900;
      line-height: 32px;
      width: 55px;
      // border: 1px solid black;
      margin-top: 10px;
      background-image: linear-gradient(
        to right,
        rgb(255, 255, 255),
        rgba(255, 255, 255, 0.774)
      );
    }
    .all-size {
      .size-list {
        font-size: 12px;
        font-weight: 500;
        width: 300px;
        height: 32px;
        position: absolute;
        right: 0;
        left: 50px;
        top: 10px;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
        margin-left: 10px;

        // margin-top: 10px;
        &::-webkit-scrollbar {
          display: none;
          z-index: 1;
        }
      }

      li {
        display: inline-block;
        width: 40px;
        text-align: center;
        height: 32px;
        white-space: nowrap;
        //background: rosybrown;
        margin-right: 25px;

        p {
          &:nth-of-type(1) {
            font-weight: 900;
          }
        }
      }
    }
  }
}

.margin-zero {
  margin-right: 0 !important;
}
.size-jt {
  vertical-align: 3px !important;
  font-weight: 900;
}

// 第2张卡片——正品保障
.promise {
  background: #fff;
  margin-top: 7px;
  padding: 10px;
  position: relative;
  box-sizing: border-box;
  .promise-official {
    width: 100px;
    background: #000;
    height: 20px;
    border-radius: 3px;
    position: relative;
    img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
  }
  .promise-know {
    .know-list {
      position: absolute;
      right: 10px;
      top: 12px;

      li {
        float: left;
        font-size: 12px;
        margin-left: 12px;
        .van-icon {
          vertical-align: -2px;
          font-weight: 900;
        }
      }
    }
  }
}

// 第3张卡片——评论
.discuss {
  background: #fff;
  margin-top: 7px;
  padding: 10px;
  box-sizing: border-box;

  .discuss-title {
    font-size: 14px;
    font-weight: 900;
    span:nth-of-type(2) {
      color: #858585;
      float: right;
      .van-icon {
        vertical-align: -2px;
        font-weight: 900;
      }
    }
  }

  .discuss-sign {
    span {
      font-size: 12px;
      background: #e6e6e6;
      padding: 3px 15px;
      border-radius: 3px;
      box-sizing: border-box;
    }
  }
  .discuss-content {
    margin-top: 10px;
    .discuss-box {
      margin-top: 20px;
      .discuss-nickname {
        span {
          font-size: 10px;
          vertical-align: 5px;
          margin-left: 5px;
          color: #858585;
        }
        img {
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }
      }
    }

    .discuss-text {
      width: 345px;
      height: 30px;
      p {
        font-size: 12px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
  }
}

// 第4张卡片——产品参数
.product-param {
  background: #fff;
  margin-top: 7px;
  padding: 10px;
  box-sizing: border-box;

  p {
    font-size: 14px;
    font-weight: 900;
  }
  .param-list {
    position: relative;
  }
  .param-title {
    font-size: 12px;
    li {
      margin-top: 10px;
    }
  }
  .param-content {
    position: absolute;
    right: 0;
    top: 0;
    li {
      font-size: 12px;
      &:not(:first-child) {
        margin-top: 10px;
      }
    }
  }
}

// 第5张卡片——穿搭推荐
.wear {
  background: #fff;
  margin-top: 7px;
  padding: 10px;
  height: 440px;
  box-sizing: border-box;
  p {
    font-size: 14px;
    font-weight: 900;
  }
}

.wear-list {
  margin-right: 20px;
  width: 360px;
  margin-top: 10px;
  box-sizing: border-box;
  li {
    float: left;
    margin-right: 5px;
  }

  img {
    width: 115px;
    height: 115px;
  }
}
.wear-checkall {
  font-size: 14px;
  font-weight: 900;
  margin-top: 5px;
  color: #858585;
  .van-icon {
    vertical-align: -2px;
    float: right;
  }
}

// 第6张卡片——尺码表
.size-chart {
  margin-top: 7px;
  padding: 10px;
  background: #fff;
  height: 590px;
  box-sizing: border-box;

  img {
    width: 355px;
    height: 590px;
  }
}

// 第7张卡片——相关推荐
.recommend {
  margin-top: 7px;
  padding: 10px;
  background: #fff;
  box-sizing: border-box;

  p {
    font-size: 14px;
    font-weight: 900;
  }
}

// 商品导航
.van-action-bar-icon {
  width: 80px;
}
.van-action-bar {
  //background:red;
  //margin-top: 50px;
  .van-action-bar-button {
    border-radius: 0px;
    width: 200px;
  }

  .van-button {
    width: 200px;
  }
}

// 弹出鞋码
.van-popup {
  box-sizing: border-box;
  position: relative;

  .eject-title {
    margin-top: 10px;
    height: 200px;
    position: fixed;
    left: 20px;
    p {
      &:nth-of-type(1) {
        font-size: 16px;
      }
      &:nth-of-type(2) {
        font-size: 13px;
        padding: 5px 0;
      }
    }
    img {
      margin: 30px 0 10px 0;
      width: 120px;
      height: 90px;
    }
  }

  .eject-size {
    // position: relative;
    margin-top: 200px;
    height: 390px;
    .eject-list {
      margin-top: 10px;
      margin-left: 20px;
      // overflow-y: auto;
      overflow-y: auto;
      position: sticky;
      height: 390px;

      li {
        float: left;
        width: 55px;
        height: 55px;
        background: #e4e4e4;
        font-size: 12px;
        font-weight: 900;
        line-height: 55px;
        margin: 10px 10px 0 0px;
      }
    }
  }

  .eject-btn {
    position: fixed;
    bottom: 10px;
    right: 5px;
    left: 5px;
  }
}
</style>