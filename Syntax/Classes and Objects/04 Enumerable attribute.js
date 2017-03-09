'use strict'

var cat =  {
  name: {first: 'pussy', last; 'kittie'},
  color: 'White'
}

for( var propertyName in cat) {
  display(propertyName); //iterates over all the keys
}

/* With enumerable attribute set to false, you can have fine grain control over the object as shown */
  Object.defineProerty(cat, 'name', {enumerable: false});


//you can also see the list of keys using (besides the for loop above)
  display(Object.keys(cat));

display(JSON.stringify(cat)) //won't show up in the serialization of the object as well

//however, you can view it through the bracket or dot notation
  displaly(cat[color]);
