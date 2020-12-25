<template>
  <div class="login">
    <!-- 顶部 底部安全区 添加 meta 标签，并设置 viewport-fit=cover 值 -->
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"
    />
    <!-- 开启顶部安全区适配 -->
    <van-nav-bar safe-area-inset-top />
    <!-- 顶部标题 -->
    <van-nav-bar
      title="手机登录"
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
          @click="go_resetAccount"
        >忘记密码</span>
        <span 
          class="resign"
          @click="go_resign"
        >注册</span>
      </div>
    </div>
    <!-- 开启底部安全区 -->
    <van-number-keyboard safe-area-inset-bottom />
  </div>
</template>
<script>
import { useRouter } from "vue-router";

export default {
  setup(){
    const router = useRouter();
    const onClickLeft = function(){
      router.go(-1);
    };
    const go_resetAccount = function(){
      router.push("/resetAccount")
    }
    const go_resign =function(){
      router.push("/resign");
    }
    return {onClickLeft, go_resetAccount, go_resign};
  }
};
</script>
<style lang='less' scoped></style>
