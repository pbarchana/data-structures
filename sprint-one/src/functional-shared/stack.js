var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.length = 0; // Hint: set an initial value here

  // Implement the methods below
  instance.size = stackMethods.size;
  
  return instance;
};


var stackMethods = { 
/*	var push = function(value){
    	length++;
    	storage[length] = value;
  	};

	var pop = function(){
		if (length <= 0) {
		  length = 0;
		  return undefined;
		}
		var item = storage[length];
		delete storage[length];
		length-- ;
		return item;
	};
*/

  	size : function(){
   		console.log(this);
   		return this.length;
  	}

};
