const charactersAPI = new APIHandler("http://localhost:8000")

async function fullList(){
  const fullList = await charactersAPI.getFullList();
    const charactersContainer = document.getElementsByClassName('characters-container');
    charactersContainer[0].innerHTML = '';
    fullList.forEach(element => {
      charactersContainer[0].innerHTML += `
          <div class="character-info">
            <div class="name">Character Name: ${element.name}</div>
            <div class="occupation">Character Occupation: ${element.occupation}</div>
            <div class="cartoon">Is a Cartoon? ${element.cartoon}</div>
            <div class="weapon">Character Weapon: ${element.weapon}</div> 
          </div>
          `;
  });
}

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = async function(){
    await fullList();

  }
  
  document.getElementById('fetch-one').onclick = async function(){
    let indexId = document.getElementById('character-id').value;
      const oneRegister = await charactersAPI.getOneRegister(indexId);
      const charactersContainer = document.getElementsByClassName('characters-container');
      charactersContainer[0].innerHTML = '';
      charactersContainer[0].innerHTML += `
      <div class="character-info">
        <div class="name">Character Name: <h5>${oneRegister.name}</h5></div>
        <div class="occupation">Character Occupation: ${oneRegister.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${oneRegister.cartoon}</div>
        <div class="weapon">Character Weapon: ${oneRegister.weapon}</div> 
      </div>
      `;
      await fullList();
  }

  document.getElementById('new-character-form').onsubmit = async function(event){
    // event.preventDefault(); //usa no começo para evitar a tela de atualizar
    const body = {
      name: event.target[0].value,
      occupation: event.target[1].value,
      weapon: event.target[2].value,
      cartoon: event.target[3].checked
    }
    await charactersAPI.createOneRegister(body)
    await fullList();

            
  }
  
  document.getElementById('delete-one').onclick = async function(){
    let indexIdDelete = document.getElementById('character-id-delete').value;
    await charactersAPI.deleteOneRegister(indexIdDelete);
    await fullList();
  }
  
  document.getElementById('edit-character-form').onsubmit = async function(event){
    event.preventDefault()
    let indexIdEdit = document.getElementById('character-id-edit').value;
    const body = {
      name: event.target[0].value,
      occupation: event.target[1].value,
      weapon: event.target[2].value,
      cartoon: event.target[3].checked
    }
    await charactersAPI.updateOneRegister(indexIdEdit, body)    
    await fullList();
  }
  

})

