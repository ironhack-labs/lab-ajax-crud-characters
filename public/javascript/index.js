const charactersAPI = new ApiService('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
    .getAllCharacters()
    .then((response) => {
      let nuevo = ""
      response.data.forEach(element => {

        nuevo +=  `<div class="character-info">
        <div class="name">Name: ${element.name}</div>
        <div class="occupation">Occupation: ${element.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${element.cartoon}</div>
        <div class="weapon"> Weapon: ${element.weapon}</div>
      </div>`

      }); 
       document.querySelector('.characters-container').innerHTML = nuevo
    })
    .catch(err => console.log (err) )
    });
});


  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.querySelector(".operation input").value
    console.log(id)
    charactersAPI
    .getOneCharacter(id)
    .then((response) => {

        let nuevo =  `<div class="character-info">
        <div class="name">Name: ${response.data.name}</div>
        <div class="occupation">Occupation: ${response.data.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${response.data.cartoon}</div>
        <div class="weapon"> Weapon: ${response.data.weapon}</div>
      </div>`
      document.querySelector('.characters-container').innerHTML = nuevo
      
      })
      .catch(err => console.log (err) )
    })
    

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.querySelector(".operation_delete input").value
    console.log(id)
    charactersAPI
    .deleteCharacter(id)
    .then(() => {
      const btnCreate = document.querySelector('#delete-one')
      btnCreate.setAttribute("style", "background-color: green" )
    })
    .catch( err => {
      const btnCreate2 = document.querySelector('#delete-one')
    btnCreate2.setAttribute("style", "background-color: red" )
    })
  })
    
    


  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()

    const form = document.getElementById("edit-character-form")
    const formData = new FormData(form);
    console.log(form)

    const name = formData.get("name")
    const occupation = formData.get("occupation")
    const weapon = formData.get("weapon")
    const cartoon = formData.get("cartoon") === "on"
    const id = formData.get("chr-id")
    const character = {name, occupation, weapon, cartoon}
    charactersAPI
    .editCharacter(id, character)
    .then(() => {
      const btnCreate = document.querySelector('#send-data-edit')
      btnCreate.setAttribute("style", "background-color: green" )
    })
    .catch( err => {
      const btnCreate2 = document.querySelector('#send-data-edit')
    btnCreate2.setAttribute("style", "background-color: red" )
    })
  })

  

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const form = document.getElementById("new-character-form")
    const formData = new FormData(form);
    console.log(form)

    const name = formData.get("name")
    const occupation = formData.get("occupation")
    const weapon = formData.get("weapon")
    const cartoon = formData.get("cartoon") === "on"
    const character = {name, occupation, weapon, cartoon}
    charactersAPI
    .createCharacter(character)
    .then(() => {
      const btnCreate = document.querySelector('#send-data')
      btnCreate.setAttribute("style", "background-color: green" )
    })
    .catch( err => {
      const btnCreate2 = document.querySelector('#send-data')
    btnCreate2.setAttribute("style", "background-color: red" )
    })
  })



