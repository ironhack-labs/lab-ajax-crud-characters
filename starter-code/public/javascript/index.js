
$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    axios.get("http://localhost:3000/characters")
      .then(characters => {
        let container = document.querySelector('.characters-container')
        container.innerHTML = ''
        characters.data.forEach(character => {
          printCharacter(character)
        });
      })
  }

  document.getElementById('fetch-one').onclick = function () {
    let id = document.querySelector("#character-id").value;
    axios.get(`http://localhost:3000/characters/${id}`)
      .then(character => {

        let container = document.querySelector('.characters-container')
        container.innerHTML = ''
        printCharacter(character.data);
      })


  }

  document.getElementById('delete-one').onclick = function () {
    let id = document.querySelector("#character-id-delete").value;
    axios.delete(`http://localhost:3000/characters/${id}`)
      .then(message => {
        let container = document.querySelector('.characters-container')
        container.innerHTML = message.data.message;

      })
  }

  document.getElementById('edit-character-form').onsubmit = function () {

  }

  document.getElementById('new-character-form').onsubmit = function () {
    let payload = {
      name: document.querySelector("#name-post").value,
      occupation: document.querySelector("#occupation-post").value,
      weapon: document.querySelector("#weapon-post").value,
      cartoon: document.querySelector("#cartoon-post").checked
    }


    axios.post("http://localhost:3000/characters", payload)
      .then(character => {

        document.querySelector("#send-data").style.backgroundColor = "green"

      })
      .catch(err=>{
        document.querySelector("#send-data").style.backgroundColor = "red"
      })
  }
})

function printCharacter(character) {
  let container = document.querySelector('.characters-container')
  container.innerHTML += `<div class="character-info">
  <div class="name">${character.name}</div>
  <div class="occupation">${character.occupation}</div>
  <div class="cartoon">${character.cartoon}</div>
  <div class="weapon">${character.weapon}</div>
</div>`
}

