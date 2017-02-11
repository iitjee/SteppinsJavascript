
var today = new Date(); //current date and time

var y2k = new Date(1996, 11, 29)
var y2k = new Date(1996, 11, 29, hrs, mins, secs)


/*  Setters */
var today = new Date();
today.setMonth(0)
.setFullYear(1996)
.setDay(0)

myDateObject.getMonth() //returns 0-11
.getFullYear() //YYYY (not zero based)
.getYear() //deprecated

.getDate() //only returns date(not complete) 1-31
.getDay() //0-6 0==saturday
.getHours() //0-23
.getTime() //milliseconds since 1/1/1970

/*   Comparing */
.getTime() is the best to way to compare dates

var date1 = new Date(1996, 11, 29)
var date2 = new Date(1996, 11, 29)

if(date1 == date2) //returns false!!
//because they are objects bla bla




