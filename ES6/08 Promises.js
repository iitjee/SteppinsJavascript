 help us deal with asynchronous behavior in JavaScript. When something is 
asynchronous it means that some sort of weighting is going on. There's a delay 
between when we ask for something and when we receive it. To create a promise, 
  I'm going to create a function called delay. And what delay is going to do is 
it's going to return a new promise. 


const delay = seconds => {
  return new Promise(resolve)
}

 Now, this new promise is going to take in a very important argument, which is resolve. 
 So this is what's going to occur whenever the promise resolves, whenever it is successful.
And in this case, we're going to set a timeout here




 const delay = seconds => {
  return new Promise(resolve => {
      setTimeout(resolve, seconds*1000)
  });
}

		console.log("zero seconds");
        delay(1).then(() => console.log("1 second"));
        delay(3).then(() => console.log('3 seconds'))

setTimeout is going to obviously take in two things: it's going to take in a callback function, which 
in this case is resolve and then the amount of timeout

 Then() is going to fire after the promise resolves. So here we're going to pass in a callback functio

 Now instead of just passing in resolve,  I'm going to pass in an actual callback that is going to return resolve

 
 const delay = seconds => {
  return new Promise(resolve => {
      setTimeout(() => resolve(`${seconds} delay here!! yay!!`)), 
      seconds*1000)
  });
}


 And then what we can do here is instead of passing in this callback function without any arguments,
  we'll pass in message, and then we'll say console.log message

  delay(1).then(msgString => console.log(msgString));
  delay(3).then(msgString => console.log(msgString))
