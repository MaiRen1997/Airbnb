<template>
<div class="comment">
<div class="comment-navbar">
    <van-nav-bar
  title="全网评价"
  right-text="添加"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
>
 <template #right>
    <van-icon name="plus" size="18" color="#000" @click="showPopup" />
    <span @click="showPopup">添加</span>
    
    <van-popup 
    v-model:show="show"
    position="bottom"
    :style="{ height: '100%', width: '100%'}"
    closeable
    color="#000"
    >

    <!-- 输入任意文本 -->



     <van-action-bar>
     <van-action-bar-icon icon="description" text="保存" />
     <van-action-bar-button color="#000" text="发布" @click="none"/>
     </van-action-bar>



    </van-popup>
  </template>
  </van-nav-bar>

</div>

<div class="comment-tag">
  <span>全部({{ allcomment.length }})</span>
  <span>好看(375)</span>
  <span>有图(66)</span>
  <span>正品(12)</span>
  <span>质量好(30)</span>
  <span>鞋身轻盈(135)</span>
</div>

  <div class="comment-content">
    <div class="comment-box" v-for="item in allcomment">
      <div class="comment-nickname" >
      <img :src="item.header" alt="">
      <span>{{ item.nico }}</span>
      </div>
    <div class="comment-text">
      <p>
        {{ item.command }}
      </p>
    </div>
    </div>
  </div>


 


</div>

</template>

<script>
import { getProductPicApi, getProductdetailApi } from '../../utils/api.ts';
import { ref,reactive } from 'vue';
export default {
  setup() {
  const show = ref(false);
  const showPopup = () => {
    show.value = true;
  };
  return {
    show,
    showPopup,
  };
},
  data() {
    return {
      allcomment:[],
    }
  },
  mounted() {
    this.getProductdetail();
  },
  methods:{
    async getProductdetail() {
        const res = await getProductdetailApi({productId:1});
        this.allcomment=JSON.parse(res.obj.comment);
        console.log(this.allcomment);
        },
     none(){
       this.show = false;
     }
    
  }
  }
</script>

<style lang="less" scoped>
.comment-navbar{
  .van-nav-bar__text{
    color: black;
  }
}

.comment-tag{
  margin: 20px 0;
  span{
    background: rgb(235, 235, 235);
    padding: 10px;
    margin: 7px;
    font-size: 12px;
    font-weight: 900;
    display: inline-block;
  }

}

.comment-content{
  margin:0 10px;
  margin-top: 30px;
  .comment-box{
    padding: 25px 0;
    border-top: solid 1px rgb(247, 247, 247);
    box-sizing: border-box;
    .comment-nickname{
      img{
        widows: 32px;
        height: 32px;
        border-radius: 50%;
      }
      span{
        font-size: 13px;
        vertical-align: 10px;
        margin-left: 5px;
        color: #858585;
      }
    }
    .comment-text{
      width: 356px;
      p{
        font-size: 15px;
        text-align:justify;
         display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      }
    }

  }

}

// 商品导航
.van-action-bar-icon{
  width: 80px;
}
.van-action-bar{
  //background:red;
  //margin-top: 50px;
.van-action-bar-button{
  border-radius: 0px;
  width: 200px;
  }

  .van-button{
    width: 200px;
  }
}






</style>