<template>
  <div class="index">
    <!-- 头 -->
    <my-header />

    <!-- 身体 -->
    <!-- 轮播图 -->
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide>
        <img
          src="../assets/img/main-slider-1-1.jpg"
          alt=""
          style="width: 1200px"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="../assets/img/main-slider-1-2.jpg"
          alt=""
          style="width: 1200px"
        />
      </swiper-slide>
      <!-- 左右箭头 -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <!-- item 轮播图上的导航-->
    <div class="cover-main">
      <div class="main">
        <div class="m-item">
          <div class="it-img">
            <img src="../assets/img/商店.png" alt="" />
          </div>
          <div>
            <p>优质选购</p>
            <span>选择你所需要的商品吧！</span>
          </div>
        </div>
        <div class="m-item">
          <div class="it-img">
            <img src="../assets/img/商店.png" alt="" />
          </div>
          <div>
            <p>更多商品</p>
            <span>选择你所需要的商品吧！</span>
          </div>
        </div>
        <div class="m-item">
          <div class="it-img">
            <img src="../assets/img/货车.png" alt="" />
          </div>
          <div>
            <p>我的订单</p>
            <span>查看你所选择的商品！</span>
          </div>
        </div>
      </div>
    </div>
    <div class="project-cover">
      <div class="pro-top">
        <div class="pro-top-left">
          <img src="../assets/img/leaf-1-1.png" alt="" />
          <p id="zhanshi">产品展示</p>
        </div>
        <div class="pro-top-right">
          <ul>
            <li @click="getData" >所有</li>
            <li @click="getDataId(40)">日常</li>
            <li @click="getDataId(20)">蔬菜</li>
            <li @click="getDataId(10)">水果</li>
            <li @click="getDataId(30)">肉类</li>
          </ul>
        </div>
      </div>
      <!-- 产品展示-->
      <div class="pro-main" v-if="data">
        <div class="pro-cover" v-for="(x, index) in data.data" :key="index">
          <div class="mains">
            <div class="main-item">
              <div class="item">
                <!-- <img src="../assets/img/product-1-3.jpg" alt="" /> -->
                <img :src="x.pic" alt="" />
              </div>
            </div>
            <!-- <div class="main-item">
            <div class="item">
              <img src="../assets/img/product-2-4.jpg" alt="" />
            </div>
          </div>
          <div class="main-item">
            <div class="item">
              <img src="../assets/img/product-2-3.jpg" alt="" />
            </div>
          </div> -->
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
              <div class="hov-cover">
                <div class="mitem-hov">
                  <div class="circle">
                    <img src="../assets/img/查看.png" alt="" @click="getCar" />
                  </div>
                  <div class="circle">
                    <img
                      src="../assets/img/收藏.png"
                      alt=""
                      @click="getDatanow1(x.gid)"
                    />
                  </div>
                  <div class="circle" @click="getDatanow(x.gid)">
                    <img src="../assets/img/购物车 悬浮.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="m-price">
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#f7ba2a"
              score-template="{value}"
              :colors="colors"
            >
            </el-rate>
            <p>西红柿</p>
            <p>¥3.50</p>
            <div class="hov-cover">
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
            </div>
          </div>
          <div class="m-price">
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#f7ba2a"
              score-template="{value}"
              :colors="colors"
            >
            </el-rate>
            <p>鸡蛋</p>
            <p>¥1.50</p>
            <div class="hov-cover">
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
            </div>
          </div> -->
          </div>
        </div>
        <!-- 优惠选购 -->
        <div class="pro-bottom">
          <div class="pro-bottom-left">
            <img src="../assets/img/leaf-1-1.png" alt="" />
            <p id="youhui">优惠选购</p>
          </div>
          <swiper class="swiper2" :options="swiperOption1">
            <swiper-slide v-for="x in data.data" :key="x.gid">
              <div class="to-item">
                <div class="to-img">
                  <img :src="x.pic" alt="" />
                </div>
                <div class="to-main">
                  <p>{{ x.gname }}</p>
                  <span>¥{{ (x.price * 0.8).toFixed(2) }}</span>
                  <span>¥{{ x.price }}</span>
                </div>
              </div>
            </swiper-slide>

            <div class="swiper-button-prev prev" slot="button-prev"></div>
            <div class="swiper-button-next next" slot="button-next"></div>
          </swiper>
          <!-- <div class="to-cover">
           <div class="to-item">
          <div class="to-img">
             <img src="../assets/img/product-6.jpg" alt="">
          </div>
            <div class="to-main">
            <p>青菜</p>
            <span>¥3.00</span>
            <span>¥2.50</span>
            </div>     
         </div>
          <div class="to-item">
          <div class="to-img">
             <img src="../assets/img/product-2.jpg" alt="">
          </div>
            <div class="to-main">
            <p>青菜</p>
            <span>¥3.00</span>
            <span>¥2.50</span>
            </div>     
         </div>
          <div class="to-item">
          <div class="to-img">
             <img src="../assets/img/product-5.jpg" alt="">
          </div>
            <div class="to-main">
            <p>青菜</p>
            <span>¥3.00</span>
            <span>¥2.50</span>
            </div>     
         </div>
          <div class="to-item">
          <div class="to-img">
             <img src="../assets/img/product-4.jpg" alt="">
          </div>
            <div class="to-main">
            <p>青菜</p>
            <span>¥3.00</span>
            <span>¥2.50</span>
            </div>     
         </div>
        </div> -->
          <div class="bo-cover">
            <div class="bo-item">
              <div class="bo-img">
                <img src="../assets/img/offer-banner-1-1.jpg" alt="" />
              </div>
              <div class="bo-content">
                <div class="bo-main">
                  <p>有机品质有机蔬菜</p>
                  <p>organic quality organic vegetables</p>
                  <span @click="getProduct"
                    >了解更多 &nbsp;<i class="el-icon-d-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="bo-item">
              <div class="bo-img">
                <img src="../assets/img/offer-banner-1-2.jpg" alt="" />
              </div>
              <div class="bo-content">
                <div class="bo-main">
                  <p>有机品质有机水果</p>
                  <p>organic quality organic vegetables</p>
                  <span @click="getProduct"
                    >了解更多 &nbsp;<i class="el-icon-d-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="aside">
      <a href="#" class="scroll-to-top"></a>
    </div>

    <el-backtop :bottom="100">
      <div
        style="
           {
            height: 100%;
            text-align: center;
            color: #fff;
          }
        "
      >
        <i class="el-icon-caret-top"></i>
      </div>
    </el-backtop>

    <!-- 脚 -->
    <my-footer />
  </div>
