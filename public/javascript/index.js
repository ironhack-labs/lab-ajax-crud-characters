const charactersAPI = new APIHandler('http://localhost:8000/');

const buttonUX = (button, response) => {
  if (!response.status) {
    button.classList.remove('success')
    button.classList.add('error')
    setTimeout(() => {
      button.classList.remove('error')
    }, 1500);
    return
  }
  button.classList.remove('error')
  button.classList.add('success')
  setTimeout(() => {
    button.classList.remove('success')
  }, 1500);
}

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

const getDataForm = (form) => {
  const allInputs = form.querySelectorAll('input')
  const character = {}
  if (allInputs[0].getAttribute('name') === 'chr-id') {
    character.id = allInputs[0].value
    character.name = allInputs[1].value
    character.occupation = allInputs[2].value
    character.weapon = allInputs[3].value
    character.cartoon = allInputs[4].checked
  } else {
    character.name = allInputs[0].value
    character.occupation = allInputs[1].value
    character.weapon = allInputs[2].value
    character.cartoon = allInputs[3].checked
  }
  return character
}


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then(characters => {
        if (characters.length !== 0) {
          renderOnDom(characters)
        } 
      })
      .catch(err => console.error(err))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.getOneRegister(document.getElementById('character-id').value)
      .then(character => renderOnDom(character))
      .catch(err => console.error(err))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister(document.getElementById('character-id-delete').value)
    .then(response => {
      buttonUX(this, response)
    })
    .catch((err) => console.log(err))
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    charactersAPI.updateOneRegister(getDataForm(this))
      .then(response => {
        buttonUX(event.submitter, response)
      })
      .catch((err) => console.log(err))
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {


    event.preventDefault()
    charactersAPI.createOneRegister(getDataForm(this))
      .then(response => {
        buttonUX(event.submitter, response)
      })
      .catch((err) => console.log(err))
  });
});
