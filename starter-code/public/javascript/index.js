const charactersAPI = new APIHandler("http://localhost:8000")
let fetchAll = document.getElementsByClassName('characters-container')[0]

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList()
      .then(res => res.data.forEach(element => {
        fetchAll.innerHTML += `<div class="character-info">
          <div class="name">${element.name}</div>
          <div class="occupation">${element.occupation}</div>
          <div class="cartoon">${element.cartoon}</div>
          <div class="weapon">${element.weapon}</div>
          </div>`
      }))
      .catch(err => console.log(err));
  }

  document.getElementById('fetch-one').onclick = function () {
    charactersAPI.getOneRegister(document.getElementsByName('character-id')[0].value)
      .then(res => fetchAll.innerHTML = `<div class="character-info">
      <div class="name">${res.data.name}</div>
      <div class="occupation">${res.data.occupation}</div>
      <div class="cartoon">${res.data.cartoon}</div>
      <div class="weapon">${res.data.weapon}</div>
      </div>`)
      .catch(err => console.log(err));
  }
  document.getElementById('delete-one').onclick = function () {
    charactersAPI.deleteOneRegister(document.getElementsByName('character-id-delete')[0].value)
  }

  document.getElementById('edit-character-form').onsubmit = function () {
    event.preventDefault();
    const name = document.getElementsByName('name')[1].value;
    const occupation = document.getElementsByName('occupation')[1].value;
    const weapon = document.getElementsByName('weapon')[1].value;
    const cartoon = document.getElementsByName('cartoon')[1].checked;

    charactersAPI.updateOneRegister(document.getElementsByName('chr-id')[0].value, name, occupation, cartoon, weapon)
      .then(() => console.log('Edited with success!'))
      .catch(err => console.log(err))
  }

  document.getElementById('new-character-form').onsubmit = function () {
    event.preventDefault();
    const name = document.getElementsByName('name')[0].value;
    const occupation = document.getElementsByName('occupation')[0].value;
    const weapon = document.getElementsByName('weapon')[0].value;
    const cartoon = document.getElementsByName('cartoon')[0].checked;

    charactersAPI.createOneRegister(name, occupation, weapon, cartoon)
      .then(() => console.log('Created character with success!'))
      .catch(err => console.log(err));
  }
})
