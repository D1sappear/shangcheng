<template>
	<view class="contact">
		<view class="header">
			<image src="../../static/image/day12/guanyuwomen.png" mode="strings"></image>
			<view class="detail">
				<view class="phone">
					<text @click="telephone">联系电话：400-618-9090（点击拨打）</text>
				</view>
				<view class="adress">
					<text class="">地址：深圳市龙岗区坂田街道同兴路20号</text>
				</view>
			</view>
		</view>
		<view class="map">
			<map style="width: 720rpx; height: 720rpx;" latitude="22.637068" longitude="114.063717" scale="16" :markers="markers"></map>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				markers: [
					{
						latitude: 22.637068,
						longitude: 114.063717,
						iconPath: "/static/image/day12/wuzi.png"
					}
				]
			}
		},
		methods: {
			telephone() {
				console.log("拨打电话")
				uni.makePhoneCall({
					phoneNumber:"13539535474",
					success: () => {
						console.log("进行拨打")
					},
					fail: (err) => {
						console.log("电话拨打失败", err)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact{
		.header{
			image{
				width: 750rpx;
				height: 350rpx;
			}
			.detail{
				.phone{
					margin-top: 40rpx;
				}
				view {
					text{
						display: block;
						width: 710rpx;
						height: 100rpx;
						margin: 0rpx 0rpx 50rpx 20rpx;
						border-bottom: 1px solid #F0F0F0;
					}
				}
			}
		}
		.map{
			margin: -20rpx 0rpx 15rpx 15rpx;
		}
	}
</style>
