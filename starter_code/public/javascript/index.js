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
  
  document.getElementById('delete-one').onclick = () => {
    let id = document.getElementsByName('character-id-delete')[0].value;
    charactersAPI.deleteOneRegister(id)
    .then(e => console.log(e, 'muerto'))
    .catch(e => console.log(e));
  }
  
  document.getElementById('edit-character-form').onsubmit = e => {
    e.preventDefault();
    let id = document.getElementsByName('chr-id')[0].value;
    let name = document.getElementsByName('name')[1].value;
    let occupation = document.getElementsByName('occupation')[1].value;
    let weapon = document.getElementsByName('weapon')[1].value;
    let cartoon = document.getElementsByName('cartoon')[1].checked;
    let character = {name, occupation, weapon, cartoon};
    charactersAPI.updateOneRegister(id,character)
    .then(() => console.log('Updated'))
    .catch(e => console.log(e));
  };
  
  document.getElementById('new-character-form').onsubmit = e =>{
    e.preventDefault();
    let name = document.getElementsByName('name')[0].value;
    let occupation = document.getElementsByName('occupation')[0].value;
    let weapon = document.getElementsByName('weapon')[0].value;
    let cartoon = document.getElementsByName('cartoon')[0].checked;
    let character = {name, occupation, weapon, cartoon}
    charactersAPI.createOneRegister(character)
    .then(() => console.log('hola'))
    .catch(e => console.log(e));
  }
});


const showCharacters = characters => {
  let container = document.getElementsByClassName('characters-container')[0];
  //Problema aqui. La longitud de initialInfo es 1, mientras que initialInfo es un HTMLCollection de 4 elementos. Sin embargo, initialInfo[1] es undefined.
  //Pienso que este problema está impidiendo que se eliminen los info de los personajes correctamente.
  const intialInfo = document.getElementsByClassName('character-info');
  console.log(intialInfo);  
  console.log(intialInfo[1]);
  console.log(intialInfo.length);
  for(let i = 0; i < intialInfo.length; i++){
    container.removeChild(intialInfo[i]);
  }
  //Hasta aqui
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