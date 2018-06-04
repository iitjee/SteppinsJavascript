(taken from https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}

var g = f();
g(); // returns '11'
In this above example, g captured the variable a declared in f. At any point that g gets called, the 
value of a will be tied to the value of a in f. Even if g is called once f is done running, it will be able 
to access and modify a.

function f() {
    var a = 1;

    a = 2;
    var b = g();
    a = 3;

    return b;

    function g() {
        return a;
    }
}

f(); // returns '2'
