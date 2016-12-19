<template>
	<div class="nav">
		<div class="top">
			<div class="header">
				<div class="logo-wrap">
					<div class="logo left">
						<router-link to="/home"><img src="../assets/logo.png" alt="logo"></router-link>
					</div>
					<div class="siderbar-trigger right">
						<a v-if="!isActive" class="nav-trigger" @click="show">
							<img src="../assets/img/open.png" alt="打开菜单">
						</a>
						<a v-else  @click="close" class="nav-trigger close">
							<img src="../assets/img/close.png" alt="关闭菜单">
						</a>
					</div>
					<div class="clear"></div>
				</div>
			</div>
			<div v-bind:class="[isActive ? activeClass : '', errorClass]">
				<div class="nav-shadow left" @click="close">&nbsp;</div>
				<div class="nav-items left">
					<ul class="menu">
						<li v-for="(n,index) of menu" >
							<a href="javascript:void(0)" v-if="index == 1" v-on:click.self="switchDrop(index)">{{n.name}}</a>
							<a href="javascript:void(0)" v-else-if="index == 2" v-on:click.self="switchDrop(index)">{{n.name}}</a>
							<router-link :to="{path: n.path}" v-else>{{n.name}}</router-link>
							<ul class="s-menu" v-if="index == 1" v-show='isPro'>
								<li v-for="c of n.children">
									<router-link :to="{path: c.path}">{{c.name}}</router-link>
								</li>
							</ul>
							<ul class="s-menu" v-else-if="index == 2"v-show='isApply'>
								<li v-for="c of n.children">
									<router-link :to="{path: c.path}">{{c.name}}</router-link>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	components:{
		
	},
	data() {
		return{
			isActive:false,
			errorClass: 'closeMenu',
			activeClass: 'openMenu',
			isPro: false,
			isApply: false,
			menu:[
				{id: '1',name: '首页',path: '/home'},
				{
					id: '2-1',
					name: '产品',
					children:[
						{id: '2-1-1',name: '协同进销存',path: '/jxc'},
						{id: '2-1-2',name: '移动订货',path: '/jxc'},
						{id: '2-1-3',name: 'SAM零售',path: '/jxc'},
						{id: '2-1-4',name: '防伪溯源',path: '/jxc'},
						{id: '2-1-5',name: '移动导购',path: '/jxc'}
					]
				},
				{
					id: '3-1',
					name: '应用',
					children:[
						{id: '3-1-1',name: '品牌厂商应用',path: '/jxc'},
						{id: '3-1-2',name: '经销批发商应用',path: '/jxc'},
						{id: '3-1-3',name: '零售商应用',path: '/jxc'},
						{id: '3-1-4',name: '消费者应用',path: '/jxc'}
					]
				},
				{id: '4',name: '服务',path: '/jxc'},
				{id: '5',name: '资讯',path: '/jxc'},
				{id: '6',name: '关于我们',path: '/jxc'}	
			]
		}
	},
	mounted(){
		//实例创建的时候给路由跳转后一个方法，只要路由发生变化，就关闭menu
		this.$router.afterEach(route =>{
			this.isActive = false;
		})
	},
	methods:{
		show(){
			this.isActive = true;
		},
		close(){
			this.isActive = false;
			this.isPro = false;
			this.isApply = false;
		},
		switchDrop(index){
			const inx = index;
			if(inx == 1){
				this.isPro = !this.isPro;
			}
			if(inx == 2){
				this.isApply = !this.isApply;
			}
		}
	}
}
</script>
<style>
.nav{
	width: 100%;
	position: fixed;
	left: 0px;
	top: 0px;
	z-index: 99999;
	background-color: #fff;
}
.top{
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.header{
	position: relative;
	display: block;
	line-height: 7rem;
}
.header img{
	vertical-align: middle;
}
.logo-wrap{
	padding: 0rem 2rem;
}
.siderbar-trigger{
	height: 7rem;
	line-height: 2rem;
	vertical-align: middle;
}
.siderbar-trigger a{
	display: block;
	margin-top: 1.5rem;
	line-height: 4rem;
}
.nav-trigger{
	display: block;
	cursor: pointer;
	-moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 4rem;
    height: 4rem;
    text-align: center;
}
.close{
	-moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.closeMenu{
	position: fixed;
	right: 0%;
	top: 7rem;
	width: 100%;
	height: 100%;
	z-index: 999;
	transition: .2s all;
	-webkit-overflow-scrolling: touch;
	-webkit-transform: translate(100%,0);
	transform: translate(100%,0);
}
.openMenu{
	transition: .3s all;
    -webkit-transform: translate(0%,0);
    transform: translate(0%,0);
}
.close-icon-wrap{
	height: 10rem;
	background-color: #fff;
	line-height: 10rem;
	text-align: right;
}
.nav-shadow{
	display: block;
	width: 30%;
	height: 100%;
	background-color: rgba(0,0,5,.3);
}
.shadow-head{
	width: 100%;
	height: 10rem;
	opacity: 0;
}
.shadow-bottom{
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,.3);
}
.nav-items{
	width: 70%;
	background-color: #21282F;
	height: 100%;
}
.menu{
  width: 86%;
  margin: 0px auto;
}
.menu li{
	line-height: 3rem;
	border-bottom: solid 1px #3b444e;
}
.menu li a{
	color: #ccc;
	font-size: 1.5rem;
	-moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.s-menu{
	margin-left: 4rem;
}
.menu .s-menu li{
	line-height : 2rem;
	border-bottom: none;
}
.menu .s-menu li a{
	color: #ccc;
	font-size: 1.3rem;
	-moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.s-menu-border-none{
	border-bottom: none!important;
}
.menu-active{
	color: #fff!important;
}
</style>