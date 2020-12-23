<template>
  <div>这是密码登录页面</div>
  <van-nav-bar
    title="登录"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
  <van-search 
    v-model="value" 
    placeholder="请输入手机号" 
    input-align="center"
    shape="round"
    left-icon=""
  />
  <!--短信验证码 -->
  <van-field
    v-model="sms"
    center
    clearable
    placeholder="请输入短信验证码"
  >
    <template #button>
      <van-button size="small" type="primary">发送验证码</van-button>
    </template>
  </van-field>
  <!-- 按钮 -->
  <van-button type="primary" size="large" round = true>大号按钮</van-button>
  <div>
    <span>密码登录</span>
    <span>注册</span>
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
<style lang='less' scoped>
.search-input-height{
  height: 500px;
}
</style>
