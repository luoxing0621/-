<template>
  <div class="product">
    <my-header />
    <div class="cover-main">
      <div class="product-top">
        <img src="../assets/img/page-header-bg-1-1.jpg" alt="" />
        <div class="img-text">
          <h2>所有商品</h2>
          <ul>
            <li>首页</li>
            <li>/</li>
            <li>联系我们</li>
          </ul>
        </div>
        <div class="aside-top">
          <div class="top1">
            <p class="el-icon-goods">&nbsp;商品分类</p>
          </div>
          <div class="top3">
            <p>商品的数量：一页最多显示6种商品</p>
          </div>
          <!-- <div class="top2">
            <el-input
              placeholder="请输入内容"
              style="width: 200px; height: 80px"
              v-model="this.$route.query.gname"
            >
              <i
                slot="prefix"
                class="el-input__icon el-icon-search"
                @click="mohuselect"
              
              ></i>
            </el-input>
          </div>  -->
        </div>
        <div class="aside-main">
          <div class="aside">
            <el-menu class="el-menu-vertical-demo">
              <el-menu-item index="1" @click="getData1(20)">
                <i class="el-icon-watermelon"> </i>
                <span slot="title">蔬菜 &nbsp;(Vegetables)</span>
              </el-menu-item>
              <el-menu-item index="2" @click="getData1(10)">
                <i class="el-icon-cherry"></i>
                <span slot="title">水果 &nbsp;(Fresh Fruits)</span>
              </el-menu-item>
              <el-menu-item index="3" @click="getData1(40)">
                <i class="el-icon-coffee"></i>
                <span slot="title">日常 &nbsp;(Dairy Products)</span>
              </el-menu-item>
              <el-menu-item index="4" @click="getData1(30)">
                <i class="el-icon-chicken"></i>
                <span slot="title">肉类 &nbsp;(meat)</span>
              </el-menu-item>
            </el-menu>
          </div>
          <div class="aside-but" v-if="data">
            <div class="pro-main">
              <div class="pro-cover" v-for="x in data.data" :key="x.gid">
                <div class="mains">
                  <div class="main-item">
                    <div class="item">
                      <!-- <img src="../assets/img/product-1-3.jpg" alt="" /> -->
                      <img :src="x.pic" alt="" />
                    </div>
                  </div>
                </div>
                <div class="mains-price">
                  <div class="m-price">
                    <!-- 评分 -->
                    <el-rate
                      v-model="value"
                      disabled
                      show-score
                      text-color="#f7ba2a"
                      score-template="{value}"
                      :colors="colors"
                    >
                    </el-rate>
                    <p>{{ x.gname }}</p>
                    <p>¥{{ x.price }}</p>
                    <!-- <div class="hov-cover">
            <div class="mitem-hov">
              <div class="circle">
                <img src="../assets/img/查看.png" alt="">
              </div>
                <div class="circle">
                <img src="../assets/img/收藏.png" alt="">
              </div>
                <div class="circle">
                <img src="../assets/img/购物车 悬浮.png" alt="">
              </div>

            </div>
            </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pagepos" v-if="Array.isArray(this.data.data) && this.data.data.length!==1">
        <el-pagination
          background
          layout="prev, pager, next"
          @current-change="currentPage"
          :total="totalPage"
        >
        </el-pagination>
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
      cdata: [],
      data: [], //所有数据
      pageNo: 1, //当前数据页码
      pageCount: 6, //数据量
      nowdata: [], //当前页码数据量
      currentNo: 1, //当前页码
      totalPage: 1, //总页码
      // input: "",
      // 商品评分
      value: 5.0,
      colors: ["#60be74", "#60be74", "#60be74"],
    };
  },
  methods: {
    // 模糊查询--input查询
    // moselect() {
    //   var url = `http://127.0.0.1:8084/v1/product/seleinput?gname=${this.$route.query.gname}`;
    //   this.axios.get(url).then((res) => {
    //     console.log(res);
    //    // this.cdata = res.data.data;
    //   });
    // },
    //  模糊查询---对应商品名称数据
    mohuselect() {
      let gname = this.$route.query.gname;
      console.log(gname);
      var url = `http://127.0.0.1:8084/v1/product/selectname?gname=${gname}`;
      if(typeof gname !== 'undefined'){
        this.axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data;
        console.log('不是undefined');
      });
      }else{
        this.currentPage()
         console.log('是undefined');
      }
    },
    // 获取总页数
    getData() {
      var url = "http://127.0.0.1:8084/v1/product/showpro";
      // var url=`http://127.0.0.1:8084/v1/product/selectpro/${cid}`
      this.axios.get(url).then((res) => {
        //  console.log(res);
        this.data = res.data.data;
        this.totalPage = Math.ceil(this.data.length / this.pageCount) * 10 || 1;
        //  console.log(this.totalPage);
      });
    },
    getData1(cid) {
      // var url='http://127.0.0.1:8084/v1/product/showpro'
      var url = `http://127.0.0.1:8084/v1/product/selectpro/${cid}`;
      this.axios.get(url).then((res) => {
        // console.log(res);
        this.data = res.data;
        this.cdata = this.data;
        this.totalPage = Math.ceil(this.data.length / this.pageCount) * 10 || 1;
        // console.log(this.totalPage);
      });
    },
    getPage(index) {
      this.pageNo = index || this.pageNo;
      var url = "http://127.0.0.1:8084/v1/product/page";
      let params = `page=${this.pageNo}&pageSize=${this.pageCount}`;
      this.axios.post(url, params).then((res) => {
        //  console.log(res);
        this.data = res.data;
      });
    },
    //当前页数据
    currentPage(currentPage) {
      this.currentNo = currentPage;
      // console.log(this.currentNo);
      this.getPage(this.currentNo);
    },
  },
  mounted() {
    this.getPage();
    this.mohuselect();
  },
  created() {
    this.getData();
  },
};
</script>
<style scoped src="../assets/css/base.css"></style>
<style scoped src="../assets/css/product.css"></style>
<style lang="scss" scoped>
.top3 {
  width: 558px;
  p {
    line-height: 20px;
    margin-top: 70px;
    font-size: 18px;
    color: rgb(137, 139, 156);
  }
}
.pagepos {
  width: 1200px;
  display: flex;
  justify-content: end;
  margin-bottom: 40px;
  margin-top: 30px;
}
</style>