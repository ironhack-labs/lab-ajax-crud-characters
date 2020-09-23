const charactersAPI = new APIHandler('http://localhost:8000/characters');
const containerCharacters = document.querySelector('.characters-container');

const btnCreate = document.querySelector('#new-character-form #send-data');
const btnDelete = document.getElementById('delete-one');
const btnUpdate = document.querySelector('#edit-character-form #send-data');
const btnFetchOne = document.getElementById('fetch-one');
const btnFetchAll = document.getElementById('fetch-all');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI.getFullList()
      .then((responseApi) => {
        //console.log(responseApi);
        containerCharacters.innerHTML = "";
        animBtn(btnFetchOne, 'bg-green');
        responseApi.data.forEach(element => {
          createCaracter(element);
        });

      }).catch((errApi) => {
        animBtn(btnFetchOne, 'bg-red');
        console.log(errApi);
      });
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault();

    const input = document.querySelector('input[name=character-id]');
    const value = input.value;
    console.log(value);

    if (!value) {
      return;
    }

    charactersAPI.getOneRegister(value).then(responseApi => {
      console.log(responseApi);
      containerCharacters.innerHTML = "";
      input.value = '';
      animBtn(btnFetchOne, 'bg-green');
      createCaracter(responseApi.data);
    }).catch((errApi) => {

      animBtn(btnFetchOne, 'bg-red');
      console.log(errApi);
    });

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();

    const input = document.querySelector('input[name=character-id-delete]');
    const value = input.value;
    console.log(value);

    if (value) {
      charactersAPI.deleteOneRegister(value).then(responseApi => {
          console.log(responseApi);
          containerCharacters.innerHTML = "";
          input.value = '';
          console.log(value);
        })
        .then(() => {
          charactersAPI.getFullList()
            .then((responseApi) => {
              //console.log(responseApi);
              responseApi.data.forEach(element => {
                createCaracter(element);
              });
              animBtn(btnDelete, 'bg-green');

            }).catch((errApi) => {
              animBtn(btnDelete, 'bg-red');
              console.log(errApi);
            });
        }).catch((errApi) => {
          animBtn(btnDelete, 'bg-red');
          console.log(errApi);
        });
    }
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const inputForId = document.querySelector('input[name="chr-id"]');
    const value = inputForId.value;

    const inputs = document.querySelectorAll('#edit-character-form input');

    if (value == '') {
      animBtn(btnUpdate, 'bg-red');
      return;
    }
    const data = getAllInputsValue(inputs);

    charactersAPI.getOneRegister(value)
      .then(responseApi => {
        console.log(responseApi);
        charactersAPI.updateOneRegister(value, data)
          .then(responseApi => {
            console.log(responseApi);
            const characterToUpdate = document.querySelector(`.character-info[data-character-id=\"${value}\"]`);
            if (characterToUpdate) {
              data.id = value;
              updateCharater(characterToUpdate, data);
            }
            animBtn(btnUpdate, 'bg-green');
          }).catch(errApi => {
            console.log(errApi);
            animBtn(btnUpdate, 'bg-red');
          });
      }).catch((errApi) => {
        inputForId.value = '';
        animBtn(btnUpdate, 'bg-red');
        console.log(errApi);
      }).finally(() => {
        resetInputsValue(inputs);
      });

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formId = event.target.id;
    const inputs = document.querySelectorAll("#new-character-form input");

    const data = getAllInputsValue(inputs);

    if (!data) {
      return;
    }

    charactersAPI.createOneRegister(data)
      .then((responseApi) => {
        console.log(responseApi);
        animBtn(btnCreate, 'bg-green');

      }).catch(errApi => {
        console.log(errApi);
        animBtn(btnCreate, 'bg-red');
      }).finally(() => {
        resetInputsValue(inputs);
      });
  });

  function createCaracter(element) {
    // console.log('create carac fct');

    const {
      id,
      name,
      weapon,
      cartoon,
      occupation
    } = element;

    containerCharacters.innerHTML += `<div class="character-info" data-character-id=${id}>
      <div class="id">Id: <span>${id}</sapn></div>  
      <div class="name">Name: <span>${name}</sapn></div>
      <div class="occupation">Occupation: <span>${occupation}</span></div>
      <div class="cartoon">Is cartoon: <span>${cartoon}</span></div>
      <div class="weapon">Weapon: <span>${weapon}<span></div>
    </div>`;
  }



  function getAllInputsValue(inputs) {
    const data = {};
    inputs.forEach((e) => {
      if (e.name === 'cartoon') {
        data[e.name] = e.checked;
      } else {
        data[e.name] = e.value;
      }
    });
    return data;
  }

  function removeClassAfterTimeOut(target, classname) {
    setTimeout(() => {
      target.classList.remove(`${classname}`);
    }, 800);
  }

  function animBtn(target, classname) {
    target.classList.add(`${classname}`);
    removeClassAfterTimeOut(target, classname);
  }

  function resetInputsValue(inputs) {
    inputs.forEach(e => {
      if (e.name == 'cartoon') {
        e.checked = false;
      } else {
        e.value = "";
      }
    });
  }

  function updateCharater(target, data) {
    console.log('updateCharac');
    const {
      id,
      name,
      weapon,
      cartoon,
      occupation
    } = data;
    target.innerHTML = '';
    target.innerHTML += `
      <div class="id">Id: <span>${id}</sapn></div>  
      <div class="name">Name: <span>${name}</sapn></div>
      <div class="occupation">Occupation: <span>${occupation}</span></div>
      <div class="cartoon">Is cartoon: <span>${cartoon}</span></div>
      <div class="weapon">Weapon: <span>${weapon}<span></div>
    `;

  }

});