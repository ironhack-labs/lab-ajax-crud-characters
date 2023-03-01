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

  document.getElementById('delete-one').addEventListener('click', async function (event) {

 try {
      const id = document.querySelector(".operation.delete input").value;
      const response = await charactersAPI.deleteOneRegister(id)
      const character = await response.data
      const deleteButton = document.getElementById("delete-one")
      deleteButton.style.backgroundColor = "green"

  } catch (error) {
    console.log(error)
    const deleteButton = document.getElementById("delete-one")
    deleteButton.style.backgroundColor = "red"
  }



  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {

    try {
      event.preventDefault()
      const id = document.querySelector("#edit-character-form input[name='chr-id']").value;
      const name = document.querySelector("#edit-character-form input[name='name']").value;
      const occupation = document.querySelector("#edit-character-form input[name='occupation']").value;
      const weapon = document.querySelector("#edit-character-form input[name='weapon']").value;
      const cartoon = document.querySelector("#edit-character-form input[name='cartoon']").checked;
      const characterInfo = { name, occupation, weapon, cartoon }
      const response = await charactersAPI.updateOneRegister(id, characterInfo)
      const character = await response.data
      const editButton = document.querySelector("#edit-character-form #send-data")
      editButton.style.backgroundColor = "green"



    } catch (error) {

      console.log(error)
      const editButton = document.querySelector("#edit-character-form #send-data")
      editButton.style.backgroundColor = "red"


    }

  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {

    try {



      event.preventDefault()
      const name = document.querySelector("#new-character-form input[name='name']").value;
      const occupation = document.querySelector("#new-character-form input[name='occupation']").value;
      const weapon = document.querySelector("#new-character-form input[name='weapon']").value;
      const cartoon = document.querySelector("#new-character-form input[name='cartoon']").checked;
      const characterInfo = { name, occupation, weapon, cartoon }

      if (!name || !occupation || !weapon || !cartoon) {throw new Error
      } else {
        const response = await charactersAPI.createOneRegister(characterInfo)
        const character = await response.data

        const createButton = document.querySelector("#new-character-form #send-data")
        createButton.style.backgroundColor = "green"

      }

    } catch (error) {
        console.log(error)
        const createButton = document.querySelector("#new-character-form #send-data")
        createButton.style.backgroundColor = "red"


    }



  });
});
