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
    
  
  </template>
  </van-nav-bar>
   <van-popup 
    v-model:show="show"
    position="bottom"
    :style="{ height: '100%', width: '100%'}"
    closeable
    color="#000"
    >

    <!-- 输入任意文本 -->
    <div class="comment-text">
      <van-cell-group>
      <van-field v-model="command" placeholder="这一刻我的想法是..." type="textarea" rows="10"/>
    </van-cell-group>
    </div>

    <div class="comment-tag">
      <p><van-icon name="smile-comment" />选择关联话题</p>
      <span>#不能冻死在2020最后</span>
      <span>#我的年度穿搭盘点</span>
      <span>#2021</span>
    </div>
    



     <van-action-bar>
     <van-action-bar-icon icon="description" text="保存" />
     <van-action-bar-button color="#000" text="发布" @click="none"/>
     </van-action-bar>



    </van-popup>

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
import { getProductPicApi, getProductdetailApi,addCommandApi,getCommandApi} from '../../utils/api.ts';
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
      command:'',
      allcomment:[],
    }
  },
  mounted() {
    this.getcommand();
  },
  methods:{
    async getcommand() {
        const res = await getCommandApi();
        this.allcomment=res;
        //console.log(this.allcomment);
        },
     async none(){
       this.show = false;
       const res = addCommandApi({command:this.command})
       //console.log(res);
       //console.log(this.commmand)
       location.reload()
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
  height: 100px;
  p{
    font-size: 16px;
    font-weight: 900;
    vertical-align: 4px;
    height: 30px;
    line-height: 30px;
    vertical-align: 20px;
    .van-icon{
      vertical-align: -8px;
    }
  }
  span{
    background: rgb(233, 233, 233);
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
        font-size: 14px;
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

.comment-text{
  .van-cell-group{
    margin-top: 100px;
  }
}






</style>