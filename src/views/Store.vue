<template>
  <div class="store">
    <!-- 顶部 -->
    <div class="search">
      <!-- 左侧回退图标 -->
      <van-button type="default" to="/search">
        <van-icon name="arrow-left" size="18" />
      </van-button>
      <!-- 搜索框 -->
      <van-search class="search" v-model="value" placeholder="请输入搜索关键词" />

      <van-button type="default">
        <van-icon name="coupon-o" size="18" />
      </van-button>
      <van-button type="default">
        <van-icon name="ellipsis" size="18" />
      </van-button>
    </div>
    <!-- 中部导航 -->
    <div class="navList">
      <p
      v-for="(item, index) in navList" :key="index"
      :class="{ active:index === isActive, navItem: true}"
      @click.stop="navClick(index)"
      @click=" showPopup(index)"
      >
        {{ item.name }}
        <van-icon :name="item.icon" />
      </p>
    </div>
    <!-- 弹出框 -->
    <!-- 报的假错，不用改 -->
    <van-popup v-model:show="show" position="right" :style="{ width: '85%', height:'100%' }" class="pop">
      <div class="price">
        <h4>价格</h4>
        <div class="searchPrice">
          <input type="number" min="0" placeholder="最低价"> - 
          <input type="number" min="0" placeholder="最高价">
        </div>
        <!-- 商品 -->
        <div class="brand">
          <div class="title" @click="showList">
            <h4>
              品牌
            </h4>
            <div>
              <span>展开</span>
              <van-icon name="arrow-down" size="12" />
            </div>
          </div>
          <div :style="{height:`${Math.ceil((brandList.length / 3)) * 39}px`}" :class="{ showbrand: hidden }" class="brandName">
            <div v-for="(item, index) in brandList" :key="index">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
      
    </van-popup>
    <!-- 商品列表 -->
    <main class="mianWrapper">
      <div class="content">
        <div v-for="(item, index) in productList" :key="index" ref="content" class="product">
          <h4>
            {{ item.title }}
          </h4>
          <div :class="[`product${index}`, 'wrapper']">
            <ul>
              <li v-for="(shoes, index) in item.arr" :key="index">
                <figure>
                  <img :src="shoes.imgurl" alt="">
                </figure>
                <h6>
                  {{ shoes.style }}
                </h6>
                <span>￥ {{ shoes.price }}起</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang='ts'>
import BScroll from 'better-scroll';
import { ref } from 'vue';

