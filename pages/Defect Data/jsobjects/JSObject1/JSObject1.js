export default {
chart : () => {
	const opendefect = Opendefect.run()
	var Opendefectcount = opendefect.count
   ( Opendefectcount)
} ,
	
func1:async ()=>{
	return appsmith.geolocation.watchPosition().then(()=>{showAlert("started watch")})
	.catch((e)=>{console.log(e.error.message)})	
	
	// await appsmith.geolocation.watchPosition()
	// //return appsmith.geolocation.currentPosition.coords
	// const anan =  Object.keys( appsmith.geolocation.currentPosition.coords)
	 // console.log(anan) 
	//return Api2.run()
},
	
Getemployee :   () =>{
		return fetch('https://randomuser.me/api/').then(res=>res.json()).then((res2)=>{
			return res2.results
		})
	},
	

	myFun11: async() => {
	try{
     await Api2.run()
		if(appsmith.user.email =''){showAlert("test")}
  }catch(error){
      showAlert(error.message + ' make my day')
	 return[{}]
  }
	},
}