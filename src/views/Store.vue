<template>
  <div class="store">
    <!-- 顶部 -->
    <div class="search">
      <!-- 左侧回退图标 -->
      <van-button type="default">
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
    <div>
      
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  data() {
    return {
      value:"" as string
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.value = this.$route.params.value;
  },

  methods: {}
};
</script>
<style lang='less' scoped>
.store {
  .search {
    display: flex;
    justify-content: space-between;
    padding: 10px 17px;
    align-items: center;
  }
}

</style>
