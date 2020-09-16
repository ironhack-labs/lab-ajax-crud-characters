const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
      .getFullList()
      .then(getData => {
        ID = ''

        getData.data.forEach(elm => ID += ` <div class="character-info">
        <p>ID:${elm.id}</p>
        <p>name: ${elm.name}</p>
        <p>occupation:${elm.occupation}</p>
        <p>cartoon:${elm.cartoon}</p>
        <p>weapon:${elm.weapon}</p>
        </div>`)

        document.querySelector('.chartID').innerHTML = ID
        const display = document.querySelector('.display')
        display.style.display = 'block'
      })
      .catch(err => console.log(err))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const chartID = document.querySelector('.operations input').value

    charactersAPI
      .getOneRegister(chartID)
      .then(response => {

        const name = document.createElement('p')
        name.innerHTML = `<p>ID: ${response.data.id}<p/>

        <p>Name: ${response.data.name}<p/>
        <p>Occupation: ${response.data.occupation}<p/>
        <p>Cartoon: ${response.data.cartoon}<p/>
        <p>Weapon: ${response.data.weapon}<p/>`

        name.classList.add('character-info')
        const container = document.querySelector('.container')
        container.appendChild(name)
      })
      .catch(err => console.log(err))

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let chartId = document.querySelector('.delete input').value
    charactersAPI.deleteOneRegister(chartId)
      .then(response => {
        document.querySelector('.delete input').value = ''

        response.data._id
      })
      .catch(err => console.log(err))
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (e) {
    e.preventDefault()

    const characterId = document.querySelector('#edit-character-form input').value
    
    const inputs = document.querySelectorAll('#edit-character-form input')

    const editChart = {
      name: inputs[1].value,
      occupation: inputs[2].value,
      weapon: inputs[3].value,
      cartoon: inputs[4].checked
    }

    charactersAPI
      .updateOneRegister(characterId, editChart)
      .then(() => {

        inputs.forEach(elm => elm.value = '')
        inputs[4].checked = false

        const buttom = document.querySelector('#send-Data')
        buttom.classList.add('green')
      })
      .catch(err => {

        const buttom = document.querySelector('#send-Data')
        buttom.classList.add('red')
        console.log(err)
      })



  });

  document.getElementById('new-character-form').addEventListener('submit', function (e) {
    e.preventDefault()

    const inputs = document.querySelectorAll('.character-form input')

    const createChart = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value,
      cartoon: inputs[3].checked
    }

    charactersAPI.createOneRegister(createChart)
      .then(() => {
        const buttom = document.querySelector('#send-data')
        inputs.forEach(elm => elm.value = '')
        inputs[3].checked = false

        buttom.classList.add('green')
      })
      .catch(err => {
        console.log(err)
        const buttom = document.querySelector('#send-data')
        buttom.classList.add('red')
      })

  });
});
