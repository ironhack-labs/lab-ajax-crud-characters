const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    axios.get('http://localhost:8000/characters').then(data => {
      let position = document.getElementById('characters-container')
      for (i = 0; i < data.data.length; i++) {
        let newNode = document.getElementById('characterCard').cloneNode(true)

        newNode.getElementsByClassName('name')[0].innerText = `Character Name: ` + data.data[i].name
        newNode.getElementsByClassName('occupation')[0].innerText = `Occupation: ` + data.data[i].occupation
        newNode.getElementsByClassName('cartoon')[0].innerText = 'Cartoon: ' + data.data[i].cartoon
        newNode.getElementsByClassName('weapon')[0].innerText = 'Weapon: ' + data.data[i].weapon

        document.getElementsByClassName('characters-container')[0].append(newNode)
        // position.append(newNode)
      }

      console.log(data)
    })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    let char_id = document.getElementById('fetchOneID').value

    axios.get(`http://localhost:8000/characters/${char_id}`).then(data => {
      let newNode = document.getElementById('characterCard')

      newNode.getElementsByClassName('name')[0].innerText = `Character Name: ` + data.data.name
      newNode.getElementsByClassName('occupation')[0].innerText = `Occupation: ` + data.data.occupation
      newNode.getElementsByClassName('cartoon')[0].innerText = 'Cartoon: ' + data.data.cartoon
      newNode.getElementsByClassName('weapon')[0].innerText = 'Weapon: ' + data.data.weapon
    })



  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    let char_id = document.getElementById('character-id-delete').value

    axios.delete(`http://localhost:8000/characters/${char_id}`).then(data => {
      console.log(data)
    })

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {



  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    let name = document.getElementById('chr-edit-ID').value
    axios.put('http://localhost:8000/characters', { name: name })


  });
});
