
const greetingElement = document.getElementById("greeting");
const hours = new Date().getHours();
if (hours < 12) {
    greetingElement.innerText = "Good Morning!";
} else if (hours < 18) {
    greetingElement.innerText = "Good Afternoon!";
} else {
    greetingElement.innerText = "Good Evening!";
}



document.getElementById("contact-form").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        event.preventDefault(); 
    } else {
        alert("Form submitted successfully!");
    }
});



@media (max-width: 768px) {
    header h1 {
        font-size: 20px;
    }
    .project {
        margin: 10px 0;
        width: 100%;
    }
}

