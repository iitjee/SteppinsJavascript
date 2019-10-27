
listOfBlockPosts = document.getElementsByClassName("_51xa")
 listOfBlockPosts = Array.prototype.slice.call( listOfBlockPosts )
listOfBlockPosts = listOfBlockPosts.slice(3)




for (xxx of listOfBlockPosts) {
xxx.children[2].firstChild.click();

var delayInMilliseconds = 1000; 
setTimeout(function() {
  //your code to be executed after 1 second
document.getElementsByClassName("_54ng")[0].firstChild.children[3].firstChild.click()
//if didn't work, once change to ....("_54ng")[1]

}, delayInMilliseconds);

}
