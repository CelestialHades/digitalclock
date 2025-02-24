/*
* document is the JavaScript object representing the HTML document.
* getElementById('clock) find the element with id="clock" (our <div>)
* const clock stores this element so we can update it later. We use const because we won't reasign
* clock (though we can still modify its properties). 
 */
// 1. Get the clock element from the DOM
const clock = document.getElementById('clock');


/*
* Fedines a function named updateClock that will handle updating the time. Functions are resusable blocks of code.
* Date is a built-in JavaScript object for working with dates and times.
* new Date() creates an instance with the current date and time.
* const now stores this for use in the function.
* getHours(), getMinutes() getSeconds() are methods of the Date object that exract the current hours (0-23),
* (0-59), mintutes and seconds (0,59) we use let becuase we modify these values unline const.

 */
// 2. Function to update the clock
function updateClock() {
  // 3. Get the current time
  const now = new Date();
  
  // 4. Extract hours, minutes, and seconds
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  

  //4.5 Determine AM/PM and convert to 12-hour format.
  const period = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // convert 0-23 to 1-2  // % 12 is the modulo operator, giving the remainder 

/* 
* this is a ternary operator (a concise if-else). if hours < 10 is true , it add a leading zero, e.g,
* 5 becomes '05' otherwise, it keeps hours as is.
* why? for readibility --- 05:03:29 looks better than 5:3:9
* same logic applies to minutes and seconds.
*/
  // 5. Add leading zeros if needed
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

/* 
* this uses template literal (back ticks `) to create a string like "14:25:09".
* ${} embeds the variables directly into the string - super handy!
*/
  // 6. Format the time string
  const timeString = `${hours}:${minutes}:${seconds} ${period}`;

/* 
* sets the text inside the <div> id="clock" our timeString.
*this updates what the usersees on the page.
*/

  // 7. Update the DOM with the time
  clock.textContent = timeString;
}

//8. Call updateClock immediately to avoid delay

updateClock();



//9. Update the clock very second
setInterval(updateClock, 1000);