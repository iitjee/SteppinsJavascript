declinebuttons = document.getElementsByClassName("_idm");
for (x of declinebuttons)
{ x.children[0].children[1].click(); }






var delayInMilliseconds = 2000; //1 second

setTimeout(function() {
  //your code to be executed after 1 second
confirmDelete = document.getElementsByClassName("layerConfirm");
for (yy of confirmDelete)
{yy.click();}


}, delayInMilliseconds);

/* this won't work */
//probably this is the culprit why your previous attempts didn't work
//the time delay was not actually the issue!
// for (x of declinebuttons)
// {console.log('hi') //fires all times!
// document.getElementsByClassName("layerConfirm")[0].click()
// the above line is for some reason wrong. compare this with correct part
//}
