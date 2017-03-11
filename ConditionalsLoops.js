

/* 1 */
for (var index = 0; index < myArray.length; index++) {
  console.log(myArray[index]);
}

/* 2 ES5 */
myArray.forEach(function (value) {
  console.log(value);
});
//Notes: you can’t break out of this loop using a break statement or return from the enclosing function using a return statement.

/* 3 */
for (var index in myArray) {    // don't actually do this
  console.log(myArray[index]);
}
// This is a bad idea for several reasons:

// -The values assigned to index in this code are the strings "0", "1", "2" and so on, not actual numbers. Since you probably 
// don’t want string arithmetic ("2" + 1 == "21"), this is inconvenient at best.
// - The loop body will execute not only for array elements, but also for any other expando properties someone may have added. For example, if your array has an enumerable property myArray.name, then this loop will execute one extra time, with index == 
// "name". Even properties on the array’s prototype chain can be visited.
// - Most astonishing of all, in some circumstances, this code can loop over the array elements in an arbitrary order.

// In short, for–in was designed to work on plain old Objects with string keys. For Arrays, it’s not so great.

/*  4 */
for (var value of myArray) {
  console.log(value);
}
// it avoids all the pitfalls of for–in
// unlike forEach(), it works with break, continue, and return


/*
The for–in loop is for looping over object properties.
The for–of loop is for looping over data—like the values in an array.
*/








