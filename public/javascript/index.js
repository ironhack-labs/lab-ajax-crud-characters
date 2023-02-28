const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function  (event) {
    try {
        let response = await charactersAPI.getFullList()
        let characters = await response.data
        let html = ''
        characters.forEach(character => {
        html += `<div class="character-info">
        <div class="id">Id: ${character.id}</div>
        <div class="name">Name: ${character.name}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon"> Is a Cartoon? ${character.cartoon}</div>
        <div class="weapon">Weapon: ${character.weapon}</div>
       </div>`
      })
      document.querySelector('.characters-container').innerHTML = html
    } catch (error) {
      console.log(error)
    }

  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {

    try {
      const id = document.querySelector(".operation input").value;
      let response = await charactersAPI.getOneRegister(id)
      let character = await response.data
      let html = ''
       html += `<div class="character-info">
      <div class="id">Id: ${character.id}</div>
      <div class="name">Name: ${character.name}</div>
      <div class="occupation">Occupation: ${character.occupation}</div>
      <div class="cartoon"> Is a Cartoon? ${character.cartoon}</div>
      <div class="weapon">Weapon: ${character.weapon}</div>
     </div>`

    document.querySelector('.characters-container').innerHTML = html
  } catch (error) {
    console.log(error)
  }


  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
