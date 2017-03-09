'use strict'

There are four ways to create objects:
1. Object Literals
2. Constructor Functions
3. Object.create (very raw)
4. ES6 Classes


class Cat {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  
  speak() {
    display('meow')
  }
}

var myCat = new Cat('Fluffy', 'White');
display(myCat);

//This is a new way of creating classes, but under-the-hood they are created using the same 'object' and 'prototype' stuff
//it's just syntactic sugar! (Yummy!!)
