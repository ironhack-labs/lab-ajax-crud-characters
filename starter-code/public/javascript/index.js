const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    axios.get('http://localhost:8000/characters').then(data => {
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

    {/* <div class="name">Character Name</div>
        <div class="occupation">Character Occupation</div>
        <div class="cartoon">Is a Cartoon?</div>
        <div class="weapon">Character Weapon</div> */}


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

  });
});
