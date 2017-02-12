



Namespacing lets you provide encapsulation

  var ray = (function() {
    var privateVar;
    
    return { //returns an object
      speak: function() {
        console.log('hello');
      }
    }
  })
  
// one of the reasons it's nice to use a object, because I can pass the whole thing into my function, and
// then parse each of the different values out.

var ray = (function() {
  return {
    speak: function() { 
      console.log(arguments[0].say);
    }
  }
}

//while calling, 
ray.speak({say:'howdy'});

//But if you forget to give the propery while calling foreg,
ray.speak() //you called without argument => ERROR!!
//We'll use a trick called short-circuit evaluation

      var myArguments = arguments[0] || '';
      console.log(myArguments.say); //this will make sure somwething is there in arguments
      //though we get 'undefined' in console, better than ERROR isn't it? :)
      
      
//you can improve it by
      var myArguments = arguments[0] || '';
      var statement = myArguments.say || 'hello'; //'hello' will now act as a default argument
      console.log(statement);
      
//that might clutter. so we'll make a DEFAULTS object at a higher scop
  var = (function() {
    var DEFAULTS = {
      say: 'hello';
    }
    return {
    speak: function() { //nested function type
      var myArguments = arguments[0] || '';
      var statement = myArguments.say || DEFAULTS.say; 
      console.log(statement);
    }
  }
}
// It's a good idea to set up defaults for your modules at the top of your objects. 
//They're going to be easier to find there, and can make your methods useful even if someone forgets to set them.



//Chaining Module method calls         
          var ray = (function() {
          var DEFAULTS = {
            say: 'hello',
            speed: 'normal'
          }

          return {
            speak: function() {
              var myArguments = arguments[0] || '';
              var statement = myArguments.say || DEFAULTS.say;
              console.log(statement);
              return this;
            },
            run : function() {
              var myArguments = arguments[0] || '';
              var running = myArguments.speed || DEFAULTS.speed;
              console.log('running...'+ running);
              return this;
            }
          };
        })();
//calling
ray.speak({ say: 'howdy' }).run().speak({ say: 'run faster' }).run({speed: 'faster'});


