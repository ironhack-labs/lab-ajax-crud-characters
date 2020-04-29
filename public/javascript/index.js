const charactersAPI = new APIHandler('http://localhost:8000');

// charactersAPI.getFullList();
//charactersAPI.getOneRegister(2);
// charactersAPI.createOneRegister({name: 'Hey', occupation:'unknown', cartoon: true, weapon: 'jokes'});
//charactersAPI.deleteOneRegister(11);
// charactersAPI.getFullList();

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then(response => {
        const data = response.data;
        console.log('getFullList() > response from API: ', data);
        
        document.querySelector('.characters-container').innerHTML = '';

        data.forEach(characterAPI => {
          const characterInfo = document.createElement('div');

          characterInfo.setAttribute("class", "character-info flex");

          characterInfo.innerHTML = `
            <div class="tags">
              <div class="id">Id: </div>
              <div class="name">Name: </div>
              <div class="occupation">Occupation: </div>
              <div class="cartoon">Is a Cartoon?:</div>
              <div class="weapon">Weapon:</div>
            </div>
            <div class="detail">
              <div class="getName">${characterAPI.id}</div>
              <div class="getName">${characterAPI.name}</div>
              <div class="getOccupation">${characterAPI.occupation}</div>
              <div class="getCartoon">${characterAPI.cartoon}</div>
              <div class="getWeapon">${characterAPI.weapon}</div>
            </div>
          `;
          document.querySelector('.characters-container').appendChild(characterInfo);
        });
      })
      .catch(err => console.log('error occurred', err));
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const characterId = document.getElementById('character-id').value;

    charactersAPI.getOneRegister(characterId)
      .then(response => {
        const characterData = response.data;
        console.log('getOneRegister() > response from API: ', characterData);

        document.querySelector('.characters-container').innerHTML = '';

        const characterInfo = document.createElement('div');

          characterInfo.setAttribute("class", "character-info flex");

          characterInfo.innerHTML = `
            <div class="tags">
              <div class="id">Id: </div>
              <div class="name">Name: </div>
              <div class="occupation">Occupation: </div>
              <div class="cartoon">Is a Cartoon?:</div>
              <div class="weapon">Weapon:</div>
            </div>
            <div class="detail">
              <div class="getId">${characterData.id}</div>
              <div class="getName">${characterData.name}</div>
              <div class="getOccupation">${characterData.occupation}</div>
              <div class="getCartoon">${characterData.cartoon}</div>
              <div class="getWeapon">${characterData.weapon}</div>
            </div>
          `;
          document.querySelector('.characters-container').appendChild(characterInfo);

          document.getElementById('character-id').value = '';

      })
      .catch(err => {
        console.log('error occurred', err);

        document.getElementById("fetch-one").style.backgroundColor = "red";
        document.getElementById("fetch-one").innerText = "Id doesn't exist!";

        setTimeout(() => {
          document.getElementById('character-id').value = '';
          document.getElementById("fetch-one").style.background = "none";
          document.getElementById("fetch-one").innerText = "Fetch one";
        }, 2000);
      });
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const characterId = document.getElementById('character-id-delete').value;

    charactersAPI.deleteOneRegister(characterId)
      .then(response => {
        const characterData = response.data;
        console.log('Character has been successfully deleted.');

        document.getElementById("delete-one").style.backgroundColor = "green";
        document.getElementById("delete-one").innerText = "Success!";

        document.querySelector('.characters-container').innerHTML = '';

        setTimeout(() => {
          document.getElementById('character-id-delete').value = '';
          document.getElementById("delete-one").style.background = "none";
          document.getElementById("delete-one").innerText = "Delete one";
        }, 2000);
      })
      .catch(err => {
        console.log('Character not found.');
        
        document.getElementById("delete-one").style.backgroundColor = "red";
        document.getElementById("delete-one").innerText = "Id doesn't exist!";

        setTimeout(() => {
          document.getElementById('character-id-delete').value = '';
          document.getElementById("delete-one").style.background = "none";
          document.getElementById("delete-one").innerText = "Delete one";
        }, 2000);
      });
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
