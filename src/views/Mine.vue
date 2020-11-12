<template>
  <div class="mine">
	<mt-header title="我的"></mt-header>
		<ul class="nav">
			  <li class="nav-item-title" style="margin-top: -14px;">
				<mt-cell title="Taurus" label="账号:lyf593" is-link>
					<img slot="icon" src="../assets/shouye_d.png" width="24" height="24">
				</mt-cell>
			  </li>
		</ul>
		
		  <ul class="nav">
			  <li class="nav-item">
				<mt-cell title="学习兴趣" is-link>
					<img slot="icon" src="../assets/logo.png" width="24" height="24">
				</mt-cell>
			  </li>
		  </ul>
		<ul class="nav">
		  <li class="nav-item">
			 <mt-cell title="消息中心"  is-link>
				 <img slot="icon" src="../assets/logo.png" width="24" height="24">
			 </mt-cell>
		  </li>
		</ul>
		<ul class="nav">
		  <li class="nav-item">
			 <mt-cell title="我的余额" is-link>
				 <img slot="icon" src="../assets/logo.png" width="24" height="24">
			 </mt-cell>
		  </li>
		  <li class="nav-item">
			  <mt-cell title="我的优惠券" is-link>
				  <img slot="icon" src="../assets/logo.png" width="24" height="24">
			  </mt-cell>
		  </li>
		  <li class="nav-item">
			 <mt-cell title="在线学习流量" is-link>
				 <img slot="icon" src="../assets/logo.png" width="24" height="24">
			 </mt-cell>
		  </li>
		</ul>
		<ul class="nav">
		  <li class="nav-item">
			 <mt-cell title="手机账号绑定" is-link>
				<img slot="icon" src="../assets/logo.png" width="24" height="24">
			 </mt-cell>
		  </li>
		  <li class="nav-item">
			 <mt-cell title="设置" is-link>
				  <img slot="icon" src="../assets/logo.png" width="24" height="24">
			 </mt-cell>
		  </li>
		</ul>
	<mt-button type="primary" style="text-align: center;width: 100%;">退出登录</mt-button>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  }
}
</script>

<style scoped>
.mine{
	background-color: gainsboro;
	width: 100%;
	height: 100%;
}
.mine ul li{
	list-style: none;
}
.nav-item{
	margin-left: -40px;
}
.nav-item-title{
	margin-left: -40px;
}
.nav-item-title img{
	width: 40px;
	height: 40px;
	float: left;
}
</style>
