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
      title="注册"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="input_contain">
      <!-- 手机输入框 -->
      <div class="phone">
        <input 
          type="text"
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
      <!-- 输入密码框 -->
      <div class="check_pwd">
        <input 
          type="text"
          placeholder="请输入密码"
          v-model="password"
          @keyup.enter="is_pwd_suitable"
          @input="is_pwd_suitable"
          @blur="is_pwd_suitable"
          key="password"
        />
        <div class="remind" v-if="pwd_show">*密码包含 数字,英文,字符中的两种以上，长度6-20</div>
      </div>
      <!-- 确认密码框 -->
      <div class="check_pwd">
        <input
          type="text"
          placeholder="请重新输入密码"
          v-model="again_password"
          @keyup.enter="is_same"
          @blur="is_same"
          @input="is_same"
          key="again_password"
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
import { ref, reactive, onUpdated } from "vue";
import loginPhoneVue from './loginPhone.vue';
import { defineComponent } from 'vue';
import { useRouter, useRoute } from 'vue-router'
//引入注册方法
import { resignApi } from '../../utils/api';
//引入提示模态框
import { Toast, ContactList, Notify } from 'vant';
export default defineComponent({
  setup(){
    let value = ref('');
    //获取手机号
    let phoneNumber = ref();
    let imgurl =reactive([]);
    //获取密码
    let password = ref('');
    //获取第二次密码
    let again_password = ref('');
    let sms = ref('');
    //密码提示显隐
    let pwd_show = ref(true);
    let again_pwd_show = ref(true);
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
    //密码正则  
    let reg = "^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$";
    //手机号正则
    // let myPhoneReg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
    let myPhoneReg = /^((13[0-9])|(14[5|7])|(15([0-9]))|(18[0,5-9]))\d{8}$/;
    let pwdReg = new RegExp(reg);
    let phoneReg = new RegExp(myPhoneReg);

    //左上角点击回退方法
    const router = useRouter();
    const onClickLeft = function(){
      router.go(-1);
    }
    //去登录页面
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
          return true;
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
          return true;
          }
        }
    }
    //判断手机号是否符合要求
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
    //判断输入的验证码是否正确
    const auth_code = function () { 
      if(input_random_num.value==random_num.value){
        return true;
      }else{
        Toast("验证码输入有误，请重新输入");
        return false;
      }
     }
     //注册提交
    const submit = function(){
      // 判断是否可以登录
      if(isPhoneNumber()&&is_pwd_suitable()&&is_same()&&auth_code()){
        resign();
      }
    }
    const resign  = async function () { 
      // 请求注册信息
      const resign_data = await resignApi
      ({
          phone:phoneNumber.value,password:password.value
        });
      console.log(resign_data);
      if(resign_data.status ==0){
        Toast('注册成功');
        go_login();
      }else{
        Toast(`${resign_data.msg}`);
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
      }, 100);
      //生成随机验证码
      this.random_num = parseInt(Math.random()*1000000);
      Notify({
        message:`您的短信验证码是 ${this.random_num}`,
        color: '#ad0000',
        background: '#ffe1e1',
        duration: 6000,
      });
    }
    return { value, phoneNumber, sms, password, again_password, go_login, onClickLeft, pwd_show, again_pwd_show, is_pwd_suitable, submit, is_same, sendMessage, Message_state, count, isDisabled, random_num, input_random_num };
  }
});
</script>
<style lang="ts" scoped>

</style>
