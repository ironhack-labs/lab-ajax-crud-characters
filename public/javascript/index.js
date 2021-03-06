const charactersAPI = new APIHandler('http://localhost:8000');

const fetchAll = document.getElementById('fetch-all');

const fetchOneBtn = document.getElementById('fetch-one');
const fetchOneInput = document.getElementById('fetch-input');

const deleteOneBtn = document.getElementById('delete-one');
const deleteOneInput = document.getElementById('delete-one-input');

const createNew = document.getElementById('new-character-form');

const editCharacter = document.getElementById('edit-character-form')

const characterContainer = document.querySelector(".characters-container")

const showCharacters = function(characters) {

  characterContainer.innerHTML = ""
  if (characters.length>1) {
      characters.forEach(character => {
        characterContainer.innerHTML += `
            <div class="character-info">
            <div class="name">${character.name}</div>
            <div class="occupation">${character.occupation}</div>
            <div class="cartoon">${character.cartoon}</div>
            <div class="weapon">${character.weapon}</div>
            </div>
          `
      })
  } else {
    characterContainer.innerHTML = `
            <div class="character-info">
            <div class="name">${characters.name}</div>
            <div class="occupation">${characters.occupation}</div>
            <div class="cartoon">${characters.cartoon}</div>
            <div class="weapon">${characters.weapon}</div>
            </div>
          `
  }


}


window.addEventListener('load', () => {
  
  fetchAll.addEventListener('click', function (event) {
    
    charactersAPI.getFullList()
    .then((apiRes) => {showCharacters(apiRes.data)})
    .catch(function (error) {
      console.log(error);
    });
  });

  fetchOneBtn.addEventListener('click', function (event) {
    
    charactersAPI.getOneRegister(fetchOneInput.value)
    .then(dbRes => 
      // console.log(dbRes.data)
      showCharacters(dbRes.data)
    )
    .catch(function(error) {
      console.log(error);
    });

  });

  deleteOneBtn.addEventListener('click', async function (event) {
    
    try {
      await charactersAPI.deleteOneRegister(deleteOneInput.value)
      const characterList = await charactersAPI.getFullList()
      showCharacters(characterList.data)
     } catch (err) {
       console.log(err)
     }

  });

  editCharacter.addEventListener('submit',  async function (event) {
    event.preventDefault();
    let values = document.querySelectorAll("#edit-character-form input");
    let updateValue = {}
    let characterId

        values.forEach(value => {
          if (value.name === "chr-id") {
          characterId = value.value
        }  else if (value.name === "cartoon") {
          updateValue[value.name] = value.checked
        } else {
          updateValue[value.name] = value.value
        }
      })

        try {
        await charactersAPI.updateOneRegister(characterId, updateValue)
        const characterList = await charactersAPI.getFullList()
        showCharacters(characterList.data)
        } catch (err) {
          console.log(err)
        }

  });

  createNew.addEventListener('submit', async function (event) {
    
    event.preventDefault();
    let values = document.querySelectorAll("#new-character-form input");
    newCharacter = {};
    
      values.forEach(value => {
        if (value.name === "cartoon") {
        newCharacter[value.name] = value.checked
      } else {
        newCharacter[value.name] = value.value
      }
      })

    
      try {
        await charactersAPI.createOneRegister(newCharacter)
        const characterList = await charactersAPI.getFullList()
        showCharacters(characterList.data)
      } catch (err) {
        console.log(err)
      }
 

})
 

})
