
const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
  
      const characters = await charactersAPI.getFullList()
      console.log(characters.data)
    });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const inputId = document.getElementsByName("character-id")
    const id = inputId[0].value
   charactersAPI.getOneRegister(id)
     .then(response => {
       const charName = document.getElementsByClassName("name")
       charName[0].innerText += response.data.name
     })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
