const teamContainer = document.querySelector(".team-container");
const users = [

    {
        'name' : 'Wayne Barnett',
        'role' : 'Founder & CEO',
        'image' : 'img/wayne-barnett-founder-ceo.jpg'
    },   
];

for (let i = 0; i < users.length; i++) { 

    teamContainer.innerHTML = `<div class="team-card">
    <div class="card-image">
      <img
        src="${users[i].image}"
        alt="${users[i].name}"
      />
    </div>
    <div class="card-text">
      <h3>${users[i].name}</h3>
      <p>${users[i].role}</p>
    </div>
  </div>`;  
  
}
