export default {
	myVar1: [],
	myVar2: {},
	myFun1: async () => {
		
		appsmith.geolocation.watchPosition()
		appsmith.geolocation.watchPosition((s)=>{
			showAlert('hi')
		}).catch((error)=>{console.log(error.message)})

		//return Api2.data.users

		// storeValue('aba','abab1',true)
		// console.log(appsmith.store.aba)
	//	return Api3.run()
	},
	myFun2: async () => {
	//	return Api3.run()
	this.myFun1.call().then(()=>{showAlert('test')})
	},
	function2: async () => {
		
		return Api1.run()
			.then((res) => {
			console.debug(res)
		})
			.catch(() => {
		    console.error("can't run query")
				console.log('Directly from query',  get_defectdata.data.results)
		})
	},
	
	
}