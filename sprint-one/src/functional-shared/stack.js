var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.length = 0; // Hint: set an initial value here

  // Implement the methods below
  instance.size = stackMethods.size;
  instance.push = stackMethods.push;
  instance.pop = stackMethods.pop;

  return instance;
};


var stackMethods = { 
	push : function(value){
    	this.length++;
    	this.storage[this.length] = value;
  	},

	pop : function(){
		if (this.length <= 0) {
		  this.length = 0;
		  return undefined;
		}
		var item = this.storage[this.length];
		delete this.storage[this.length];
		this.length-- ;
		return item;
	},


  	size : function(){
   		
   		return this.length;
  	}

};
