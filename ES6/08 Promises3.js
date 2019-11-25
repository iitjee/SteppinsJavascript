	/*
  always remember this:
  
 When the executor obtains the result, be it soon or late – doesn’t matter, it should call one of these callbacks:
resolve(value) — if the job finished successfully, with result value.
reject(error) — if an error occurred, error is the error object.
  */


// we have a sequence of asynchronous tasks to be done one after another. For instance, loading scripts. How can we code it well?
//PROMISE CHAINING
  
  
  const delay = seconds => {
			return new Promise((resolve, reject) => {
				if(typeof seconds !== 'number') {
					reject(new Error('Argument seconds must be a number'));
				}
				setTimeout(
					() => resolve(`${seconds} second delay is up`),  
					seconds * 1000
				);
			});
		};

		console.log("zero seconds");
		delay("10 Minutes").then(msg => msg.toUpperCase())
				.then(msg => `${msg}!!!!!!`)
				.then(msg => console.log(msg));
		delay(2).then(msg => msg.toUpperCase())
				.then(msg => `${msg}!!!!!!`)
				.then(msg => console.log(msg));		
		


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

});

The idea is that the result is passed through the chain of .then handlers.
The whole thing works, because a call to promise.then returns a promise, so that we can call the next .then on it.
When a handler returns a value, it becomes the result of that promise, so the next .then is called with it.
A classic newbie error: technically we can also add many .then to a single promise. This is not chaining.

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});


What we did here is just several handlers to one promise. They don’t pass the result to each other, instead they process it independently.
(read https://javascript.info/promise-chaining )
