//const charactersAPI = new APIHandler('http://localhost:8000');
// console.log(charactersAPI);

window.addEventListener('load', () => {
    document.getElementById('fetch-all').addEventListener('click', function (event) {
   
    charactersAPI.getFullList()

      .then((apiRes) => {
          displayChars(apiRes.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const displayChars = (characters) => {
    const listChars = document.getElementById("fetch-all");

    listChars.innerHTML = "";
    characters.forEach((character) => {
      listChars.innerhTML += `<li> ${character.name} <button class="btn-update" data-id=${character.id}> Update</button></li>`
    });

  //  attachupdateListeners();

  };

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    


      })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    charactersAPI.getOneRegister(fetchOneInput.value)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
        const input = document.querySelector('[name="character-id"]')
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });

 //const charactersAPI = new APIHandler('http://localhost:8000');