The event model is quite different in older browsers. Although it is becoming less important, it's important to know the 
cross platform nuances.

 document.getElementById("mybutt").addEventListener("click", function() {...}, false); --> maynot work in older browsers (IE8)
 document.getElementById("mybutt").attachEvent("onclick", function() {...}); -->will work 
