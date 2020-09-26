const charactersAPI = new APIHandler('http://localhost:8000');
const container = document.querySelector(".characters-container");

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
      charactersAPI.getFullList()
      .then(response => {
        container.innerHTML = '';
        response.data.forEach(entry => {
          console.log(entry);
          container.innerHTML += `<div class="character-info">
          <div>Id: ${entry.id}</div>
          <div class="name">Name: ${entry.name}</div>
          <div class="occupation">Occupation: ${entry.occupation}</div>
          <div class="cartoon">Is a Cartoon?: ${entry.cartoon}</div>
          <div class="weapon">Weapon: ${entry.weapon}</div>
        </div>`
        } )
      })
      .catch(err => console.log(err));
      
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
      let input = document.querySelector('input[name=character-id]').value;
      if(input === '') {
        console.log('no input');
      } else {
      fetchOne(input);
  }
});

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const toBeDeleted = document.querySelector('input[name=character-id-delete').value;
    charactersAPI.deleteOneRegister(toBeDeleted)
    .then(() => {
      container.innerHTML = `<p>Character has been successfully deleted</p>`
      this.classList.add('success');
      console.log(this.classList);
      event.preventDefault();
    })
    .catch(err => {
      console.log(err);
      this.classList.add('failure');
      container.innerHTML = `<p>Character not found</p>`
    });
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const id = document.querySelector("#edit-character-form input[name=chr-id]").value;
    const name = document.querySelector('#edit-character-form input[name=name]').value;
    const occupation = document.querySelector('#edit-character-form input[name=occupation]').value;
    const weapon = document.querySelector('#edit-character-form input[name=weapon]').value;
    const cartoon = document.querySelector('#edit-character-form input[name=cartoon]').checked;
    const editBtn = document.getElementById('send-edit-data');

    charactersAPI.updateOneRegister(id, {name, occupation, weapon, cartoon})
    .then((response) => {
      console.log(response);
      container.innerHTML = `<p>Character has been successfully updated</p>`;
      editBtn.classList.add('success');
    })
    .catch(err => {
      console.log(err);
      container.innerHTML = `<p>Character not found</p>`;
      editBtn.classList.add('failure');
    }) 
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault();
    const name = document.querySelector('#new-character-form input[name=name]').value;
    const occupation = document.querySelector('#new-character-form input[name=occupation]').value;
    const weapon = document.querySelector('#new-character-form input[name=weapon]').value;
    const cartoon = document.querySelector('#new-character-form input[name=cartoon]').checked;
    const createBtn = document.getElementById('send-create-data');

    //const newCharacter = {name, occupation, weapon, cartoon};
    //console.log(newCharacter);
    charactersAPI.createOneRegister({name, occupation, weapon, cartoon})
    .then((response) => {
      console.log(response);
      createBtn.classList.add('success');
    })
    .catch(err => {
      console.log(err)
      createBtn.classList.add('failure');
    });
  });
});

function fetchOne(input) {
  charactersAPI.getOneRegister(input)
        .then(response => {
          container.innerHTML = `<div class="character-info">
          <div>Id: ${response.data.id}</div>
          <div class="name">Name: ${response.data.name}</div>
          <div class="occupation">Occupation: ${response.data.occupation}</div>
          <div class="cartoon">Is a Cartoon?: ${response.data.cartoon}</div>
          <div class="weapon">Weapon: ${response.data.weapon}</div>
        </div>`;
      })
      .catch(err => console.log(err));
};