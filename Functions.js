/**
  * <script src="script.js"> </script>
  * No 'var' is required before arguments!
  * myFunction is function object whereas myFunction() is the return value.
  * When a function is stored as a property of an object, we call it a method
  
  * Every function has `this` adn `arguments` parameters
  * For methods: `this` is tied to the class instance it belongs to
  * For functions: `this` is tied to the global object.
  
  * Note that there's no runtime error when the no. of args and no. of params don't match
  *If args>params => extra ones are ignored
  *If params<args => `undefined` is subsituted
  
  
  
  MyFunc: function() {
    ...
  }
  is same as 
  MyFunc() {
    ...
  }



*/

/*  Anonymous functions */
var sum = function (a, b) { //now sum is name of the function object
  return a+b;
  }(); 
//Note that parans at end => function is called at time of variable initialization
//Parans can be removed if you don't want to call it at that time
//now to call the function, use sum(2, 2)

//var f1 = function() {} vs function f2() = {}  see http://stackoverflow.com/questions/336859/javascript-function-declaration-syntax-var-fn-function-vs-function-fn
//f1 is function expression whereas f2 is function decalration
//(hoisting) f1 cannot be called before it is defined where as f2 can be
//Call .toString() on both to see the difference. This is significant in some cases where you want to get the name of a function programmatically.



/*  Four ways of invoking functions (Invocation Patterns) */
- Functions
- Methods
- Constructors
- Call and Apply Methods

Besides the usual parameters, every function receives two additional parameters called `this` and `arguments`.
(check them by loggin them inside body)

For methods: `this` is tied to the class instance it belongs to
For functions: `this` is tied to the global object. (which is a mistke in language in design; see workaround using `that` in Douglas)


var myObject = {
  value: 0,
  increment: function(inc) {
    this.value += typeof inc ==='number'?inc:1; //note that this is tied to myObject instance.
    //also see how 1 is taken as default value when no parameter is passed to the method.
  };
}    


/* Revealing Module patterns */
var createWorker = function() {
 var task1 = function() {console.log("task1");
 var task2 = function() {console.log("task2");
 
 return {
  job1: task1, 
  job2: task2
  }; //you can rename task1 as job1 and put job1: job1 also
};

var worker = createWorker();
worker.job1();
worker.job2();
worker.task1(); //doesn't work
//problem with this is that we are creating global vars like createWorker. Let's see how we can avoid them
//we know glbal vars are bad in general but in JS, they are downright evil. because js is dynamically typed 
//language we can override them very easily


//so how can we do that?
//we can encapsulate the whole function definition as well as calling code into one single function and call it.
var program = function() {
......
}
program();
//now number of glbal var has dropped to one, can we drop to zero? Yes

(function() {.......}()) //this anonymous style function completely eliminates global vars
//note initial and final parans. we need to put it for JS naming standards
//A lot of libs use IFFEs to control the scope of teh vars to build modules to provide encapsuation


