/* HTMLCollection to an Array */
/* 4 ways */
var arr = [].slice.call(htmlCollection); 
var arr = Array.prototype.slice.call( htmlCollection )
//latest
var arr = Array.from(htmlCollection);
var arr = [...htmlCollection]; 
//ECMAScript 2015 also provides the spread(...) operator, which is functionally equivalent to Array.from (although note that Array.from 
supports a mapping function as the second argument).



