const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {

  let container = document.getElementsByClassName('characters-container')[0]

  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI.getFullList()
    .then(info => {
      console.log(info)
      info.forEach(element => {
        let div1 = document.createElement('div')
        div1.setAttribute('class', 'character-info')
        let div2 = document.createElement('div')
        div2.innerHTML = `
        <div>Character Name: <span class="yellow">${element.name}</span></div>
        <div>Character Occupation: <span class="yellow">${element.occupation}</span></div>
        <div>Character Weapon: <span class="yellow">${element.weapon}</span></div>
        <div>Is a Cartoon? <span class="yellow">${element.cartoon}</span></div>`
        div1.appendChild(div2)
        container.appendChild(div1)
      })
    }).catch(console.log)
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    let id = document.querySelector('input[name="character-id"]').value
    charactersAPI.getOneRegister(id)
    .then(element => {
        let div1 = document.createElement('div')
        div1.setAttribute('class', 'character-info')
        let div2 = document.createElement('div')
        div2.innerHTML = `
        <div>Character Name: <span class="yellow">${element.name}</span></div>
        <div>Character Occupation: <span class="yellow">${element.occupation}</span></div>
        <div>Character Weapon: <span class="yellow">${element.weapon}</span></div>
        <div>Is a Cartoon? <span class="yellow">${element.cartoon}</span></div>`
        div1.appendChild(div2)
        container.appendChild(div1)
    }).catch(console.log)

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    let id = document.querySelector('input[name="character-id-delete"]').value
    let button = document.getElementById('delete-one')
    charactersAPI.deleteOneRegister(id)
    .then(response => {
        if (response === true){
          button.setAttribute('class', 'green')
        }
    }).catch(button.setAttribute('class', 'red'))


  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    let id = document.querySelector('#edit-character-form input[name="chr-id"]').value
    let button = document.querySelector('#edit-character-form #send-data')
    let check = document.querySelector('#edit-character-form  input[name="cartoon"]').value
    let isCartoon = false
    if(check === "true"){
      isCartoon = true
    }
    let editChar = { 
      "name": document.querySelector('#edit-character-form  input[name="name"]').value,
      "occupation": document.querySelector('#edit-character-form  input[name="occupation"]').value,
      "weapon": document.querySelector('#edit-character-form  input[name="weapon"]').value,
      "cartoon": isCartoon
    }

    charactersAPI.updateOneRegister(id, editChar)
    .then(() => {
        button.setAttribute('class', 'green')
     }).catch(button.setAttribute('class', 'red'))
 
   });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
   let newChar = { 
     "name": document.querySelector('input[name="name"]').value,
     "occupation": document.querySelector('input[name="occupation"]').value,
     "weapon": document.querySelector('input[name="weapon"]').value,
     "cartoon": document.querySelector('input[name="cartoon"]').value
   }
   let button = document.getElementById('send-data')
   charactersAPI.createOneRegister(newChar)
   .then(() => {
       button.setAttribute('class', 'green')
    }).catch(button.setAttribute('class', 'red'))

  });

});
