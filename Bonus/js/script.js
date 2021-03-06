const teamContainer = document.querySelector(".team-container");
const addBtn = document.getElementById("addMemberButton");
const userName = document.getElementById("name");
const userRole = document.getElementById("role");
const userImg = document.getElementById("image");

const users = [];

addBtn.addEventListener('click', function() {
    let inputName = userName.value;
    let inputRole = userRole.value;
    let inputImg = userImg.value;


    var user = {};
    user.name = inputName;
    user.role = inputRole;
    user.image = inputImg;
    users.push(user);


    let teamCard = document.createElement("div");
    for (let i = 0; i < users.length; i++) { 

        teamCard.classList.add("team-card")
        teamCard.innerHTML = 
        `<div class="card-image"><img
              src="${users[i].image}"
              alt="${users[i].name}"
            />
        </div>
        <div class="card-text">
            <h3>${users[i].name}</h3>
            <p>${users[i].role}</p>
        </div>`;

    
    }
    
    teamContainer.append(teamCard);
});



