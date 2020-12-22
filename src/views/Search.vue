<template>
  <div class="search">
    <!-- 搜索框 -->
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch(value)"
      @input="onInput(value)"
      @cancel="onCancel"
      autofocus="true"
    />
    
    <!-- 历史记录 -->
    <div class="history">
      <p>历史记录</p>
      <van-button
      type="primary"
      v-for="(item, index) in history"
      :key="index"
      size="mini"
      >{{ item }}</van-button>
    </div>
  </div>
</template>

<script lang='ts'>
import { Toast } from 'vant';

export default {
  data() {
    return {
      value: '',
      history: [
        "New Balance",
        "Jordan"
      ]
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onInput(val) {
      Toast(val);
    },
    onCancel() {
      Toast('取消');
    },
  }
};
</script>
<style lang='less' scoped>
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
}
</style>
