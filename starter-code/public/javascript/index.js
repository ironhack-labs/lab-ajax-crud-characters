const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    document.querySelectorAll('.character-info').forEach(x => {
      x.parentNode.removeChild(x);
      console.log('entrou aqui');
    });
    
    charactersAPI.getFullList()
      .then(responseFromApi =>{
          responseFromApi.data.forEach(element => {
          let {name, occupation, weapon, cartoon} = element;

          let newCharacter = document.createElement("div");
          newCharacter.setAttribute("class", "character-info");

          let name_n = document.createElement("div");
          name_n.setAttribute("class", "name");
          name_n.innerHTML = `<div class = "campo">Name:</div> <div class = "valor">${name}</div>`;

          let occupation_n = document.createElement("div");
          occupation_n.setAttribute("class", "occupation");
          occupation_n.innerHTML = `<div class = "campo">Occupation:</div> <div class = "valor">${occupation}</div>`;

          if(!cartoon){
            cartoon = false;            
          }

          let carton_n = document.createElement("div");
          carton_n.setAttribute("class", "cartoon");
          carton_n.innerHTML = `<div class = "campo">Is a cartoon?:</div> <div class = "valor">${cartoon}</div>`;
          
          let weapon_n = document.createElement("div");
          weapon_n.setAttribute("class", "weapon");
          weapon_n.innerHTML = `<div class = "campo">Weapon:</div> <div class = "valor">${weapon}</div>`;

          newCharacter.appendChild(name_n);
          newCharacter.appendChild(occupation_n);
          newCharacter.appendChild(carton_n);
          newCharacter.appendChild(weapon_n);

          document.querySelector('.characters-container').appendChild(newCharacter);

        });
      })
      .catch(err => console.log("Error while getting the data: ", err));
    // let newCharacter = document.createElement("div");
    // newCharacter.setAttribute("class", "character-info");


    // const {name, occupation, weapon, cartoon} = getFullList();

    // charactersAPI.getFullList().forEach(x => {
    //   const {name, occupation, weapon, cartoon} = x;
    //   console.log(name);
    // });

    
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });

  // charactersAPI.getFullList();
  // charactersAPI.getOneRegister(1);
  // charactersAPI.createOneRegister({name:'WALL - E', occupation: 'Waste Allocation Robot', weapon: 'Head laser'});
  // charactersAPI.deleteOneRegister(1);
  // charactersAPI.updateOneRegister(2, {name:'Marciano'})
});
