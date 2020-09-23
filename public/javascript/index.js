const charactersAPI = new APIHandler('http://localhost:8000/characters');
const charContainer = document.getElementById('characters-container')


const createCharacterCard = ({id, name, occupation, weapon, cartoon}) => {
  charContainer.innerHTML += `
  <div class="character-info">
    <div class="id">Id :<span>${id}</span></div>
    <div class="name">Name :<span>${name}</span></div>
    <div class="occupation">Occupation :<span>${occupation}</span></div>
    <div class="cartoon">Is a Cartoon?<span>${cartoon}</span></div>
    <div class="weapon">Weapon :<span>${weapon}</span></div>
  </div> 
  `
}

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (e) {
    e.preventDefault()
    charactersAPI
      .getFullList()
      .then(res => {
        charContainer.innerHTML = ''
        res.data.forEach(char => createCharacterCard(char))
      })
      .catch(err => console.error(err))
  });

  document.getElementById('fetch-one').addEventListener('click', function (e) {
    e.preventDefault()
    const id = document.querySelector('body > section:nth-child(3) > section > div:nth-child(2) > input[type=text]').value
    charactersAPI
      .getOneRegister(id)
      .then(res => {
        charContainer.innerHTML = ''
        createCharacterCard(res.data)
      })
      .catch(err => console.error(err))
  });

  document.getElementById('delete-one').addEventListener('click', function (e) {
    e.preventDefault()
    charContainer.innerHTML = ''
    const id = document.querySelector('body > section:nth-child(3) > section > div.operation.delete > input[type=text]').value
    charactersAPI
      .deleteOneRegister(id)
      .then(res => {
        if(res.statusText === 'OK') {
          document.getElementById('delete-one').classList.add('success')
          setTimeout(() => {
            document.getElementById('delete-one').classList.remove('success')
          }, 1000)
        }
      })
      .catch(err => {
        console.error(err)
        document.getElementById('delete-one').classList.add('failure')
          setTimeout(() => {
            document.getElementById('delete-one').classList.remove('failure')
          }, 1000)
      })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (e) {
    e.preventDefault()
    const [ id, name, occupation, weapon, cartoon ] = Array.from(document.querySelectorAll('#edit-character-form > div > input')).map(inpt => inpt.getAttribute('type') === 'checkbox' ? inpt.checked : inpt.value )
    
    charactersAPI
      .updateOneRegister(id, { name, occupation, weapon, cartoon })
        .then(res => {
          if (res.statusText === 'OK')  {
            document.getElementById('send-data2').classList.add('success')
            setTimeout(() => {
              document.getElementById('send-data2').classList.remove('success')
            }, 1000)
          }
        })
        .catch(err => {
          console.error(err)
          document.getElementById('send-data2').classList.add('failure')
          setTimeout(() => {
            document.getElementById('send-data2').classList.remove('failure')
          }, 1000)
        })

  });

  document.getElementById('new-character-form').addEventListener('submit', function (e) {
    e.preventDefault()
    const [ name, occupation, weapon, cartoon ] = Array.from(document.querySelectorAll('#new-character-form > div > input')).map(inpt => inpt.getAttribute('type') === 'checkbox' ? inpt.checked : inpt.value )

    charactersAPI
      .createOneRegister({ name, occupation, weapon, cartoon })
      .then(res => {
        if(res.statusText === 'Created'){
          document.getElementById('send-data').classList.add('success')
          setTimeout(() => {
            document.getElementById('send-data').classList.remove('success')
          }, 1000)
          Array.from(document.querySelectorAll('#new-character-form > div > input')).forEach(inpt => inpt.getAttribute('type') === 'checkbox' ? inpt.checked = false : inpt.value = '' )
        }
      })
      .catch(err => {
        console.error(err)
        document.getElementById('send-data').classList.add('failure')
        setTimeout(() => {
          document.getElementById('send-data').classList.remove('failure')
        }, 1000)
      })
  });
});
