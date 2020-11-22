# Tasman Adventures

## ReadMe 2 has information on running this website on a server<br>

To run Client-Side <br>
1. cd CLIENT/ <br>
2. npm start <br>

The Client side is hooked up to localhost:3000/<br>

To run Server-Side open new bash, leave client running <br>
1. cd SERVER/<br>
2. npm start <br>

Head to web browser open new tab type localhost:3001/<br>
you will see Express , welcome to express, In my Server workspace there are routes comment.js, login.js, user.js
these routes are used in place of the 3001/login , 3001/users they will show you the data stored in the database


## Starting up app

Ensure you have node.js installed and can run npm commands, to be safe go to terminal and type <br>
**npm install**<br>
**npm start** <br>

### Side Notes <br>

1. All css is stored in a public folder in my client work space called main.css
2. mySQL files sit in the top level of this repo there are 2 files one called Insert.sql and one called WebAPIprocedures.sql <br>
these are needed for the Server-side to give you data back when logging in and saves the comments to the DB. You must craete a database then run these queries. You will need to make changes to the utils.js in the client>components folder and place your own host, username, password, database
3. All code that was used else where is refrenced at the bottom of the script in the folders e.g CLIENT>SRC>Components/footer.js has a comment at end of script which gives the link to where the code is from.




