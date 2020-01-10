const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getAllCharacters()
    .then(allChar => {
      console.log(allChar);
      
        let allCharHtml = "";
        for (let i=0; i<allChar.length; i++) {
          allCharHtml += `
            <div class="character-info">
              <div class="name">Id: ${allChar[i].id}</div>
              <div class="name">Name: ${allChar[i].name}</div>
              <div class="occupation">Occupation: ${allChar[i].occupation}</div>
              <div class="cartoon">Is a Cartoon?: ${allChar[i].cartoon}</div>
              <div class="weapon">Weapon: ${allChar[i].weapon}</div>
            </div>
          `;
        }
        document.querySelector('.characters-container').innerHTML = allCharHtml;  
    });
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
