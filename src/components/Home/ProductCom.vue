<template>
   <div class="shoes">
    <div class="pic" v-for="item in productList" :key="item.productid">
      <figure>
        <img :src="item.imgurl" alt="">
      </figure>
      <p>{{ item.title }}</p>
      <div class="buyitem">
        <span>￥{{ item.price }}</span>
        <span class="sell">{{ item.people }}人付款</span>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  props:["productList"],
  data() {
    return {};
  },
};
</script>
<style lang='less' scoped>
.shoes {
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  align-content: flex-start;
  flex-wrap: wrap;
 
  .pic {
    margin-top: 5px;
    box-sizing: border-box;
    width: 180px;
    height: 160px;
    overflow: hidden;
    float: left; 
    background: white;

    figure {
      width: 100%;
      height: 100px;
      overflow: hidden;
    }
    img {
      width: 100%;
      margin-bottom: 5px;
    };
    
    p {
      font-size: 11px;
      color: grey;
      font-weight: lighter;
      padding: 10px 0;
    };

    .buyitem {
      display: flex;
      justify-content: space-between;
      padding: 0 5px 5px;
      font-size: 11px;
      font-weight: lighter;

      .sell {
        color: grey;
      }
    }
  }
}
</style>
