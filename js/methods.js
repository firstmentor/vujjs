var myapp = new Vue({
		el:"#app",     //property
		data:{
			name: "pninfosys",
			city: "gwalior"
		},
		methods: {
			run :function(message,name){  //permetter pass
				return "I am running " +message+" name:  " +name;
			},
			welcome: function(dayTime){
				return "Good "+dayTime;
			},
			valueAccess: function(){
				return this.name+" "+this.city;
			}
		}


	});