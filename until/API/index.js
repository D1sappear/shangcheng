const BaseUrl = "http://localhost:8082"

export const myRequest = (option) => {
	return new Promise((resolve,reject) => {
		uni.request({
			url: BaseUrl + option.url,
			method: option.method || "GET",
			data: option.data || {},
			success: res => {
				console.log(res)
				if(res.data.status !== 0) {
					if(res.data.status !== 0) {
						return uni.showToast({
							title:"获取数据失败"
						})
					}
				}
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title: '请求借口失败'
				})
				reject(err)
			},
			complete: () => {}
		})
	})
}