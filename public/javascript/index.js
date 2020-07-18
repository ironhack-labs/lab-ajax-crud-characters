const charactersAPI = new APIHandler('http://localhost:8000/');

const renderOnDom = (characters) => {
  const parentChar = document.getElementById('characters-container')
  parentChar.innerHTML = ''
  if (characters.length) {
    characters.forEach(character => {
      const newChild = `<div class="character-info">
          <div class="name">Name: ${character.name}</div>
          <div class="occupation">Occupation: ${character.occupation}</div>
          <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
          <div class="weapon">Weapon: ${character.weapon}</div>
        </div>
      `
      parentChar.innerHTML += newChild
    });
  } else {
    const newChild = `<div class="character-info">
          <div class="name">Name: ${characters.name}</div>
          <div class="occupation">Occupation: ${characters.occupation}</div>
          <div class="cartoon">Is a Cartoon?: ${characters.cartoon}</div>
          <div class="weapon">Weapon: ${characters.weapon}</div>
        </div>
      `
      parentChar.innerHTML += newChild
  }
}
const getDataFormNew = (form) => {
  const allInputs = form.querySelectorAll('input')
  const newCha = {
      name: allInputs[0].value,
      occupation: allInputs[1].value,
      weapon: allInputs[2].value,
      cartoon: allInputs[3].checked
  }
  return newCha
}

const getDataFormEdit = (form) => {
  const allInputs = form.querySelectorAll('input')
  const editCha = {
      id: allInputs[0].value,
      name: allInputs[1].value,
      occupation: allInputs[2].value,
      weapon: allInputs[3].value,
      cartoon: allInputs[4].checked
  }
  return editCha
}

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then(characters => renderOnDom(characters))
      .catch(err => console.error(err))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.getOneRegister(document.getElementById('character-id').value)
      .then(character => renderOnDom(character))
      .catch(err => console.error(err))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister(document.getElementById('character-id-delete').value)
    .then(() => this.classList.add('success'))
    .catch(() => this.classList.add('error'))
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    charactersAPI.updateOneRegister(getDataFormEdit(this))
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    charactersAPI.createOneRegister(getDataFormNew(this))
  });
});
