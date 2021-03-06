/*
Given a linked list, determine whether or not it contains a loop, consider the following diagram

1->3->5->7
   ^     |
   |     v
   6<-8<-9

If you attempt to traverse this linked list you will never reach an end, 
write a function that correctly determines whether a linked list contains
such a loop.

Your function should return a boolean value
*/


var Node = function(value) {
  this.value = value;
  this.next = null;
}

var LinkedList = function() {
  this.head = null;
}

LinkedList.prototype.addToTail = function(value) {
  if (this.head === null) {
    var tmp = new Node(value);
    this.head = tmp;
    this.tail = tmp;
  } else {
    this.tail.next = new Node(value);
    this.tail = this.tail.next;
  }
};

LinkedList.prototype.hasLoop = function(linkedList) {
  var runnerOne = linkedList.head;
  var runnerTwo = linkedList.head;
  
  if(!linkedList.head) {
    return false;
  }

  while(runnerOne.value && runnerTwo.value) {
    runnerOne = runnerOne.next;
    runnerTwo = runnerTwo.next.next;

    if(runnerOne.value === runnerTwo.value) {
      return true;
    }
  }
  
  return false;
};


//ignore this
module.exports = LinkedList;