



/* Convert 'HTMLCollection' to 'Array' Type */
  convArray = [].slice.call(yourHTMLCollectionObject));
  convArray = Array.prototype.slice.call(yourHTMLCollectionObject)); //same
  
//used in document.getElementsByClassName(), to put arraymethods like 'map'


//saving canvas element!
//https://stackoverflow.com/questions/11112321/how-to-save-canvas-as-png-image
var c=document.getElementById("myCanvas"); 
var d=c.toDataURL("image/png");
var w=window.open('about:blank','image from canvas');
w.document.write("<img src='"+d+"' alt='from canvas'/>");




/* copying to clipboard */
function copyToClipboard(text){
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}
copyToClipboard('Hello, World!')
