<template>
	<view class="image">
		<view class="scroll_view">
			<scroll-view scroll-y="true" enable-flex="true">
				<view :class="active===index?'active':''" v-for="(item,index) in message" :key="item.id" @click="getIndex(index,item.id)">
					{{item.title}}
				</view>
			</scroll-view>
		</view>
		<view class="imgDetail">
			<scroll-view scroll-y="true" enable-flex="false">
				<view v-for="(item,index) in imgArr" :key="item.id">
					<image :src="item.img_url" mode="strings" @click="previewImage(index)"></image>
					<text class="tit">{{item.title}}</text>
					<text class="descr">{{item.zhaiyao}}</text>
				</view>
				<text v-if="imgArr.length===0">暂无数据</text>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				message: [],
				active: 0,
				imgArr: [],
				imgUrlArr: []
			}
		},
		methods: {
			// 请求图片分类数据
			async getImg() {
				const res = await this.$myRequest({
					url: '/api/getimgcategory'
				})
				this.message = res.data.message
				// 进入页面时直接获取第一分区图片数据
				this.getIndex(0,this.message[0].id)
			},
			// 获取当前index
			async getIndex(currentIndex,currentId) {
				this.active = currentIndex
				const res = await this.$myRequest({
					url: '/api/getimages/' + currentId
				})
				this.imgArr = res.data.message
				this.imgUrlArr = res.data.message.map(item => {
					return item.img_url
				})
			},
			// 预览图片
			previewImage(current) {
				console.log(this.imgUrlArr)
				uni.previewImage({
					urls:this.imgUrlArr,
					current
				})
			}
		},
		onLoad() {
			this.getImg()
		}
	}
</script>

<style lang="scss">
	.image{
		display: flex;
		height: 1240rpx;
		.scroll_view{
			height: 100%;
			scroll-view{
				width: 200rpx;
				height: 100%;
				view{
					line-height: 180rpx;
					text-align: center;
					// display: block;
					width: 190rpx;
					height: 180rpx;
					border-bottom: 1px solid #F8F8F8;
					border-right: 1px solid #F8F8F8;
					margin: 10rpx 0rpx 10rpx 0rpx;
				}
				.active{
					color: white;
					background-color: $shop-color;
				}
			}
		}
		.imgDetail{
			margin: 10rpx 10rpx 10rpx 10rpx;
			height: 100%;
			scroll-view{
				height: 100%;
				view{
					image{
						width: 520rpx;
						height: 520rpx;
						border-radius: 10rpx;
					}
					.zoom{
						width: 750rpx;
						height: 750rpx;
					}
				}
			}
		}
	}
</style>
