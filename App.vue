<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@font-face {font-family: "iconfont";
	  src: url('~@/static/font/iconfont.eot?t=1594789102263'); /* IE9 */
	  src: url('~@/static/font/iconfont.eot?t=1594789102263#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
	  url('~@/static/font/iconfont.woff?t=1594789102263') format('woff'),
	  url('~@/static/font/iconfont.ttf?t=1594789102263') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	  url('~@/static/font/iconfont.svg?t=1594789102263#iconfont') format('svg'); /* iOS 4.1- */
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.icon-guanyuwomen:before {
	  content: "\e615";
	}
	
	.icon-qipao:before {
	  content: "\e6a9";
	}
	
	.icon-lianxiwomen:before {
	  content: "\e607";
	}
	
	.icon-chaoshi:before {
	  content: "\e602";
	}
	
	.icon-tupian:before {
	  content: "\e61a";
	}
	
	.icon-shipin:before {
	  content: "\e62a";
	}
	
	.gomeImgLoad{
		width: 700rpx;
		height: auto;
		padding: 10rpx 10rpx;
	}
	
</style>
