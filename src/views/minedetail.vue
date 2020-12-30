<template>
<div class="mine-detail">
<div>
       <van-nav-bar
  title="编辑资料"
  left-arrow
  @click-left="onClickLeft"
/>
</div>
<div class="mine-detail-infor">
<div class="mine-detail-headimg">
<span>头像</span>
<span>
  <img :src="user.img" alt="">
  <van-icon name="arrow" />
</span>

</div>
<div class="mine-detail-nickname">
  <span>昵称</span>
  <span @click="nickname">{{user.username}}
    <van-icon name="arrow" />
  </span>
  <span><van-field v-model="value" placeholder="请输入用户名" v-show="false"/></span>
</div>
<div class="mine-detail-six">
  <span>性别</span>
  <span>{{user.sex}}
    <van-icon name="arrow" />
  </span>
</div>
<div class="mine-detail-slogan">
  <span>签名</span>
  <span>未填写
    <van-icon name="arrow" />
  </span>
</div>

</div>

</div>
 
</template>

<script>
import {serachuserApi} from '../utils/api.ts';

export default {
  data(){
    return {
      user:{}
    }
  },
  mounted(){
    this.getuser();
  },
  methods: {
    nickname() {
      this.show=true
      console.log(1)
    },
    async getuser(){
      const res = await serachuserApi({phone:15850518181})
      this.user=res.obj;
      //console.log(this.user);
    }
  }

}
</script>

<style lang="less" scoped>
.mine-detail{
  background: #ccc;
  .mine-detail-infor{
    background: #fff;
    padding: 20px 15px 0px 15px;
    span{
      &:nth-of-type(1){
        float: left;
        font-size: 16px;
      }
      &:nth-of-type(2){
        float: right;
        font-size: 15px;
        color: #4b4b4b;
      }
      .van-icon{
        vertical-align: -2px;
        margin-left: 10px;
      }
      img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        vertical-align: -15px;
      }
    }
    .mine-detail-headimg{
      height: 100px;
      line-height: 100px;
    }
    .mine-detail-nickname{
      height: 80px;
      line-height: 80px;
    }
    .mine-detail-six{
      height: 60px;
      line-height: 60px;

    }
    .mine-detail-slogan{
      height: 60px;
      line-height: 60px;

    }

  }
  .van-field{
    height: 30px;
  }

}

</style>