blockbuttons = document.getElementsByClassName("_idm");
blockbuttons = [...blockbuttons];

for (x of blockbuttons)
{ x.children[0].children[2].firstChild.click();

tempor1 = document.getElementsByClassName("_54ng");
tempor1 = [...tempor1];
tempor1 = tempor1.slice(-1)[0] //gives lastELement
tempor1.firstChild.children[1].firstChild.click();
 }






var delayInMilliseconds = 2000; 


setTimeout(function() {

confirmRemove = document.getElementsByClassName("layerConfirm");

for (yy of confirmRemove)
{yy.click();
//document.getElementsByClassName("layerConfirm")[1].click();
}


}, delayInMilliseconds);




setTimeout(function() {

confirmRemove = document.getElementsByClassName("layerConfirm");
confirmRemove = Array.prototype.slice.call( confirmRemove )

let halfwayThrough = Math.floor(confirmRemove.length / 2)
let arraySecondHalf = confirmRemove.slice(halfwayThrough, confirmRemove.length);

for (yy of arraySecondHalf)
{yy.click();}


}, delayInMilliseconds+2000);
