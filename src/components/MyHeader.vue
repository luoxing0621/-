<template>
  <div class="my-header">
    <div class="nav-cover">
      <div class="nav-top">
        <span>欢迎来到农业商品网，开始选购吧！</span>
        <span v-if="$store.state.loginname">
          用户名：{{ $store.state.loginname }}</span
        >
        <a
          class="spanfocus"
          @click="$store.commit('logout')"
          v-if="$store.state.loginname"
          style="
            margin: 0 8px;
            color: #60be74;
            display: inline-block;
            padding: 1px 8px;
            border: 1px solid #ddd;
            border-radius: 10px;
            margin-top: 6px;
            cursor: pointer;
          "
          >退出当前登录</a
        >

        <div class="nav-top-right" style="margin-top: 6px">
          <span>买家中心</span>
          <span>卖家中心</span>
        </div>
      </div>
      <div class="nav">
        <div class="nav-main">
          <img src="../assets/img/logo-dark.png" alt="" />
          <div class="input">
            <input
              type="text"
              name=""
              id=""
              v-model="input"
              placeholder="苹果"
              style="text-indent: 1em"
            />
            <span @click="moselect(input)">搜索</span>
          </div>
          <div class="nmain-right" v-if="!$store.state.loginname">
            <span class="el-icon-user" @click="get1">登录</span>
            <span class="el-icon-edit" @click="get2">注册</span>
          </div>
        </div>
      </div>
      <div class="nav-bottom">
        <div class="nav-bot-center">
          <a @click="getIndex" class="active">首页</a>
          <a href="#zhanshi" @click="getIndex">产品展示</a>
          <a @click="getIndex" href="#youhui">优惠选购</a>
          <a @click="getMore">更多商品</a>
          <a @click="getContact">联系我们</a>
        </div>
        <div class="nav-bot-right">
          <a @click="getCar"
            ><img src="../assets/img/购物车.png" alt="" />
            <span>购物车</span></a
          >
          <a @click="getCollect"
            ><img src="../assets/img/收藏 (1).png" alt="" />
            <span>我的收藏</span></a
          >
          <a href=""
            ><img src="../assets/img/消息.png" alt="" />
            <span>我的消息</span></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    // 模糊查询
    moselect(input) {
      var url = `http://127.0.0.1:8084/v1/product/seleinput?gname=${input}`;
      this.axios.get(url).then((res) => {
        console.log(res);
        if (res.data.code === 200) {
          this.$router.push(`/product?gname=${input}` || `?gname=${input}`);
        } else {
          alert("当前没有这条商品内容");
        }
      });
    },
    get1() {
      this.$router.push("/login");
    },
    get2() {
      this.$router.push("/register");
    },
    getIndex() {
      this.$router.push("/");
    },
    getCar() {
      this.$router.push("/car");
      window.scroll(0, 0);
    },
    getContact() {
      this.$router.push("/contact");
    },
    getMore() {
      this.$router.push("/product");
    },
    getCollect() {
      this.$router.push("/collect");
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("../assets/css/header.css");
@import url("../assets/css/base.css");
</style>