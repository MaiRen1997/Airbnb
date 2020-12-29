<template>
  <div class="list_item">
    <!-- 开启顶部安全区适配 -->
    <van-nav-bar safe-area-inset-top /> 
    <!-- 顶部搜索栏 -->
    <van-search
      v-model="value"
      show-action
      label="地址"
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
    <template #action>
      <div @click="onSearch"></div>
    </template>
    </van-search>
    <div class="content_list">
      <div class="nav-left">
        <!-- 侧边导航栏 -->
        <van-sidebar v-model="activeKey">
          <!-- <van-sidebar-item v-for="item in this.list_contain" :key="item.id" :title="item.title" /> -->
          <van-sidebar-item v-for="(item, index) in data.list" :key="item.index" :title="item.class" />
        </van-sidebar>
      </div>
     
      <!-- 右侧内容区 -->
      <div class="nav-right">
        <div v-for="item in detail.list1.result" class="item_contain">
          <img :src="item.imgurl" alt="" srcset="">
        <p class="detail_title">{{item.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, onBeforeMount } from "vue";
//引入ref
import { ref, reactive } from "vue";
//引入请求数据的方法
import { get_list_itemApi, get_list_detailApi } from '../../utils/api'
export default defineComponent({
  setup(){
    let value = ref("");
    let activeKey = ref(0);
    let list_contain = reactive([
      {
        id:0,
        title:"为你推荐"
      },
      {
        id:1,
        title:"热门品牌"
      },
      {
        id:2,
        title:"鞋类"
      },
      {
        id:3,
        title:"潮流服饰"
      },
      {
        id:4,
        title:"运动服饰"
      },
      {
        id:5,
        title:"手机"
      },
      {
        id:6,
        title:"数码3C"
      },
      {
        id:7,
        title:"护肤美妆"
      },
      {
        id:8,
        title:"箱包"
      },
      {
        id:9,
        title:"手表"
      },
      {
        id:10,
        title:"配饰"
      }
    ]);
    //定义数据
    let data = reactive({
      list: []
    });
    //定义右侧商品详情数据
    let detail = reactive({
      list1:[123]
    })
    //onSearch方法
    const onSearch = function(){
      // list: []
    }
    //获取数据
    const get_data = async function(){
      data.list = await get_list_itemApi();
      console.log(data.list);
    }
    const get_list_detail = async function(){
      detail.list1 = await get_list_detailApi({str:"手机"});
      console.log(detail.list1.result)
    }
    //mount
    onMounted( get_data );
    onMounted( get_list_detail );
    return { value, activeKey, list_contain, onSearch, data, detail }
    
  },
  // methods:{
  //   show (){
  //     console.log(this.list_contain);
  //     // console.log(1);
  //   }
  //   // console.log(list);
  // }, 
  // onMounted() {
  //   console.log(this.trans_list_contain());
  // } 
});
</script>
<style lang='less' scoped></style>
