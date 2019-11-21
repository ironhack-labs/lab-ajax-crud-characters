// const charactersAPI = new APIHandler('https://minions-api.herokuapp.com/characters');


// window.addEventListener('load', () => {
//   document.getElementById('fetch-all').addEventListener('click', function (event) {

//   });

//   document.getElementById('fetch-one').addEventListener('click', function (event) {

//   });

//   document.getElementById('delete-one').addEventListener('click', function (event) {

//   });

//   document.getElementById('edit-character-form').addEventListener('submit', function (event) {

//   });

//   document.getElementById('new-character-form').addEventListener('submit', function (event) {

//   });
// Esto es basura });

const buttonSearchOne = document.getElementById("fetch-one")
const inputs = document.getElementsByTagName('input')

buttonSearchOne.onclick = e => {
  e.preventDefault()
  const id = document.getElementById('idOne').value

  axios.get(`https://minions-api.herokuapp.com/characters/${id}`)
    .then(response => {
      console.log(response.data)
      const { name, occupation, cartoon, weapon } = response.data
      console.log(inputs[0])
      inputs[0].value = name
      inputs[1].value = occupation
      inputs[2].value = cartoon
      inputs[3].value = weapon
    })
    .catch(err => console.log('error al recobrar 1 personaje', err))
}

const buttonDelete = document.getElementById("delete-one")

buttonDelete.onclick = e => {
  e.preventDefault()
  const id = document.getElementsByName("character-id-delete")[0].value
  console.log(id)
  axios.delete(`https://minions-api.herokuapp.com/characters/${id}`, { name, occupation, cartoon, weapon })
}

const buttonCreate = document.getElementById('send-data')

buttonCreate.onclick = e => {
  e.preventDefault()
  const characterInfo = {
    name: inputs[6].value,
    occupation: inputs[7].value,
    weapon: inputs[8].value,
    cartoon: inputs[9].checked
  }
  axios.post(`https://minions-api.herokuapp.com/characters`, characterInfo)
    .then(response => {
      const { name, occupation, weapon, cartoon } = response.data
    })
    .catch(err => console.log('error al crear personaje', err))
}
