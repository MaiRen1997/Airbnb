<template>
  <div>这是密码登录页面</div>
  <van-nav-bar
    title="登录"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
  <!-- 手机输入框 -->
<van-cell-group>
    <van-field v-model="value" placeholder="请输入用户名" />
  </van-cell-group>
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
