const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {


  document.getElementById('fetch-all').addEventListener('click', function (event) {
    document.getElementsByClassName('characters-container')[0].innerHTML=""
    charactersAPI.getFullList().then(apiRes => {
        apiRes.data.forEach(character => {
          document.getElementsByClassName('characters-container')[0].innerHTML += ` <div class="character-info">
        <div class="name"> Character name <span> ${character.name}</span></div>
        <div class="occupation">${character.occupation}</div>
        <div class="cartoon">${character.cartoon}</div>
        <div class="weapon">${character.weapon}</div>
      </div>`
        })
      })
      .catch((err) => {
        console.log(err)
      })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault()
    const idkey = document.querySelector("input[name='character-id']")
    charactersAPI.getOneRegister(idkey.value)
      .then(apiRes => {
        document.getElementsByClassName('characters-container')[0].innerHTML = ` <div class="character-info">
        <div class="name">${apiRes.data.name}</div>
        <div class="occupation">${apiRes.data.occupation}</div>
        <div class="cartoon">${apiRes.data.cartoon}</div>
        <div class="weapon">${apiRes.dataweapon}</div>
      </div>`
      })
      .catch((err) => {
        console.log(err)
      })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()
    const idkeydelete = document.querySelector("input[name='character-id-delete']")
    charactersAPI.deleteOneRegister(idkeydelete.value)
      .then(apiRes => {
        console.log(apiRes)
        document.getElementsByClassName('characters-container')[0].innerHTML = `<p>The character has been deleted</p>`
      }).catch((err) => {
        console.log(err)
      })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const editform = document.getElementById("edit-character-form")
    const idkeymodify = editform.querySelector("input[name='chr-id']").value
    const modifiedCharacter = {
      name: editform.querySelector("input[name='name']").value,
      occupation: editform.querySelector("input[name='occupation']").value,
      weapon: editform.querySelector("input[name='weapon']").value,
      cartoon: editform.querySelector("input[name='cartoon']").checked
    }
    
    charactersAPI.updateOneRegister(modifiedCharacter, idkeymodify)
      .then((apiRes) => {
        document.getElementsByClassName('characters-container')[0].innerHTML = `<p>${modifiedCharacter.name} has been created</p>`
        console.log(apiRes)
      })
      .catch((err) => {
        console.log(err)
      })
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const creationform = document.getElementById("new-character-form")
    const newCharacter = {
      name: creationform.querySelector("input[name='name']").value,
      occupation: creationform.querySelector("input[name='occupation']").value,
      weapon: creationform.querySelector("input[name='weapon']").value,
      cartoon: creationform.querySelector("input[name='cartoon']").checked
    }
    console.log(newCharacter.name)
    charactersAPI.createOneRegister(newCharacter)
      .then((apiRes) => {
        console.log(apiRes)
        document.getElementsByClassName('characters-container')[0].innerHTML = `<p>${newCharacter.name} has been created</p>`
      })
      .catch((err) => {
        console.log(err)
      })
  });
});