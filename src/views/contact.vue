<template>
  <div>
    <!-- 联系我们 -->
    <my-header />
    <div class="contact">
     <div class="product-top">
      <img src="../assets/img/page-header-bg-1-1.jpg" alt="">     
       <div class="img-text">
       <h2>联系我们</h2>
       <ul>
        <li>首页</li>
        <li>/</li>
        <li>联系我们</li>
       </ul>
         </div>
     </div>
    <div class="cover">
    <div class="content">
      <div class="container">
          <div>
            <div class="main">          
              <form
                id="contactForm"
                name="contactForm"
              >     
              <div class="group">
                <table></table>
                <div class="main-text">
                 <h3 class="main-text">联系我们</h3>
                  <div class="form-group">
                    <label for="" class="col-form-label">姓名 *</label>
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      id="name"
                      placeholder="请写下您的名字"
                    />
                  <div class="form-group">
                    <label for="" class="col-form-label">邮箱 *</label>
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="请输入您的邮箱地址"
                    />
                  </div>
                </div>
                  <div class=" form-group">
                    <label for="budget"  class="col-form-label">内容 *</label>
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      id="subject"
                      placeholder="请输入您要了解的内容"
                    />
                  </div>
                  <div class="form-group">
                    <label for="message" class="col-form-label"
                      >更多信息 *</label
                    >
                    <textarea
                      class="form-control"
                      name="message"
                      id="message"
                      placeholder="请输入您想写下的内容"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <input
                      type="submit"
                      value="发送信息"
                      class="inp"
                    />
                    <span class="submitting" ></span>   
                </div>
                </div>
                </div>
              </form>
            <div class="map" style="text-align:center">
              <h3>本公司地址</h3>
             <map-container/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <my-footer/>
    </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import MyFooter from '@/components/MyFooter.vue';
import MapContainer from '@/components/MapContainer.vue';
export default {
  components: { MyHeader, MyFooter, MapContainer },
  methods: {
  
  },

};
</script>
<style scoped src="../assets/css/style.css"></style>
<style lang="scss" scoped>
</style>