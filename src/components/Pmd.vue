
<template>
	<div class="home">
		<img src="../assets/laba.png" alt="">
		<span>{{announcementArr}}</span>
	</div>
</template>

<script>
export default {
    name: 'Pmd',
    data() {
        return {
            announcementArr: "这是一个vue的滚动跑马灯...",
        }
    },
    mounted() {
        setInterval(this.showMarquee,500);
    },
    methods: {
        showMarquee(){
            setTimeout(() => {
				let start = this.announcementArr.substring(0,1);
				let end = this.announcementArr.substring(1);
				this.announcementArr = end + start;
            }, 500)
        }
    }
}
</script>

<style scoped="scoped">
	.home{
		display: flex;
		padding: 2px;
		background-color: beige;
	}
	.home img{
		width: 20px;
		height: 20px;
	}
	.home span{
		color: #42B983;
		font-size: 13px;
		padding-left: 12px;
	}
</style>
