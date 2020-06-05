const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault();
    charactersAPI.getFullList()
      .then(response => {
        let fullList = '';
        response.forEach(data => {
          fullList += `
          <div class="character-info">
            <div class="id">Id: ${data.id}</div>
            <div class="name">Character Name: ${data.name}</div>
            <div class="occupation">Character Occupation: ${data.occupation}</div>
            <div class="cartoon">Is a Cartoon?: ${data.cartoon}</div>
            <div class="weapon">Character Weapon: ${data.weapon}</div>
          </div>
          `
        })
        document.getElementsByClassName("characters-container")[0].innerHTML = fullList;
      })
      .catch(err => console.log(`Error when showing the characters list: ${err}`))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault();
    charactersAPI.getOneRegister(document.getElementsByName('character-id')[0].value)
      .then(data => {
        let characterInfo = `
        <div class="character-info">
          <div class="id">Id: ${data.id}</div>
          <div class="name">Character Name: ${data.name}</div>
          <div class="occupation">Character Occupation: ${data.occupation}</div>
          <div class="cartoon">Is a Cartoon?: ${data.cartoon}</div>
          <div class="weapon">Character Weapon: ${data.weapon}</div>
        </div>
        `;
        document.getElementsByClassName("characters-container")[0].innerHTML = characterInfo;
        document.getElementsByName('character-id')[0].value = '';
      })
      .catch(err => console.log(`Error when showing the characters list: ${err}`))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    charactersAPI.deleteOneRegister(document.getElementsByName('character-id-delete')[0].value)
      .then(() => {
        document.getElementById("delete-one").style.backgroundColor = "green"
        document.getElementsByName('character-id-delete')[0].value = '';
      })
      .catch(err => {
        document.getElementById("delete-one").style.backgroundColor = "red"
        document.getElementsByName('character-id-delete')[0].value = '';
      })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const id = document.getElementsByName('chr-id')[0].value;
    const name = document.getElementsByName('name')[1].value;
    const occupation = document.getElementsByName('occupation')[1].value;
    const weapon = document.getElementsByName('weapon')[1].value;
    const cartoon = document.getElementsByName('cartoon')[1].checked;

    const updatedInfo = {
      id,
      name,
      occupation,
      weapon,
      cartoon
    }
    charactersAPI.updateOneRegister(id, updatedInfo)
      .then(() => {
        document.getElementById("send-data-update").style.backgroundColor = "green";
      })
      .catch(err => {
        document.getElementById("send-data-update").style.backgroundColor = "red";
      })
  });

  document.getElementById("chr-id").addEventListener('input', function () {
    charactersAPI.getOneRegister(document.getElementById('chr-id').value)
      .then(data => {
        document.getElementsByName("name")[1].value = data.name;
        document.getElementsByName("occupation")[1].value = data.occupation;
        document.getElementsByName("weapon")[1].value = data.weapon;
        document.getElementsByName("cartoon")[1].checked = data.cartoon;
      })
      .catch(err => {
        console.log(`Error while prefilling the data to update: ${err}`)
      })
  })

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementsByName('name')[0].value;
    const occupation = document.getElementsByName('occupation')[0].value;
    const weapon = document.getElementsByName('weapon')[0].value;
    const cartoon = document.getElementsByName('cartoon')[0].checked;

    const createCharacter = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    }
    charactersAPI.createOneRegister(createCharacter)
      .then(() => {
        document.getElementById("send-data-create").style.backgroundColor = "green";
      })
      .catch(err => {
        document.getElementById("send-data-create").style.backgroundColor = "red";
      })
  });
});