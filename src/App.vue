<template>
  <!-- {{msg}}
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>111111111111111</div>
  <HelloWorld msg="Hello Vue 3.0 + Vite" />   -->
  <div>
      <van-button type="primary">主要按钮</van-button>
      <!-- 复选框 -->
      <van-checkbox v-model="checked">复选框</van-checkbox>
      <div>这是首页</div>
        <router-link to="/home">Home</router-link>    |
        <router-link to="/test">Test</router-link>
      <router-view></router-view>
      
      
  </div>  
</template> 

<script lang="ts">
import { defineComponent, ref } from 'vue'
//引入helloWorld组件
// import HelloWorld from './components/HelloWorld.vue'
//引入路由
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent ({
  name: 'App',
  data(){
    return {
      
    } 
  },
  components: {
    /* HelloWorld */
  },
  setup(/* props, context */) {
    // onMounted(() => {
    //     console.log(route);
    //     console.log(router);
    // });

    const route = useRoute();
    const router = useRouter();
    //复选框
    const checked = ref(true);
    return { checked };;
  },
})
</script>
