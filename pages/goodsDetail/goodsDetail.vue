<template>
	<view class="goodsDetail">
		<view class="imgSwiper">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="(item,index) in imgSwiperArr" :key="item.id">
					<view class="swiper-item">
						<image :src="item.src" mode="strings"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="goodsInfo">
			<view class="price">
				<text class="sellPrice">￥{{goodsInfo.sell_price}}</text>
				<text class="marketPrice">￥{{goodsInfo.market_price}}</text>
			</view>
			<view class="tit">
				<text>{{goodsInfo.title}}</text>
			</view>
			<view class="line"></view>
			<view class="id">
				<text class="id">库号：{{goodsInfo.goods_no}}</text><br>
				<text class="count">库存：{{goodsInfo.stock_quantity}}</text>
			</view>
		</view>
		<view class="line"></view>
		<view class="goodsDescribe">
			<view class="tit">
				<view class="describe">
					<text>详情介绍</text>
				</view><br>
				<view class="content">
					<text>内容</text>
				</view><br>
			</view>
			<view class="content">
				<rich-text :nodes="goodsDescribe.content"></rich-text>
			</view>
		</view>
		<view class="goShoping">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		data() {
			return {
				imgSwiperArr: [],
				goodsInfo: {},
				goodsDescribe: {},
				options: [
					{
						icon: 'headphones',
						text: '客服'
					}, {
						icon: 'shop',
						text: '店铺',
						info: 2,
						infoBackgroundColor:'#007aff',
						infoColor:"red"
					}, {
						icon: 'cart',
						text: '购物车',
						info: 2
					}
					],
				buttonGroup: [
					{
					  text: '加入购物车',
					  backgroundColor: '#ff0000',
					  color: '#fff'
					},
					{
					  text: '立即购买',
					  backgroundColor: '#ffa200',
					  color: '#fff'
					}
				]
			  }
		},
		methods: {
			// 获取图片轮播数据
			async getImgSwiper(id) {
				const res = await this.$myRequest({
					url: "/api/getthumimages/" + id
				})
				this.imgSwiperArr = res.data.message
			},
			// 获取商品参数
			async getGoodsInfo(id) {
				const res = await this.$myRequest({
					url: "/api/goods/getinfo/" + id
				})
				this.goodsInfo = res.data.message[0]
			},
			// 获取商品详情
			async getGoodsDescribe(id) {
				const res = await this.$myRequest({
					url: "/api/goods/getdesc/" + id
				})
				this.goodsDescribe = res.data.message[0]
			},
			onClick (e) {
			   console.log(e)
			   uni.showToast({
			     title: `点击${e.content.text}`,
			     icon: 'none'
			   })
		    },
		    buttonClick (e) {
			   console.log(e)
			   this.options[2].info++
		    }
		},
		onLoad(e) {
			console.log(e)
			this.getImgSwiper(e.id)
			this.getGoodsInfo(e.id)
			this.getGoodsDescribe(e.id)
		},
		components:{uniGoodsNav}
	}
</script>

<style lang="scss">
	.goodsDetail{
		.imgSwiper{
			height: 700rpx;
			swiper{
				width: 100%;
				height: 100%;
				swiper-item{
					width: 100%;
					height: 100%;
					view{
						width: 100%;
						height: 100%;
						image{
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}
		.goodsInfo{
			.price{
				margin: 10rpx 10rpx;
				.sellPrice{
					color: $shop-color;
					font-size: 50rpx;
				}
				.marketPrice{
					font-size: 32rpx;
					margin-left: 30rpx;
					color: #D6D6D6;
					text-decoration: line-through;
				}
			}
			.tit{
				margin: 20rpx 20rpx;
				padding: 10rpx 0;
				// height: 100rpx;
				line-height: 100rpx;
			}
			.line{
				width: 750rpx;
				height: 6rpx;
				background-color: #D6D6D6;
			}
			.id{
				margin: 20rpx 20rpx 20rpx 10rpx;
				.count{
					margin: 20rpx 20rpx 20rpx 10rpx;
				}
			}
		}
		.line{
			width: 750rpx;
			height: 6rpx;
			background-color: #D6D6D6;
		}
		.goodsDescribe{
			.tit{
				.describe{
					width: 750rpx;
					height: 60rpx;
					border-bottom: 1rpx solid #D6D6D6;
					margin: 10rpx 10rpx 10rpx 0rpx;
					text{
						margin: 20rpx 20rpx 20rpx 20rpx;
					}
				}
				.content{
					width: 750rpx;
					height: 60rpx;
					margin: -50rpx 10rpx -50rpx 0rpx;
					border-bottom: 1rpx solid #D6D6D6;
					padding: 0rpx 10rpx;
					text{
						margin: 20rpx 20rpx 20rpx 10rpx;
					}
				}
			}
			.content{
				padding: 15rpx 15rpx;
			}
		}
		.goShoping{
			position: fixed;
			bottom:0;
			width: 100%;
		}
	}
</style>