</template>

<script>
import MyFooter from "@/components/MyFooter.vue";
import MyHeader from "@/components/MyHeader.vue";
export default {
  components: { MyFooter, MyHeader },
  data() {
    return {
      isvisited: -1,
      data: [],
      price: "",
      gname: "",
      // 商品评分
      value: 5.0,
      colors: ["#60be74", "#60be74", "#60be74"],
      // 首页大轮播图
      swiperOption: {
        // 特效：cube方块
        effect: "fade",
        loop: true, //无限循环
        //  autoplay:true //自由切换
        autoplay: {
          // 利用对象类型，可以详情配置
          delay: 3000, //滚动间隔时长
          // 用户操作后是否禁用自动滚动：假，代表不禁用
          disableOnInteraction: false,
        },
        // 小圆点
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // 左右箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      // 商品轮播图
      swiperOption1: {
        slidesPerView: 4,
        spaceBetween: 18,
        loop: true,
        // 左右箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  methods: {
    getData() {
      var url = "http://127.0.0.1:8084/v1/product/showpro";
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data;
      });
    },
    // 查询商品分类
    getDataId(cid) {
      var url = `http://127.0.0.1:8084/v1/product/selectpro/${cid}`;
      console.log(url);
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data;
      });
    },
    // 点击查询商品-加入购物车
    getDatanow(gid) {
      if (this.$store.state.loginname !== "") {
        var url = `http://127.0.0.1:8084/v1/product/selectgoods?gid=${gid}`;
        this.axios.get(url).then((res) => {
          this.nowdata = res.data;
          this.getCar(this.nowdata);
        });
      } else {
        alert("请登录后重试");
        this.$router.push("/login");
      }
    },
    // 加入购物车
    getCar(nowdata) {
      var url = "http://127.0.0.1:8084/v1/product/add";
      console.log(nowdata.data[0]);
      let params = `bname=${nowdata.data[0].gname}&bprice=${
        nowdata.data[0].price
      }&bpic=${nowdata.data[0].pic}&bnum=${1}`;
      console.log(params);
      this.axios.post(url, params).then((res) => {
        console.log(res);
        // this.$router.push("/car");
        // window.scroll(0, 0);
        alert("成功添加一条商品");
      });
    },
    // 点击查询商品
    getDatanow1(gid) {
      if (this.$store.state.loginname !== "") {
        var url = `http://127.0.0.1:8084/v1/product/selectgoods?gid=${gid}`;
        this.axios.get(url).then((res) => {
          this.nowData = res.data;
          this.getCollect(this.nowData);
        });
      } else {
        alert("请登录后重试");
        this.$router.push("/login");
      }
    },
    // 加入收藏夹
    getCollect(nowData) {
      var url = "http://127.0.0.1:8084/v1/product/addcontallect ";
      let params = `lname=${nowData.data[0].gname}&lprice=${nowData.data[0].price}&lpic=${nowData.data[0].pic}`;
      console.log(params);
      this.axios.post(url, params).then((res) => {
        console.log(res);
        alert("成功收藏一条商品");
      });
    },
    getProduct() {
      this.$router.push("/product");
      window.scroll(0, 0);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style scoped src="../assets/css/base.css"></style>
<style scoped src="../assets/css/index.css"></style>
<style lang="scss" scoped>
.swiper-container {
  margin: 0 auto;
  width: 1200px;
}
.swiper-button-prev,
.swiper-button-next {
  color: #fff;
}
// 轮播图2
.swiper2 {
  height: 400px;
  margin: 0 auto;
  width: 1100px;
  position: relative;
}
.swiper2 .swiper-slide .to-item {
  border-radius: 5px;
  background-color: #fff;
  width: 260px;
}
.swiper2 .swiper-slide .to-item .to-img img {
  width: 100%;
  // width: 260px;
  height: 290px;
  border-radius: 5px;
}
.swiper2 .swiper-slide .to-item {
  text-align: center;
}
.swiper2 .swiper-slide .to-item .to-main {
  padding: 10px 0;
  background-color: #fff;
}
.swiper2 .swiper-slide .to-item .to-main p {
  font-weight: bold;
  padding-bottom: 8px;
}
.swiper2 .swiper-slide .to-item .to-main span:nth-child(1) {
  color: #34ad54;
}
.swiper2 .swiper-slide .to-item .to-main span:last-child {
  padding-left: 12px;
  text-decoration: line-through;
  font-size: 16px;
  color: #bbb;
}

.prev,
.next {
  position: absolute;
  top: 132px;
  color: #a7f5b8;
}
.el-backtop {
  background-color: #60be74;
}
</style>