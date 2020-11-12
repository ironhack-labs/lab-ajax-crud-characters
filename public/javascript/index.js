const charactersAPI = new APIHandler('http://localhost:8000');

const $charContainer = document.querySelector(".characters-container")
const $charID = document.querySelector("input[name=character-id]")
const $charIdDelete = document.querySelector("input[name=character-id-delete]")

function printElements(arr){
  $charContainer.innerHTML = ""
  arr.forEach(element => {
    $charContainer.innerHTML += 
    `
      <div class="character-info">
        <div class="id">Id: <span style="float:right;color:#d8b362">${element.id}</span></div>
        <div class="name">Name:<span style="float:right;color:#d8b362">${element.name}</span></div>
        <div class="occupation">Occupation: <span style="float:right;color:#d8b362">${element.occupation}</span></div>
        <div class="cartoon">Is a Cartoon? <span style="float:right;color:#d8b362">${element.cartoon}</span></div>
        <div class="weapon">Weapon: <span style="float:right;color:#d8b362">${element.weapon}</span></div>
      </div>
    `
  })
}

window.addEventListener('load', () => {

  //FETCH ALL CHARACTERS
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    const data = await charactersAPI.getFullList()
    printElements(data)
  });

  //FETCH ONE CHARACTER
  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    event.preventDefault()
    const id = $charID.value
    const data = await charactersAPI.getOneRegister(id)
    if (data) {
      printElements([data]) //SOLO ME FUNCIONA CON LAS LLAVES. PORQUE?
    }
  });
 
  //DELETE CHARACTER
  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()
    const id = $charIdDelete.value
    charactersAPI.deleteOneRegister(id)
  });


  //NEW CHARACTER
  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    
    event.preventDefault()

    const {target} = event
    newChar = {
      name: target[0].value,
      occupation: target[1].value,
      weapon: target[2].value,
      cartoon: target[3].checked
    }

    await charactersAPI.createOneRegister(newChar)
    event.target[0].value = ""
    event.target[1].value = ""
    event.target[2].value = ""
    event.target[3].checked = false
  });

  //EDIT CHARACTER
  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    
    event.preventDefault()

    const {target} = event
    editChar = {
      id: target[0].value,
      name: target[1].value,
      occupation: target[2].value,
      weapon: target[3].value,
      cartoon: target[4].checked
    }

    await charactersAPI.updateOneRegister(editChar.id, editChar)
    target[0].value = ""
    target[1].value = ""
    target[2].value = ""
    target[3].value = ""
    target[4].checked = false
  });

});
