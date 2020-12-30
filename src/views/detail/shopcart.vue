<template>
  <div class="shopcart">
    <div>
      <van-nav-bar title="我的购买" left-arrow @click-left="onClickLeft" />
    </div>

    <div class="shopcart-pay">
      <van-tabs v-model:active="active" sticky color="#000">
        <van-tab title="全部">
          <div class="all-orders" v-for="item in orderstate">
            <van-swipe-cell right-width="50px">
              <div class="all-orders-title">
                <span>{{ item.state }}</span>
                <span>尾款时间:12-29</span>
              </div>
              <div class="goods-card">
                <van-card
                  :desc="item.size"
                  :title="item.title"
                  :thumb="item.img"
                >
                  <template #price> ￥{{ item.price }} </template>
                </van-card>
              </div>

              <div class="pay-money clearfix">
                <span>{{ item.state }}</span>
                <span></span>
                <span>{{ item.state }}</span>
              </div>
              <template #right>
                <van-button
                  square
                  text="删除"
                  class="delete-button"
                  color="#e65e5e"
                  @click="shanchu(item, index)"
                />
              </template>
            </van-swipe-cell>
          </div>
        </van-tab>

        <van-tab title="待付款">
          <div class="all-orders" v-for="item in waitorder">
            <van-swipe-cell right-width="50px">
              <div class="all-orders-title">
                <span>待付款</span>
                <span>待付款时间:12-29</span>
              </div>
              <div class="goods-card">
                <van-card
                  :desc="item.size"
                  :title="item.title"
                  :thumb="item.img"
                >
                  <template #price> ￥{{ item.price }} </template>
                </van-card>
              </div>

              <div class="pay-money clearfix">
                <span>待支付</span>
                <span>￥{{ item.price }}</span>
                <span class="">待支付</span>
              </div>

              <template #right>
                <van-button
                  square
                  text="删除"
                  class="delete-button"
                  color="#e65e5e"
                  @click="shanchu(item, index)"
                />
              </template>
            </van-swipe-cell>
          </div>
        </van-tab>
        <van-tab title="待发货">
          <div class="all-orders" v-for="item in waitsend">
            <div class="all-orders-title">
              <span>待发货</span>
              <span>发货时间:12-29</span>
            </div>
            <div class="goods-card">
              <van-card :desc="item.size" :title="item.title" :thumb="item.img">
                <template #price>
                  {{ item.price }}
                </template>
              </van-card>
            </div>

            <div class="pay-money clearfix">
              <span>待发货</span>
              <span>发货时间:明天</span>
              <span class="">提醒发货</span>
            </div>
          </div>
        </van-tab>
        <van-tab title="待收货">
          <div class="all-orders" v-for="item in waittake">
            <div class="all-orders-title">
              <span>待收货</span>
              <span>收货时间:12-29</span>
            </div>
            <div class="goods-card">
              <van-card :desc="item.size" :title="item.title" :thumb="item.img">
                <template #price> ￥{{ item.price }} </template>
              </van-card>
            </div>

            <div class="pay-money clearfix">
              <span>待收货</span>
              <span>收货时间:明天</span>
              <span class="">查看物流</span>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { getAllOrderApi, delatecartApi } from "../../utils/api.ts";
import {
  getWaitOrderApi,
  getWaitSendApi,
  getWaitTakeApi,
} from "../../utils/api";

export default {
  setup() {
    const active = ref(0);
    return { active };
  },
  data() {
    return {
      orderstate: [],
      waitorder: [],
      waitsend: [],
      waittake: [],
      id: "",
    };
  },
  mounted() {
    this.getAllOrder();
    this.getWaitOrder();
    this.getWaitSend();
    this.getWaitTake();
  },
  methods: {
    async getAllOrder() {
      const res = await getAllOrderApi();
      this.orderstate = res;
      // console.log(this.orderstate);
    },
    async getWaitOrder() {
      const res = await getWaitOrderApi();
      this.waitorder = res;
      // console.log(this.waitorder);
    },
    async getWaitSend() {
      const res = await getWaitSendApi();
      this.waitsend = res;
      // console.log(this.waitsend);
    },
    async getWaitTake() {
      const res = await getWaitTakeApi();
      this.waittake = res;
      console.log(this.waittake);
    },
    async delatecart(){
      const res = await delatecartApi({Id:this.id})
        console.log(res);
    },
    shanchu(item, index) {
      this.id = item.id;
      this.delatecart();
      this.$router.go(0);
    },
  },
};
</script>

<style lang="less" scoped>
.shopcart {
  background: rgb(243, 243, 243);
  .all-orders {
    background: #fff;
    margin: 10px 0;
    padding: 10px;
    box-sizing: border-box;
    .all-orders-title {
      height: 15px;
      border-bottom: 1px solid #fafafa;
      padding-bottom: 10px;
      span {
        font-size: 12px;
        &:nth-of-type(2) {
          float: right;
          color: #e65e5e;
        }
        &:nth-of-type(1) {
          float: left;
        }
      }
    }
  }

  .pay-money {
    font-size: 12px;
    color: #6d6c6c;
    height: 30px;
    padding-top: 15px;
    margin-top: 30px;
    border-top: 1px solid #f0f0f0;
    span {
      margin-right: 3px;
      float: left;
      line-height: 30px;
      &:nth-of-type(1) {
        font-weight: 900;
        font-size: 15px;
        margin-right: 10px;
      }
      &:nth-of-type(2) {
        font-weight: 900;
        font-size: 15px;
        color: #e65e5e;
      }
      &:nth-of-type(3) {
        float: right;
        font-size: 13px;
        background: #e65e5e;
        color: #fff;
        padding: 0px 10px;
        box-sizing: border-box;
      }
    }
  }

  .delete-button {
    height: 100%;
    margin-left: 20px;
    width: 70px;
  }
}
</style>