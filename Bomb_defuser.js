let a = document.getElementById("defuser");
let b = document.getElementById("timer");
let counter = 10;
let sam1 = setInterval(function() {
    counter = counter - 1;
    if (counter === 0) {
        b.textContent = "BOOM!!!";
        clearInterval(sam1);
    } else {
        b.textContent = counter;
    }
}, 1000);

a.addEventListener("keydown", function(event) {
    if (a.value === "defuse" && event.key === "Enter" && counter !== 0) {
        b.textContent = "You did it!!!";
        clearInterval(sam1);
    }
})