 help us deal with asynchronous behavior in JavaScript. When something is 
asynchronous it means that some sort of weighting is going on. There's a delay 
between when we ask for something and when we receive it. To create a promise, 
  I'm going to create a function called delay. And what delay is going to do is 
it's going to return a new promise. 


const delay = seconds => {
  return new Promise(resolve........bodyStillThere....)
}

 Now, this new promise is going to take in a very important argument, which is resolve. 
 So this is what's going to occur whenever the promise resolves, whenever it is successful.
And in this case, we're going to set a timeout here


 const delay = seconds => {
  return new Promise(function(resolve) {//'reject' argument is omitted. function(resolve, reject)
      setTimeout(resolve, seconds*1000) 
  });
}

/*
setTimeout is going to take in two things:
-  a callback function
-  amount of timeout
*/

//es6 way
 const delay = seconds => {
  return new Promise(resolve => {
      setTimeout(resolve, seconds*1000)
  });
}

	
        delay(1).then(() => console.log("1 second"));
/* what happens?
- delay function is called and it returns a promise
- new Promise => immediately the executor(body) begins to run
- after a delay of 1000, setTimeout's callback which is resolve() is invoked
- as it's invoked, the promiseObject's state property goes from "pending" to "fulfilled"
- note that we called resolve without any argument => no "value" to pass to then() function
- not surprisingly, then therefore doesn't have any arguments now
*/

/*
(When the executor obtains the result, be it soon or late – doesn’t matter, it should call one of these callbacks:

resolve(value) — if the job finished successfully, with result value.
reject(error) — if an error occurred, error is the error object.)
*/

 Now instead of just passing in resolve,  I'm going to pass in an actual callback that is going to return resolve

 
 const delay = seconds => {
  return new Promise(resolve => { //es6 of function (resolve) {
      setTimeout(() => resolve(`${seconds} delay here!! yay!!`)), seconds*1000)
  });
}
//the entire first argument "() => resolve(`${seconds} delay here!! yay!!`))" is callback of setTimeout
//this time, we passed a value to resolve() - that template string and this will be sent to .then()

  delay(1).then(msgString => console.log(msgString));
  delay(3).then(msgString => console.log(msgString))

//not surprisingly, .then() expects a value from promiseObj's resolve() this time


			delay(2).then(msg => msg.toUpperCase())
				.then(msg => `${msg}!!!!!!`)
				.then(msg => console.log(msg));

The then function is going to act kind of like an assembly line, where we're transforming our data in different stages. Everything has 
been going really well so far. All of our promises are resolving. But what happens when there's some sort of an error? Maybe our data 
doesn't load or something else goes wrong.
