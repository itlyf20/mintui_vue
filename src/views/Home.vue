<template>
  <div class="home">
	<mt-header title="首页"></mt-header>
	<div class="swipe">
		<mt-swipe :auto="4000">
		   <mt-swipe-item v-for="item in items" :key="item.id">
			  <img :src="item.url" alt="">
		   </mt-swipe-item>
		</mt-swipe>
	</div>
	<div class="pmd">
		<Pmd />
	</div>
	<div class="grid_row">
		<!-- goTo(item.path)路由跳转 -->
		<div class="grid_item" v-for="item in liugrid" :key="item.id" @click="goTo(item.path)">
			<img :src="item.img_src" alt="">
			{{item.title}}
		</div>
	</div>
  </div>
</template>

<script>
import Pmd from "../components/Pmd.vue"
export default {
  name: 'Home',
  components:{Pmd},
  data(){
	  return{
		  items:[
		  	{id:1,url:"https://t1.hxzdhn.com/uploads/tu/zyf/tt/20160520/jxv5znouudd.jpg"},
		  	{id:2,url:"https://t1.hxzdhn.com/uploads/tu/zyf/tt/20160520/zir5bihd0de.jpg"},
		  	{id:3,url:"https://t1.hxzdhn.com/uploads/tu/zyf/tt/20160520/3odbp3etrlw.jpg"}
		  ],
		  liugrid:[
			  {id:1,path:"/order",title:"商城购买",img_src:require("../assets/logo.png")},
			  {id:2,path:"/order",title:"物流信息",img_src:require("../assets/logo.png")},
			  {id:3,path:"/order",title:"视频专区",img_src:require("../assets/logo.png")},
			  {id:4,path:"/order",title:"图片分享",img_src:require("../assets/logo.png")},
			  {id:5,path:"/order",title:"留言反馈",img_src:require("../assets/logo.png")},
			  {id:6,path:"/order",title:"联系我们",img_src:require("../assets/logo.png")}
		  ]
	  }	
  },
  methods:{
	  // 路由切换的方法
	   goTo(path) {
	  		this.$router.push(path)
	   }
  }
}
</script>
<style scoped="scoped">
	.swipe{
		width: 100%;
		height: 200px;
	}
	.swipe img{
		width: 100%;
		height: 200px;
	}
	.grid_row{
		display: flex;
		align-items: center;
		width:100%;
		flex-wrap: wrap;
	}
	.grid_item{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width:32.75%;
		border: 1px solid gainsboro;
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.grid_item img{
		width: 50px;
		height: 50px;
	}
</style>
