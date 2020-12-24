<template>
  <!-- 顶部 底部安全区 添加 meta 标签，并设置 viewport-fit=cover 值 -->
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"
  />
  <!-- 开启顶部安全区适配 -->
  <van-nav-bar safe-area-inset-top />
  <!-- 顶部标题 -->
  <van-nav-bar
    title="注册"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
  <div class="input_contain">
    <!-- 手机输入框 -->
    <div class="phone">
      <input type="text" placeholder="请输入手机号"/>
    </div>
    <!-- 手机验证码 -->
    <div class="phone">
      <input type="text" placeholder="请输入验证码"/>
      <!-- 发送验证码 -->
      <div id="send_msg">
      发送验证码
      </div>
    </div>
    <div class="check_pwd">
      <input type="text" placeholder="请输入新密码"/>
    </div>
    <div class="check_pwd">
      <input type="text" placeholder="请确认新密码"/>
    </div>
    <!-- 按钮 -->
    <van-button
      type="primary"
      size="large"
      :round="true"
      @click="submit"
    >
      下一步
    </van-button>
    <div class = "other_page">
      <span 
        @click="go_login"
      >已有密码</span>
    </div>
  </div>
  <!-- 开启底部安全区 -->
  <van-number-keyboard safe-area-inset-bottom />
</template>
<script>
import { ref } from "vue";
import { reactive } from "vue";
import loginPhoneVue from './loginPhone.vue';
import { defineComponent } from 'vue';
import { useRouter, useRoute } from 'vue-router'
// import axios from "axios";
export default defineComponent({
  setup(){
     const value = ref('');
    //获取用户名
    const username = ref('');
    const imgurl =reactive([]);
    //获取密码
    const password = ref('');
    const sms = ref('');

    //左上角点击回退方法
    const router = useRouter();
    const onClickLeft = function(){
      router.go(-1);
    }
    //去注册页面
  const go_login =function(){
    router.push("/loginPassword");
  }
    return { value, username, sms, password, go_login, onClickLeft };
  }
});
</script>
<style lang="ts" scoped>

</style>
