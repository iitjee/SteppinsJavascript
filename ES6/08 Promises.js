 help us deal with asynchronous behavior in JavaScript. When something is 
asynchronous it means that some sort of weighting is going on. There's a delay 
between when we ask for something and when we receive it. To create a promise, 
  I'm going to create a function called delay. And what delay is going to do is 
it's going to return a new promise. 


const delay = seconds => {
  return new Promise(resolve)
}

 Now, this new promise is going to take in a very important argument, which is resolve. So this is what's going to occur whenever the promise resolves, whenever it is successful. And in this case, we're going to set a timeout here
