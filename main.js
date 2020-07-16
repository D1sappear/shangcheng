import Vue from 'vue'
import App from './App'
import { myRequest } from './until/API/index.js'

Vue.prototype.$myRequest = myRequest
// 全局时间过滤器
Vue.filter('formatDate',date => {
	const nDate = new Date(date)
	const year = nDate.getFullYear()
	const month = nDate.getMonth().toString().padStart(2,0)
	const day = nDate.getDay().toString().padStart(2,0)
	return year + '-' + month + '-' + day
})

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
