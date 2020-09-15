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

    event.preventDefault()

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

    event.preventDefault()

    const minionId = document.querySelector('#edit-character-form input').value
    const editInfo = document.querySelectorAll('#edit-character-form input')

    const updateMinion = {
      name: editInfo[1].value,
      occupation: editInfo[2].value,
      weapon: editInfo[3].value,
      cartoon: editInfo[4].checked
    }

    MinionsApi
      .updateMinion(minionId, updateMinion)
      .then(() => {
        document.querySelector('#edit-character-form').reset()
        document.querySelector('#edit-data').style.background = 'green'
      })
      .catch(err => {
        document.querySelector('#edit-data').style.background = 'red'
        document.querySelector('#edit-character-form input').value = 'Something went wrong!'
        console.log(err)
      })
  })

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const newInfo = document.querySelectorAll('#new-character-form input')

    const newMinion = {
      name: newInfo[0].value,
      occupation: newInfo[1].value,
      weapon: newInfo[2].value,
      cartoon: newInfo[3].checked
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