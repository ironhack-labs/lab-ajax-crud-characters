const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    try {
      cleanCharacterInfo();

      const characters = await charactersAPI.getFullList();
      characters.forEach(element => {
        addCharacterInfo(element);
      });
    } catch (error) {
      console.log(error);
    }
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    try {
      const id = document.querySelector('#input-id-search').value;
      const character = await charactersAPI.getOneRegister(id);
      cleanCharacterInfo();
      addCharacterInfo(character);
    } catch (error) {
      console.log(error);
    }
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    try {
      const id = document.querySelector('#input-id-delete').value;
      await charactersAPI.deleteOneRegister(id);
      colorElement('green', event.target);
    } catch (error) {
      colorElement('red', event.target);
      console.log(error);
    }
  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    try {
      event.preventDefault();

      const formElements = event.currentTarget.elements;
      const bodyRequest = {};

      for (let i = 0; i < formElements.length; i++) {
        const { name, value } = formElements[i];
        if (name) bodyRequest[name] = value;
        if (name === 'cartoon') bodyRequest[name] = formElements[i].checked;
      }

      await charactersAPI.updateOneRegister(bodyRequest.id, bodyRequest);

      colorElement('green', document.querySelector('#edit-data'));
    } catch (error) {
      colorElement('red', document.querySelector('#edit-data'));
      console.log(error);
    }
  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    try {
      event.preventDefault();

      const formElements = event.currentTarget.elements;
      const bodyRequest = {};

      for (let i = 0; i < formElements.length; i++) {
        const { name, value } = formElements[i];
        if (name) bodyRequest[name] = value;
        if (name === 'cartoon') bodyRequest[name] = formElements[i].checked;
      }

      await charactersAPI.createOneRegister(bodyRequest);

      colorElement('green', document.querySelector('#send-data'));
    } catch (error) {
      colorElement('red', document.querySelector('#send-data'));
      console.log(error);
    }
  });
});

function cleanCharacterInfo() {
  document.querySelector('.characters-container').innerHTML = "";
}

function addCharacterInfo(element) {
  const div = document.createElement("div");
  div.classList.add('character-info');
  div.innerHTML = `
          <div class="id">id: <span>${element.id}</span></div>
          <div class="name">Name: <span>${element.name}</span></div>
          <div class="occupation">Occupation: <span>${element.occupation}</span></div>
          <div class="cartoon">Is a Cartoon?: <span>${element.cartoon}</span></div>
          <div class="weapon">Weapon: <span>${element.weapon}</span></div>`;

  document.querySelector('.characters-container').appendChild(div);
}

function colorElement(color, element) {
  element.style.backgroundColor = color;
}
