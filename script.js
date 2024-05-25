let dayOfWeek = new Date().getDay() // Get the current day of the week (0-6)
let message;
if (dayOfWeek === 0) {
    message = "Relax, it's Sunday!"; 
} 
  else if (dayOfWeek === 1) {
    alert ("Start your week strong, it's Monday!");
} 
  else if (dayOfWeek === 2) {
    alert ( "Keep going, it's Tuesday!")
}
  else if (dayOfWeek === 3) {
    alert ("Halfway there, it's Wednesday!");
}
   else if (dayOfWeek === 4) {
  alert( "Almost there, it's Thursday!");
}
   else if (dayOfWeek === 5) {
    alert ( "It's Friday! The weekend is near!");
}
   else if (dayOfWeek === 6) {
    alert ( "Enjoy your Saturday!");
} 
  else{
    ("invalid day")
  }

let month =  prompt("Please enter the number of the month (1-12)")
if (month === "1") {
    alert("The name of the month is January")
}
else if(month === "2") {
    alert("The name of the month is February")
}
else if(month === "3") {
    alert("The name of the month is March")
}
else if(month === "4") {
    alert("The name of the month is April")
}
else if(month === "5") {
    alert("The name of the month is May")
}
else if(month === "6") {
    alert("The name of the month is June")
}
else if(month === "7") {
    alert("The name of the month is July")
}
else if(month === "8") {
    alert("The name of the month is August")
}
else if(month === "9") {
    alert("The name of the month is September")
}
else if(month === "10") {
    alert("The name of the month is October")
}
else if(month === "11") {
    alert("The name of the month is November")
}
else if(month === "12") {
    alert("The name of the month is December")
}
else{
    alert("invalid number of the month")
}


