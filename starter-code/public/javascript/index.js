import APIHandler from './APIHandler.js'
const charactersAPI = new APIHandler('http://localhost:8000', 'characters');

const charactersContainer = document.body.querySelector(".characters-container");

const btnFetchAll  = document.getElementById('fetch-all');
const btnFetchOne  = document.getElementById('fetch-one');
const btnDeleteOne = document.getElementById('delete-one');
const btnCreateOne = document.getElementById('new-character-btn');
const btnEditOne   = document.getElementById('edit-character-btn');
const createForm   = document.getElementById('new-character-form');
const editForm     = document.getElementById('edit-character-form');

// ID GENERATION
let generatedIds = null;
function generateId() {
  // First time
  if ( generatedIds == null ) {

    // Start with last id in db.json
    return charactersAPI.getAll()
            .then(response => {
              let lastId = response.data.pop().id;
              generatedIds = lastId + 1;
              return generatedIds;
            })
  } else {
    // Increment and return
    return ++generatedIds;
  }
}

function setButtonState(buttonElement, successful) {
  buttonElement.classList.remove('success');
  buttonElement.classList.remove('error');
  buttonElement.classList.add(successful ? 'success' : 'error');
}

function clearCharactersContainer() {
  charactersContainer.innerHTML = '';
}

function generateCharacter(character) {

  const template = `
  <div class="character-info">
    <div class="id"><span>ID : </span>${character.id}</div>
    <div class="name"><span>Nom : </span>${character.name}</div>
    <div class="occupation"><span>Occupation : </span>${character.occupation}</div>
    <div class="weapon"><span>Weapon : </span>${character.weapon}</div>
    <div class="cartoon"><span>Is a Cartoon ? </span>${character.cartoon}</div>
  </div>`;

  charactersContainer.innerHTML += template;

}

btnFetchAll.addEventListener('click', function (event) {

  clearCharactersContainer();

  charactersAPI.getAll()
    .then(response => {
      response.data.forEach(character => {
        generateCharacter(character)
      })
    })

});

btnFetchOne.addEventListener('click', function (event) {

  const charId = parseInt(document.getElementById('fetch-one-input').value, 10);

  clearCharactersContainer();

  charactersAPI.getOne(charId)
    .then(response => {
      setButtonState(btnFetchOne, true);
      generateCharacter(response.data)
    }).catch(err => {
      console.log(err);
      setButtonState(btnFetchOne, false);
    })

});

btnDeleteOne.addEventListener('click', function (event) {
  const charId = parseInt(document.getElementById('delete-one-input').value, 10);
  charactersAPI.deleteOne(charId)
    .then(response => {
      console.log("Successfuly deleted char id : ", charId);
      setButtonState(btnDeleteOne, true);
    }).catch(err => {
      console.log(err);
      setButtonState(btnDeleteOne, false);
    })
});

createForm.addEventListener('submit', async function (event) {
  event.preventDefault();
  const formData = new FormData(createForm);
  const newId    = await generateId();

  const newChar = {
    id         : newId,
    name       : formData.get('name'),
    occupation : formData.get('occupation'),
    weapon     : formData.get('weapon'),
    cartoon    : !!formData.get('cartoon') ? true : false
  }

  console.log("New character : ", newChar)

  charactersAPI.createOne(newChar)
    .then(response => {
      console.log("Successfuly created character");
      setButtonState(btnCreateOne, true);
    }).catch(err => {
      console.log(err);
      setButtonState(btnCreateOne, false);
    })

});

editForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(editForm);
  const charId   = formData.get('charId');

  const updateValues = {
    name       : formData.get('name'),
    occupation : formData.get('occupation'),
    weapon     : formData.get('weapon'),
    cartoon    : !!formData.get('cartoon') ? true : false
  }

  charactersAPI.updateOne(charId, updateValues)
    .then(response => {
      console.log("Successfuly updated character");
      setButtonState(btnEditOne, true);
    }).catch(err => {
      console.log(err);
      setButtonState(btnEditOne, false);
    })

});
