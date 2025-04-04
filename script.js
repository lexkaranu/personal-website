
const greetingElement = document.getElementById("greeting");
const hours = new Date().getHours();
if (hours < 12) {
    greetingElement.innerText = "Good Morning!";
} else if (hours < 18) {
    greetingElement.innerText = "Good Afternoon!";
} else {
    greetingElement.innerText = "Good Evening!";
}

