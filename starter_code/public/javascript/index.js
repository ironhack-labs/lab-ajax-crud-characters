"use strict";

const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com/characters");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    e.preventDefault();
    charactersAPI.getFullList();
  });


  $('#fetch-one').on('click', (e) => {
    e.preventDefault();
    const charId= document.getElementById("character-id").value;
    charactersAPI.getOneRegister(charId);
  });

  $('#delete-one').on('click', (e) => {
    e.preventDefault();
    const delCharId= document.getElementById("character-id-delete").value;
    charactersAPI.deleteOneRegister(delCharId);
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    const form = document.getElementById('edit-character-form');
    const editCharacter = {
      id: form[0].value,
      name: form[1].value,
      occupation: form[2].value,
      weapon: form[3].value,
      debt: form[4].checked
    };
    charactersAPI.updateOneRegister(editCharacter.id, editCharacter);
    });
 
  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    const form = document.getElementById('new-character-form');
    const newCharacter = {
      name: form[0].value,
      occupation: form[1].value,
      weapon: form[2].value,
      debt: form[3].checked
    };
    charactersAPI.createOneRegister(newCharacter);
    });
  });

