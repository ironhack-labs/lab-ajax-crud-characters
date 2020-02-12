const charactersAPI = new APIHandler('http://localhost:8000');
let inputs = document.querySelectorAll("input");

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

      let charContainer = document.querySelector(`.characters-container`);
      charactersAPI.getFullList().then(character => {
        
        let characterArr = character.data;
        console.log(character.data);
        charContainer.innerHTML = ``;
        for (let i = 0; i < characterArr.length; i++) {
          let minion = `<div class="character-info">
    <div class=“name”>${characterArr[i].name}</div>
    <div class=“occupation”>${characterArr[i].occupation}</div>
    <div class=“cartoon”>${characterArr[i].cartoon}</div>
    <div class=“weapon”>${characterArr[i].weapon}</div>
  </div>`;
          charContainer.innerHTML += minion;
        }
      });
    });

    document.getElementById('fetch-one').addEventListener('click', function (event) {
      let charContainer = document.querySelector(`.characters-container`);
        let charId= document.querySelector('input[name=character-id]').value;
      charactersAPI.getOneRegister(charId).then(response => {
        let charOne = response.data;
        charContainer.innerHTML = '';
      charContainer.innerHTML = `<div class="character-info">
      <div class=“name”>${charOne.name}</div>
      <div class=“occupation”>${charOne.occupation}</div>
      <div class=“cartoon”>${charOne.cartoon}</div>
      <div class=“weapon”>${charOne.weapon}</div>´
    </div>`;

    })
          });
     
    


 
  
    document.getElementById('delete-one').addEventListener('click', function (event) {

      
      let charId = document.querySelector('input[name="character-id-delete"]').value;
      charactersAPI.deleteOneRegister(charId);
      console.log(charId);
  
    });
  
    document.getElementById('edit-character-form').addEventListener('submit', function (event){
      event.preventDefault();
      let idEdit = inputs[6].value;
      let updateCharacter = {
        name: inputs[7].value,
        occupation: inputs[8].value,
        weapon: inputs[9].value,
        cartoon: inputs[10].checked
      };
      charactersAPI.updateOneRegister(idEdit, updateCharacter);
    });

    document.getElementById("new-character-form").onsubmit = function(e) {
      e.preventDefault();
      let newCharacter = {
        name: inputs[2].value,
        occupation: inputs[3].value,
        weapon: inputs[4].value,
        cartoon: inputs[5].checked
      };
      charactersAPI.createOneRegister(newCharacter);
    };
  
    // document.getElementById('new-character-form').addEventListener('submit', function (event) {
    //   let name = document.querySelector('input[name="name"]').value
    //   let occupation = document.querySelector('input[name="occupation"]').value
    //   let weapon = document.querySelector('input[name="weapon"]').value
    //   let cartoon = document.querySelector("input[name=cartoon]").checked
    //   console.log(name)
    //   const characterInfo = {
    //     name: name,
    //     occupation: occupation,
    //     weapon: weapon,
    //     cartoon: cartoon ? 'Is a Cartoon' : 'Is Real'
    //   }
    //   charactersAPI.createOneRegister(characterInfo)
    // });

  
  

});
  



  


