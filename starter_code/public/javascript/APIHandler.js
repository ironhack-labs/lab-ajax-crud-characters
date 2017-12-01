"use strict";
var _ = undefined; // For shorthand

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  } // constructor

//=================================



  getFullList () {

    $.ajax({
      method: "GET",
      url: `${this.BASE_URL}/characters`
    })

      .then((apiResults) => { // "then" for successful call back
        console.log("Success!");
       // console.log(apiResults);


        runMapOnAPI( apiResults, 1, _ );

      }) // then

      .catch((err) => { // "catch" for error callback
        console.log("Error");
        console.log(err);

      }); // catch

  } //getFullList



//=================================
  getOneRegister (characterNumber) {

    $.ajax({
      method: "GET",
      url: `${this.BASE_URL}/characters/${characterNumber}`
    })

    .then((apiResults) => { 

      console.log("Success!");
    

      runFetchOne( apiResults );

    }) // then

    .catch((err) => { 
      console.log("Error");
      console.log(err);

    }); // catch

  } //getOneRegister



//=================================
  deleteOneRegister (characterNumber) {

    $.ajax({
      method: "DELETE",
      url: `${this.BASE_URL}/characters/${characterNumber}`
    })

    .then((apiResults) => { 

      console.log("Success!");

    }) // then

    .catch((err) => { 
      console.log("Error");
      console.log(err);

    }); // catch


  } // deleteOneRegister



//=================================
  updateOneRegister (characterNumber) {

    $.ajax({
      method: "PATCH",
      url: `${this.BASE_URL}/characters/${characterNumber}`,
      data: runUpdateOne()
    })

    .then((apiResults) => { 

      console.log("Success!");

    }) // then

    .catch((err) => { 
      console.log("Error");
      console.log(err);

    }); // catch

  }
//=================================

  createOneRegister ( typedName, typedOccupation, typedDebt, typedWeapon ) {

    $.ajax({
      method: "POST",
      url: `${this.BASE_URL}/characters/`,
      data: runCreateOne( typedName, typedOccupation, typedDebt, typedWeapon )
    })

    .then((apiResults) => { 

      console.log("Success!");

      runAppendOne( apiResults );

    }) // then

    .catch((err) => { 
      console.log("Error");
      console.log(err);

    }); // catch

  }

//=================================



} // class APIHandler


         // all arrays are objects but not all objects are arrays 
         // the charac. list gave an array but with the id in the URL , it only gives you one, Which means we are now NOT  dealing with an array but only dealing with ONE object.





//=================================

//========    My Own Functions    =================

//=================================

    function runMapOnAPI( thenPlaceholder, sliceStartAt, sliceEndB4) {
      let thisRun = 'yes';
      //console.log(thenPlaceholder);
      thenPlaceholder.splice(0, 0, '');
      let listApiResults = thenPlaceholder.map( (valueFrom, index) => 
            (`
             
              <p> ${index}.) Name : ${valueFrom.name}       </p>
              <p> Occupation      : ${valueFrom.occupation} </p>
              <p> Debt            : ${valueFrom.debt}       </p>
              <p> Weapon          : ${valueFrom.weapon}     </p>

              <hr />
             
            `)
      
      ).slice(sliceStartAt, sliceEndB4); // End of Map

      $(".character-info").html(listApiResults.join(""));
  } //runMapOnAPI()




// ======================
    function runFetchOne( thenPlaceholder ) {
      //console.log(thenPlaceholder);
      
      let listApiResults = 
            (`
             
              <p> Name            : ${thenPlaceholder.name}       </p>
              <p> Occupation      : ${thenPlaceholder.occupation} </p>
              <p> Debt            : ${thenPlaceholder.debt}       </p>
              <p> Weapon          : ${thenPlaceholder.weapon}     </p>

              <hr />
             
            `);

      $(".character-info").html(listApiResults);
  } //runFetchOnAPI()


  // ======================
       function runUpdateOne() {
      //console.log(thenPlaceholder);
      
      let listApiResults = 
            {
             
              name            : $("#name").val(),        
              occupation      : $("#occupation").val(),  
              debt            : $("#debt").val(),        
              weapon          : $("#weapon").val()      
             
            };

      return listApiResults;

  } //runUpdateOne()


  // ======================  
       function runCreateOne( typedName, typedOccupation, typedDebt, typedWeapon ) {
      //console.log(thenPlaceholder);
      
      let listApiResults = 
            {
             
              name            : typedName,        
              occupation      : typedOccupation,  
              debt            : typedDebt,        
              weapon          : typedWeapon      
             
            };

      return listApiResults;

  } //runCreateOne()


  // ======================
    function runAppendOne( apiResults ) {
      //console.log(thenPlaceholder);
      
      let listApiResults = 
            (`
             
              <p> Name            : ${apiResults.name}       </p>
              <p> Occupation      : ${apiResults.occupation} </p>
              <p> Debt            : ${apiResults.debt}       </p>
              <p> Weapon          : ${apiResults.weapon}     </p>

              <hr />
             
            `);

      $(".character-info").html(listApiResults);
  } //runFetchOnAPI()


