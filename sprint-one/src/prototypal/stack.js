var makeStack = function() {
  // Hey! Copy your code from src/functional-shared/stack.js and paste it here

var instance = Object.create(stackMethods);

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.length = 0; // Hint: set an initial value here

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
