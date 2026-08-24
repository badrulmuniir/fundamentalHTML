// declare
const contactBtn = document.getElementById("contactBtn");
const contactSection = document.getElementById("contact");
const contactForm = document.getElementById("contactForm")
const formMessage = document.getElementById("form-message")
const themeBtn = document.getElementById("themeBtn");

// function scroll when click contact me
contactBtn.addEventListener("click", function () {
    contactSection.scrollIntoView();
});

// function submit input 
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // change color text 
    formMessage.classList.remove("error", "success");

    if (name == "") {
        // textContext - display text based on error
        formMessage.textContent = "Please Enter Your Name";
        // error class in css (change color)
        formMessage.classList.add("error");
    } else if (email == "") {
        formMessage.textContent = "Please Enter Your email";
        formMessage.classList.add("error");
    } else if (message == "") {
        formMessage.textContent = "Please Enter Your message";
        formMessage.classList.add("error");
    } else {
        formMessage.textContent = "Successfull submit form";
        formMessage.classList.add("success");

        contactForm.reset();
    }

    //display alert

    // if (name === "") {
    //     alert("Please enter your name");
    // } else if (email === "") {
    //     alert("Please enter your email");
    // } else if (message === "") {
    //     alert("Please enter your message");
    // } else {
    //     alert("Message sent successfully!");
    // }

    console.log(name);
    console.log(email);
    console.log(message);
});

// change button dark mode light mode
themeBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        themeBtn.textContent = "light mode";
    }else{
        themeBtn.textContent = "dark mode";
    }
});