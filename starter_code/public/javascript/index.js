'use strict';

const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    let list = '';
    charactersAPI.getFullList()
      .then((data) => {
        console.log(data);
        for (let item in data) {
          list += `<div class="character-info">
        <div class="name">Name: ${data[item].name}</div>
        <div class="occupation">Occupation: ${data[item].occupation}</div>
        <div class="weapon">Weapon: ${data[item].weapon}</div>
        <div class="cartoon">Is a Cartoon? ${data[item].cartoon}</div>
        </div>`;
        }
        document.getElementsByClassName('characters-container')[0].innerHTML = list;
      })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    const id = document.getElementsByName('character-id')[0].value;
    charactersAPI.getOneRegister(id)
      .then((data) => {
        console.log(data);
        document.getElementsByClassName('characters-container')[0].innerHTML = `<div class="character-info">
        <div class="name">Name: ${data.name}</div>
        <div class="occupation">Occupation: ${data.occupation}</div>
        <div class="weapon">Weapon: ${data.weapon}</div>
        <div class="cartoon">Is a Cartoon? ${data.cartoon}</div>
        </div>`
      })
  }
  
  document.getElementById('delete-one').onclick = function(){
    const id = document.getElementsByName('character-id-delete')[0].value;
    charactersAPI.deleteOneRegister(id);
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    event.preventDefault();
    const id = document.getElementsByName('chr-id')[0].value;
    const name = document.getElementsByName('name')[1].value;
    const occupation = document.getElementsByName('occupation')[1].value;
    const weapon = document.getElementsByName('weapon')[1].value;
    const cartoon = document.getElementsByName('cartoon')[1].checked;

    const character = {name, occupation, weapon, cartoon};
    
    charactersAPI.updateOneRegister(id, character);    
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    event.preventDefault();
    const character = {
      name: document.getElementsByName('name')[0].value,
      occupation: document.getElementsByName('occupation')[0].value,
      weapon: document.getElementsByName('weapon')[0].value,
      cartoon: document.getElementsByName('cartoon')[0].checked
    };
    charactersAPI.createOneRegister(character);
  }                
  
})
