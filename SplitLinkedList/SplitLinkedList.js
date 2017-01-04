/*
Find the middle node of a linked list, if the linked list is of even length
return the the (length/2) + 1 node 

e.g. the linked list
1->3->5->2

returns a node with value 5.

if the list is empty, return null
*/

/*
READ BUT DO NOTHING
*/

var Node = function(value) {
  this.value = value;
  this.next = null;
}

var LinkedList = function() {
  this.head = null;
  this.tail = null;
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


//Your function here
LinkedList.prototype.findMiddle = function(linkedList) {
  var runnerOne = linkedList.head;
  var runnerTwo = linkedList.head;

  if (!linkedList.head) {
    return null;
  }

  while (runnerTwo && runnerTwo.value && runnerTwo.next) {
    runnerOne = runnerOne.next;
    runnerTwo = runnerTwo.next.next;
  }
  return runnerOne.value;
};


//don't worry about this
module.exports = LinkedList;