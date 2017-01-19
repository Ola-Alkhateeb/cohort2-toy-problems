/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
  this.tail = null ;
  this.head = null ;
};

//write methods here!

LinkedList.prototype.addToTail = function(n){
  if(this.tail === null){
    this.tail = makeNode(n) 
    this.head  = this.tail 
  }else {
    this.tail.next = makeNode(n) 
    this.tail  = this.tail.next 
  }

};

LinkedList.prototype.contains = function(target){
  var current  = this.head
  while(current){
    if(current.value === target){
      return true ;
    }
    current= current.next ;
  }
  return false 
};

LinkedList.prototype.removeHead = function() {
  var temp = this.head.value ; 
  this.head = this.head.next 
  return temp 

}


function makeNode (value){
  return {
    value : value, 
    next : null }
}
