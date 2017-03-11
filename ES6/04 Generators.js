JavaScript provides a number of ways of iterating over a collection, from simple for loops to map() and filter(). Iterators 
and Generators bring the concept of iteration directly into the core language and provide a mechanism for customizing the 
behavior of for...of loops.

While custom iterators are a useful tool, their creation requires careful programming due to the need to explicitly maintain 
their internal state. Generators provide a powerful alternative: they allow you to define an iterative algorithm by writing a 
single function which can maintain its own state.

A generator is a special type of function that works as a factory for iterators. A function becomes a generator if it contains 
one or more yield expressions and if it uses the function* syntax.

    funcion *process() { //function* process is also ok
      yield 8000;
      yield 8001;
    }
    let it = process(); //returned value is an iterator
    console.log(it.next()); //{done: false, value: 8000} and it is now pointing to next value
    it.next()
    consoel.log(it.next()); //{done; true, value: undefined} i.e the iterator is now exhausted

//Above are very simple, but most of the time there is some process going on in generators

    function* idMaker() {
      var index = 0;
      while(true)
        yield index++;
    }

    var gen = idMaker();

    console.log(gen.next().value); // 0
    console.log(gen.next().value); // 1
    console.log(gen.next().value); // 2
    // ...
    
/*  Generators in Loops */
function *process() {
  nextId = 8000;
  
  while(true) {
    yeild(nextId++);
  }
}

for (let id of process()) {
  if(id > 8003) break;
  console.log(id);
}
