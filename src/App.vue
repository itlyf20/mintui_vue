<template>
  <div id="app">
	<div class="content">
		<router-view></router-view>
	</div>
	<FootBar/>
  </div>
</template>
<script>
import FootBar from "./components/FootBar.vue"
export default{
	components:{FootBar}
}
</script>
<style>
body,html,#app{
	margin: 0;
	padding: 0;
	height: 100%;
}
</style>
