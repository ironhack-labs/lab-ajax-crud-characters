const charactersAPI = new APIHandler('http://localhost:8000');
const charactersContainer = document.querySelector('.characters-container')
const notification = document.querySelector('.notificacion')

const cleanCards = () => {
  charactersContainer.innerHTML = ""
}

const showNotification = (msg) => {
  notification.innerHTML = msg
  notification.style.display = 'block'
  setTimeout(() => {
    notification.style.display = 'none'
  }, 5000)
}

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    cleanCards()
    charactersAPI
      .getFullList()
      .then((res) => {
          if(res.data.length <= 0){
            showNotification('No hay characters para mostrar')
          } else {
            res.data.forEach(e => {
              let element = document.createElement("div");
              element.className = "character-info";
              element.innerHTML = `
                <div class="name"><b>Name:</b> ${e.name}</div>
                <div class="occupation"><b>Occupation:</b> ${e.occupation}</div>
                <div class="cartoon"><b>Cartoon:</b> ${e.cartoon}</div>
                <div class="weapon"><b>Weapon:</b> ${e.weapon}</div>
              `
              charactersContainer.appendChild(element)
            });
          }
      })
      .catch(e => showNotification(e))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let characterId = document.getElementById('character_id').value
    cleanCards()
    charactersAPI
      .getOneRegister(characterId)
      .then(res => {
          if(res.data.length <= 0){
            showNotification('No hay characters para mostrar')
          } else {
            let element = document.createElement("div");
            element.className = "character-info";
            element.innerHTML = `
              <div class="name"><b>Name:</b> ${res.data.name}</div>
              <div class="occupation"><b>Occupation:</b> ${res.data.occupation}</div>
              <div class="cartoon"><b>Cartoon:</b> ${res.data.cartoon}</div>
              <div class="weapon"><b>Weapon:</b> ${res.data.weapon}</div>
            `
            charactersContainer.appendChild(element)
          }
      })
      .catch(e => showNotification(e))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let characterId = document.getElementById('character_to_delete').value

    if(characterId === '' || characterId === undefined){
      showNotification('Elige un character para eliminar')
    } else {
      charactersAPI
      .deleteOneRegister(characterId)
      .then(() => {
        showNotification('Character eliminado correctamente')
      })
      .catch(e => { showNotification(e) })
    }
    
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()

    const editCharacter = {
      id: event.target[0].value,
      name: event.target[1].value,
      occupation: event.target[2].value,
      weapon: event.target[3].value,
      cartoon: event.target[4].checked
    }

    charactersAPI
      .updateOneRegister(event.target[0].value, editCharacter)
      .then(res => {
        showNotification('Character editado correctamente')
      })
      .catch(e => { showNotification(e) })
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
        showNotification('Character creado correctamente')
      })
      .catch(e => { showNotification(e) })

  });
});
