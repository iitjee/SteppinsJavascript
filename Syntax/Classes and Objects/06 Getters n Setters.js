

These are pretty cool attributes on a property.

var cat = {
  name: {first: 'Fluffy', last: 'kittie'},
  color: 'White'
}

Object.defineProperty(cat, 'fullName', 
  {
    get: function () {
      return this.name.first + this.name.last;
    }
  }
);
      


//You can also make a set method
Object.defineProperty(cat, 'fullName', 
  {
    get: function () {
      return this.name.first + this.name.last;
    }
    set: function (value) {
      var nameParts = value.split(' ');
      this.name.first = nameParts[0];
      this.name.second = nameParts[1];
    }
  }
);
