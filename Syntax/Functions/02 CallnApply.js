/* Last invocation pattern: Indirect invocation */

With Call and Apply, you can define the value of the this argument. Now if you remember from traditional function
declarations, one of the problems I mentioned is that the this parameter is bound to the global object.

- An indirect invocation
- Define the value of this argument
- Control: this and arguments
- "Call" passes a value and "APply"  is just like "Call" except that it expect an array instead of a single value

myFn.call(....)
myFn.apply(....)

a function as you know is not just name and some executing code.
in js, when you create a function, it also has three more "sub functions" --- call(), apply(), bind()

----> https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb

/* varargs: */
//we will use the 'arguments' parameter
* arguments[4]
* arguments.length
* we can loop through arguments
* we can't use all array methods


var plus = function() {
  var sum=0;
  for(var i=0; i<arguments.length; ++i) sum+=arguments[i];
  return sum
  }

/*  Return values */
if return is not used in the function, it'll return 'undefined'











