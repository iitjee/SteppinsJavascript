

function *process() {
  yield 8000;
}

let it = process(); //yields the value
console.log(it.next()); //value is returned by calling it.next()


//what if we do
function *process() {
  yield;
}
//it.next() will give {done:false, value: undefined}



//what if 
function *process() {
  let newArray = [yield, yield, yield];
  console.log(newArray[2]);
}
let it = process();
it.next(); //this to kick off the generator
it.next(200); //now do this or consolelog it
it.next(34);
it.next(21); 

//21 is printed



