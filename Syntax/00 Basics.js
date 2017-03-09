Primitives:
----------
string
number
boolean
null
undefined

Complex: 
--------
object
array
function





"use strict" directive
//Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode)
    "use strict";
    x = 3.14;       // This will cause an error because x is not declared
    function myFunction() {
    y = 3.14;   // This will also cause an error because y is not declared
    }

//Declared inside a function, it has local scope (only the code inside the function is in strict mode):
    x = 3.14;       // This will not cause an error. 
    myFunction();

    function myFunction() {
       "use strict";
        y = 3.14;   // This will cause an error
    }
