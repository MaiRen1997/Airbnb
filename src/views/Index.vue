<template>
  <div class="index">
    <router-view></router-view>
        <!-- 底部标签栏 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o" to="home">主页</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="community">社区</van-tabbar-item>
      <van-tabbar-item icon="smile-comment-o" badge="3" to="info">消息</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss'></style>
