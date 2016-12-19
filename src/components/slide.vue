<template>
  <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../assets/img/banner1-750.png" alt="轮播图">
            <router-link class="view-detail first-btn" to="/jxc">详情查看</router-link>
          </div>
          <div class="swiper-slide">
            <img src="../assets/img/banner2-750.png" alt="轮播图">
            <router-link class="view-detail second-btn" to="/jxc">详情查看</router-link>
          </div>
          <div class="swiper-slide">
            <img src="../assets/img/banner3-750.png" alt="轮播图">
            <router-link class="view-detail third-btn" to="/jxc">详情查看</router-link>
          </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <div class="s-nav">
        <router-link class="" to="/jxc">协同进销存</router-link>
        <router-link class="" to="/jxc">移动订货</router-link>
        <router-link class="" to="/jxc">SAM零售管理</router-link>
        <router-link class="" to="/jxc">防伪溯源</router-link>
        <router-link class="" to="/jxc">移动导购</router-link>
      </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      
    }
  },
  mounted: function () {
    var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay : 3000,
    // 如果需要分页器
    pagination: '.swiper-pagination'
  })        
  }
}
</script>
<style>
.swiper-container{
  position: relative;
  width: 100%;
  margin: 0px auto;
  height: 100%;
  text-align: center;
}
.swiper-container img{
  width: 100%;
  height: 100%;
  text-align: center;
}
.swiper-pagination-bullet{
  background: none;
  border: solid 1px #fff;
  opacity: 1;
  width: .4rem;
  height: .4rem;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  -o-border-radius: 100%;
  -ms-border-radius: 100%;
  border-radius: 100%;
}
.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
  bottom: 5rem;
}
.swiper-pagination-bullet-active{
  background: #fff;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  -o-border-radius: 100%;
  -ms-border-radius: 100%;
  border-radius: 100%;
}
.swiper-slide{
  position: relative;
}
.view-detail{
  position: absolute;
  display: block;
  width: 9.1666666rem;
  height: 3.333333rem;
  line-height: 3.333333rem;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  color: #7f2700;
  background-color: #ffde00;
}
.first-btn{
  left: 6%;
  top: 44%;
}
.second-btn{
  right: 6%;
  top: 54%;
}
.third-btn{
  left: 6%;
  top: 54%; 
}
.view-detail:active{
  background-color: #fff;
}
.s-nav{
  display: -webkit-flex;
  display: flex;
  position: absolute;
  left: 1%;
  bottom: 3px;
  width: 98%;
  z-index: 9999;
}
.s-nav a{
  -webkit-flex: 1;
  flex: 1;
  box-flex: 1;
  font-size: 1.5rem;
  line-height: 4rem;
  color: #fff;
  background-color: rgba(255,255,255,.3);
  margin-left: 0.1666666rem;
}
@media screen and (max-width: 375px){
  .s-nav a{
    font-size: 0.9rem;
  }
}
</style>