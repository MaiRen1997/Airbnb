<template>
  <main class="mianWrapper">
      <div class="content">
        <div v-for="(item, index) in productList" :key="index" ref="content" class="product">
          <h4>
            {{ item.item }}
          </h4>
          <div :class="[`product${index}`, 'wrapper1']">
            <ul>
              <li v-for="(shoes, index) in item.arr" :key="index">
                <figure>
                  <img :src="shoes.imgurl" alt="">
                </figure>
                <h6>
                  {{ shoes.style }}
                </h6>
                <span>￥ {{ shoes.price }}起</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
</template>

<script>
import BScroll from 'better-scroll';
import { getStoreProductApi } from '../../utils/api.ts';

export default {
  props:["value"],
  data() {
    return {
      productList: [],
      number:0,
      exist:true
    };
  },
  mounted() {
    if(this.value) {
      this.getStoreProduct();
    }
  },

  methods: {
    sendExist() {
      this.$emit('func',this.exist);
    },
    async getStoreProduct() {
      const res = await getStoreProductApi({str: this.value});
      if(res.status === 0) {
        // 显示商品页面
        this.exist = true;
        //处理接收的数据
        res.final.forEach((elm,index)=> {
          res.arr[index].arr = elm;
          this.productList = res.arr;
        });
      } else {
        // 显示不存在页
        this.exist = false;
      };
      //添加better-scroll
      await this.$nextTick()
      while (this.productList.length > this.number){
        new BScroll(`.product${this.number}`, {
          scrollX: true,
          scrollY: false,
          click:true
        });
        this.number++
      };
      await this.$nextTick()
      new BScroll(".mianWrapper", {
        scrollX: false,
        scrollY: true,
        click:true
      });
        
      // 将exist传输给父元素
      await this.sendExist();
    }
  }
};
</script>
<style lang='less' scoped>
.mianWrapper {
    overflow: hidden;
    position: absolute;
    top: 98px;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .product {
    height: 196px;
    padding: 20px 0 20px 20px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.4);
    text-align: left;
    background: white;

    h4 {
      font-size: 18px;
      font-weight: normal;
    };

    .wrapper1 {
      overflow: hidden;
      width: 100%;
    }

    ul {
      display: inline-flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 13px;
      overflow: hidden;
    }

    li {
      width: 117px;
      margin-right: 20px;

      figure {
        width: 100%;
        height: 117px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid rgba(128, 128, 128, 0.4);
        background: white;

        img {
          max-height: 70%;
          max-width: 70%;
        }
      }

      h6 {
        font-size: 14px;
        height: 26px;
        line-height: 26px;
        font-weight: normal;
        color: #1E1E1E;
      };

      span {
        font-size: 12px;
        font-weight: 400;
        color: #858585;
        display: block
      };
    }
  }
</style>
