


Function scope:
In JavaScript, we have something different called function scope. In function scope, variables live within functions. 
Any variables you create with the keyword var are local to the function that they were created in.
A variable you create in a parent function lives also in the child function as well. 

function myDog() {
  var dogName = 'Fido';
  console.log(dogName + ' says woof');
  }

myDog(); //everything fine
console.log(dogName) //erro! it's defined in local scope

//Let's see what happens for nested function
function myDog() {
  var dogName = 'Fido';
  function otherDog() {
    console.log(dogName + ' says woof'); //even though dogName is not defined in 'otherDog()' it searched in the parent function and got it
   }
   otherDog();
  }

myDog()


/*   GLOBAL variables. */
function myDog() {
  dogName = 'Fido';
  console.log(dogName + ' says woof');
  }

myDog(); //everything fine
console.log(dogName) //no erro! dogName becomes a global var!!!


/*  Hoisting  */
 Now, another thing that's very dangerous in JavaScript is that variable definitions are hoisted.
Remember, JavaScript is a scripted language, and, as such, it has to be processed by a browser. 
During this browser processing phase, JavaScript actually rearranges your variable declarations and moves them
to the top of their functional scope. That means that variables can actually exist before you use them. 





