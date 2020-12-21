<template>
  {{msg}}
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>111111111111111</div>
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent ({
  name: 'App',
  data(){
    return {
      msg:"hello world"
    } 
  },
  components: {
    HelloWorld
  }
})
</script>
