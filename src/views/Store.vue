<template>
  <div class="store" v-if="value">
    <!-- 顶部 -->
    <div class="search">
      <!-- 左侧回退图标 -->
      <van-button type="default" to="/search" replace="true">
        <van-icon name="arrow-left" size="18" />
      </van-button>
      <!-- 搜索框 -->
      <van-search
        class="search"
        v-model="value"
        placeholder="请输入搜索关键词"
      />
      <!-- 右侧按钮 -->
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
        v-for="(item, index) in navList"
        :key="index"
        :class="{ active: index === isNavActive, navItem: true }"
        @click="[navClick(index), showPopup(index)]"
      >
        {{ item.name }}
        <van-icon
          :name="item.icon"
          :class="{ rotateIcon: rotatePriceIcon && index === 2 }"
        />
      </p>
    </div>
    <!-- 弹出框 -->
    <!-- 报的假错，不用改 -->
    <van-popup
      v-model:show="show"
      position="right"
      :style="{ width: '85%', height: '100%' }"
      class="pop"
    >
      <div class="price">
        <h4>价格</h4>
        <div class="searchPrice">
          <input type="number" min="0" placeholder="最低价" /> -
          <input type="number" min="0" placeholder="最高价" />
        </div>
        <!-- 商品 -->
        <div class="brand">
          <div class="title" @click="showBrandList">
            <h4>品牌</h4>
            <div>
              <span>{{ branzhankai }}&nbsp;</span>
              <van-icon
                name="arrow-down"
                size="12"
                :class="{ rotateIcon: rotateBrandIcon }"
              />
            </div>
          </div>
          <div
            :style="{ height: `${Math.ceil(brandList.length / 3) * 39}px` }"
            :class="{ showbrand: hiddenBrand }"
            class="brandName"
          >
            <div
              v-for="(item, index) in brandList"
              :key="index"
              :class="{ activeBrand: index === isBrandActive }"
              @click="brandClick(index, item)"
            >
              {{ item }}
            </div>
          </div>
        </div>
        <!-- 颜色 -->
        <div class="color">
          <div class="title" @click="showColorList">
            <h4>颜色</h4>
            <div>
              <span>展开 </span>
              <van-icon
                name="arrow-down"
                size="12"
                :class="{ rotateIcon: rotateColorIcon }"
              />
            </div>
          </div>
          <div
            :style="{ height: `${Math.ceil(colorList.length / 4) * 45}px` }"
            :class="{ showcolor: hiddenColor }"
            class="colorName"
          >
            <div
              v-for="(item, index) in colorList"
              :key="index"
              :style="{ background: item }"
              :class="{ activeColor: index === isColorActive }"
              @click="colorClick(index)"
            ></div>
          </div>
        </div>
      </div>
    </van-popup>
    <!-- 商品列表 -->
    <product :value="value" @func="getExist" v-if="exist"></product>
    <div v-else>
      <img :src="nopic" alt="" />
      暂未找到相关内容
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import product from "../components/store/productList.vue";
import nopic from "../assets/nopic.png";

export default {
  setup() {
    const show = ref(false);
    const showPopup = (i) => {
      if (i === 3) {
        show.value = true;
      }
    };
    const activeNames = ref(["1"]);
    return {
      show,
      showPopup,
      activeNames,
    };
  },
  data() {
    return {
      rotatePriceIcon: false,
      rotateBrandIcon: false,
      rotateColorIcon: false,
      nopic: nopic,
      hiddenBrand: true,
      hiddenColor: true,
      exist: true,
      value: "",
      isNavActive: 0,
      isBrandActive: -1,
      branzhankai: "展开",
      isColorActive: -1,
      brandList: [
        "Nike",
        "adidas",
        "Jordan",
        "New Balance",
        "Puma",
        "Converse",
        "Vans",
        "李宁",
      ],
      colorList: [
        "#CC0303",
        "#BF0447",
        "#B70098",
        "#B70098",
        "#0039C3",
        "#0039C3",
        "#0039C3",
        "#64C500",
        "#B4CA00",
        "#E2D900",
        "#D14A00",
        "#FFFFFF",
        "#000000",
        "linear-gradient(to bottom,white,black)",
        "linear-gradient(to bottom,white,grey)",
      ],
      navList: [
        { name: "综合", icon: "" },
        { name: "销量", icon: "" },
        { name: "价格", icon: "arrow-up" },
        { name: "筛选", icon: "completed" },
      ],
    };
  },
  components: {
    product,
  },
  mounted() {
    this.value = this.$route.params.value;
    //请求数据结束
  },
  methods: {
    getExist(data) {
      this.exist = data;
    },
    navClick(index) {
      this.isNavActive = index;
      if (index === 2) {
        this.rotatePriceIcon = !this.rotatePriceIcon;
      }
    },
    clickFlag(index) {
      index === 3;
    },
    showBrandList() {
      this.hiddenBrand = !this.hiddenBrand;
      this.rotateBrandIcon = !this.rotateBrandIcon;
    },
    brandClick(index, val) {
      this.branzhankai = val;
      this.isBrandActive = index;
    },
    colorClick(index) {
      this.isColorActive = index;
    },
    showColorList() {
      this.hiddenColor = !this.hiddenColor;
      this.rotateColorIcon = !this.rotateColorIcon;
    },
  },
};
</script>
<style lang='less' scoped>
@borderColor: #a9a9a9;

.store {
  .showbrand {
    height: 70px !important;
  }
  .showcolor {
    height: 52px !important;
  }
  .pop {
    h4 {
      font-size: 16px;
      line-height: 40px;
      height: 40px;
      text-align: left;
    }

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
      }
    }

    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        font-size: 14px;
      }
    }
  }

  .search {
    display: flex;
    justify-content: space-between;
    padding: 10px 17px;
    align-items: center;
  }

  .navList {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .navItem {
      font-size: 12px;
      color: rgb(54, 54, 54);
      text-align: center;
      line-height: 24px;
      height: 24px;
      padding: 0 30px;
    }

    .active {
      color: #ea210c;
    }
  }
}
</style>
