"use strict";


const please = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready( () => {



  $('#fetch-all').on('click', (e) => {

    please.getFullList();

  }); //Event - #fetch-all




  $('#fetch-one').on('click', (e) => {

    please.getOneRegister(3);

  }); //Event - #fetch-one




  $('#delete-one').on('click', (e) => {

  }); //Event - #delete-one




  $('#edit-character-form').on('submit', (e) => {

  }); //Event - #edit-character-form




  $('#new-character-form').on('submit', (e) => {

  }); //Event - #new-character-form






}); // Document Ready