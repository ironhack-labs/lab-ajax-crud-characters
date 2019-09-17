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

    let characterId = document.querySelector('[name="character-id"]').value
    console.log("characterId", characterId)

    axios.get(`http://localhost:8000/characters/${characterId}`).then((result) => {
      let oneCharacter = result.data
      console.log(oneCharacter.name)

      let newNode = document.getElementsByClassName('character-info')[0].cloneNode(true)
      newNode.getElementsByClassName('name')[0].innerText = oneCharacter.name
      newNode.getElementsByClassName('occupation')[0].innerText = oneCharacter.occupation
      newNode.getElementsByClassName('cartoon')[0].innerText = oneCharacter.cartoon
      newNode.getElementsByClassName('weapon')[0].innerText = oneCharacter.weapon

      document.getElementsByClassName('characters-container')[0].append(newNode)


    }).catch(error => console.log("something is wrong", error))

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let characterId = document.querySelector('[name="character-id-delete"]').value
    console.log("characterId", characterId)

    axios.delete(`http://localhost:8000/characters/${characterId}`).then(() =>


      document.getElementById('delete-one').style.color = "lightgreen",
      console.log("Turn Button green"),


      // let newNode = document.getElementsByClassName('character-info')[0].cloneNode(true)
      // newNode.getElementsByClassName('name')[0].innerText = resultsFromAPI.name
      // newNode.getElementsByClassName('occupation')[0].innerText = resultsFromAPI.occupation
      // newNode.getElementsByClassName('cartoon')[0].innerText = resultsFromAPI.cartoon
      // newNode.getElementsByClassName('weapon')[0].innerText = resultsFromAPI.weapon

      // document.getElementsByClassName('characters-container')[0].append(newNode)


    ).catch(() => document.getElementById('delete-one').style.color = "red")

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    let form = document.getElementById('edit-character-form')
    let name = form.getElementsByTagName('input')[0].value
    let occupation = form.getElementsByTagName('input')[1].value
    let weapon = form.getElementsByTagName('input')[2].value
    let cartoon = form.getElementsByTagName('input')[3].checked




    axios.post(`http://localhost:8000/characters`, {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    }).then((result) => {
      console.log("result: ", result)



    }).catch(error => console.log("Turn Button red", error))



  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    let form = document.getElementById('new-character-form')
    let name = form.getElementsByTagName('input')[0].value
    let occupation = form.getElementsByTagName('input')[1].value
    let weapon = form.getElementsByTagName('input')[2].value
    let cartoon = form.getElementsByTagName('input')[3].checked




    axios.post(`http://localhost:8000/characters`, {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    }).then((result) => {
      console.log("result: ", result)



    }).catch(error => console.log("Turn Button red", error))


  });
});
