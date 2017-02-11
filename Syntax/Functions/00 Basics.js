/*



*/


//Traditional Declarations
function plus(a, b) {
  return a+b;
  }
plus(2, 2)
  
//Function Literals aka Definition Expressions
var plus = function(a, b) {
  return a+b;
  }
plus(2, 2)

//Immediate execution with Function Literals
var plus = function(a, b) {
  return a+b;
  }(2, 2);
  
//Function Literals aka Definition Expressions are very useful when a function is only needed once, or if you want to execute something immediately.
  
  /*  return  */
  //You can return a series of statements by using parans i.e you are calling the return function
    return (
      console.log(a+b);
      console.log(a-b);
      )
  
  /*  Invoking Functions  */
  Traditional Invocation: plus(3, 4);
  
  * Every function receives `this` and `arguments` parameters
  * For methods: `this` is tied to the class instance it belongs to
  * For functions: `this` is tied to the global object. (methods that are not defined in class are functions. asat!)
  
  
  With traditional invocation the this parameter gets a copy of the global object. 
  And that can be a little bit weird, bad, and create some problems. 
  
  Now, what if you wanted to have three numbers or an infinite amount of numbers? You can't really create a certain 
  amount of variables if you don't know how many there are. But the arguments array lets you do that.
  
  
