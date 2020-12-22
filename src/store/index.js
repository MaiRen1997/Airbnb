import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 存放全局数据（状态）的地方
  state: {
    msg: '这是第一个msg',
  },
  // 可以认为是store的计算属性
  getters: {
    
  },
  // 唯一能改变state的地方，存放纯函数
  mutations: {
    
  },
  // 用来放异步函数
  actions: {
    
  }
})

