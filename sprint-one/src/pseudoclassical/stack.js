var Stack = function() {
  // Hey! Copy your code from src/prototypal/stack.js and paste it here

  // Use an object with numeric keys to store values
  this.storage = {};
  this.length = 0; // Hint: set an initial value here

};

Stack.prototype.push =function(value){
	this.length++;
	this.storage[this.length] = value;
};

Stack.prototype.pop = function(){
	if (this.length <= 0) {
	  this.length = 0;
	  return undefined;
	}
	var item = this.storage[this.length];
	delete this.storage[this.length];
	this.length-- ;
	return item;
};


Stack.prototype.size = function(){    	
	return this.length;
};
