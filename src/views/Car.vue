<template>
  <div>
    <my-header />
    <div class="car-cover">
      <div class="car-top">
        <img src="../assets/img/page-header-bg-1-1.jpg" alt="" />
        <div class="img-text">
          <h2>购物车</h2>
          <ul>
            <li>首页</li>
            <li>/</li>
            <li>购物车</li>
          </ul>
        </div>
      </div>
      <div class="car-main">
        <div class="page-shopping-cart" id="shopping-cart">
          <h4 class="cart-title">购物清单</h4>
          <div class="cart-product-title clearfix">
            <div class="td-check fl">
              <span
                class="check-span fl check-all"
                :class="{ 'check-true': isSelectAll }"
                @click="selectProduct(isSelectAll)"
              ></span
              >全选
            </div>
            <div class="td-product fl">商品</div>
            <div class="td-num fl">数量</div>
            <div class="td-price fl">单价(元)</div>
            <div class="td-total fl">金额(元)</div>
            <div class="td-do fl">操作</div>
          </div>
          <div class="cart-product clearfix">
            <table>
              <tbody>
                <tr v-for="(g, index) of data.data" :key="index">
                  <td class="td-check">
                    <!-- <span>{{index}}</span> -->
                    <span
                      class="check-span"
                      @click="g.selected = !g.selected"
                      :class="{ 'check-true': g.selected }"
                    >
                    </span>
                  </td>
                  <td class="td-product">
                    <img :src="g.bpic" width="98" height="98" />
                    <div class="product-info">
                      <h6>{{ g.bname }}</h6>
                      <p>产地：{{ g.bplace }}&nbsp;&nbsp;地区：{{ g.bcity }}</p>
                      <p>
                        规格/纯度:{{ g.bpurity }}&nbsp;&nbsp;起定量：{{
                          g.bmin
                        }}
                      </p>
                      <p>配送仓储：{{ g.bdepot }}</p>
                    </div>
                    <div class="clearfix"></div>
                  </td>
                  <td class="td-num">
                    <div class="product-num">
                      <a
                        href="javascript:;"
                        class="num-reduce num-do fl"
                        @click="g.bnum > 1 ? g.bnum-- : ''"
                      >
                        <span>-</span>
                      </a>
                      <!-- <input type="text" class="num-input" v-model="bnum" /> -->
                      <span class="num-input">{{ g.bnum }}</span>
                      <a
                        href="javascript:;"
                        class="num-add num-do fr"
                        @click="g.bnum++"
                        ><span>+</span></a
                      >
                    </div>
                  </td>
                  <td class="td-price">
                    <p class="red-text">
                      ￥<span class="price-text">{{ g.bprice }}</span>
                    </p>
                  </td>
                  <td class="td-total">
                    <p class="red-text">
                      ￥<span class="total-text">{{
                        g.bprice * g.bnum.toFixed(2)
                      }}</span>
                    </p>
                  </td>
                  <td class="td-do">
                    <a
                      href="javascript:;"
                      class="product-delect"
                      @click="deleteData(g.bid, index)"
                      >删除</a
                    >
                  </td>
                </tr>
                <!-- <tr>
                  <td class="td-check">
                    <span class="check-span check-true"></span>
                  </td>
                  <td class="td-product">
                    <img
                      src="../assets/img/product-1-8.jpg"
                      width="98"
                      height="98"
                    />
                    <div class="product-info">
                      <h6>香蕉</h6>
                    </div>
                    <div class="clearfix"></div>
                  </td>
                  <td class="td-num">
                    <div class="product-num">
                      <a href="javascript:;" class="num-reduce num-do fl"
                        ><span></span
                      ></a>
                      <input type="text" class="num-input" value="1" />
                      <a href="javascript:;" class="num-add num-do fr"
                        ><span></span
                      ></a>
                    </div>
                  </td>
                  <td class="td-price">
                    <p class="red-text">
                      ￥<span class="price-text">800</span>.00
                    </p>
                  </td>
                  <td class="td-total">
                    <p class="red-text">
                      ￥<span class="total-text">800</span>.00
                    </p>
                  </td>
                  <td class="td-do">
                    <a href="javascript:;" class="product-delect">删除</a>
                  </td>
              </tr> -->
              </tbody>
            </table>
          </div>
          <div class="cart-product-info" v-if="data">
            <a class="delect-product" href="javascript:;" @click="delselected"
              ><span></span>删除所选商品</a
            >
            <a class="keep-shopping" 
            style="user-select: none;
            cursor: pointer;"
            @click="getIndex">
            <span></span>继续购物
            </a>
            <a class="btn-buy fr" href="javascript:;" @click="delselected" 
              >去结算￥{{ total2 }}</a
            >
            <p class="fr product-total">
              ￥<span> {{ getTotal }}</span>
            </p>
            <p class="fr check-num">
              <span>
                {{
                  Array.isArray(this.data.data) && this.data.data.length
                }} </span
              >件商品总计（不含运费）：
            </p>
          </div>
          <div class="cart-worder clearfix">
            <!-- <a href="javascript:;" class="choose-worder fl"
              ><span></span>绑定跟单员</a
            > -->

            <div class="worker-info fl"></div>
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
      // bnum: 1,
    };
  },
  methods: {
    getData() {
      var url = "http://127.0.0.1:8084/v1/product/showbuy";
      this.axios.get(url).then((res) => {
        // console.log(res);
        this.data = res.data;
        console.log(this.data);
      });
    },
    deleteData(bid, index) {
      var url = `http://127.0.0.1:8084/v1/product/del?bid=${bid}`;
      this.axios.delete(url).then((res) => {
        this.data.data.splice(index, 1);
        // console.log(index);
      });
    },
    selectProduct: function (isSelect) {
      //遍历productList，全部取反
      for (var i = 0, len = this.data.data.length; i < len; i++) {
        this.data.data[i].selected = !isSelect;
      }
    },
    // 删除所选商品
    delselected() {
      this.data.data.forEach((item) => {
        if (item.selected) {
          this.deleteData(item.bid);
          this.getData();
          alert("操作成功！");
        }
      });
    },
    getIndex() {
      this.$router.push("/");
    },
  },
  computed: {
    list() {
      return this.data.data || [];
    },
    isSelectAll: function () {
      //如果长度为0，直接返回false
      if (this.list.length === 0) {
        return false;
      }
      //如果data中每一条数据的selected都为true，返回true，否则返回false;
      return this.list.every(function (val) {
        return val.selected;
      });
    },
    // 计算所有商品总数
    getTotal() {
      // 遍历商品，计算所有商品价格的总和
      // console.log(this.data.data);
      // var arr = this.data.data;
      var sum = 0;
      this.list.forEach((p) => {
        sum += p.bprice * p.bnum;
      });
      return sum;
    },
    //  只计算selected为true的商品价格
    total2() {
      var sum = 0;
      // 只累加勾选状态是true元素
      this.list.forEach((p) => (sum += p.bprice * p.bnum * p.selected));
      return sum;
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style scoped src="../assets/css/base.css"></style>
<style scoped src="../assets/css/car.css"></style>
<style lang="scss" scoped></style>
