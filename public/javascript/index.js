const charactersAPI = new APIHandler('http://localhost:8000');

//fetch - delete input
const inputFetchOne = document.getElementById('fetch-input');
const inputDeleteOne = document.getElementById('delete-input');

//create inputs
const nameCreateInput = document.getElementById('create-name');
const occupationCreateInput = document.getElementById('create-occupation');
const weaponCreateInput = document.getElementById('create-weapon');
const isCartoonCreateInput = document.getElementById('create-cartoon');

//card parents of cards 
const cardContainer = document.getElementById('characters-container');

//update inputs
const idUpdateInput = document.getElementById('update-id');
const nameUpdateInput = document.getElementById('update-name');
const occupationUpdateInput = document.getElementById('update-occupation');
const weaponUpdateInput = document.getElementById('update-weapon');
const isCartoonUpdateInput = document.getElementById('update-cartoon');

window.addEventListener('load', () => {

  document.getElementById('fetch-all')
  .addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then(apiRes => {
      console.log(apiRes.data);
      apiRes.data.forEach(result => {
        cardContainer.innerHTML += `
        <div class="character-info">
        <div class="name">Character ID : ${result.id}</div>
          <div class="name">Character Name : ${result.name}</div>
          <div class="occupation">Character Occupation : ${result.occupation}</div>
          <div class="cartoon">Is a Cartoon? : ${result.cartoon ? "yes" : "no"}</div>
          <div class="weapon">Character Weapon : ${result.weapon}</div>
        </div>
        `
      })
    })
    .catch(err => {
      console.log(err);
    })
  });

  document.getElementById('fetch-one')
  .addEventListener('click', function (event) {
    charactersAPI.getOneRegister(inputFetchOne.value)
    .then(apiRes => {
      console.log(apiRes.data);
      cardContainer.innerHTML = `
      <div class="character-info">
        <div class="name">Character ID : ${apiRes.data.id}</div>
        <div class="name">Character Name : ${apiRes.data.name}</div>
        <div class="occupation">Character Occupation : ${apiRes.data.occupation}</div>
        <div class="cartoon">Is a Cartoon? : ${apiRes.data.cartoon ? "yes" : "no"}</div>
        <div class="weapon">Character Weapon : ${apiRes.data.weapon}</div>
      </div>
      `
    })
    .catch(err => {
      console.log(err);
    })
  });

  document.getElementById('delete-one')
  .addEventListener('click', function (event) {
    event.preventDefault();
    // event.stopImmediatePropagation();
    charactersAPI.deleteOneRegister(inputDeleteOne.value)
    .then(apiRes => {
      console.log(apiRes.data);
    })
    .catch(err => {
      console.log(err);
    });
  });

  document.getElementById('edit-character-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    charactersAPI.updateOneRegister(idUpdateInput.value, {
      "name": nameUpdateInput.value,
      "occupation": occupationUpdateInput.value,
      "weapon": weaponUpdateInput.value,
      "cartoon": isCartoonUpdateInput.checked
    })
    .then(apiRes => console.log(apiRes))
    .catch(err => console.log(err));
  });

  document.getElementById('new-character-form')
  .addEventListener('submit', function (event) {
    //this event.preventDefault doesn't seem to work not sure why
    event.preventDefault();
    charactersAPI.createOneRegister({
      "name": nameCreateInput.value,
      "occupation": occupationCreateInput.value,
      "weapon": weaponCreateInput.value,
      "cartoon": isCartoonCreateInput.checked
    })
    .then(apiRes => {
      console.log(apiRes)})
    .catch(err => {
      console.log(err);
    });
  });
});
