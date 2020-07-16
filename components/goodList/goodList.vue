<template>
	<view class="list_goods">
		<view class="good" v-for="item in goods" :key="item.id" @click="navigateToGoodsDetail(item.id)">
			<image :src="item.img_url" mode="strings"></image>
			<view class="price">
				<text>￥{{item.sell_price}}</text>
				<text>￥{{item.market_price}}</text>
			</view>
			<text>{{item.title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['goods'],
		methods:{
			navigateToGoodsDetail(id) {
				this.$emit('navigateToGoodsDetail', id)
			}
		}
	}
</script>

<style lang="scss">
	.list_goods{
		display: flex;
		flex-wrap: wrap;
		.good{
			background-color: white;
			width: 355rpx;
			margin: 10rpx 10rpx;
			image{
				width: 100%;
				// height: 100%;
			}
			.price{
				font-size: 42rpx;
				color: $shop-color;
				text:nth-child(2){
					text-align: center;
					font-size: 32rpx;
					margin-left: 10rpx;
					color: #D6D6D6;
					text-decoration: line-through;
				}
			}
			text:nth-child(3){
				font-size: 20rpx;
			}
		}
	}
</style>
