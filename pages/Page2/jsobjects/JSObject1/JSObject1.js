export default {
	myVar1: [],
	myVar2: {},
	myFun1: async () => {

		try {

			await Api1.run()

		}
		catch(e){

			showAlert("hi")


		}
		//write code here
	},
	myFun2: async () => {
		setInterval(() => Api1.run(), 2000, 'auto_refresh');
		//use async-await or promises
	},
	run_loop: async (boolean) => {
		//if true is true then run auto_refresh
		if(boolean == true){
			return setInterval(() => Api1.run(), 2000, 'auto_refresh');
		}
		//if false then clear auto_refresh
		if(boolean == false){
			return clearInterval('auto_refresh');
		}
		//on page load execute this else part
		else{
			setInterval(() => Api1.run(), 2000, 'auto_refresh');
		}
	},
}