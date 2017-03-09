/* Last invocation pattern: Indirect invocation */

With Call and Apply, you can define the value of the this argument. Now if you remember from traditional function
declarations, one of the problems I mentioned is that the this parameter is bound to the global object.

unclear: 'Understanding-call-apply-invocation/148137/158397-4'



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











