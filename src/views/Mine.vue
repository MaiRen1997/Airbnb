<template>
  <div class="mine_contain">
    <!-- 顶部 -->
    <div class="top">
    <!-- 头像 -->
    <div class="person_icon">

    </div>
    <div class="person_info">
      <van-cell title="昵称"  size="large" label="个性签名" is-link />
    </div>
    
    </div>
    <!-- 中部购买 -->
    <div class="center">
      <!-- 搜索和浏览历史 -->
      <div class="history">
        <div class="history_left">
          <van-cell title="收藏夹" size="large" label="暂无记录" is-link 
        />
        </div>
        <div class="history_right">
          <van-cell title="浏览记录" size="large" label="暂无记录" is-link/>
        </div>
      </div>
      <p class="mine_title">购买</p>
      <van-grid :column-num="5" :border='false'>
        <van-grid-item icon="photo-o" text="待付款" />
        <van-grid-item icon="photo-o" text="待收货" />
        <van-grid-item icon="photo-o" text="待发货" />
        <van-grid-item icon="photo-o" text="退货售后" />
        <van-grid-item icon="photo-o" text="求购" />
      </van-grid>
    </div>
    <!-- 中下部工具 -->
    <div class="center_bottom">
      <div>
        <p class="mine_title">工具</p>
        <van-grid>
          <van-grid-item icon="photo-o" text="鉴别服务" />
          <van-grid-item icon="photo-o" text="焕然洗护" />
          <van-grid-item icon="photo-o" text="95分闲置" />
          <van-grid-item icon="photo-o" text="发货提醒" />
          <van-grid-item icon="photo-o" text="达人问答" />
          <van-grid-item icon="photo-o" text="兴趣达人" />
          <van-grid-item icon="photo-o" text="客服中心" />
          <van-grid-item icon="photo-o" text="好友帮选" />
          <van-grid-item icon="photo-o" text="尺码管理" />
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
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

