const charactersAPI = new APIHandler('http://localhost:8000');
const charactersContainer = document.querySelector('.characters-container');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').onclick = (e) => {
    e.preventDefault();
    charactersAPI
      .getFullList()
      .then((apiRes) => {
        charactersContainer.innerHTML = '';
        apiRes.data.forEach((e) => {
          charactersContainer.innerHTML += `
          <div class="character-info">
          <div class="name">Name: <span>${e.name}</span></div>
          <div class="occupation">Occupation: <span>${e.occupation}</span></div>
          <div class="cartoon">Is a Cartoon? <span>${e.cartoon}</span></div>
          <div class="weapon">Weapon: <span>${e.weapon}</span></div>
          <div>Id: <span>${e.id}</span></div>
          </div>`;
        });
      })
      .catch((err) => console.log(err));
  };

  document.getElementById('fetch-one').onclick = (e) => {
    e.preventDefault();
    const id = document.getElementById('search-input-id').value;
    charactersAPI
      .getOneRegister(id)
      .then((apiRes) => {
        const { name, occupation, cartoon, weapon } = apiRes.data;
        charactersContainer.innerHTML = '';
        charactersContainer.innerHTML += `
          <div class="character-info">
          <div class="name">Name: <span>${name}</span></div>
          <div class="occupation">Occupation: <span>${occupation}</span></div>
          <div class="cartoon">Is a Cartoon? <span>${cartoon}</span></div>
          <div class="weapon">Weapon: <span>${weapon}</span></div>
          </div>`;
      })
      .catch((err) => console.log(err));
  };

  document.getElementById('delete-one').onclick = (e) => {
    e.preventDefault();
    const id = document.getElementById('delete-input-id').value;
    charactersAPI
      .deleteOneRegister(id)
      .then(() => {
        document.getElementById('delete-one').style.backgroundColor = 'green';
      })
      .catch((err) => {
        console.log(err);
        document.getElementById('delete-one').style.backgroundColor = 'red';
      });
  };

  document.getElementById('edit-character-form').onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('edit-name').value;
    const occupation = document.getElementById('edit-occupation').value;
    const weapon = document.getElementById('edit-weapon').value;
    let cartoon = document.getElementById('edit-cartoon');
    cartoon.checked ? (cartoon = true) : (cartoon = false);
    const id = document.getElementById('edit-id').value;
    const character = { name, occupation, weapon, cartoon };
    charactersAPI
      .updateOneRegister(id, character)
      .then(() => {
        document.getElementById('send-data-edit').style.backgroundColor =
          'green';
      })
      .catch((err) => {
        console.log(err);
        document.getElementById('send-data-edit').style.backgroundColor = 'red';
      });
  };

  document.getElementById('new-character-form').onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('new-name').value;
    const occupation = document.getElementById('new-occupation').value;
    const weapon = document.getElementById('new-weapon').value;
    let cartoon = document.getElementById('new-cartoon');
    cartoon.checked ? (cartoon = true) : (cartoon = false);
    const character = { name, occupation, weapon, cartoon };
    charactersAPI
      .createOneRegister(character)
      .then(() => {
        document.getElementById('send-data').style.backgroundColor = 'green';
      })
      .catch((err) => {
        console.log(err);
        document.getElementById('send-data').style.backgroundColor = 'red';
      });
  };
});
