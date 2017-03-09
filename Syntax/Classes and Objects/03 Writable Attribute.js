'use strict'

var cat = {
  name: {first: 'Fluffy', last: 'kittie'},
  color: 'White'
}

Object.defineProperty(cat, 'color', {writable: false});
cat.color = "Pink" //error!! (the error will be SHOWN only in strict mode. else it will silently fail)

Object.define Property(cat, 'name', {writable: false});
cat.name.first = 'Scratchy' //possible
//Note that the object is read-only i.e the pointer pointing to the object is immutable but the value it's pointing to can mutate

//However, to make the contents also read-only
Object.freeze(cat.name) //use freeze method also 