export default {
   setup() {
    const show = ref(false);
    const showPopup = (i) => {
      if(i==3) {
        show.value = true;
      };
    };
    const activeNames = ref(['1']);
    return {
      show,
      showPopup,
      activeNames
    };
  },
  data() {
    return {
      hidden:true,
      number:0,
      value:"" as string,
      isActive:0 as number,
      brandList:[
        "sadasdasd",
        "asafaf",
        "asfsafa",
        "xczxc",
        "sadasdasd",
        "asafaf",
        "asfsafa",
        "xczxc",
      ],
      navList:[
        {name: "综合", icon:""},
        {name: "销量", icon:""},
        {name: "价格", icon:"arrow-up"},
        {name: "筛选", icon:"completed"}
      ] as object,
      productList: [
        {
          title: "Nike Air Force 1",
          arr: [
            {
              imgurl: "/src/assets/img/nike.png",
              style: "低帮 / 纯白",
              price: 489
            },
            {
              imgurl: "..//src/assets/img/nike.png",
              style: "低帮 / 纯白",
              price: 489
            },
            {
              imgurl: "/src/assets/img/nike.png",
              style: "低帮 / 纯白",
              price: 489
            },
            {
              imgurl: "..//src/assets/img/nike.png",
              style: "低帮 / 纯白",
              price: 489
            }
          ]
        },
        {
          title: "Nike Air Force 1",
          arr: [
            {
              imgurl: "..//src/assets/img/nike.png",
              style: "低帮 / 纯白",
              price: 489
            },
            {
              imgurl: "..//src/assets/img/nike.png",
              style: "低帮 / 纯白",
              price: 489
            },
            {
              imgurl: "/src/assets/img/nike.png",
              style: "低帮 / 纯白",
              price: 489
            },
            {
              imgurl: "..//src/assets/img/nike.png",
              style: "低帮 / 纯白",
              price: 489
            }
          ]
        },
        {
          title: "Nike Air Force 1",
          arr: [
            {
              imgurl: "/src/assets/img/nike.png",
              style: "低帮 / 纯白",
              price: 489
            },
            {
              imgurl: "..//src/assets/img/nike.png",
              style: "低帮 / 纯白",
              price: 489
            },
            {
              imgurl: "/src/assets/img/nike.png",
              style: "低帮 / 纯白",
              price: 489
            },
            {
              imgurl: "..//src/assets/img/nike.png",
              style: "低帮 / 纯白",
              price: 489
            }
          ]
        },
        {
          title: "Nike Air Force 1",
          arr: [
            {
              imgurl: "/src/assets/img/nike.png",
              style: "低帮 / 纯白",
              price: 489
            },
            {
              imgurl: "..//src/assets/img/nike.png",
              style: "低帮 / 纯白",
              price: 489
            },
            {
              imgurl: "/src/assets/img/nike.png",
              style: "低帮 / 纯白",
              price: 489
            },
            {
              imgurl: "..//src/assets/img/nike.png",
              style: "低帮 / 纯白",
              price: 489
            }
          ]
        }
      ]
    };
  },
  mounted() {
    this.value = this.$route.params.value;

    //请求数据结束
    // await 
    
    this.$nextTick(() => {
    do{
      new BScroll(`.product${this.number}`, {
        scrollX: true,
        scrollY: true,
        click:true
      });
      this.number ++
    }while (this.productList.length > this.number)
    })
    this.$nextTick(() => {
      const bs = new BScroll(".mianWrapper", {
      scrollX: false,
      scrollY: true,
      click:true,
      pullUpLoad: true
    });
    });
  },
  methods: {
    navClick(index) {
      this.isActive = index;
    },
    showPopup() {
      alert(1);
    },
    clickFlag(index) {
      index === 3;
    },
    showList() {
      this.hidden = !this.hidden;
      console.log(this.hidden)
    }
  }
};
</script>
<style lang='less' scoped>
@borderColor:#a9a9a9;

.store {
  .showbrand {
    height: 70px!important;
  }
  .pop {
    h4 {
      font-size: 16px;
      line-height: 40px;
      height: 40px;
      text-align: left;
    };

    .searchPrice {
      display: flex;
      justify-content: space-between;
      padding-bottom: 28px;

      input {
        width: 130px; 
        height: 30px;
        box-sizing: border-box;
        border: 1px solid @borderColor;
        border-radius: 4px;
        font-size: 13px;
        padding-left: 10px;
      };
    };

    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        font-size: 14px;
      };
    };
    
  };

  .search {
    display: flex;
    justify-content: space-between;
    padding: 10px 17px;
    align-items: center;
  };

  .navList {
    display: flex;
    justify-content: space-around;
    align-items:center;

    .navItem {
      font-size: 12px;
      color: rgb(54, 54, 54);
      text-align: center;
      line-height: 24px;
      height: 24px;
      padding: 0 30px;
    }

    .active {
      color: #EA210C;
    }
  };
  
  .mianWrapper {
    overflow: hidden;
    position: absolute;
    top: 98px;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .product {
    padding: 20px 0 20px 20px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.4);
    text-align: left;
    background: white;

    h4 {
      font-size: 18px;
      font-weight: normal;
    };

    .wrapper {
      overflow: hidden;
      width: 100%;
    }

    ul {
      display: inline-flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 13px;
      overflow: hidden;
    };

    li {
      width: 117px;
      margin-right: 20px;

      figure {
        width: 100%;
        height: 117px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid rgba(128, 128, 128, 0.4);
        background: inherit;

        img {
          max-height: 70%;
          max-width: 70%;
        }
      }

      h6 {
        font-size: 14px;
        height: 26px;
        line-height: 26px;
        font-weight: normal;
        color: #1E1E1E;
      };

      span {
        font-size: 12px;
        font-weight: 400;
        color: #858585;
        display: block
      };
    }
  }
}

</style>
