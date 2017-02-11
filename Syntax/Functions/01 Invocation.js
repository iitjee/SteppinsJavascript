In addition to the traditional way of calling functions, we can also invoke them as methods.

var myObject = {
    value: 0,
    increment: function(inc) {
      this.value += typeof inc === 'number' ? inc:1
    };
//note how `increment` method is being defined

When a function's not the property of an object, then it's invoked as a function.
  * Every function has `this` and `arguments` parameters
  * For methods: `this` is tied to the class instance it belongs to
  * For functions: `this` is tied to the global object.
  
  
  One of the big advantages of calling functions as methods.
  The this attribute gets the value of the object, which is really useful. 
  
  And the binding of this is only going to happen at invocation time. So the this attribute is not going to be bound 
  to that object until we invoke the method. Now that actually makes the function highly reusable. So binding functions
  to objects and using them as methods is a great programming technique. 
  
  
  
  /* 3) Invoking instances through the constructor: Constructor Invocation Pattern   */
  
        var Dog = function() { //Dog is like a class and this itself is the constructor also.
        //Also note that unlike normal methods/functions, we gave it a cap letter which helps
        //us distinguish it's a different type :)
          var name, breed;
          return console.dir(this);
        }

      firstDog = new Dog; //new creates a new instance of the object
      firstDog.name = "Rover";
      firstDog.breed = "Doberman";

      secondDog = new Dog;
      secondDog.name = "Fluffy";
      secondDog.breed = "Poodle"

//Expanding functionality through prototype
we saw how we can create our own objects using functions. The functions themselves become a constructor. 
What if we wanted to expand the functionality of a constructor by adding say a method. We can do that through
that constructor's prototype object.

JavaScript is known as a prototypal inheritance language. That means that you can base the functionality of an object
on another object. Not every object can be based on another object, and as a matter of fact, every object in JavaScript
is based on a different object.


var Dog = function() {
  var name, breed;
}
firstDog = new Dog;
firstDog.name = "Rover";
firstDog.breed = "Doberman";

 So now, what if I want to add some functionality to my Dog object which is shared by other classes(objects) as well.
 say the functionality is to 'speak'
 
      var speak = function(saywhat) {
        console.log(saywhat);
      }
      
      var Dog = function() {
        var name, breed;
      }

     var Cat = function() {
      var name, breed;
    }

    Dog.prototype.speak = speak; //So what that does, is give the dog the ability to speak, or the method called speak.
    Cat.prototype.speak = speak;

    firstDog = new Dog;
    firstDog.name = "Rover";
    firstDog.breed = "Doberman";
    firstDog.speak('woof');

    firstCat = new Cat;
    firstCat.name = "Sniggles";
    firstCat.breed = "Manx";
    firstCat.speak('meow');
    
    
    
    
    
    
    
  
  
  
