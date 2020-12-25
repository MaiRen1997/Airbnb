<template>

<!-- 整个详情页面的容器 设置背景色灰色 -->
<div class="detail">

<!-- 第1张卡片的容器 设置背景色白色 -->
<div class="product-all">

<!-- 第1张卡片——头部导航处 -->
<div class="navbar">
  <van-nav-bar
    title="商品标题"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
  <template #right>
    <van-icon name="share-o" size="18"/>
  </template>
  </van-nav-bar>
</div>

<!-- 第1张卡片——商品轮播图 -->
<div class="my-swipe">
  <van-swipe :autoplay="3000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
</div>

<!-- 第1张卡片——商品价格/配色/尺码 -->
<div class="infor-all">
  <div class="infor-title">
    <p>商品名称</p>
  </div>
  <div class="infor-color">
    <span>选择配色</span>
    <span>全部几种配色
      <van-icon name="arrow" />
    </span>
  </div>
  <div class="infor-img">
    <img src="" alt="">
    <img src="" alt="">
    <img src="" alt="">
    <img src="" alt="">
    <img src="" alt="">
    <img src="" alt="">
    <img src="" alt="">
    <img src="" alt="">
  </div>
  <div class="infor-size">
    <div class="choose">
    <span>选择鞋码</span>
    </div>
    <div>
      <ul class="size-list">
      <li>
        <p>鞋码</p>
        <p>￥价格</p>
      </li>
      <li>
        <p>鞋码</p>
        <p>价格</p>
      </li>
       <li>
        <p>鞋码</p>
        <p>价格</p>
      </li>
       <li>
        <p>鞋码</p>
        <p>价格</p>
      </li>
       <li>
        <p>鞋码</p>
        <p>价格</p>
      </li>
       <li>
        <p>鞋码</p>
        <p>价格</p>
      </li>
      <li>
        <p>鞋码</p>
        <p>价格</p>
      </li>
      <li>
        <p>鞋码</p>
        <p>价格</p>
      </li>
      <li>
        <p>鞋码</p>
        <p>价格</p>
      </li>
      <li>
        <p>鞋码</p>
        <p>价格</p>
      </li>
    </ul>
    </div>
    
  </div>
</div>
</div>


<!-- 第2张卡片——商品正品保障 -->
<div class="promise">
<div class="promise-official">
<img src="/src/assets/detail-img/promise.png" alt="">
</div>
<div class="promise-know">
  <ul class="know-list">
    <li>
      <van-icon name="passed" size="12" />
      <span>专业鉴定</span>
    </li>
    <li>
      <van-icon name="passed" size="12" />
      <span>严控商家</span>
    </li>
    <li>
      <van-icon name="passed" size="12" />
      <span>正品保障</span>
    </li>
    <li>
      <van-icon name="arrow" size="12" />
    </li>
  </ul>
</div>

</div>

<!-- 第3张卡片——买家评论 -->
<div class="discuss">

  <div class="discuss-title">
    <span>全网评论（几个）</span>
    <span>查看全部
      <van-icon name="arrow" />
    </span>
  </div>

  <div class="discuss-sign">
    <span>内容（数量）</span>
  </div>

  <div class="discuss-content">
    <div class="discuss-box">
      <div class="discuss-nickname">
      <van-image
        round
        width="20px"
        height="20px"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
      <span>名字</span>
    </div>
    <div class="discuss-text">
      <p>
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
      </p>
    </div>
    </div>
        <div class="discuss-box">
      <div class="discuss-nickname">
      <van-image
        round
        width="20px"
        height="20px"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
      <span>名字</span>
    </div>
    <div class="discuss-text">
      <p>
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
      </p>
    </div>
    </div>
    

  </div>


</div>


<!-- 第4张卡片——产品参数 -->
<div class="product-param">
  <p>产品参数</p>
  <div class="param-list">
    <ul class="param-title">
    <li>货号</li>
    <li>品牌</li>
    <li>使用场景</li>
    <li>功能分类</li>
    <li>跑鞋科技</li>
  </ul>
  <ul class="param-content">
    <li>商品id</li>
    <li>品牌名</li>
    <li>场景</li>
    <li>功能</li>
    <li>跑鞋科技</li>
  </ul>
  </div>
  

</div>


<!-- 第5张卡片——穿搭推荐 -->
<div class="wear">
  <p>穿搭推荐</p>
  <div>
    图片九宫格
  </div>
</div>


<!-- 第6张卡片——尺码表 -->
<div class="size-chart">
  <img src="" alt="">尺码表图片
</div>

<!-- 第7张卡片——相关推荐 -->
<div class="recommend">
  <p>相关推荐</p>
</div>


<!-- 商品导航 -->
<van-action-bar>
  <van-action-bar-icon icon="star-o" @click="onClickIcon" />
  <van-action-bar-button type="danger" text="立即购买" color="#000" @click="onClickButton" />
</van-action-bar>

</div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>

// 整个详情的背景
.detail{
  background: #ececec;
}

