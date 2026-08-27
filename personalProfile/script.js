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
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    // check css 
    if (document.body.classList.contains("dark-mode")) {
        
        // button cahnge to light
        themeBtn.textContent = "light mode";
        // set in local storage
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "dark mode";
        localStorage.setItem("theme", "light");
    }
});

// get in local storage
const savedTheme = localStorage.getItem("theme");

// reload page still kekal
// savedTheme in storage
if (savedTheme == "dark") {
    // change body by css name darkmode
    document.body.classList.add("dark-mode");
    // change text button become
    themeBtn.textContent = "light mode";
}

const intro = document.getElementById("intros");
const introBtn = document.getElementById("introBtn");

introBtn.addEventListener("click", function () {
    intros.textContent = "Im learning fornt end";

});

const html = document.getElementById("html");
const css = document.getElementById("css");
const java = document.getElementById("java");
const skillMessage = document.getElementById("skill-message");

html.addEventListener("click", function () {
    skillMessage.textContent = "Html is used to structure website";
});
css.addEventListener("click", function () {
    skillMessage.textContent = "css is used to structure website";
});
java.addEventListener("click", function () {
    skillMessage.textContent = "java is used to structure website";
});

const projects = [
    {
        name: "Pawr",
        description: "A pet application",
        category: "app"
    },
    {
        name: "TingHao",
        description: "A tourism website",
        category: "website"
    },
    {
        name: "U-Navi",
        description: "A navigation application",
        category: "mobile"
    }
];

const myProject = document.getElementById("myProject");

// for (let i = 0; i < projectList.length; i++)
projects.forEach((project)=> {
    // create li in ul
    const listItem = document.createElement("li");
    listItem.textContent = project.name+" - "+project.description;
    // list item put in myProject
    myProject.appendChild(listItem);
});
  
const website = projects.find((project) => {
    // show all info in U-navi
    return project.name === "U-Navi";
});

console.log(website);

// display input word by word
const namePreview = document.getElementById("namePreview");
const nameInput = document.getElementById("nameInput");

nameInput.addEventListener("input", function(){
    namePreview.textContent = nameInput.value;
});

const messageCounter = document.getElementById("messageCounter");
const messageInput = document.getElementById("messageInput");

messageInput.addEventListener("input",function(){
// guna method value n length simpan di count
const count = messageInput.value.length;
// count + /100 character letak di message counter 
 messageCounter.textContent = count + "/100 character";
});


const clock = document.getElementById("clock");

// function clock
setInterval(function(){
    const baru = new Date();
    clock.textContent=baru.toLocaleTimeString();
},1000);