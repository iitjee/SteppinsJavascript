
Arrays are mutable and no need to give size beforehand

var myArr = [];
myArr[1] = "hi";
myArr[2] = 3;



METHODS:
--------
  myArr.push(myNewEl);
 myArr.slice(-1)[0]; //gives last element

  
var reverseArray = myArr.reverse()
var joinedString = fruits.join(); //default joiner is comma
var joinedString = fruits.join("--"); //joiner is --    to use spl chars, escape with \
var sortedArray  = myArr.sort()


//arrays are assigned by reference, so be careful!!
const foo = [1, 2];
const bar = foo;

bar[0] = 9;
console.log(foo[0], bar[0]); // => 9, 9




