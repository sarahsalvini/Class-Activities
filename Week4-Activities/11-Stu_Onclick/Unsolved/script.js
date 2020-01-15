// create a button 
// on click event 
// click on it the counter goes up 


// button creating a string "incriment"

// addEventListener with a callback message 

// bonus never let it get below 0 


var increment = document.querySelector("#increment");
var decrement = document.querySelector("#decrement");
var currentCount = 0
var count = document.querySelector("#count");

increment.addEventListener("click", function() {
    currentCount++ 
    count.innerHTML = currentCount
})

decrement.addEventListener("click", function() {
    currentCount--
    count.innerHTML = currentCount
})

