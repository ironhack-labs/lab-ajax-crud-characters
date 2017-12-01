"use strict";


const please = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready( () => {



  $('#fetch-all').on('click', (e) => {

    please.getFullList();

  }); //Event - #fetch-all




  $('#fetch-one').on('click', (e) => {

    
    const storedID = $("#rememberFetchSubmit").val();
      console.log(storedID);
    please.getOneRegister( storedID );

  }); //Event - #fetch-one




  $('#delete-one').on('click', (e) => {

    const storedID = $("#rememberDeleteSubmit").val();
      console.log(storedID);
    please.deleteOneRegister( storedID );

  }); //Event - #delete-one




  $('#edit-character-form').on('submit', (e) => {

    e.preventDefault(); 
    const storedID = $("#chr-id").val();
      console.log(storedID);
    please.updateOneRegister( storedID );

  }); //Event - #edit-character-form




  $('#new-character-form').on('submit', (e) => {
    e.preventDefault(); 

    const  newName            = $("#name").val();        
    const  newOccupation      = $("#occupation").val();  
    const  newDebt            = $("#debt").val();        
    const  newWeapon          = $("#weapon").val();  

      
    please.createOneRegister( newName, newOccupation, newDebt, newWeapon );



      // This Empties the Form Again
      $('#new-character-form').trigger("reset");

  }); //Event - #new-character-form






}); // Document Ready