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
      autofocus="true"
      style="margin-top: 20px"
    />

    <div v-if="show">
      <ul class="maybeList">
        <li
          v-for="(item, index) in searchValue"
          :key="index"
          @click="mayBeTo(item)"
        >
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
            style="margin-left: 10px; padding: 0 10px"
            :to="'/store/' + item"
            >{{ item }}
          </van-button>
        </div>
      </div>

      <!-- 搜索发现 -->
      <div class="history">
        <p>搜索发现</p>
        <div class="hisBut-2">
          <van-button
            type="primary"
            v-for="(item, index) in his"
            :key="index"
            size="small"
            style="margin-left: 10px; margin-bottom: 5px; padding: 0 10px"
            :to="'/store/' + item"
            >{{ item }}
          </van-button>
        </div>
      </div>

      <!-- 热门搜索 -->
      <div class="hot">
        <p>热门搜索</p>
        <div class="hotpic">
          <figure v-for="(item, index) in hotpic" :key="index">
            <div
              :class="{
                colorred: index === 0,
                colororange: index === 1,
                coloryellow: index === 2,
              }"
            >
              {{ index }}
            </div>
            <img :src="item" alt="" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import testImg from "../assets/logo.png";

export default {
  data() {
    return {
      show: false,
      value: "",
      history: [],
      his: [
        "Jordan",
        "科比",
        "欧文6",
        "字母歌",
        "詹姆斯",
        "冰淇淋",
        "库里7",
        "皮蓬",
        "pg4",
        "kt5",
        "aj1",
        "aj6",
        "yeezy 350",
      ],
      hotpic: [
        "/src/assets/img/周雨彤同款.jpeg",
        "/src/assets/img/nb530白银.jpeg",
        "/src/assets/img/Nike白绿粉寿桃.jpeg",
      ],
      searchValue: ["nike", "nike", "nike", "nike", "nike", "nike"],
    };
  },
  mounted() {
    if (localStorage.getItem("searchHistory")) {
      this.history = JSON.parse(localStorage.getItem("searchHistory"));
    }
  },
  methods: {
    onSearch() {
      this.history.push(this.value);
      localStorage.setItem("searchHistory", JSON.stringify(this.history));
      this.$router.replace(`/store/${this.value}`);
    },
    onInput(val) {
      if (val != "") {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    onClear() {
      this.show = false;
    },
    onCancel() {
      this.show = false;
      this.$router.go(-1);
    },
    mayBeTo(val) {
      this.$router.replace(`/store/${val}`);
    },
  },
};
</script>
<style lang='less' scoped>
@import "../assets/css/style.less";
.search {
  padding: 0 10px;
}
.history {
  p {
    font-size: 15px;
    font-weight: lighter;
    text-align: left;
    padding: 20px 0;
  }

  .hisBut-1 {
    width: 100%;
    overflow: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

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
  border-top: 1px solid rgba(0, 0, 0, 0.3);
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
  }

  .hotpic {
    display: flex;
    justify-content: space-between;
    align-items: center;

    figure {
      width: 100px;
      height: 100px;
      border: 1px solid rgb(26, 26, 26);
      background: white;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      .colorred {
        background: #ff0000;
      }

      .colororange {
        background: #ffa800;
      }

      .coloryellow {
        background: #fff000;
      }

      div {
        position: absolute;
        text-align: center;
        background: @theme-color;
        font-weight: bold;
        left: 6px;
        top: -1px;
        width: 15px;
        height: 20px;
        color: black;
        font-size: 13px;
        border: 1px solid rgb(26, 26, 26);
      }

      img {
        max-width: 90%;
        max-height: 90%;
      }
    }
  }
}
</style>
