const userList = document.getElementById("userList");
const searchInput = document.getElementById("searchInput");

let users = [];

// fetch user

async function getUsesr() {
    try {
        
    const response= await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
    users= await response.json();
    // method display user
    displayUsers(users); 

    } catch (error) {
        console.log("Error");
    }
}
function displayUsers(userData){
    // method clearkan searching lama if ada in input
    userList.innerHTML = "";

    userData.forEach(user => {

        const li = document.createElement("li");
        
        li.textContent = `${user.name} - ${user.username}`;

        userList.appendChild(li);
        
    });
}

searchInput.addEventListener("input", function(){
    // method lowercase
    const searchText = searchInput.value.toLowerCase();

    // method filter
    const filterUser=users.filter((user)=>{
        return user.name.toLowerCase().includes(searchText)
    });

    displayUsers(filterUser);
});

getUsesr();