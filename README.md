<<<<<<< HEAD
# Server-Side Calculator
=======
# Server-Side Calculator #

Welcome to your second weekend challenge! We are going to be building a calculator application using jQuery, Node, and Express.
>>>>>>> acfba13baa467425ab8825f8d73c09cb2eb923f0

Y Paul Sussman: March 17th, 2017; Version 1.0

<<<<<<< HEAD
## Application Overview
This was my first from-scratch software with logic on the server. It does what it says on the label: it's a browser-based calculator. The delay when "computing" is one of the reach goals from the project specs (this was the Weekend Challenge for our second week of in-class instruction at Prime Digital Academy.)

## Getting Started
=======
[x] Each of the numerical values and type of mathematical operation will be bundled up in an object and then sent to the server via a POST. (_So, when the object is sent, it should look something like this:_ `{ x: 3, y: 4, type: Add }`)

[x] Once the server receives it, build out logic to compute the numbers in 1 of 4 different ways. (_The server should be able to handle Addition, Subtraction, Multiplication, and Division._)
>>>>>>> acfba13baa467425ab8825f8d73c09cb2eb923f0

Fork, clone, or download the project, then run `npm install`.

You'll also need to download [the most-recent version of Bootstrap 3](http://getbootstrap.com/getting-started/#download), then copy the unzipped `bootstrap-3.3.7-dist` folder into `server/public/vendors`.

## Built With

<<<<<<< HEAD
* HTML 5, CSS 3, Bootstrap, and jQuery; and
* Node.js, and Express.js.

## Learning Value
=======
### HARD MODE: (Stretch Goal 1) ### 

[x] Convert the input fields for the two values to Buttons, so the experience would allow the user to click on a numerical button, then a mathematical operation, then a numerical button again. Then have an equal button that sends all of the information to the server.

### PRO MODE: (Stretch Goal 2) ### 

[x] Create a delay from when the client receives the response from the Server, and when the calculation is actually displayed on the DOM.
>>>>>>> acfba13baa467425ab8825f8d73c09cb2eb923f0

Writing this section some three months later, it's difficult to recall what the major complications building this were, if any. (_Apparently commenting code was a serious challenge for the Y Paul of early 2017..._) I had just become familiar with using the `data-` attribute to store information on the DOM, and `index.html` reveals my excitement.

Module use in node.js was still clearly a heavy concern for me at the time (_witness the 1:1 comment-to-code ratio in_ `app.js`), but honestly? In retrospect, the most pleasant server-side surprise is seeing March-Y-Paul's use of a `switch` statement. June-Y-Paul would have expected him to have been confined to endless `else if` chains: nice work, previous me.

<<<<<<< HEAD
## Demo
<p align="center">
  <img src="Server-Side_Calculator.gif" alt="walkthrough gif"/>
</p>
=======
### POST-CHALLENGE REFACTORING: (Proctor's Suggestions) ###  
[x] Code comments above their respective line.

[x] Switch cases on single value comparisons (your server side calc uses else/if chains).

[x] Get those event listener assignments out of the document ready and into a master function that turns on and off listeners.

[x] Have their function calls housed in their own functions for potential reuse.
>>>>>>> acfba13baa467425ab8825f8d73c09cb2eb923f0
