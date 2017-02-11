create an array of social media icons


(script.js)
var socialMedia = {
  facebook : 'http://facebook.com/viewsource',
  twitter: 'http://twitter.com/planetoftheweb',
  flickr: 'http://flickr.com/planetotheweb',
  youtube: 'http://youtube.com/planetoftheweb'
};

var socialList = function() {
  var  output = '<ul>', 
    myList = document.querySelectorAll('.socialmediaicons'); //this queries for all those having class named 'socialmediaicons'
  //in html we've <nav class="socialmediaicons"></nav>


  for (var key in arguments[0]) {
    output+= '<li><a href="' + socialMedia[key] + '">' +
      '<img src="images/' + key + '.png" alt="icon for '+key+'">' +
      '</a></li>';
  }
  output+= '</ul>';
  
  for (var i = myList.length - 1; i >= 0; i--) {
    myList[i].innerHTML = output; //important. embedding the html content into ALL the myList classed elements
  };
}(socialMedia); //note that this is a self-calling function. i.e it's called the moment this is defined


(styles.css)
body {
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
}

.socialmediaicons ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.socialmediaicons ul li {
  display: inline-block;
  margin-left: 5px;
}

.socialmediaicons ul li img {
  width: 30px;
  border-radius: 50%;
}
