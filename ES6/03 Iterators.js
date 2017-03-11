JavaScript provides a number of ways of iterating over a collection, from simple for loops to map() and filter(). Iterators 
and Generators bring the concept of iteration directly into the core language and provide a mechanism for customizing the 
behavior of for...of loops.

In JavaScript an iterator is an object that provides a next() method which returns the next item in the sequence. This method 
returns an object with two properties: done and value.


/*  Quickest way to make a simple iterator  */
    let ids = [23, 24, 25];
    let it = ids[Symbol.iterator](); //Symbol.iterator will take care of iterating stuff
    it.next() //Once created, an iterator object can be used explicitly by repeatedly calling next().
    console.log(it.next());
    it.next();
    it.next(); //by now our iterator is exhausted


/*  Making your own iterators   */
    function makeIterator(array) { //this is how iterators work under the hool
        var nextIndex = 0;

        return {
           next: function() { //you can also write `next() {...}`
               return nextIndex < array.length ? //you can write your custom logic also, but return {value, done}
                   {value: array[nextIndex++], done: false} :
                   {done: true};
           }
        };
    }

//Once initialized, the next() method can be called to access key-value pairs from the object in turn:
      var it = makeIterator(['la', 'yo', 'ya']);
      it.next() //value:'la', done: false
      it.next() // value:'yo' done: false
      console.log(it.next().value); // value: 'ya' done: false
      console.log(it.next().done);  // done: true value: undefined
'done' is set to true when the array iterator is completely exhausted. and then the value is set to undefined.




//Spread operator also use iterators
let ids = [4000, 4001, 4002];

function process(id1, id2, id3) {
    console.log(id3);
}

process(...ids);  //process expects three ids and we spread the array to three variables





/*   Iterables  */
An object is iterable if it defines its iteration behavior, such as what values are looped over in a for..of construct. Some 
built-in types, such as Array or Map, have a default iteration behavior, while other types (such as Object) do not.

In order to be iterable, an object must implement the @@iterator method, meaning that the object (or one of the objects up its 
prototype chain) must have a property with a 'Symbol.iterator' key:


//User-defined iterables
We can make our own iterables like this:
            var myIterable = {};
            myIterable[Symbol.iterator] = function* () {
                yield 1;
                yield 2;
                yield 3;
            };

            for (let value of myIterable) { 
                console.log(value); 
            }
            // 1
            // 2
            // 3

            or

            [...myIterable]; // [1, 2, 3]




















