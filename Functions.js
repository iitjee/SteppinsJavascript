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
  
  
  
  



*/

/*  Anonymous functions */
var sum = function (a, b) { //now sum is name of the function object
  return a+b;
  }(); 
//Note that parans at end => function is called at time of variable initialization
//Parans can be removed if you don't want to call it at that time
//now to call the function, use sum(2, 2)


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


