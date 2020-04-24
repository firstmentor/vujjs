Vue.component("owt",{
	template: "<div><p>this is called pninfosys name: {{name}}, author: {{ author}}, Method running: {{ method1()}} ,computed :{{computed1}}</p> <p>mohit jain</p></div>",
	data: function(){
		return {
			name:"pninfosys",
			author : "vikas"
		}
	},
	methods:{
		method1 :function(){
			return "this is vue component";
		}
	},
	computed:{
		computed1:function(){
			return "simple message";
		}
	}
});



var myapp2 = new Vue({
	el: "#my-app-2",
	data:{
		author: "vikas"
	},
	methods:{
		secondApp: function(){
			return "This is second instance";
		}
		},
	computed:{
		fullname :function(){
		 return this.author;
			}
		}


	


});
var myapp1 = new Vue({
	el: "#my-app-1",
	data:{
		title: "pninfosys",
		author :myapp2.author
	},
	methods:{
		secondApp:function(){
			return "This is first instance";

		},
		thirdAppFn : function(){
			return myapp2.secondApp()
		},
		accessComputedApp2:function(){
			return myapp2.fullname;
		}
		
	}


});