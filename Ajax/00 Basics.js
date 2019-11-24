you can use AJAX with JavaScript to build dynamic web applications. Before we look at AJAX, let's talk about how a 
browser gets information to display a page. When a browser requests a page from a website, the browser in your 
machine is acting as a client. The website is being delivered through a machine that is serving up the information, 
so we call that a server. When you ask for a page, the client makes a request to the server and the server returns a 
page. Sometimes when you're looking at a page, you may want to ask for some additional information from the server.

Say for example that your page has thumbnails for a photo album and perhaps the album has more thumbnails than you 
can see in the current view. Without AJAX if you want to see more thumbnails, you'd have to make a request back to 
the server and it would send you a whole new page with additional thumbnails. That means the server ends up sending 
a lot of information that you don't really need all over again. With AJAX, the server doesn't have to send you the 
whole page; it just sends the pieces you need-- in this case new thumbnails. So how does that work? AJAX is not a 
single technology, but a group of technologies working together to make that happen.


Technically, AJAX stands for Asynchronous JavaScript and XML. That's quite a mouthful, so let's break that down 
piece by piece. 

 Asynchronous means that the client can request new pieces of information from the server at any time. It doesn't 
 have to wait for a page to reload. A new request can be triggered by an event like clicking on a button, hovering o
 ver an image, or whatever. The J in AJAX stands for JavaScript. JavaScript is where all this magic takes place. It 
 handles the events that trigger a new request, makes the requests for new data to the server, and takes care of 
 updating only the part of the document that needs to change.

JavaScript talks to the server through a set of programming methods called an API and uses what's called an XHR or 
XML HTTP request. This is where the X in AJAX comes from.

The XHR API lets the browser send and request data from a 
server. This can be a bit confusing because a lot of people think of XML as a language used to describe data that's 
a lot like HTML. Sometimes people assume that the X in AJAX means that the data from an AJAX request has to be in 
XML, but the data that gets transferred to and from the server can be in any format, and it's usually either a text 
file, HTML, or a JavaScript object, like JSON.

So AJAX is really just a fancy term for a technology that lets you build pages that update without requiring a page 
reload. JavaScript does most of the heavy lifting with AJAX, and it uses the XHR API to handle the communication 
between the client and the server

