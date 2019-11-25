https://javascript.info/promise-basics

A Promise object serves as a link between the executor (the “producing code” ) and the consuming functions , which 
will receive the result or error. Consuming functions can be registered (subscribed) using methods 
.then, .catch and .finally.

The most important, fundamental one is .then
The first argument of .then is a function that runs when the promise is resolved, and **receives the result**.
The second argument of .then is a function that runs when the promise is rejected, and **receives the error**.

promise.then(
  function(result) { /* handle a successful result */ },
  function(error) { /* handle an error */ }
);



/* here’s a reaction to a successfully resolved promise: */
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise.then(
  result => alert(result), // shows "done!" after 1 second
  error => alert(error) // doesn't run
);

/*  And in the case of a rejection – the second one:  */
let promise22 = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject runs the second function in .then
promise22.then(
  result => alert(result), // doesn't run
  error => alert(error) // shows "Error: Whoops!" after 1 second
);



/*If we’re interested only in successful completions, then we can provide only one function argument to .then: */
let promise = new Promise(resolve => {
  setTimeout(() => resolve("done!"), 1000);
});

promise.then(alert); // shows "done!" after 1 second (note that "done" result will be passed on to alert())---alert("done")
//same as 
promise.then(
  result => alert(result)
)


/* If we’re interested only in errors, then we can use null as the first argument: .then(null, errorHandlingFunction). Or we can use 
.catch(errorHandlingFunction), which is exactly the same: */
                let promise = new Promise((resolve, reject) => {
                  setTimeout(() => reject(new Error("Whoops!")), 1000);
                });

                // .catch(f) is the same as promise.then(null, f)
                promise.catch(alert); // shows "Error: Whoops!" after 1 second
                
The call .catch(f) is a complete analog of .then(null, f), it’s just a shorthand.





