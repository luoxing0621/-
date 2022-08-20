import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     // 用于存储全局数据
    // loginname:'',  //保存当前登录用户
    loginname:window.sessionStorage.getItem('loginname'),

  },
  getters: {
  },
  mutations: {
    // 用于声明方法修改state
    updateUserInfo(state,payload){
      // 用户名存入state(要写)
      state.loginname=payload
      // 需要持久化存储，还需要将用户名存入sessionStorage
      window.sessionStorage.setItem('loginname',payload)
    },
     // 退出
     logout(state,payload){
      state.loginname=''    //将vuex中的数据清空
      sessionStorage.clear()  //将sessionStorage中的数据清空即可
     },
    
  },
  actions: {
  },
  modules: {
  }
})
