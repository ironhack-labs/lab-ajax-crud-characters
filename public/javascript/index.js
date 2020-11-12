const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    const data = await charactersAPI.getFullList();
    charactersAPI.drawAll(data);
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    event.preventDefault();
    const $fetchInput = document.querySelector('input[name=character-id]');
    const id = $fetchInput.value;
    const data = await charactersAPI.getOneRegister(id);
    if (data) document.querySelector('#fetch-one').classList.add('active');
    else document.querySelector('#fetch-one').classList.add('wrong');
    setTimeout(() => document.querySelector('#fetch-one').classList.remove('active', 'wrong'), 1000)
    charactersAPI.drawAll([data]);
    $fetchInput.value = '';
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    event.preventDefault();
    const $deleteInput = document.querySelector('input[name=character-id-delete]');
    const id = $deleteInput.value;
    charactersAPI.deleteOneRegister(id)
      .then(e => document.querySelector('#delete-one').classList.add('active'))
      .catch(e => document.querySelector('#delete-one').classList.add('wrong'))
    setTimeout(() => document.querySelector('#delete-one').classList.remove('active', 'wrong'), 1000)

    const data = await charactersAPI.getFullList()
    charactersAPI.drawAll(data);
    $deleteInput.value = '';
  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const newCharacter = {
      name: event.target[1].value,
      occupation: event.target[2].value,
      weapon: event.target[3].value,
    };
    // Check if the user doesn't write all the form fields
    for (let key in newCharacter) { if (!newCharacter[key]) return };
    newCharacter.cartoon = event.target[4].checked; // Add the boolean value

    await charactersAPI.updateOneRegister(event.target[0].value, newCharacter)
      .then(e => document.querySelector('#send-data-update').classList.add('active'))
      .catch(e => document.querySelector('#send-data-update').classList.add('wrong'))
    setTimeout(() => document.querySelector('#send-data-update').classList.remove('active', 'wrong'), 1000)
    const data = await charactersAPI.getFullList()
    charactersAPI.drawAll(data);

    event.target[0].value = '';
    event.target[1].value = '';
    event.target[2].value = '';
    event.target[3].value = '';
    event.target[4].checked = false;
  });



  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const newCharacter = {
      name: event.target[0].value,
      occupation: event.target[1].value,
      weapon: event.target[2].value,
    };
    // Check if the user doesn't write all the form fields
    for (let key in newCharacter) { if (!newCharacter[key]) return };
    newCharacter.cartoon = event.target[3].checked; // Add the boolean value

    await charactersAPI.createOneRegister(newCharacter)
      .then(e => document.querySelector('#send-data-create').classList.add('active'))
      .catch(e => document.querySelector('#send-data-create').classList.add('wrong'))
    setTimeout(() => document.querySelector('#send-data-create').classList.remove('active', 'wrong'), 1000)

    const data = await charactersAPI.getFullList()
    charactersAPI.drawAll(data);

    event.target[0].value = '';
    event.target[1].value = '';
    event.target[2].value = '';
    event.target[3].checked = false;
  });

  document.querySelector('#edit-id').oninput = async e => {
    const data = await charactersAPI.getOneRegister(e.target.value);
    document.querySelector('#edit-name').value = data.name;
    document.querySelector('#edit-occupation').value = data.occupation;
    document.querySelector('#edit-weapon').value = data.weapon;
    document.querySelector('#edit-cartoon').checked = data.cartoon;
  }
});
