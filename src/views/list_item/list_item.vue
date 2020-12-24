<template>
  <div class="list_item">
    <!-- 开启顶部安全区适配 -->
    <van-nav-bar safe-area-inset-top /> 
    <div>这是列表详情页面</div>
    <!-- 顶部搜索栏 -->
    <van-search
      v-model="value"
      show-action
      label="地址"
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='less' scoped></style>
