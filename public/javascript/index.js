const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    let containerChar = document.querySelector('.characters-container')
     
    charactersAPI.getFullList().then(result=>{
      containerChar.innerHTML ="";
      result.forEach(element =>{
        console.log(element.name)
          const card =`
          <div class="character-info">
            <div class="id">Id: ${element.id}</div>
            <div class="name">Name: ${element.name}</div>
            <div class="occupation">Occupation: ${element.occupation}</div>
            <div class="cartoon">Is a cartoon? : ${element.cartoon}</div>
            <div class="weapon">Weapon: ${element.weapon}</div>
          </div>`
          document.querySelector('.characters-container').innerHTML += card
      });
    
    })

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.getOneRegister()
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister()
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    charactersAPI.updateOneRegister(event)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    charactersAPI.createOneRegister(event)
    
  });
});
