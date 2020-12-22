<template>
  <div>
    <van-nav-bar
      title="标题"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <van-icon name="search" size="18" />
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <div class="test">
        <p class="hello">Hello</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang="less" scope>
.test{
  width:320px;
  height:160px;
  background-color: bisque;
  text-align: center;

  .hello {
  color:red;
  font-size: 20px;
  }
}

</style>
