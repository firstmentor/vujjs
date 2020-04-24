var myapp = new Vue({
	el:"#app",
	data:{
		x :0,
		y :0
	},
	methods:{
		movefunction :function(event){
			//console.log(event);
			this.x =event.offsetX;
			this.y =event.offsetY;

		},
		overfunction: function(){
			console.log("this is message due to mouseover");
		},
		overfunction :function(){
			console.log("this is message due to mouseout");
		}
		
	}



});