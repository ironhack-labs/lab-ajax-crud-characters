const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
    .then(data => showCharacters(data.data))
    .catch(e => console.log(e));
  };
  
  document.getElementById('fetch-one').onclick = function(){
    let id = document.getElementsByName('character-id')[0].value;
    charactersAPI.getOneRegister(id)
    .then(data => showCharacters([data.data]))
    .catch(e => console.log(e));
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = document.getElementsByName('character-id-delete')[0].value;
    charactersAPI.deleteOneRegister(id)
    .then(e => console.log(e, 'muerto'))
    .catch(e => console.log(e));
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
});


const showCharacters = characters => {
  let container = document.getElementsByClassName('characters-container')[0];
  const intialInfo = document.getElementsByClassName('character-info');
  for(let i = 0; i < intialInfo.length; i++){
    container.removeChild(intialInfo[i]);
  }
  characters.forEach(e => {
    let characterInfo = document.createElement('div');
    characterInfo.className = 'character-info';
    Object.keys(e).forEach((key) => {
      let div = document.createElement('div');
      div.className = `${key}`
      div.innerHTML = `${key}: ${e[key]}`
      characterInfo.appendChild(div);
    });
    container.appendChild(characterInfo);
  })
};