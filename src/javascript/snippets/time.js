// Several ways to create a Date object
let today = new Date();
console.log(today);
let birthday = new Date("December 17, 1995 03:24:00");
// let birthday = new Date("1995-12-17T03:24:00");
// let birthday = new Date(1995, 11, 17); // the month is 0-indexed
// let birthday = new Date(1995, 11, 17, 3, 24, 0);
// let birthday = new Date(628021800000); // passing epoch timestamp

// To get Date, Month and Year or Time
let [month, date, year] = new Date().toLocaleDateString("en-US").split("/");
let [hour, minute, second] = new Date()
  .toLocaleTimeString("en-US")
  .split(/:| /);

// Two digit years map to 1900 – 1999
// let date = new Date(98, 1); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
// Deprecated method; 98 maps to 1998 here as well
// date.setYear(98); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
// date.setFullYear(98); // Sat Feb 01 0098 00:00:00 GMT+0000 (BST)

var time = new Date();
time.getDate(); // returns value 1-31 for day of the month
time.getDay(); //returns value 0-6 for day of the week
time.getFullYear(); //returns a 4 digit value for the current year
time.getHours(); //returns value 0-23 for the current hour
time.getMinutes(); //returns value 0-59 for the current minute of the hour
time.getSeconds(); //returns value 0-59 for current second of the minute
time.getMilliseconds(); //returns value 0-999 for current ms of the second
time.getTime(); //returns date as ms since Jan 1, 1970
time.toDateString(); //returns a string (e.g. "Fri May 9 2020")
time.toLocaleString(); //returns date and time (e.g. "9/12/2015, 6:08:25 PM")
time.toLocaleTimeString(); //returns time (e.g. "6:08:25 PM")
time.toLocaleDateString(); //returns date (e.g. "9/12/2015")
