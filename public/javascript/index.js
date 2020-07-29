const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then((responses)=>{
      const box = document.getElementsByClassName('characters-container')[0];
      box.innerHTML = '';

      responses.data.forEach(response =>{
        const elem = document.createElement('div');
        elem.innerHTML = `<div class = 'character-info'>
                          <div class = 'name'>Name: ${response.name}</div>
                          <div class = 'occupation'>Ocupattion: ${response.occupation}</div>
                          <div class = 'cartoon'>cartoon: ${response.cartoon}</div>
                          <div class = 'weapon'>weapon: ${response.weapon}</div>
                          </div>`

                          box.appendChild(elem)
      })
    })
    .catch(error=> console.log('error',error))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.getElementsByName('character-id')[0];
    charactersAPI.getOneRegister(id.value)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const idD = document.getElementsByName('character-id-delete')[0];
    charactersAPI.deleteOneRegister(idD.value)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()

    const id = document.getElementsByName('chr-id')[0].value
    const updateChar = {
      name:event.target.name.value,
      occupation: event.target.occupation.value,
      weapon:event.target.weapon.value,
      cartoon:event.target.cartoon.checked
    }
    
    charactersAPI.updateOneRegister(id, updateChar)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const newChar = {
      name:event.target.name.value,
      occupation: event.target.occupation.value,
      weapon:event.target.weapon.value,
      cartoon:event.target.cartoon.checked

    }
    charactersAPI.createOneRegister(newChar)
  });
});
