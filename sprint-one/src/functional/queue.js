var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var qStart = 0;
  var qEnd = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[qEnd++] = value;
  };

  instance.dequeue = function(){
    if(instance.size() > 0) {
      var item = storage[qStart++];
      delete storage[qStart-1];
      return item;
    }
  };

  instance.size = function(){
    return qEnd - qStart;
  };

  return instance;
};
