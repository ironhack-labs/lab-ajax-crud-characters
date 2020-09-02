const charactersAPI = new APIHandler('http://localhost:8000/characters');

let charInfoTemplate =`      
<div class="character-info">
  <div class="id">Id: <span> --ID--</span></div>
  <div class="name">Name: <span> --NAME--</span></div>
  <div class="occupation">Occupation: <span> --OCC--</span></div>
  <div class="cartoon">Is a Cartoon?: <span> --CAR--</span></div>
  <div class="weapon">Weapon: <span> --WEA--</span></div>
</div>`

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    let getInfo = await charactersAPI.getFullList()

    let charInfo = ""

    getInfo.forEach(elem => {
      charInfo += charInfoTemplate
      .replace("--ID--", elem.id)
      .replace("--NAME--", elem.name)
      .replace("--OCC--", elem.occupation)
      .replace("--CAR--", elem.cartoon)
      .replace("--WEA--", elem.weapon)
    });

    document.querySelector(".characters-container").innerHTML = charInfo;

  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {

    let idElem = document.getElementsByName("character-id")[0].value
    let charInfo = ""
    let elem = await charactersAPI.getOneRegister(idElem)
    
    charInfo += charInfoTemplate
    .replace("--ID--", elem.id)
    .replace("--NAME--", elem.name)
    .replace("--OCC--", elem.occupation)
    .replace("--CAR--", elem.cartoon)
    .replace("--WEA--", elem.weapon)

    document.querySelector(".characters-container").innerHTML = charInfo;
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    let idElem = document.getElementsByName("character-id-delete")[0].value

    try{
      charactersAPI.deleteOneRegister(idElem)
      document.getElementById('delete-one').style.backgroundColor = "green"
      document.getElementById('fetch-all').click();
      setBackground()
      document.getElementsByName("character-id-delete")[0].value = ""
    }
    catch(err)
    {
      console.log(error)
      document.getElementById('delete-one').style.backgroundColor = "red"
    }
  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    let id = document.querySelector("#edit-character-form input[name=chr-id]").value
    let name = document.querySelector("#edit-character-form input[name=name]").value
    let occupation = document.querySelector("#edit-character-form input[name=occupation]").value
    let cartoon = document.querySelector("#edit-character-form input[name=cartoon]").checked
    let weapon = document.querySelector("#edit-character-form input[name=weapon]").value

    let editCharacter = 
    {
      id, name, occupation, cartoon, weapon
    }

    await charactersAPI.updateOneRegister(editCharacter)
    .then(res => {
      document.querySelector('#edit-character-form button#send-data').style.backgroundColor = "green"
      document.getElementById('fetch-all').click();
      setBackground()
      resetInputs("edit-character-form")
    })
    .catch(error => {
      console.log(error)
      document.querySelector('#edit-character-form button#send-data').style.backgroundColor = "red"
    })

    event.preventDefault();
  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    let name = document.querySelector("#new-character-form input[name=name]").value
    let occupation = document.querySelector("#new-character-form input[name=occupation]").value
    let cartoon = document.querySelector("#new-character-form input[name=cartoon]").checked
    let weapon = document.querySelector("#new-character-form input[name=weapon]").value
    
    let newChar = 
    {
      name, occupation, cartoon, weapon
    }

    await charactersAPI.createOneRegister(newChar).then(res => {
      document.querySelector('#new-character-form button#send-data').style.backgroundColor = "green"
      document.getElementById('fetch-all').click();
      setBackground()      
      resetInputs("new-character-form")
    })
    .catch(error => {
      console.log(error)
      document.querySelector('#new-character-form button#send-data').style.backgroundColor = "red"
    })

    event.preventDefault();
  });
});

function setBackground()
{
  setTimeout(function(){
    document.querySelector('#new-character-form button#send-data').style.backgroundColor = null
    document.querySelector('#edit-character-form button#send-data').style.backgroundColor = null
    document.getElementById('delete-one').style.backgroundColor = null
  },2000)
}

function resetInputs(inputForm)
{
  document.querySelector(`#${inputForm} input[name=name]`).value = ""
  document.querySelector(`#${inputForm} input[name=occupation]`).value = ""
  document.querySelector(`#${inputForm} input[name=cartoon]`).checked = false
  document.querySelector(`#${inputForm} input[name=weapon]`).value = ""

  if(inputForm === "edit-character-form")
    document.querySelector(`#${inputForm} input[name=chr-id]`).value= ""
}
