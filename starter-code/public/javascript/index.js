const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    clearElementsFromScreen();   
    
    charactersAPI.getFullList()
      .then(responseFromApi =>{
          responseFromApi.data.forEach(x => {          
            addElement(x);
        });
      })
      .catch(err => console.log("Error while getting the data: ", err));       
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {    

    charactersAPI.getOneRegister(document.getElementsByName('character-id')[0].value)
      .then(responseFromAPi => {
        addElement(responseFromAPi.data);
      })
      .catch(err => console.log("Error while getting the data: ", err));

      clearElementsFromScreen();
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    document.getElementsByName('character-id')[0].value = null;

    charactersAPI.deleteOneRegister(document.getElementsByName('character-id-delete')[0].value)
      .then(()=>{
        document.getElementById('delete-one').style.backgroundColor = 'green';
      })
      .catch(() => {
        document.getElementById('delete-one').style.backgroundColor = 'red';
      });
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let id_e = document.getElementsByName('chr-id')[0].value;
    let name_e = document.getElementsByName('name')[1].value;
    let occupation_e = document.getElementsByName('occupation')[1].value;
    let weapon_e = document.getElementsByName('weapon')[1].value;
    let cartoon_e = document.getElementsByName('cartoon')[1].checked;

    let newCharacter = {
      name: name_e,
      occupation: occupation_e,
      weapon: weapon_e,
      cartoon: cartoon_e  
    }

    charactersAPI.updateOneRegister(id_e, newCharacter)
      .then(() => {
        document.getElementById('send-data-edit').style.backgroundColor = 'green';
      })
      .catch(() =>{
        document.getElementById('send-data-edit').style.backgroundColor = 'red';
      });
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault();
    let name_n = document.getElementsByName('name')[0].value;
    let occupation_n = document.getElementsByName('occupation')[0].value;
    let weapon_n = document.getElementsByName('weapon')[0].value;
    let cartoon_n = document.getElementsByName('cartoon')[0].checked;

    let newCharacter = {
      name: name_n,
      occupation: occupation_n,
      weapon: weapon_n,
      cartoon: cartoon_n  
    }

    charactersAPI.createOneRegister(newCharacter)
      .then(() => {
        document.getElementById('send-data').style.backgroundColor = 'green';
      })
      .catch(() =>{
        document.getElementById('send-data').style.backgroundColor = 'red';
      });

  }); 
  
});

function clearElementsFromScreen(){
  document.querySelectorAll('.character-info').forEach(x => {
    x.parentNode.removeChild(x);
    console.log('entrou aqui');
  });
  document.getElementsByName('character-id')[0].value = null;
  document.getElementsByName('character-id-delete')[0].value = null;
  document.getElementById('delete-one').style.background = 'none';
  document.getElementsByName('name')[0].value = null;
  document.getElementsByName('occupation')[0].value = null;
  document.getElementsByName('weapon')[0].value = null;
  document.getElementsByName('cartoon')[0].checked = false;
  document.getElementById('send-data').style.background = 'none';
  document.getElementsByName('chr-id')[0].value = null;
  document.getElementsByName('name')[1].value = null;
  document.getElementsByName('occupation')[1].value = null;
  document.getElementsByName('weapon')[1].value = null;
  document.getElementsByName('cartoon')[1].checked = false;
  document.getElementById('send-data-edit').style.background = 'none';
}

function addElement(element){
  let {id, name, occupation, weapon, cartoon} = element;

  let newCharacter = document.createElement("div");
  newCharacter.setAttribute("class", "character-info");

  let id_n = document.createElement("div");
  id_n.setAttribute("class", "id");
  id_n.innerHTML = `<div class = "campo">Id: <span class = "valor">${id}</span></div> `;

  let name_n = document.createElement("div");
  name_n.setAttribute("class", "name");
  name_n.innerHTML = `<div class = "campo">Name: <span class = "valor">${name}</span></div> `;

  let occupation_n = document.createElement("div");
  occupation_n.setAttribute("class", "occupation");
  occupation_n.innerHTML = `<div class = "campo">Occupation: <span class = "valor">${occupation}</span></div>`;

  if(!cartoon){
    cartoon = false;    
  }

  let carton_n = document.createElement("div");
  carton_n.setAttribute("class", "cartoon");
  carton_n.innerHTML = `<div class = "campo">Is a cartoon?: <span class = "valor">${cartoon}</span></div>`;
  
  let weapon_n = document.createElement("div");
  weapon_n.setAttribute("class", "weapon");
  weapon_n.innerHTML = `<div class = "campo">Weapon: <span class = "valor">${weapon}</span></div>`;

  newCharacter.appendChild(id_n);
  newCharacter.appendChild(name_n);
  newCharacter.appendChild(occupation_n);
  newCharacter.appendChild(carton_n);
  newCharacter.appendChild(weapon_n);  

  document.querySelector('.characters-container').appendChild(newCharacter);
}
