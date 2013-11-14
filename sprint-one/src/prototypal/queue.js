var makeQueue = function() {
  // Hey! Copy your code from src/functional-shared/queue.js and paste it here

var instance = Object.create(queueMethods);

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.qStart = 0;
  instance.qEnd = 0;

  // Implement the methods below
  // instance.size = queueMethods.size;
  // instance.enqueue = queueMethods.enqueue;
  // instance.dequeue = queueMethods.dequeue;

  return instance;

};

var queueMethods = {
	enqueue : function(value){
    	this.storage[this.qEnd++] = value;
  	},

	dequeue : function(){
	    if(this.size() > 0) {
	      var item = this.storage[this.qStart++];
	      delete this.storage[this.qStart-1];
	      return item;
	    }
  	},

	size : function(){
    	return this.qEnd - this.qStart;
  	}
};

