JavaScript provides a number of ways of iterating over a collection, from simple for loops to map() and filter(). Iterators 
and Generators bring the concept of iteration directly into the core language and provide a mechanism for customizing the 
behavior of for...of loops.

In JavaScript an iterator is an object that provides a next() method which returns the next item in the sequence. This method 
returns an object with two properties: done and value.

Once created, an iterator object can be used explicitly by repeatedly calling next().
    function makeIterator(array) {
        var nextIndex = 0;

        return {
           next: function() {
               return nextIndex < array.length ?
                   {value: array[nextIndex++], done: false} :
                   {done: true};
           }
        };
    }
Once initialized, the next() method can be called to access key-value pairs from the object in turn:

      var it = makeIterator(['yo', 'ya']);
      console.log(it.next().value); // 'yo'
      console.log(it.next().value); // 'ya'
      console.log(it.next().done);  // true


























