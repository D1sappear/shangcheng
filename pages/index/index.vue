<template>
	<view class="home">
		<swiper indicator-dots="true" indicator-active-color="#FFFFFF" autoplay circular interval="2000">
			<swiper-item v-for="(item,index) in swiper" :key="item.id">
				<image :src="item.img" mode="String"></image>
			</swiper-item>
		</swiper>
		<!-- 导航 -->
		<view class="nav">
			<view class="nav_item" v-for="item in navs" :key="item.id" @tap="navigateTo" :data-pages="item.pagePath">
				<view>
					<view :class="item.class">
					</view>
				</view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">
				推荐商品
			</view>
			<good-list @navigateToGoodsDetail="navigateToGoodsDetail" :goods="goods"></good-list>
		</view>
	</view>
</template>

<script>
	import goodList from "../../components/goodList/goodList.vue"
	export default {
		data() {
			return {
				swiper: [],
				goods: [],
				navs: [
					{
						class: "iconfont icon-chaoshi",
						title: "黑马超市",
						pagePath: "/pages/market/market"
					},{
						class: "iconfont icon-lianxiwomen",
						title: "联系我们",
						pagePath: "/pages/contact/contact"
					},{
						class: "iconfont icon-tupian",
						title: "社区图片",
						pagePath: "/pages/image/image"
					},{
						class: "iconfont icon-shipin",
						title: "学习视频",
						pagePath: "/pages/video/video"
					}
				]
			}
		},
		components: {"good-list":goodList},
		onLoad() {
			this.requestlunbo(),
			this.requestGoods()
		},
		methods: {
			// 获取轮播数据
			async requestlunbo() {
				const res = await this.$myRequest({
					url: "/api/getlunbo",
					method: 'GET'
				})
				this.swiper = res.data.message
			},
			// 获取热门商品数据
			async requestGoods() {
				const res = await this.$myRequest({
					url: "/api/getgoods?pageindex=1",
					method: 'GET'
				})
				// console.log(res)
				this.goods = res.data.message
			},
			// 跳转导航页面
			navigateTo(e) {
				console.log("点击跳转到",e)
				var url = e.currentTarget.dataset.pages
				uni.navigateTo({
					url
				})
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
		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			width: 750rpx;
			height: 380rpx;
			image{
				height: 100%;
				width: 100%;
			}
		}
	}
	.nav{
		display: flex;
		.nav_item{
			width: 25%;
			text-align: center;
			view{
				margin: 10rpx auto;
				width: 150rpx;
				height: 150rpx;
				background-color: #C21E00;
				border-radius: 110rpx;
				line-height: 150rpx;
				.iconfont{
					font-size: 80rpx;
					color: white;
				}
			}
		}
	}
	.hot_goods{
		background-color: #EEEEEE;
		overflow: hidden;
		.tit{
			height: 50rpx;
			line-height: 50rpx;
			padding: 30rpx 0;
			background-color: white;
			text-align: center;
			color: $shop-color;
			letter-spacing: 20rpx;
			font-size: 60rpx;
			margin: 10rpx 0;
		}
		
	}
</style>
