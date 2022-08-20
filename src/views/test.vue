<template>
  <swiper class="swiper2" :options="swiperOption1">
    <swiper-slide>
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
    </swiper-slide>
    <swiper-slide>
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
    </swiper-slide>
    <swiper-slide>
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
    </swiper-slide>
    <swiper-slide>
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
    </swiper-slide>
    <swiper-slide>
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
    </swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
    <swiper-slide>Slide 10</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption1: {
          slidesPerView: 4,
          spaceBetween: 8,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
.swiper2{
  height: 460px;
  background-color: red;
}
.swiper2 .swiper-slide .to-item{
  border-radius: 5px;
  background-color: #fff;
}
.swiper2 .swiper-slide  .to-item .to-img img{
  width: 280px;
  height: 300px;
  border-radius: 5px;
}
.swiper2 .swiper-slide  .to-item{
  text-align: center;
}
.swiper2 .swiper-slide .to-item .to-main p{
  font-weight: bold;
  padding-bottom: 8px;
}
.swiper2 .swiper-slide  .to-item .to-main span:nth-child(1){
  color: #34ad54;
}
.swiper2 .swiper-slide .to-item .to-main span:last-child{
  padding-left: 12px;
  text-decoration: line-through;
  font-size: 16px;
  color: #bbb;
}
</style>