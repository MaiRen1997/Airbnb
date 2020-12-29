<template>
  <div class="login">
    <!-- 顶部 底部安全区 添加 meta 标签，并设置 viewport-fit=cover 值 -->
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"
    />
    <!-- 开启顶部安全区适配 -->
   <!--  <van-nav-bar safe-area-inset-top /> -->
    <!-- 顶部标题 -->
    <van-nav-bar
      title="手机登录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      right-text="密码登录"
      @click-right="goLoginPassword"
    />
    <div class="input_contain">
      <!-- 手机输入框 -->
      <div class="phone">
        <input type="text" 
          placeholder="请输入手机号"
          v-model="phoneNumber"
          @blur="inputPhoneNumber"
          key="phoneNuber"
        />
      </div>
      <!-- 手机验证码 -->
      <div class="phone">
        <input
          type="text"
          placeholder="请输入验证码"
          v-model="input_random_num"
        />
        <!-- 发送验证码 -->
        <button 
        class="send_msg" 
        @click="sendMessage" 
        :disabled="isDisabled"
        :class="{'active':!isDisabled ,'dead':isDisabled }"
        >
          {{ Message_state }}
        </button>
      </div>
      <!-- 按钮 -->
      <van-button
        type="primary"
        size="large"
        :round="true"
        @click="submit"
      >
        登录
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
    <!-- <van-number-keyboard safe-area-inset-bottom /> -->
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import {ref, reactive} from 'vue';
//引入提示模态框
import { Toast, ContactList, Notify } from 'vant';
//引入手机登录界面
import { loginPhoneApi } from '../../utils/api'
export default {
  setup(){
    const router = useRouter();
    //手机号码
    let phoneNumber = ref();
    //验证码按钮内容
    var Message_state = ref('获取验证码');
    //定义验证码重发倒计时
    let count = ref(60);
    //生成的六位数随机码
    let random_num = ref();
    //输入的六位随机验证码
    let input_random_num = ref();
    //是否可以点击
    let isDisabled = ref(false);
    const onClickLeft = function(){
      router.go(-1);
    };
    const go_resetAccount = function(){
      router.push("/resetAccount")
    }
    const go_resign =function(){
      router.push("/resign");
    }
    const submit = function(){
      if(auth_code()&&isPhoneNumber()){
        // console.log(1);
        loginPhone();
      }
    }
    //查询登录界面
    const loginPhone = async function (){
      const hasPhone = await loginPhoneApi({phone:phoneNumber.value});
      console.log(hasPhone);
      if(hasPhone.status ==0){
        window.localStorage.setItem('isLogin','true');
        window.localStorage.setItem('userID',`${hasPhone.obj.userID}`);
        //跳转到我的页
        router.push('/Mine');
      }
      else{
        Toast(`${hasPhone.msg}`);
      }
      
    }
     //判断输入的验证码是否正确
    const auth_code = function () { 
      if(input_random_num.value==random_num.value){
        return true;
      }else{
        Toast("验证码输入有误，请重新输入");
        return false;
      }
     }
    //发送验证码
    const sendMessage = function (){
      //按钮效果
      let timer;
      if(timer){
        clearInterval(timer);
      }
      timer = setInterval(() => {
        count.value --;
        this.Message_state = count.value +'s';
        isDisabled.value = true;
          // console.log(this.Message_state);
        if(count.value<=0){
          clearInterval(timer);
          count.value=60;
          this.Message_state = ref('获取验证码');
          isDisabled.value = false;
      }
      }, 1000);
      //生成随机验证码
      this.random_num = parseInt(Math.random()*1000000);
      Notify({
        message:`您的短信验证码是 ${this.random_num}`,
        color: '#ad0000',
        background: '#ffe1e1',
        duration: 6000,
      });
    }
    //去密码登录页
    const goLoginPassword = function(){
       router.push("/loginPassword");
    }
    //手机号码验证正则
    let myPhoneReg = /^((13[0-9])|(14[5|7])|(15([0-9]))|(18[0,5-9]))\d{8}$/;
    let phoneReg = new RegExp(myPhoneReg);
    //判断手机号是否符合规则
    const isPhoneNumber = function(){
        let flag = phoneReg.test(phoneNumber.value);
        if(flag){//如果正则判断成功
          return true;
        }
        else{
          Toast('手机号输入有误');
          return false;
        }
        // console.log(flag);
      }
    return {onClickLeft, go_resetAccount, go_resign, submit, goLoginPassword, Message_state, count, random_num, input_random_num, isDisabled, auth_code, sendMessage, auth_code, isPhoneNumber, phoneNumber };
  }
};
</script>
<style lang='less' scoped></style>
