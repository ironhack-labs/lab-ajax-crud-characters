const MinionsApi = new MinionsApiHandler()

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    event.preventDefault()

    MinionsApi
      .getAllMinions()
      .then(allMinions => {
        let minion = ''
        allMinions.data.forEach(elm => minion +=

          `<div class="character-info">
            <div class="name">Minion Name: ${elm.name}</div> 
            <div class="occupation"> Minion Occupation: ${elm.occupation}</div> 
            <div class="cartoon"> Is a Cartoon ? ${elm.cartoon}</div> 
            <div class="weapon"> Minion Weapon: ${elm.weapon}</div>
        </div>`

        )
        document.querySelector('#currentMinions').innerHTML = minion
      })
      .catch(err => console.log(err))
  })

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    event.preventDefault()

    const minionId = document.querySelector('#searchOne').value

    MinionsApi
      .getMinion(minionId)
      .then(minion => {
        let choosenMinion =
          `<div class="character-info">
            <div class="name">Minion Name: ${minion.data.name}</div> 
            <div class="occupation"> Minion Occupation: ${minion.data.occupation}</div> 
            <div class="cartoon"> Is a Cartoon ? ${minion.data.cartoon}</div> 
            <div class="weapon"> Minion Weapon: ${minion.data.weapon}</div>
        </div>`
        document.querySelector('#currentMinions').innerHTML = choosenMinion
        document.querySelector('#searchOne').value = ''
      })
      .catch(err => {
        document.querySelector('#searchOne').value = ''
        console.log(err)
      })
  })

  document.getElementById('delete-one').addEventListener('click', function (event) {

    const minionId = document.querySelector('#deleteOne').value
    const button = document.querySelector('#delete-one')
    const input = document.querySelector('#deleteOne')

    MinionsApi
      .deleteMinion(minionId)
      .then(() => {
        button.button.style.background = 'green'
        input.value = ''
      })
      .catch(err => {
        button.style.background = 'red'
        input.value = ''
        console.log(err)
      })
  })

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  })

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const inputs = document.querySelectorAll('#new-character-form input')

    const newMinion = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value,
      cartoon: inputs[3].checked
    }

    MinionsApi
      .createMinion(newMinion)
      .then(() => {
        document.querySelector('#new-character-form').reset()
        document.querySelector('#new-data').style.background = 'green'
      })
      .catch(err => {
        document.querySelector('#new-data').style.background = 'red'
        console.log(err)
      })
  })

})