var Queue = function() {
  // Hey! Copy your code from src/prototypal/queue.js and paste it here

  // Use an object with numeric keys to store values
  this.storage = {};
  this.qStart = 0;
  this.qEnd = 0;
};

Queue.prototype.enqueue = function(value){
    this.storage[this.qEnd++] = value;
};

Queue.prototype.dequeue = function(){
    if(this.size() > 0) {
      var item = this.storage[this.qStart++];
      delete this.storage[this.qStart-1];
      return item;
    }
};

Queue.prototype.size = function(){
    return this.qEnd - this.qStart;
};

