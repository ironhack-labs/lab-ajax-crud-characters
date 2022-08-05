const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {

  const getall = document.getElementById('fetch-all').addEventListener('click', function (event) {
  charactersAPI
  .getFullList()
  .then((response) => {
    const data = response.data;

    data.forEach((character) => {
      const div = document.createElement("div");
      div.innerHTML = `
      <div class="character-info">
        <div class="name">${character.name}</div>
        <div class="occupation">${character.occupation}</div>
        <div class="cartoon">${character.cartoon}</div>
        <div class="weapon">${character.weapon}</div>
      </div>
      `
      const target = document.querySelector(".characters-container")
      target.appendChild(div)
    })

  })
  .catch((err) => console.log(err))

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
  let occupation = document.querySelector('#new-character-form input[name="occupation"]').value;
  let name = document.querySelector('#new-character-form input[name="name"]').value;
  let weapon = document.querySelector('#new-character-form input[name="weapon"]').value;
  let cartoon = document.querySelector('#new-character-form input[name="cartoon"]').value;

  
  const userInput = document.getElementById('character-id').value;
  charactersAPI.getOneRegister(userInput)
  target.appendChild(div);
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
  const userdelete = document.getElementById('character-id-delete').value;
  charactersAPI.deleteOneRegister(userdelete);
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const useredit = document.getElementById('new-character-form').value;
    charactersAPI.updateOneRegister(useredit);
    event.preventDefault()
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()

    const usernew = document.getElementById('edit-character-form').value;
    charactersAPI.createOneRegister(usernew);
    
  });
});