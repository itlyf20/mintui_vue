<template>
  <div class="footbar">   
     <mt-tabbar v-model="selected">
       <mt-tab-item id="home" @click.native="goTo('/home')">
		 <img slot="icon" v-if="this.selected=='home'" src="../assets/shouye_d.png">
		 <img slot="icon" v-else="" src="../assets/shouye.png">
         首页
       </mt-tab-item>
       <mt-tab-item id="order" @click.native="goTo('/order')">
		 <img slot="icon" v-if="this.selected=='order'" src="../assets/dingdan_d.png">
         <img slot="icon" v-else src="../assets/dingdan.png">
         订单
       </mt-tab-item>
       <mt-tab-item id="mine" @click.native="goTo('/mine')">
		 <img slot="icon" v-if="this.selected=='mine'" src="../assets/mine_d.png">
         <img slot="icon" v-else src="../assets/mine.png">
         我的
       </mt-tab-item>
     </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'FootBar',
  data(){
	  return{
		  // 默认选择第一个
		  selected:this.$route.path.substring(1)||'home'
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

<style scoped>

</style>
