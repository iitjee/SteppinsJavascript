



/* Convert 'HTMLCollection' to 'Array' Type */
  convArray = [].slice.call(yourHTMLCollectionObject));
  convArray = Array.prototype.slice.call(yourHTMLCollectionObject)); //same
  
//used in document.getElementsByClassName(), to put arraymethods like 'map'




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
