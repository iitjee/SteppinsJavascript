If you look at the state of modern web-app development, several common patterns and scenarios start to emerge. Lets take a 
look at a few of those. One common pattern is that when the page loads, you have to perform some kind of state initialization, 
like maybe setting up a product list. Then you set up some event-handlers, and you kick off the application. 

Another common scenario is that the user performs some kind of action on the page, such as selecting an element. Then your app 
has to retrieve content from the page, perform some kind of manipulation on it, and then update the result back into the page.
For example, an e-commerce site might update the contents of a shopping cart, in response to a users action.

A third common pattern is when your app has to fetch content from the server in order to update the page content. For example, 
a financial web app might periodically update stock quotes from a server, and then put the values back into the page. Now 
obviously there are more patterns than these three, but these are really good examples of common patterns that jQuery makes 
much easier to build. JQuery leverages many of the skills you already have as a web developer.

For example, it uses CSS syntax to find and retrieve page content. It also uses JavaScript syntax, but is designed from the 
ground, up to work on sets of elements, not just individual ones. And you run into this all the time when youre building 
complex web apps. JQuery also uses a concept called statement chaining to reduce the amount of code you ll have to write, and 
we ll see that as we get into the course. JQuery is also highly extensible. There are a lot of plugins available for almost 
every web development need you might have.

And in fact it s very easy to learn how to build your own plugins. Now we won t go into that here, in this course, since it s 
a little advanced, but you can do a Google search on jQuery plugins to get an idea of how many there are, and what they can 
do. Now that we ve learned a little bit about what makes jQuery so great, let s jump into some code, and build our very first 
jQuery-enabled web page. When you re ready, we ll get into that in the next chapter.
