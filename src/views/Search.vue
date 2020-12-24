<template>
  <div class="search">
    <!-- 搜索框 -->
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch(value)"
      @input="onInput(value)"
      @clear="onClear()"
      @cancel="onCancel(value)"
      clearable="true"
      autofocus="true"
      style="margin-top:20px"
    />

    <div v-if="show">
      <ul class="maybeList">
        <li v-for="(item, index) in searchValue" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
    
    <div v-else>
          <!-- 历史记录 -->
      <div class="history">
        <p>历史记录</p>
        <div class="hisBut-1">
          <van-button
          type="primary"
          v-for="(item, index) in history"
          :key="index"
          size="small"
          style="margin-left:10px; padding: 0 10px"
          >{{ item }}</van-button>
        </div>
      </div>

      <!-- 历史记录 -->
      <div class="history">
        <p>历史记录</p>
        <div class="hisBut-2">
          <van-button
          type="primary"
          v-for="(item, index) in his"
          :key="index"
          size="small"
          style="margin-left:10px; margin-bottom:5px; padding: 0 10px"
          >{{ item }}</van-button>
        </div>
      </div>

      <!-- 热门搜索 -->
      <div class="hot">
        <p>热门搜索</p>
        <div class="hotpic">
          <figure v-for="(item, index) in hotpic" :key="index">
            <div>
              {{ index }}
            </div>
            <img :src="item" alt="">
          </figure>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import { Toast } from 'vant';
import testImg from '../assets/logo.png';

export default {
  data() {
    return {
      show:false,
      value: '',
      history: [
        "New Balance",
        "Jordan"
      ],
      his: [
        "New Balance",
        "Jordan",
        "New Balance",
        "Jordan",
        "New Balance",
        "Jordan",
        "New Balance",
        "Jordan",
        "New Balance",
        "Jordan"
      ],
      hotpic: [
        testImg,
        testImg,
        testImg
      ],
      searchValue: [
        "nike",
        "nike",
        "nike",
        "nike",
        "nike",
        "nike"
      ]
    };
  },
  methods: {
    onSearch(val) {
      this.$router.push(`/url/${id}`);
    },
    onInput(val) {
      if (val != "") {
        this.show = true;
      }else {
        this.show = false;
      }
    },
    onClear() {
      this.show = false;
      Toast('×');
    },
    onCancel() {
      this.show = false;
      this.$router.go(-1);
      Toast('取消');
    },
  }
};
</script>
<style lang='less' scoped>
@import '../assets/css/style.less';
.search {
  padding: 0 10px;
}
.history {

  p {
    font-size: 15px;
    font-weight: lighter;
    text-align: left;
    padding: 20px 0;
  };
  
  .hisBut-1 {
    width: 100%;
    overflow: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  };

  .hisBut-2 {
    width: 100%;
    height: 70px;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
  }
}

.maybeList {
  margin-top: 70px;
  border-top: 1px solid  rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  li {
    padding: 15px 0;
    text-align: left;
    padding-left: 15px;
    font-size: 18px;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
}

.hot {

  p {
  font-size: 15px;
  font-weight: lighter;
  text-align: left;
  padding: 20px 0;
  };

  .hotpic {
    display: flex;
    justify-content: space-between;
    align-items: center;

    figure {
      width: 100px;
      height: 100px;
      border: 1px solid black;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      div {
        position: absolute;
        background: @theme-color;
        left: 10px;
        top: -1px;
        width: 15px;
        height: 20px;
        color: white;
        font-size: 13px;
        border: 1px solid black;
      }
    }
  }

}
</style>
