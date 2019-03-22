Babel Transpiling
Webpack Transpiling



Babel Transpiling:
https://www.lynda.com/JavaScript-tutorials/browser-Babel-transpiling/424003/459170-4.html








Webpack Transpiling:
The solutions for transpiling so far have been useful, but a little bit too manual. For a larger scale project, most people 
like to use a build tool to help automated processes like transpiling, sass conversion and more. Lets take a look at one of 
these build tools, webpack. Webpack is a build tool that helps us load all of our dependencies, CSS, images, node modules and 
more, and babel and webpack work really well together, and can help automate the process of performing these conversions.

                npm init
                sudo npm i -g webpack
                npm i --save-dev babel-loader   (this turns esg to es5)

now create a webpack.config file
                module.exports = { //creating a module object
                  entry: './script.js', //entry point to your project
                  output : {filename: 'bundle.js'}, //transpiled js soup will be stored in bundle.js
                  module: { //another object
                    loaders: [
                      {test: /\.js?/, loader: 'babel-loader', exclude: /node_modules/}
                      ]

                }

now change the name script.js in index.html head tags to bundle.js
