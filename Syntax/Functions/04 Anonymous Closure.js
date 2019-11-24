var iKnow = function kung (){
  console.log("hi");
  }
  
kung() //fail bcos kung is not defined in global scope
iKnow() //okay


var iKnow = function kung (){
  console.log("hi");
  }()
  //this has converted the function declaration into function expression
  
  //^ if the above function is called, the moment it's defined what's the point of it having a name? Yep!
var iKnow = function  (){
  console.log("hi");
  }()
//now this has become an anonymous function
//****************however, you require 'kung' if you are doing something RECURSIVE****************

//You can even remove the variable declaration
(function() {
  console.log('foo');
})();
//this is the anonymous closure
//this way any variables created inside this function is not accessible by outside
//this is a good way to protect => 'clos'ure


