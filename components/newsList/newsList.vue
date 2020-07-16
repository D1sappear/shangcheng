<template>
	<view>
		<view class="newsItem" v-for="(item,index) in news" :key="item.id" @click="navigateToNewsDetail(item.id)">
			<image :src="item.img_url" mode="strings"></image>
			<view class="right">
				<view class="tit">
					{{item.title}}
				</view>
				<view class="info">
					<text class="time">发表时间：{{item.add_time | formatDate}}</text>
					<text class="click">浏览：{{item.click}}次</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props: ['news'],
		filters:{
			formatDate(date) {
				const nDate = new Date(date)
				const year = nDate.getFullYear()
				const month = nDate.getMonth().toString().padStart(2,0)
				const day = nDate.getDay().toString().padStart(2,0)
				return year + '-' + month + '-' + day
			}
		},
		methods:{
			navigateToNewsDetail(id) {
				this.$emit('navigateToNewsDetail',id)
			}
		}
	}
</script>

<style lang="scss">
	.newsItem{
		padding: 10rpx 20rpx;
		width: 750rpx;
		border-bottom: 1rpx solid $shop-color;
		display: flex;
		image{
			max-width: 200rpx;
			max-height: 200rpx;
			height: 150rpx;
		}
		.right{
			width: 520rpx;
			margin-left: 10rpx;
			display: flex;
			flex-wrap: wrap;
			flex-direction: column;
			justify-content: space-between;
			.tit{
				font-size: 35rpx;
				margin-top: 20rpx;
				width: 520rpx;
			}
			.info{
				text{
					font-size: 25rpx;
					margin-right: 10rpx;
				}
			}
		}
	}
</style>
