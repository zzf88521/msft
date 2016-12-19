import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const router = new VueRouter({
	routes:[
    { path: '', component: resolve => require(['components/home'], resolve) },
    { path: '/', component: resolve => require(['components/home'], resolve) },
    { path: '/home', component: resolve => require(['components/home'], resolve) },
    { path: '/jxc', component: resolve => require(['components/jxc'], resolve) }
  ]
})


export default router;
