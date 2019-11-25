A “producing code” that does something and takes time. For instance, a code 
that loads the data over a network. A “consuming code” that wants the result 
of the “producing code” once it’s ready. Many functions may need that result. 
These are the “fans”.

A promise is a special JavaScript object that links the “producing code” and 
the “consuming code” together. The “producing code” takes whatever time it 
needs to produce the promised result, and the “promise” makes that result 
available to all of the subscribed code when it’s ready.

The constructor syntax for a promise object is:
                let promise = new Promise(function(resolve, reject) {
                  // executor (the producing code, "singer")
                });
The function passed to new Promise is called the executor. When new Promise 
is created, it runs automatically. It contains the producing code, that 
should eventually produce a result. 


//es6 version
                let promise = new Promise((resolve, reject) => {
                  // executor (the producing code, "singer")
                });
                
Its arguments resolve and reject are callbacks(=>functions) provided by 
JavaScript itself. Our code is placed only inside the executor.
When the executor obtains the result, be it soon or late – doesn’t matter, it 
should call one of these callbacks:
:::::resolve(value) — if the job finished successfully, with result value.
:::::reject(error) — if an error occurred, error is the error object.

So to recapitulate(summarize): the executor runs automatically, it should do 
a job and then call either resolve or reject.

btw, "new Promise" returns a promise object


an example of a promise constructor and a simple executor function with “producing code” that takes time 
                  let promise = new Promise(function(resolve, reject) {
                    // the function is executed automatically when the promise is constructed

                    // after 1 second signal that the job is done with the result "done"
                    setTimeout(() => resolve("done"), 1000);
                  });
1. The executor is called automatically and immediately (by new Promise).
2. The executor receives two arguments: resolve and reject — these functions are pre-defined by the JavaScript engine. So we don’t 
need to create them. We should only call one of them when ready.

After one second of “processing” the executor calls resolve("done") to produce the result. This changes the state of the promise 
object: from state:"pending" to state:"fulfilled"
(google about promise object's state property -- ntn much to see)
That was an example of a successful job completion, a “fulfilled promise”.


now an example of the executor rejecting the promise with an error:
                                               let promise = new Promise(function(resolve, reject) {
                                                // after 1 second signal that the job is finished with an error
                                                setTimeout(() => reject(new Error("Whoops!")), 1000);
                                              });
The call to reject(...) moves the promise object to "rejected" state:
state:'pending' --------------> state:"rejected"








To summarize, the executor should do a job (something that takes time usually) and then call resolve or reject to change the state of 
the corresponding promise object.

A promise that is either resolved or rejected is called “settled”, as opposed to an initially “pending” promise.
note: The executor should call only one resolve or one reject. Any state change is final.
All further calls of resolve and reject are ignored.The idea is that a job done by the executor may have only one result or an error.





