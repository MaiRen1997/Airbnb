<template>
  <div class="mine_contain">
    <!-- 顶部 -->
    <div class="top">
    <!-- 头像 -->
    <div class="person_icon">

    </div>
    <div class="person_info">
      <van-cell
        title="昵称"
        size="large"
        label="个性签名"
        is-link
        @click="goOther"
      />
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
        <van-grid-item icon="credit-pay" text="待付款" />
        <van-grid-item icon="logistics" text="待收货" />
        <van-grid-item icon="send-gift-o" text="待发货" />
        <van-grid-item icon="after-sale" text="退货售后" />
        <van-grid-item icon="goods-collect-o" text="求购" />
      </van-grid>
    </div>
    <!-- 中下部工具 -->
    <div class="center_bottom">
      <div>
        <p class="mine_title">工具</p>
        <van-grid>
          <van-grid-item icon="certificate" text="鉴别服务" />
          <van-grid-item icon="discount" text="焕然洗护" />
          <van-grid-item icon="upgrade" text="95分闲置" />
          <van-grid-item icon="completed" text="发货提醒" />
          <van-grid-item icon="question-o" text="达人问答" />
          <van-grid-item icon="thumb-circle-o" text="兴趣达人" />
          <van-grid-item icon="service-o" text="客服中心" />
          <van-grid-item icon="sign" text="好友帮选" />
          <van-grid-item icon="medal-o" text="尺码管理" />
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  data() {
    return {
      
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    goOther(){
      if(window.localStorage.isLogin){
        this.$router.push();
      }else{
        this.$router.push("/loginPassword");
      }
    }
  }
};
</script>
<style lang='less' scoped></style>
