<template>
  <div class="community">
    <header class="com-header">
      <van-search v-model="value" placeholder="大家都在搜 三双告别2020" />
      <van-button icon="smile-comment-o" type="default" size="30"></van-button>
    </header>
    <div class="wrapper">
      <div class="com-fills-content">
        <figure v-for="(item, index) in picFills" :key="index" class="com-fill">
          <img :src="item.titleImgUrl" alt="" class="titleImg">
          <div class="titleFills">
            {{ item.title }}
          </div>
          <div class="userFills">
            <img :src="item.userImgUrl" alt="" class="user-img">
            <p>{{ item.username }}</p>
            <div class="likes">
              <van-icon name="like-o" szie="16" />
              {{ item.likes }}
            </div>
          </div>
        </figure>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import BScroll from "better-scroll";

export default {
  data() {
    return {
      value:'',
      picFills:[
        {
          titleImgUrl:"/src/assets/img/jordan.png",
          title:"weiweie",
          userImgUrl:"/src/assets/img/nb530白银.jpeg",
          username:"ahah",
          likes:10
        },
        {
          titleImgUrl:"/src/assets/img/nb530白银.jpeg",
          title:"weiweiea",
          userImgUrl:"/src/assets/img/nb530白银.jpeg",
          username:"ououou",
          likes:1000
        },
        {
          titleImgUrl:"/src/assets/img/jordan.png",
          title:"weiweie",
          userImgUrl:"/src/assets/img/nb530白银.jpeg",
          username:"ahah",
          likes:10
        },
        {
          titleImgUrl:"/src/assets/img/nb530白银.jpeg",
          title:"weiweiea",
          userImgUrl:"/src/assets/img/nb530白银.jpeg",
          username:"ououou",
          likes:1000
        },
        {
          titleImgUrl:"/src/assets/img/jordan.png",
          title:"weiweie",
          userImgUrl:"/src/assets/img/nb530白银.jpeg",
          username:"ahah",
          likes:10
        },
        {
          titleImgUrl:"/src/assets/img/nb530白银.jpeg",
          title:"weiweiea",
          userImgUrl:"/src/assets/img/nb530白银.jpeg",
          username:"ououou",
          likes:1000
        }
      ]
    };
  },

  components: {},

  computed: {},

  mounted() {
    setTimeout(() => {
      this.$nextTick(() => {
        new BScroll(".wrapper", {
          scrollX: false,
          scrollY: true,
          click: true,
          pullUpLoad: true,
        });
      });
    }, 1000);
    
  },

  methods: {}
};
</script>
<style lang='less' scoped>
@import '../assets/css/style.less';
.community {
  background: @background-color;
  height: 100vh;

  .com-header {
    background: white;
    display: flex;
    padding: 5px;
    justify-content: space-between;
    align-items: center;
  }

  .wrapper {
    position: absolute;
    bottom: 50px;
    top: 60px;
    left: 0;
    right: 0;
    overflow: hidden;
    background: transparent;
  }

  .com-fills-content {
    padding: 5px 5px 5px 5px;
    overflow: hidden;
    column-count: 2;
    column-gap: 10px;
    background: @background-color;

    .com-fill {
      display: block;
      width: 100%;
      border-radius: 5px;
      height: auto;
      overflow: hidden;
      background: white;
      margin-bottom: 10px;

      .titleImg {
        width: 100%;
        max-height: 230px;
        overflow: hidden; 
      }

      .titleFills {
        padding: 4px 10px;
        margin-top: 10px;
        box-sizing: border-box;
        width: 100%;
        max-height: 40px;
        min-height: 20px;
        font-size: 15px;
        line-height: 20px;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .userFills {
        padding: 5px;
        box-sizing: border-box;
        height: 35px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 15px;
        color: #9a9a9a;

        .user-img {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          overflow: hidden;
        }

        p {
          width: 60px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 0 10px;
        }

        .likes {
          width: 50px;
          height: 25px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          text-align: right;
        }
      }
    }
  }
}
</style>
