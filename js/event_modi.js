var myapp = new Vue({
	el:"#app",
	data:{
		counter:0
	},
	methods:{
		incrementby1 :function(){
			this.counter++;
			

		},
		submitClick: function(){
			console.log("this is message submitClick");
		},
		parentClass :function(){
			console.log("parentClass...");
		},
		btnClick :function(){
			console.log("Button Click...");
		}
		
	}



});