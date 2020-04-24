var myapp = new Vue({
	el: "#app",
	data :{

		firstname: "",
		lastname: "",
		meter : "",
		maths: 0,
		science: 0,
		english: 0,


	},
	methods: {
		runme: function(){
			console.log("this is first method");
			return "I am method"
		}
		
	},
	computed:{
		getFullname :function(){
			return this.firstname+" "+this.lastname;
		},
	    convertToCentimeter: function(){
	    	return this.meter*100; //1m = 100cm

	    },
	    totalSubjectMarks: function(){
	    	return parseInt(this.maths) + parseInt(this.english) + parseInt(this.science);
	    }	
	}


});