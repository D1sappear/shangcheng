<template>
	<view class="market">
		<good-list @navigateToGoodsDetail="navigateToGoodsDetail" :goods="goods"></good-list>
	</view>
</template>

<script>
	import goodList from "../../components/goodList/goodList.vue"
	export default {
		data() {
			return {
				number: 1,
				goods: []
			}
		},
		components: {"good-list":goodList},
		methods: {
			// 获取商品数据
			async requestGood() {
				const res = await this.$myRequest({
					url: '/api/getgoods?pageindex=' + this.number
				})
				this.goods = res.data.message
			},
			// 跳转商品详情页面
			navigateToGoodsDetail(id) {
				uni.navigateTo({
					url: '../goodsDetail/goodsDetail?id=' + id,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		},
		onLoad() {
			this.requestGood()
		},
		// 监听页面下拉刷新
		onPullDownRefresh() {
			console.log('refresh');
			this.number = 1
			setTimeout(() => {
				this.requestGood()
				uni.stopPullDownRefresh();
			}, 2000);
		},
		// 监听页面触底事件
		onReachBottom() {
			console.log('到底了')
			if(this.number<2) {
				this.number++
			}
			console.log(this.number)
			this.requestGood()
		}
	}
</script>

<style lang="scss">
	.market{
		background-color: #eee;
	}
</style>