// 第1张卡片背景
.product-all {
  background: #fff;
}

// 第1张卡片——轮播
 .my-swipe .van-swipe-item {
    color: #fff;
    height: 200px;
    background-color: #39a9ed;
  }

// 第1张卡片——价格/尺码/配色
  .infor-all{
    margin:0px 10px;
    .infor-title{
      font-size: 19px;
      font-weight: 900;
    }
    .infor-color{
      font-weight: 900;
      margin-top: 20px;
      font-size: 12px;
       span:nth-of-type(2){
        color: #858585;
        float: right;
        .van-icon{
          vertical-align: -2px;
          font-weight: 900;
        }
      }
    }

    .infor-img{
      overflow-y: hidden;
      overflow-x: auto;
      width: 350px;
      height: 80px; 
      white-space: nowrap;
      &::-webkit-scrollbar{
        display: none;
      }
      img{
        width: 60px;
        height: 60px;
        margin-right: 15px;
        margin-top: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
    }
    .infor-size{
        margin-top: 10px;
        border-top: 1px solid #E4E4E4;
        height: 30px;
        position: relative;
        padding:10px 0px;
        // .zhegai{
        //   background: white;
        //   box-shadow: 5px 0 2px 2px #fff;
        //   position: absolute;
        //   top:0;
        //   left: 50px;
        //   width: 25px;
        //   height: 100%;
        //   z-index: 999;
        //   opacity: 0.8;
        // }
        .choose{
          font-size: 12px;
          font-weight: 900;
          line-height: 30px;
          width: 65px;
          // border: 1px solid black;
          background-image: linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0.774));

        }   
          .size-list{
        font-size: 12px;
        font-weight: 500;
        width: 300px;
        height: 30px;
        position: absolute;
        right: 0;
        left: 50px;
        top: 0;
        overflow: auto;
        white-space: nowrap;
        padding-top: 10px;
        &::-webkit-scrollbar{
        display: none;
        z-index: 1;
      }

        li{
          display: inline-block;
          width: 40px;
          text-align: center;
          height: 30px;
          margin-right: 25px;
          white-space: nowrap;
          //background: rosybrown;
          &:nth-of-type(1){
            margin-left: 15px;
          }
        }
      }
    

        
    }
      
  }


// 第2张卡片——正品保障
  .promise{
    background: #fff;
    margin-top: 7px;
    padding: 10px;
    position: relative;
    .promise-official{
      width: 100px;
      background: #000;
      height: 20px;
      border-radius: 3px;
      position: relative;
      img{
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin:auto;
      }
    }
    .promise-know{
      .know-list{
      position: absolute;
      right: 10px;
      top: 12px;
      
      li{
        float: left;
        font-size: 12px;
        margin-left: 12px;
        .van-icon{
          vertical-align: -2px;
          font-weight: 900;
        }
      }

    }

    }
    
  }


// 第3张卡片——评论
.discuss{
  background: #fff;
  margin-top: 7px;
  padding: 10px;

  .discuss-title{
      font-size: 14px;
      font-weight: 900;
       span:nth-of-type(2){
        color: #858585;
        float: right;
        .van-icon{
          vertical-align: -2px;
          font-weight: 900;
        }
      }
    }

  .discuss-sign{
    span{
      font-size: 12px;
      background: #E6E6E6;
      padding: 3px 15px;
      border-radius: 3px;
    }
  }
  .discuss-content{
    margin-top: 10px;
    .discuss-box{
      margin-top: 20px;
       .discuss-nickname{
      span{
        font-size: 10px;
        vertical-align: 5px;
        margin-left: 5px;
        color: #858585;
      }
    }

    }
   
    .discuss-text{
      width: 345px;
      height: 30px;
      p{
        font-size: 12px;
       display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      }
    }
  }





   
}


// 第4张卡片——产品参数
.product-param{
  background: #fff;
  margin-top: 7px;
  padding: 10px;
  p{
    font-size: 14px;
    font-weight: 900;
  }
  .param-list{
    position: relative;
  }
  .param-title{
    font-size: 12px;
    li{
      margin-top: 10px;
    }
  }
  .param-content{
    position: absolute;
    right: 0;
    top: 0;
    li{
      font-size: 12px;
      &:not(:first-child){
        margin-top: 10px;
      }
    }
  }
}


// 第5张卡片——穿搭推荐
.wear{
  background: #fff;
  margin-top: 7px;
  padding: 10px;
  height: 440px;
  p{
    font-size: 14px;
    font-weight: 900;
  }
}


// 第6张卡片——尺码表
.size-chart{
  margin-top: 7px;
  padding: 10px;
  background: #fff;
  height: 590px;
}


// 第7张卡片——相关推荐
.recommend{
  margin-top: 7px;
  padding: 10px;
  background: #fff;
  p{
    font-size: 14px;
    font-weight: 900;
  }
}


// 商品导航
.van-action-bar-button{
  border-radius: 0px;
}




</style>