const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    axios.get('http://localhost:8000/characters').then((result) => {

      let resultsFromAPI = result.data
      console.log(resultsFromAPI)

      resultsFromAPI.forEach((character) => {
        let newNode = document.getElementsByClassName('character-info')[0].cloneNode(true)
        newNode.getElementsByClassName('name')[0].innerText = character.name
        newNode.getElementsByClassName('occupation')[0].innerText = character.occupation
        newNode.getElementsByClassName('cartoon')[0].innerText = character.cartoon
        newNode.getElementsByClassName('weapon')[0].innerText = character.weapon

        document.getElementsByClassName('characters-container')[0].append(newNode)
      })

    })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    let characterId = document.getElementById("character-id").value
    //need to get the value from the form 

    axios.get(`http://localhost:8000/characters/${characterId}`).then((result) => {
      let resultsFromAPI = result.data
      console.log(resultsFromAPI)

      let newNode = document.getElementsByClassName('character-info')[0].cloneNode(true)
      newNode.getElementsByClassName('name')[0].innerText = resultsFromAPI.name
      newNode.getElementsByClassName('occupation')[0].innerText = resultsFromAPI.occupation
      newNode.getElementsByClassName('cartoon')[0].innerText = resultsFromAPI.cartoon
      newNode.getElementsByClassName('weapon')[0].innerText = resultsFromAPI.weapon

      document.getElementsByClassName('characters-container')[0].append(newNode)

    })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let characterId = document.getElementById("character-id-delete").value
    axios.delete(`http://localhost:8000/characters/${characterId}`).then((result) => {
      let resultsFromAPI = result.data
      console.log(resultsFromAPI)

      let newNode = document.getElementsByClassName('character-info')[0].cloneNode(true)
      newNode.getElementsByClassName('name')[0].innerText = resultsFromAPI.name
      newNode.getElementsByClassName('occupation')[0].innerText = resultsFromAPI.occupation
      newNode.getElementsByClassName('cartoon')[0].innerText = resultsFromAPI.cartoon
      newNode.getElementsByClassName('weapon')[0].innerText = resultsFromAPI.weapon

      document.getElementsByClassName('characters-container')[0].append(newNode)

      document.getElementById('delete-one').style.color = "green"

    }).catch(() => {
      document.getElementById('delete-one').style.color = "red"
    })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    //event default thing 

    let name = document.getElementById("nameInput").value
    let occupation = document.getElementById("occupationInput").value
    let weapon = document.getElementById("weaponInput").value
    let cartoon = document.getElementById("checkBoxInput").value

    //post here 

  });
});
