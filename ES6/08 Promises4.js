https://javascript.info/promise-chaining


Returning promises in .then handlers!
A handler may create and return a promise.
(of .then(handler) ) 
In that case further handlers wait until it settles, and then get its result.

                                          new Promise(function(resolve, reject) {
                                            setTimeout(() => resolve(1), 1000);
                                          }).then(function(result) {

                                            alert(result); // 1

                                            return new Promise((resolve, reject) => { // (*)
                                              setTimeout(() => resolve(result * 2), 1000);
                                            });

                                          }).then(function(result) { // (**)

                                            alert(result); // 2

                                            return new Promise((resolve, reject) => {
                                              setTimeout(() => resolve(result * 2), 1000);
                                            });

                                          }).then(function(result) {

                                            alert(result); // 4

                                          });
                                          
Here the first .then shows 1 and returns new Promise(…) in the line (*). After one second it resolves, and the result (the argument of 
resolve, here it’s result * 2) is passed on to handler of the second .then. That handler is in the line (**), it shows 2 and does the 
same thing. So the output is the same as in the previous example: 1 → 2 → 4 (code is given below), but now with 1 second delay between 
alert calls. Returning promises allows us to build chains of asynchronous actions.

/* already seen in previous slide... reproduced for clarity */
new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000); // (*)
}).then(function(result) { // (**)

  alert(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  alert(result); // 2
  return result * 2;

}).then(function(result) {

  alert(result); // 4
  return result * 2;
  
  
  
  
  
  To SUMMARIZE:
  in .then() handler anyway return statement will be there
  and subsequent .then() receive value from the previous .then
  
  but if .then() returns a promise altogether instead of somevalue
  then the resolved value of that returned promised will be passed on to the next .then() handler!
    as simple as that!

});
