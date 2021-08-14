const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    axios.get('http://localhost:8000/characters')
    .then(res => {
      let charactersArr = res.data;
      console.log("Characters Array", charactersArr);
    })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let id = document.getElementById('character-id').value;
    axios.get(`http://localhost:8000/characters/${id}`)
    .then(res => {
      let character = res.data;
      console.log("One Character", character);
    })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let id = document.getElementById('character-id-delete').value;
    axios.delete(`http://localhost:8000/characters/${id}`)
    .then(()=> { console.log("Deleting the character was successful!")})
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault;
    let id = document.getElementById('edit-id').value;
    let name = document.getElementById('edit-name').value;
    let occupation = document.getElementById('edit-occupation').value;
    let cartoon = document.getElementById('edit-cartoon').value;
    let weapon = document.getElementById('edit-weapon').value;

    axios.put(`http://localhost:8000/characters/${id}`, { name: name, occupation: occupation, cartoon: cartoon, weapon: weapon })
    .then(()=> { console.log("Updating the character was successful!")})
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault;
    let name = document.getElementById('create-name').value;
    let occupation = document.getElementById('create-occupation').value;
    let cartoon = document.getElementById('create-cartoon').value;
    let weapon = document.getElementById('create-weapon').value;
    axios.post('http://localhost:8000/characters', { name: name, occupation: occupation, cartoon: cartoon, weapon: weapon })
    .then(()=> { console.log("Posting a new character was successful!")})
  });
});
