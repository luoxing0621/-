<template>
  <div>
    <my-header />

    <div class="collect">
      <div class="collect-top">
        <img src="../assets/img/page-header-bg-1-1.jpg" alt="" />
        <div class="img-text">
          <h2>收藏夹</h2>
          <ul>
            <li>首页</li>
            <li>/</li>
            <li>收藏夹</li>
          </ul>
        </div>
      </div>
      <h3 style="margin-top: 10px">我的收藏>></h3>
      <div class="collect-thing">
        <div class="thing">
          <div class="item" v-for="x in data.data" :key="x.lid">
            <img :src="x.lpic" alt="" />
            <div class="item-text">
              <span>商品名称：{{ x.lname }}</span>
              <span>价格：¥{{ x.lprice }}</span>
              <span @click="delectData(x.lid)">取消收藏</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <my-footer />
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import MyFooter from "@/components/MyFooter.vue";
export default {
  components: { MyHeader, MyFooter },
  data() {
    return {
      data: [],
    };
  },
  methods: {
    getData() {
      var url = "http://127.0.0.1:8084/v1/product/showcollect";
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data;
      });
    },
    delectData(lid) {
      var url = `http://127.0.0.1:8084/v1/product/delcollect?lid=${lid}`;
      this.axios.delete(url).then((res) => {
        console.log(res);
        this.getData();
      });
    },
  },

  created() {
    this.getData();
  },
};
</script>
<style scoped src="../assets/css/collect.css"></style>
<style lang="scss" scoped>
</style>