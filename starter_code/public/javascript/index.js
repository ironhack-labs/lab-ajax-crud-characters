"use strict";

const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready(() => {
  $("#fetch-all").on("click", e => {
    charactersAPI.getFullList();
  });

  $("#fetch-one").on("click", e => {
    const charId = document.getElementById("character-id").value;
    charactersAPI.getOneRegister(charId);
  });

  $("#delete-one").on("click", e => {
    const charIdDel = document.getElementById("character-id-delete").value;
    charactersAPI.deleteOneRegister(charIdDel);
  });

  $("#edit-character-form").on("submit", e => {
    charactersAPI.updateOneRegister();
  });

  $("#new-character-form").on("submit", e => {
    charactersAPI.createOneRegister();
  });
});
