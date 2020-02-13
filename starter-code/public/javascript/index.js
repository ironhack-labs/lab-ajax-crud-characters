const charactersAPI = new APIHandler('https://minions-api.herokuapp.com/characters');

let name = document.getElementsByClassName("name")[0]
let cartoon = document.getElementsByClassName("cartoon")[0]
let occupation = document.getElementsByClassName("occupation")[0]
let weapon = document.getElementsByClassName("weapon")[0]

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI.getFullList()

      .then(x => {
        document.getElementsByClassName("container")[0].innerHTML = ""
        x.forEach(minion => {

          document.getElementsByClassName("container")[0].innerHTML += `<div class = "character-info" ><div id = "name" class = "name"> Name: ${minion.name} </div><div class = "occupation">${minion.occupation}</div><div class="cartoon">Cartoon: ${minion.cartoon}</div><div class="weapon">Weapon: ${minion.weapon}</div></div></div>`
        });

        document.getElementsByClassName("container")[0].innerHTML += `
          <section class ="operations">
          <div class="operation">
          <button id="fetch-all">Fetch all</button></div><div class="operation">
          <label for="character-id">Search by ID:</label><input type ="text" name="character-id" id="characterID">
          <button id="fetch-one">Fetch one</button></div><div class="operation delete"><label for="character-id-delete">Delete by ID:</label>
          <input type="text" name="character-id-delete" id="deleteID"><button id="delete-one">Delete one</button></div></section>`





      })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    charactersAPI.getOneRegister(document.getElementById("characterID").value)
      .then(x => {

        name.innerText = `Name: ${x.name}`
        cartoon.innerText = `Cartoon: ${x.cartoon}`
        occupation.innerText = `Occupation: ${x.occupation}`
        weapon.innerText = `Weapon: ${x.weapon}`
      })




  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    charactersAPI.deleteOneRegister(document.getElementById("deleteID").value)
      .then(x => {
        alert("Deleted")
      })


  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()
    const newMinion = {

      name: document.getElementById("inputname").value,
      occupation: document.getElementById("inputoccupation").value,
      weapon: document.getElementById("inputweapon").value,
      cartoon: document.getElementById("inputcartoon").checked

    }


    charactersAPI.createOneRegister(newMinion)
      .then(x => {
        alert("Creado")
      })



  });
});