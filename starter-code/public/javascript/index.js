const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');
const inputs = document.querySelectorAll('input')
const name = document.getElementsByClassName("name")[0]
const occupation = document.getElementsByClassName("occupation")[0]
const cartoon = document.getElementsByClassName("cartoon")[0]
const weapon = document.getElementsByClassName("weapon")[0]
window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault()
    charactersAPI.getFullList()
      .then(allCharacters => {
        allCharacters.forEach(element => {
          list.innerHTML += `<li>${element.name}</li>`
        });
      })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault()
    charactersAPI.getOneRegister()
    reset()

  })
  // //.then(x => resetInputs())
  // .catch(err => console.log("ha habido un error", err))
});

document.getElementById('delete-one').addEventListener('click', function (event) {
  event.preventDefault()
  charactersAPI.deleteOneRegister()
    .then(OneCharacters => {
      list2.innerHTML += `<li>${console.log(OneCharacters)}</li>`
    })
});

document.getElementById('edit-character-form').addEventListener('submit', function (event) {

});

document.getElementById('new-character-form').addEventListener('submit', function (event) {

});