// const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {

  // kinda templating like hbs does, create a copy
  let templateNode = document.getElementsByClassName('character-info')[0].cloneNode(true)

  // remove() 1st node aka the original
  document.getElementsByClassName('character-info')[0].remove()

  document.getElementById('fetch-all').addEventListener('click', function (event) {
    axios.get('http://localhost:8000/characters').then((response) => {
      console.log(response.data)
      // let char = response.data[0]
      // look up copy node for displaying the characters inside "character-info"
      response.data.forEach((char) => {

        let newNode = templateNode.cloneNode(true)

        newNode.getElementsByClassName('name')[0].innerText = char.name
        newNode.getElementsByClassName('occupation')[0].innerText = char.occupation
        newNode.getElementsByClassName('cartoon')[0].innerText = char.cartoon
        newNode.getElementsByClassName('weapon')[0].innerText = char.weapon

        document.getElementsByClassName('characters-container')[0].append(newNode)

        // previous version of displaying info, but just shows the char at 0  
        // document.getElementsByClassName('characters-container')[0].innerHTML += `${char.name}`
      })
    })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    let characterID = document.getElementById('character-id-input').value

    // document.querySelector('[name="character-id"]')

    // /characters/3 could also be /characters?weapon="Lightsaber" -> look into API-documentation
    axios.get(`http://localhost:8000/characters/${characterID}`).then((response) => {
      console.log(response.data) // one object, not an array
      let newNode = templateNode.cloneNode(true)

      newNode.getElementsByClassName('name')[0].innerText = response.data.name
      newNode.getElementsByClassName('occupation')[0].innerText = response.data.occupation
      newNode.getElementsByClassName('cartoon')[0].innerText = "Is a Cartoon?" + response.data.cartoon
      newNode.getElementsByClassName('weapon')[0].innerText = response.data.weapon

      document.getElementsByClassName('characters-container')[0].append(newNode)
    })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    let characterID = document.getElementById('character-id-delete').value

    axios.delete(`http://localhost:8000/characters/${characterID}`).then((response) => {
      console.log(response.data)
      response.data.delete()
      // then everything fine -> turn button into green
      document.getElementById('delete-one').style.backgroundColor = "green"
    }
    )
    .catch((error) => {
      if (error.response) {
      // catch error -> turn button into red
      document.getElementById('delete-one').style.backgroundColor = "red"
    }
    })
  });

  /*       document.getElementById('edit-character-form').addEventListener('submit', function (event) {

        });

        document.getElementById('new-character-form').addEventListener('submit', function (event) {

        }); */
});