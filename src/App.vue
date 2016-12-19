<template>
  <div id="app">
    <top></top>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view class="view"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import top from 'components/top'
import slide from 'components/slide'
export default {
  name: 'app',
  components: {
    top,slide
  }
}
</script>

<style>
#app {
  position: relative;
  font-family: '黑体', '微软雅黑', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: justify;
}
*{
  padding: 0rem;
  margin: 0rem;
}
html,body{
  font-size: 12px;
  height: 100%;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
}
.left{
  float: left;
}
.right{
  float: right;
}
.clear{
  clear: both;
}
.view{
  padding-top: 7rem;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
