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
      <div @click="onSearch">搜索</div>
    </template>
    </van-search>
    <!-- 侧边导航栏 -->
    <van-sidebar v-model="activeKey">
      <van-sidebar-item v-for="item in this.list_contain" :key="item.id" :title="item.title" />
    </van-sidebar>
  </div>
</template>

<script>
import { defineComponent } from "vue";
//引入ref
import { ref, reactive } from "vue";
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
    ])
    ;
    return { value, activeKey, list_contain }
  },
  // methods:{
  //   show (){
  //     console.log(this.list_contain);
  //     // console.log(1);
  //   }
  //   // console.log(list);
  // }, 
  // mounted() {
  //   console.log(this.trans_list_contain()); 
  // } 
});
</script>
<style lang='less' scoped></style>
