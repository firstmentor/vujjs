var myapp = new Vue({
	el:"#app",
	data:{
		counter :0
	},
	methods:{
		// increment:function(){
		// 	this.counter++;
		// },
		// decrement : function(){
		// 	this.counter--;
		// }
		increment:function(inc){
			this.counter = this.counter+ inc;
		},
		decrement : function(desc){
			this.counter = this.counter- desc;
		},
	}



});