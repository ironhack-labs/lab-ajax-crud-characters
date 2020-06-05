const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList().then(data => {
      let str = '';
      data.forEach(character => {
        str += `
       <div class="character-info">
         <div class="name"><b>Name: </b>${character.name}</div>
         <div class="occupation"><b>Occupation: </b>${character.occupation}</div>
         <div class="cartoon"><b>Is a Cartoon? </b>${character.cartoon}</div>
         <div class="weapon"><b>Weapon: </b>${character.weapon}</div>
       </div>
   `;
      });
      document.getElementsByClassName('characters-container')[0].innerHTML = str;
      document.getElementById('fetch-all').className = "green-button";
    }).catch(err => {
      document.getElementById('fetch-all').className = "red-button";
    });
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.getOneRegister(document.getElementsByName("character-id")[0].value).then(character => {
      let str = '';
      str += `
        <div class="character-info">
          <div class="name"><b>Name: </b>${character.name}</div>
          <div class="occupation"><b>Occupation: </b>${character.occupation}</div>
          <div class="cartoon"><b>Is a Cartoon? </b>${character.cartoon}</div>
          <div class="weapon"><b>Weapon: </b>${character.weapon}</div>
        </div>
    `;
      document.getElementsByClassName('characters-container')[0].innerHTML = str;
      document.getElementById('fetch-one').className = "green-button";
    }).catch(err => {
      document.getElementById('fetch-one').className = "red-button";
    });
    document.getElementById('char-id').value="";
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister(document.getElementsByName("character-id-delete")[0].value)
      .then(data => {
        document.getElementById('delete-one').className = "green-button";
        document.getElementsByName('character-id-delete')[0].innerText = "";
      }).catch(err => {
        document.getElementById('delete-one').className = "red-button";
      });
      document.getElementById('del-char-id').value="";
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const id = document.getElementsByName('chr-id')[0].value;
    const name = document.getElementById('update-name').value;
    const occupation = document.getElementById('update-occupation').value;
    const weapon = document.getElementById('update-weapon').value;
    const cartoon = document.getElementById('update-cartoon').checked;
    const updateCharacterInfo = {
      id,
      name,
      occupation,
      weapon,
      cartoon
    };
    console.log('Update character: ', updateCharacterInfo);
    charactersAPI.updateOneRegister(updateCharacterInfo, id)
    .then(data => {
      document.getElementById('update-data').className = "green-button";
    }).catch(err => {
      document.getElementById('update-data').className = "red-button";
    });
    document.getElementById('edit-character-form').reset();


  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementsByName('name')[0].value;
    const occupation = document.getElementsByName('occupation')[0].value;
    const weapon = document.getElementsByName('weapon')[0].value;
    const cartoon = document.getElementsByName('cartoon')[0].checked;

    const newCharacterInfo = {
      name,
      occupation,
      weapon,
      cartoon
    };

    console.log('New character: ', newCharacterInfo);
    charactersAPI.createOneRegister(newCharacterInfo)
    .then(data => {
      document.getElementById('send-data').className = "green-button";
    }).catch(err => {
      document.getElementById('send-data').className = "red-button";
    });
    document.getElementById('new-character-form').reset();
  });
});