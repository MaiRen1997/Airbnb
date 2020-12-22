<template>
  <div class="contain">
    <div class="box"></div>
    <router-link to="/home">Home</router-link>|    
    <router-link to="/test">Test</router-link>|
    <router-link to="/loginPassword">loginPassword</router-link>|
    <router-link to="/loginPhone">loginPhone</router-link>|
    <router-link to="/resetAccount">resetAccount</router-link>|
    <router-link to="/resign">resign</router-link>|
    <router-view></router-view>
  </div>  
</template> 

<script lang="ts">
import { defineComponent, ref } from 'vue'
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
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    //复选框
    const checked = ref(true);
    return { checked };;
  },
})
</script>

<style lang="less" scoped>
.box {
  width: 100px;
  height: 100px;
  background: red;
}
.contain{
  font-size: 36px;
}
</style>
