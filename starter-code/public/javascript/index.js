const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function(){
    let characterContainer = document.getElementById('characters-container');
    characterContainer.innerHTML = '';
    charactersAPI.getFullList()
      .then(lista => {
        lista.forEach((personagem, index) => {
          characterContainer.innerHTML += `<div class="character-info">
            <div class="id">ID: ${personagem.id}</div>
            <div class="name">Name: ${personagem.name}</div>
            <div class="occupation">Occupation: ${personagem.occupation}</div>
            <div class="cartoon">Cartoon? ${personagem.cartoon}</div>
            <div class="weapon">Weapon: ${personagem.weapon}</div>
          </div>`;
        })
      })
      .catch(err => console.log(err));
  }
  
  document.getElementById('fetch-one').onclick = function(){
    const id = document.getElementById('character-id').value;
    let characterContainer = document.getElementById('characters-container');
    characterContainer.innerHTML = '';
    charactersAPI.getOneRegister(id)
      .then(personagem => {
        characterContainer.innerHTML += `<div class="character-info">
        <div class="id">ID: ${personagem.id}</div>
        <div class="name">Name: ${personagem.name}</div>
        <div class="occupation">Occupation: ${personagem.occupation}</div>
        <div class="cartoon">Cartoon? ${personagem.cartoon}</div>
        <div class="weapon">Weapon: ${personagem.weapon}</div>
        </div>`;
      })
      .catch(err => console.log(err));
  }
  
  document.getElementById('delete-one').onclick = function(){
    const id = document.getElementById('character-id-delete').value;
    const deleteButton = document.getElementById('delete-one');
    deleteButton.className = ' ';
    charactersAPI.deleteOneRegister(id)
      .then(response => {
        if (response.status === 200) {
          deleteButton.className = 'success';
        };
    
      })
      .catch(err => console.log(err));
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    const name = document.getElementById('name-create').value;
    const occupation = document.getElementById('occupation-create').value;
    const weapon = document.getElementById('weapon-create').value;
    const cartoon = document.getElementById('cartoon-create').value;
    charactersAPI.createOneRegister(name, occupation, weapon, cartoon)
      .then(() => {
        const button = document.getElementById('send-data');
        button.className = 'success';
      })
      .catch(err => console.log(err));
  }
})
