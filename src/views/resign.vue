<template>
  <div>这是注册页面</div>
  <van-cell-group>
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
  </van-cell-group>
  <router-link to="/resign/input">input</router-link>
  <router-view></router-view>
</template>

<script>
import { ref } from 'vue';
export default defineComponent ({
  data(){
    return {
    } 
  },
  components: {
  },
  setup() {
    const value = ref('');
    return { value };
  },
})
</script>
<style lang='less' scoped></style>
