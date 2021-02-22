const charactersAPI = new APIHandler('http://localhost:8000');

const charactersContainer = document.querySelector('.characters-container')
const characterIdInput = document.querySelector('#character-id')
const characterDeleteInput = document.querySelector('#character-id-delete')
const deleteButton = document.querySelector('#delete-one')
const createButton = document.querySelector('#send-data')
const editButton = document.querySelector('#update-data')


const clearCards = () => {
  charactersContainer.innerHTML = "";
};

const drawCards = (items) => {
  clearCards()
  items.forEach((item) => drawCard(item));
};

const drawCard = ({
  id,
  name,
  occupation,
  cartoon,
  weapon
}) => {
  charactersContainer.innerHTML += `<div class="character-info">
      <div class="id">Id: ${id}</div>
      <div class="name">Name: ${name}</div>
      <div class="occupation">Occupation: ${occupation}</div>
      <div class="cartoon">Cartoon: ${cartoon}</div>
      <div class="weapon">Weapon: ${weapon}</div>
      </div>`
}

const renderAll = () => {
  charactersAPI
    .getFullList()
    .then((res) => {
      console.log(res.data)
      drawCards(res.data)
    })
    .catch((e) => console.log(e))
}

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    renderAll()
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    clearCards()
    characterId = characterIdInput.value
    charactersAPI
      .getOneRegister(characterId)
      .then((res) => {
        console.log(res.data)
        drawCard(res.data)
      })
      .catch((e) => console.log(e))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    characterIdDelete = characterDeleteInput.value
    console.log(characterIdDelete)
    charactersAPI
      .deleteOneRegister(characterIdDelete)
      .then((res) => {
        console.log(`${characterIdDelete}`)
        deleteButton.style.backgroundColor = "green"
        renderAll()
      })
      .catch((e) => {
        console.log(e)
        deleteButton.style.backgroundColor = "red"
      });
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()

    const editedCharacter = {
      id: event.target[0].value,
      name: event.target[1].value,
      occupation: event.target[2].value,
      weapon: event.target[3].value,
      cartoon: event.target[4].checked
    }
    charactersAPI.updateOneRegister(editedCharacter.id, editedCharacter)
      .then((res) => {
        console.log(res.data)
        editButton.style.backgroundColor = "green"
        renderAll()
      })
      .catch((e) => {
        console.log(e)
        editButton.style.backgroundColor = "red"
      })

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()

    const newCharacter = {
      name: event.target[0].value,
      occupation: event.target[1].value,
      weapon: event.target[2].value,
      cartoon: event.target[3].checked
    }

    charactersAPI
      .createOneRegister(newCharacter)
      .then(res => {
        console.log(res.data)
        createButton.style.backgroundColor = "green"
        renderAll()
      })
      .catch((e) => {
        console.log(e)
        createButton.style.backgroundColor = "red"
      });

  });
});
