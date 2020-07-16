<template>
	<view class="news">
		<news-list @navigateToNewsDetail="navigateToNewsDetail" :news="news"></news-list>
	</view>
</template>

<script>
	import newsList from "../../components/newsList/newsList.vue"
	export default {
		data() {
			return {
				news: []
			}
		},
		methods: {
			// 获取资讯列表
			async getNewsList() {
				const res = await this.$myRequest({
					url: "/api/getnewslist"
				})
				this.news = res.data.message
			},
			// 跳转到详情页
			navigateToNewsDetail(id) {
				uni.navigateTo({
					url: '../newsDetail/newsDetail?id=' + id,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		},
		onLoad() {
			this.getNewsList()
		},
		components:{
			"news-list": newsList
		}
	}
</script>

<style lang="scss">
	.news{
		
	}
</style>
