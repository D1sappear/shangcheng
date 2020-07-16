<template>
	<view class="newsDetail">
		<view class="header">
			<view class="tit">
				<text>{{detail.title}}</text>
			</view>
			<view class="info">
				<text>发布时间：{{detail.add_time | formatDate}}</text>
				<text>浏览：{{detail.click}}次</text>
			</view>
		</view>
		<view class="rich-text">
			<rich-text :nodes="detail.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail: {} 
			}
		},
		methods: {
			async getNewsDetail(id) {
				const res = await this.$myRequest({
					url: "/api/getnew/"+ id
				})
				this.detail = res.data.message[0]
			}
		},
		onLoad(e) {
			console.log(e)
			this.getNewsDetail(e.id)
		}
	}
</script>

<style lang="scss">
	.newsDetail{
		.header{
			font-size: 30rpx;
			padding: 10rpx 20rpx;
			.tit{
				text-align: center;
			}
			.info{
				margin-top: 30rpx;
				display: flex;
				justify-content: space-between;	
			}
		}
		.rich-text{
			padding: 10rpx 20rpx;
		}
	}
</style>
