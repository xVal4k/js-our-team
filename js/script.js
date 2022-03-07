const teamContainer = document.querySelector(".team-container");

const users = [

    {
        name : 'Wayne Barnett',
        role : 'Founder & CEO',
        image : 'img/wayne-barnett-founder-ceo.jpg'
    },   
    {
        name : 'Angela Caroll',
        role : 'Chied Editor',
        image : 'img/angela-caroll-chief-editor.jpg'
    },   
    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        image : 'img/walter-gordon-office-manager.jpg'
    },   
    {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        image : 'img/angela-lopez-social-media-manager.jpg'
    },   
    {
        name : 'Scott Estrada',
        role : 'Developer',
        image : 'img/scott-estrada-developer.jpg'
    },   
    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        image : 'img/barbara-ramos-graphic-designer.jpg'
    }, 

];

for (let i = 0; i < users.length; i++) { 

    let teamCard = document.createElement("div");
    teamCard.classList.add("team-card")
    teamCard.innerHTML = 
    `<div class="card-image">
        <img
          src="${users[i].image}"
          alt="${users[i].name}"
        />
    </div>
    <div class="card-text">
        <h3>${users[i].name}</h3>
        <p>${users[i].role}</p>
    </div>`;

    teamContainer.append(teamCard);
}
