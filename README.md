# JS Calculator Exercise


## Test overview

* Build a Calculator written in valid HTML 5, CSS and Javascript
* Build PHP functionalities to store all mathematical expressions and display into a table filter by newest to oldest


## Front end requirements

* Valid HTML 5 using Flexbox
* CSS3/SASS
* Javascript
  * Number functionality
  * Numbers are selected by mouse click events only and displayed on the calculator header
  * Operation allowed: Add, minus, divide and multiply
  * Clear data functionality


## Server side requirements

* When the user clicks the save button, the sum will be stored in a CSV file, along with the user's IP Address, date it was added and the browser used
* Create a new page called "Calculations.php", convert the CSV file into an array, and output all the info into a table. Should be filtered by newest to oldest


## Getting Started

* Clone the repository ```git clone https://github.com/alessandrolepri/JS-Calculator.git ```
* ```npm i``` to install all dependencies
* ```npm start``` to run the server and show the Calculator at ```http://localhost:4000/```
* ```sudo apachectl start``` to initialised PHP database and open connection to MySQL Server (you might need enter your local password)


## Folder Structure and process

All files are inside /src, /src/sass, /server folder

assets folder contains the mock-up calculator to replicate as close as possible.
I did use https://imagecolorpicker.com/ to detect the right colour, https://fonts.google.com/ library to find the right font-family and https://www.photopea.com/ to get the right dimension 
