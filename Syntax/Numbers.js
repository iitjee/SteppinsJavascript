var foo = "5" //string
var bar = "5"
console.log(foo + bar) //gives 55

/* if one of the variable is a string, operation becomes a string operation 
  if string operation is also not valid, it will return a NaN (no a number)
*/




/*  converting string to number */
var foo= "55"
var mynum = Number(foo)

/* checking if it's a number  */
if( isNaN(myVar) ) console.log('not a number');

//more precisely
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

/*   Math Object  */
var x = 200.6
var y = Math.round(x) //rounding off
Math.max(a1, a2, a3)
Math.min(b1, b2, b3)






