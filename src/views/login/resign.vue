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
        <input 
          type="text"
          placeholder="请输入密码"
          v-model="password"
          @keyup.enter="is_pwd_suitable"
          @input="is_pwd_suitable"
          @blur="is_pwd_suitable"
        />
        <div class="remind" v-if="pwd_show">*密码包含 数字,英文,字符中的两种以上，长度6-20</div>
      </div>
      <div class="check_pwd">
        <input
          type="text"
          placeholder="请重新输入密码"
          v-model="again_password"
          @keyup.enter="is_same"
          @blur="is_same"
          @input="is_same"
        />
        <div class="remind" v-if="again_pwd_show">*密码输入不一致</div>
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
   <!--  <van-number-keyboard safe-area-inset-bottom /> -->
  </div>
</template>
<script>
import { ref, reactive } from "vue";
import loginPhoneVue from './loginPhone.vue';
import { defineComponent } from 'vue';
import { useRouter, useRoute } from 'vue-router'
// import axios from "axios";
export default defineComponent({
  setup(){
    let value = ref('');
    //获取用户名
    let username = ref('');
    let imgurl =reactive([]);
    //获取密码
    let password = ref('');
    //获取第二次密码
    let again_password = ref('');
    let sms = ref('');
    //密码提示显隐
    let pwd_show = ref(true);
    let again_pwd_show = ref(true);
    //密码正则
    // let  reg = "^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,20}$";
    //至少包含数字和字母， 6~20位
    let reg = "^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$"
    // let reg = "^1";
    let pwdReg = new RegExp(reg)
    //左上角点击回退方法
    const router = useRouter();
    const onClickLeft = function(){
      router.go(-1);
    }
    //提交方法
    const submit = function (){
      
    }
    //去注册页面
    const go_login =function(){
      router.push("/loginPassword")
      ;
    }
    //密码正则验证方法
    const is_pwd_suitable = function(){
      if(!password.value){//为空的情况
        pwd_show.value = true;
      }else{//不为空的情况
        if(again_password.value === password.value){
          again_pwd_show.value = false;
          }
        else{
          again_pwd_show.value = true;
        }
        if(!(pwdReg.test(password.value))){//正则不正确的情况
          pwd_show.value = true;
        }else{
          pwd_show.value = false;
        }
      }
    }
    //两次密码校验
    const is_same= function () { 
      if(!again_password.value){//为空的情况
        pwd_show.value = true;
      }else{
        if(again_password.value === password.value){
          again_pwd_show.value = false;
          }
        }
     }
    return { value, username, sms, password, again_password, go_login, onClickLeft, pwd_show, again_pwd_show, is_pwd_suitable, submit, is_same };
  }
});
</script>
<style lang="ts" scoped>

</style>
