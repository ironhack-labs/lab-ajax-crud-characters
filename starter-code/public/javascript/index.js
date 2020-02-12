const charactersAPI = new APIHandler('https://minions-api.herokuapp.com/')

const name = document.getElementsByClassName("name")[0]
const occupation = document.getElementsByClassName("occupation")[0]
const cartoon = document.getElementsByClassName("cartoon")[0]
const weapon = document.getElementsByClassName("weapon")[0]
let list = document.getElementById("list")
let inputs = document.querySelectorAll("input")
let check = document.querySelector("#check")
let checkup = document.querySelector("#checkup")

window.addEventListener('load', () => {

  reset()

  document.getElementById('fetch-all').addEventListener('click', function (e) {

    reset()
    e.preventDefault()

    charactersAPI.getFullList()
      .then(characters => characters.map(elm => list.innerHTML += "<li>" + elm.name + ":  " + elm.id + "</li>"))
      .catch(err => console.log("Ha habido un error", err))

  });

  document.getElementById('fetch-one').addEventListener('click', function (e) {

    reset()
    e.preventDefault()

    charactersAPI.getOneRegister(inputs[0].value)
      .then(character => {
        name.innerText += character.name
        occupation.innerText += character.occupation
        cartoon.innerText += character.cartoon
        weapon.innerText += character.weapon

        inputs[6].value = character.id
        inputs[7].value = character.name
        inputs[8].value = character.occupation
        inputs[9].value = character.weapon
        checkup.checked = character.cartoon
      })
      //.then(x => resetInputs())
      .catch(err => console.log("ha habido un error", err))
  });

  document.getElementById('delete-one').addEventListener('click', function (e) {

    reset()
    e.preventDefault()

    charactersAPI.deleteOneRegister(inputs[1].value)
    then(x => resetInputs())
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (e) {

    e.preventDefault()

    let id = inputs[6].value

    const minion = {
      name: inputs[7].value,
      occupation: inputs[8].value,
      weapon: inputs[9].value,
      cartoon: checkup.checked
    }

    charactersAPI.updateOneRegister(id, minion)
      .then(character => {
        name.innerText += character.name
        occupation.innerText += character.occupation
        cartoon.innerText += character.cartoon
        weapon.innerText += character.weapon

        resetInputs()
      })


  });

  document.getElementById('new-character-form').addEventListener('submit', function (e) {

    reset()
    e.preventDefault()


    let register = {
      name: inputs[2].value,
      occupation: inputs[3].value,
      cartoon: check.checked,
      weapon: inputs[4].value
    }

    charactersAPI.createOneRegister(register)
      .then(x => resetInputs())
      .catch(err => console.log("error: ", err))


    name.innerText += register.name
    occupation.innerText += register.occupation
    cartoon.innerText += register.cartoon
    weapon.innerText += register.weapon

    resetInputs()

  });
});

function reset() {
  name.innerText = "Character Name: "
  occupation.innerText = "Character Occupation: "
  cartoon.innerText = "Is a Cartoon? "
  weapon.innerText = "Character Weapon: "
  list.innerHTML = ""
}

function resetInputs() {
  inputs.forEach(elm => elm.value = "")
}