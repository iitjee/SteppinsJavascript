

/*  Bracket Notation  */
//gives you access to use non-valid names like say if they have spaces
    myObj['my name'] = 'iitjee'



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
