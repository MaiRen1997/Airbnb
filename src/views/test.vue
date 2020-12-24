<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in 4" :key="index">1</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data(){
    return {
      img:[{
        title:11,
        url:"../assets/img/lunbo1.jpg"
      },{
        title:22,
        url:"../assets/img/lunbo1.jpg"
      }]
    }
  }
}
</script>