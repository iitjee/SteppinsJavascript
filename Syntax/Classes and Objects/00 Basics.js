

/*  Bracket Notation  */
//gives you access to use non-valid names like say if they have spaces
    myObj['my name'] = 'iitjee'



/*  Using Object.create() to create JS objects  */
var cat = Object.create(Object.prototype,
{
    name: {
        value: 'Fluffy',
        enumerable: true,
        writable: true,
        configurable: true
    },
    color: {
        value: 'White',
        enumerable: true,
        writable: true,
        configurable: true
    }
});
//you don't need to mention true separately as they are the default values anyway! :)
    




/*  Property Descriptors  */

    var cat = {
      name: 'fluffy',
      color: 'white'
    }
    //or window.display(..)
    display(Object.getOwnProperyDescriptor(cat, 'name'))

//output
    Object {
      value: kitty
      writable: true
      enumerable: true
      configurable: true
    }
