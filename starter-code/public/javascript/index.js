// const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    axios.get('http://localhost:8000/characters').then(result => {
      let resultsFromAPI = result.data
      console.log(resultsFromAPI)
      resultsFromAPI.forEach(character => {
        let newNode = document.getElementsByClassName('character-info')[0].cloneNode(true)

        newNode.getElementsByClassName('name')[0].innerText = character.name
        newNode.getElementsByClassName('occupation')[0].innerText = character.occupation
        newNode.getElementsByClassName('cartoon')[0].innerText = character.cartoon
        newNode.getElementsByClassName('weapon')[0].innerText = character.weapon

        document.getElementsByClassName('characters-container')[0].append(newNode)
      })
    })
      .catch(err => console.log("something went wrong with getting the list of characters", err))
  });

  document.getElementById('fetch-one').onclick = function (event) {
    let searchID = document.getElementById('id-input-search').value
    axios.get(`http://localhost:8000/characters/${searchID}`).then(result => {
      console.log(result)
      document.getElementById('name-info').innerHTML = result.data.id
      document.getElementById('occupation-info').innerHTML = result.data.occupation
      document.getElementById('cartoon-info').innerHTML = result.data.cartoon
      document.getElementById('weapon-info').innerHTML = result.data.weapon
    })
      .catch(err => console.log("something went wrong with getting the character", err))
  };

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let deleteID = document.getElementById('id-input-delete').value
    axios.delete(`http://localhost:8000/characters/${deleteID}`).then(result => {
      console.log(result)
      document.getElementById('delete-one').style.background = "green"

    })
      .catch(err => {
        console.log("something went wrong with deleting the character", err)
        document.getElementById('delete-one').style.background = "red"
      })
  })

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let characterID = document.getElementById('edit-id').value

    axios.put(`http://localhost:8000/characters/${characterID}`,
      {
        name: document.getElementById('edit-name').value,
        occupation: document.getElementById('edit-occupation').value,
        weapon: document.getElementById('edit-weapon').value,
        cartoon: document.getElementById('edit-cartoon').value
      })
      .then(result => {
        console.log(result)
        document.getElementById('send-update').style.background = "green"
      })
      .catch(err => {
        console.log("something went wrong with editing the character", err)
        document.getElementById('send-update').style.background = "red"
      })
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();


    axios.post('http://localhost:8000/characters',
      {
        name: document.getElementById('newName').value,
        occupation: document.getElementById('newOccupation').value,
        weapon: document.getElementById('newWeapon').value,
        cartoon: document.getElementById('newCartoon').value

      })
      .then(result => {
        console.log(result)
        document.getElementById('send-data').style.background = "green"
      })
      .catch(err => {
        console.log("something went wrong with creating a new character", err)
        document.getElementById('send-data').style.background = "red"
      })

  });
});
