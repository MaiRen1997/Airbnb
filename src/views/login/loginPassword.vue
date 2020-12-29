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
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      right-text="手机登录"
      @click-right="goLoginPhone"
    />
    <div class="input_contain">
      <!-- 手机输入框 -->
      <div class="phone">
        <input 
          type="text"
          placeholder="请输入用户名"
          v-model="username"
        />
      </div>
      <div class="password">
        <input type="password" placeholder="请输入密码"
          v-model = "password"
        />
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
          @click="forget_passwd"
        >忘记密码?</span>
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
import { ref, onMounted } from "vue";
import loginPhoneVue from './loginPhone.vue';
import { defineComponent } from 'vue';
//引入路由
import { useRouter } from "vue-router"
//引入请求数据
import { loginInApi } from "../../utils/api";
//引入模态框
import { Toast, ContactList } from 'vant';
//引入登录接口
import { loginUserApi } from '../../utils/api'
export default defineComponent({
  setup(){
    //使用路由
    const router = useRouter();
     const value = ref('');
    //获取用户名
    const username = ref('');
    //获取密码
    const password = ref('');
    const sms  = ref();
    //左上角点击回退方法
    const onClickLeft = function(){
      router.go(-1);
    }
   
    const submit = async function(){
      //判断输入框是否为空
      if(!username.value){
        Toast('请输入用户名');
      }else {
        if(!password.value){
        Toast('请输入密码');
        }else{
          if(username.value&&password.value){
            const res = await loginUserApi({phone:username.value,password:password.value});
            console.log(res);
            if(!res.status){
              window.localStorage.setItem('isLogin','true');
              window.localStorage.setItem('userID',`${res.obj.userID}`);

              // console.log('登录成功');
               router.push('/Mine');

            }
            else{
              Toast('登录失败，请重试');
              username.value='';
              password.value='';
            }
          }  
        }
      }
      
      
      //弹出框

      // console.log(username.value,password.value);
    }
    //去注册页面
    const go_resign =function(){
      router.push("/resign");
    }
      //去忘记密码页面
    const forget_passwd = function(){
      router.push("/resetAccount");
    }
    //去手机登录页面
    const goLoginPhone = function(){
      router.push("/loginPhone");
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
    return { value, submit, username, password, go_resign, forget_passwd, onClickLeft, goLoginPhone, isPhoneNumber };
  }
});
</script>
<style lang="ts" scoped>

</style>
