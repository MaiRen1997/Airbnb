<template>
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
    v-model="password"
    type="password"
    label="密码"
    placeholder ="请输入密码"
  />

  <!-- 按钮 -->
  <van-button type="primary" size="large" :round="true">大号按钮</van-button>
  <div>
    <span>密码登录</span>
    <span>注册</span>
  </div>
</template>

<script>
import { ref } from "vue";
import loginPhoneVue from './loginPhone.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      sms:"",
      password:"",
    };
  },

  components: {},

  computed: {},
  methods:{
    onClickLeft(){
      this.$router.go(-1);
    }
  },
  mounted() {
  },
  setup(){
    const value = ref('');
    return { value };
  }
});
</script>
<style lang='less' scoped>
@field-placeholder-text-color:red;
</style>
