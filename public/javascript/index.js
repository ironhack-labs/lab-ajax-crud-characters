const charactersAPI = new APIHandler('http://localhost:8000');

function renderCharacters(characters){

  const container = document.querySelector(".characters-container")
  container.innerHTML="";

    if(characters.length == undefined){
      console.log("Undefined");
      container.innerHTML =
      `<div class="character-info">
      <div class="name">Character Name
      ${characters.name}
      </div>
      <div class="occupation">Character Occupation
      ${characters.occupation}
      </div>
      <div class="cartoon">Is a Cartoon?
      ${characters.cartoon}
      </div>
      <div class="weapon">Character Weapon
      ${characters.weapon}
      </div>
      <div class="id">Character Id
      ${characters.id}
      </div>
    </div>`
    } else {
      characters.forEach(character =>{
        container.innerHTML +=
          `<div class="character-info">
          <div class="name">Character Name
          ${character.name}
          </div>
          <div class="occupation">Character Occupation
          ${character.occupation}
          </div>
          <div class="cartoon">Is a Cartoon?
          ${character.cartoon}
          </div>
          <div class="weapon">Character Weapon
          ${character.weapon}
          </div>
          <div class="id">Character Id
          ${character.id}
          </div>
        </div>`
        })
    }


}

window.addEventListener('load', () => {

//-------------------------------All fetch-----------------------//
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    const charactersArr = await charactersAPI.getFullList()
  
    renderCharacters(charactersArr)
    
  });
//------------------One character render-------------------------------//
  document.getElementById('fetch-one').addEventListener('click', async function (event) {
  
  const inputIdValue = document.querySelector(".operation > input").value

  const character = await charactersAPI.getOneRegister(inputIdValue)
 
  renderCharacters(character)

  });
//------------------------Delete One-----------------------------------------//
  document.getElementById('delete-one').addEventListener('click', async function (event) {
    event.preventDefault()

 const inputIdValue = document.querySelector(".operation-delete > input").value

 const deleteOne = await charactersAPI.deleteOneRegister(inputIdValue)

 const charactersArr = await charactersAPI.getFullList()
  
  renderCharacters(charactersArr)


  });
//------------------------Edit One-----------------------------------------//
  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
  event.preventDefault()
  
  const{value:id}=document.querySelector("#idEditCharacter")

  const editCharacter = await charactersAPI.updateOneRegister(id)

  const charactersArr = await charactersAPI.getFullList()
  
  renderCharacters(charactersArr)

  });

//------------------------New One-----------------------------------------//
  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    event.preventDefault()
    
    const newCharacter = await charactersAPI.createOneRegister()

    const charactersArr = await charactersAPI.getFullList()
  
    renderCharacters(charactersArr)
    
  });
});
