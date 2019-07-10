const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    let html = '';
    let bigDiv = document.querySelector('.characters-container');
    charactersAPI.getFullList()
    .then((response) => {
      response.data.forEach((char) => {
        html += `<div class="character-info">
        <div class="name">Name: <span>${char.name}</span></div>
        <div class="occupation">Occupation: <span>${char.occupation}</span></div>
        <div class="cartoon">Is a Cartoon? <span>${char.cartoon}</span></div>
        <div class="weapon">Weapon: <span>${char.weapon}</span></div>
        </div>`
        bigDiv.innerHTML = html;
      }
        )
    })
    .catch((err) => console.log(err))

  }
  
  document.getElementById('fetch-one').onclick = function(){
    let id = document.querySelector('#character-id-get').value;
    let html = '';
    let bigDiv = document.querySelector('.characters-container');
    charactersAPI.getOneRegister(id)
    .then((char) => {
      const {name, occupation, cartoon, weapon} = char.data;
      html += `<div class="character-info">
      <div class="name">Name: <span>${name}</span></div>
      <div class="occupation">Occupation: <span>${occupation}</span></div>
      <div class="cartoon">Is a Cartoon? <span>${cartoon}</span></div>
      <div class="weapon">Weapon: <span>${weapon}</span></div>
      </div>`
      bigDiv.innerHTML = html;
    })
    .catch((err) => console.log(err))
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = document.querySelector('#character-delete').value;
    charactersAPI.deleteOneRegister(id)
    .then(() => {
      document.getElementById('delete-one').style.backgroundColor = 'green';
    })
    .catch(() => document.getElementById('delete-one').style.backgroundColor = 'tomato')
  }
  
  document.getElementById('edit-character-form').onsubmit = function(event){
    event.preventDefault();
    let id = document.getElementById('id-value').value;
    let name = document.getElementById('name-value1').value;
    let occupation = document.getElementById('occupation-value1').value;
    let weapon = document.getElementById('weapon-value1').value;
    let cartoon = document.getElementById('cartoon-value1').checked;
    charactersAPI.updateOneRegister(id, name, occupation, weapon, cartoon)
      .then(() => document.getElementById('edit-data').style.backgroundColor = 'green')
      .catch(() => document.getElementById('edit-data').style.backgroundColor = 'tomato');
  }
  
  document.getElementById('new-character-form').onsubmit = function(event){
    let name = document.getElementById('name-value').value;
    let occupation = document.getElementById('occupation-value').value;
    let weapon = document.getElementById('weapon-value').value;
    let cartoon = document.getElementById('cartoon-value').checked;
    event.preventDefault();
    charactersAPI.createOneRegister(name, occupation, cartoon, weapon)
    .then(() => document.getElementById('send-data').style.backgroundColor = 'green')
    .catch(() => document.getElementById('send-data').style.backgroundColor = 'tomato');
  }
})
