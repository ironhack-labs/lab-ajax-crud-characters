const charactersAPI = new APIHandler('http://localhost:8000');

//buttons
const charsContainer = document.querySelector('.characters-container');
const btnFetchAll = document.getElementById('fetch-all');
const btnFetchOne = document.getElementById('fetch-one');
const btnDeleteOne = document.getElementById('delete-one');
const btnCreateOne = document.getElementById('new-character-form');
const btnEditOne = document.getElementById('edit-character-form');

//inputs
const formCreate = document.getElementById('new-character-form');
const inputName = formCreate.querySelector("input[name='name']");
const inputOccupation = formCreate.querySelector("input[name='occupation']");
const inputWeapon = formCreate.querySelector("input[name='weapon']");
const inputCartoon = formCreate.querySelector("input[name='cartoon']");

//edits
const formEdit = document.getElementById('edit-character-form');
const editId = formEdit.querySelector("input[name='chr-id']");
const editName = formEdit.querySelector("input[name='name']");
const editOccupation = formEdit.querySelector("input[name='occupation']");
const editWeapon = formEdit.querySelector("input[name='weapon']");
const editCartoon = formEdit.querySelector("input[name='cartoon']");

//Event handlers
window.addEventListener('load', () => {
  btnFetchAll.addEventListener('click', function (event) {
    fetchAllChars(event);
  });

  btnFetchOne.addEventListener('click', function (event) {
    fetchOneChar(event);
  });

  btnDeleteOne.addEventListener('click', function (event) {
    deleteOneChar(event);
  });

  btnEditOne.addEventListener('submit', function (event) {
    editOneChar(event);
  });

  btnCreateOne.addEventListener('submit', function (event) {
    createOneChar(event);
  });
});

//functions
/////iteration 3//////////
///////3.1 FETCH ALL CHARS//////
const createCharsCard = function (character) {
  return `<div class="character-info">
  <div class="id">
Id: <span>${character.id}</span>
  </div>
  <div class="name">
Character Name: <span>${character.name}</span>
  </div>
  <div class="occupation">
Occupation: <span>${character.occupation} </span>
  </div>
  <div class="cartoon">
Is a cartoon? <span>${character.cartoon} </span>
  </div>
  <div class="weapon">
Weapon: <span>${character.weapon}</span>
  </div>
  </div>`;
};

const fetchAllChars = function (event) {
  charactersAPI
    .getFullList()
    .then((apiRes) => {
      //console.log(apiRes.data);
      const characters = apiRes.data;
      charsContainer.innerHTML = '';
      characters.forEach((char) => {
        charsContainer.innerHTML += createCharsCard(char);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

////////////3.2 FETCH ONE CHAR////////////
const fetchOneChar = function (event) {
  const character = event.target.previousElementSibling;
  //console.log(character);
  const characterIdInput = character.value;
  charactersAPI
    .getOneRegister(characterIdInput)
    .then((apiRes) => {
      //console.log(apiRes.data);
      charsContainer.innerHTML = createCharsCard(apiRes.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

/////////3.3 DELETE ONE CHAR//////////
const deleteOneChar = function (event) {
  const characterIdDelete = event.target.previousElementSibling.value;
  //console.log(characterIdDelete);
  charactersAPI
    .deleteOneRegister(characterIdDelete)
    .then(() => {
      fetchAllChars();
      btnDeleteOne.style.backgroundColor = 'green';
    })
    .catch((err) => {
      console.log(err);
      btnDeleteOne.style.backgroundColor = 'red';
    });
};

/////////3.4 CREATE ONE CHAR//////////
const createOneChar = function (event) {
  //in a form, need to preventDefault, otherwise page will refresh every time when click on the button
  event.preventDefault();

  const newChar = {
    name: inputName.value,
    occupation: inputOccupation.value,
    weapon: inputWeapon.value,
    //cartoon is a checkbox!
    cartoon: inputCartoon.checked,
  };

  charactersAPI
    .createOneRegister(newChar)
    .then((apiRes) => {
      //console.log(apiRes);
      fetchAllChars();
      btnCreateOne.style.backgroundColor = 'green';
    })
    .catch((err) => {
      console.log(err);
      btnCreateOne.style.backgroundColor = 'red';
    });
};

/////////3.5 EDIT ONE CHAR//////////
const editOneChar = function (event) {
  event.preventDefault();

  const updateChar = {
    name: editName.value,
    occupation: editOccupation.value,
    weapon: editWeapon.value,
    cartoon: editCartoon.checked,
  };

  charactersAPI
    .updateOneRegister(editId.value, updateChar)
    .then((apiRes) => {
      //console.log(apiRes);
      fetchAllChars();
      btnEditOne.style.backgroundColor = 'green';
    })
    .catch((err) => {
      console.log(err);
      btnEditOne.style.backgroundColor = 'red';
    });
};
