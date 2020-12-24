<template>
  <div class="app">
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
  setup() {
    const route = useRoute();
    const router = useRouter();
    //复选框
    const checked = ref(true);
    return { checked };;
  },
})
</script>
<style lang="less" scope>
.app {
  padding-bottom:50px;
}
</style>
