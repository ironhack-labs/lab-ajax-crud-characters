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


       // == Jquerys built in method of "Map" ==
        let listApiResults = $.map(apiResults, function(val, i) {
          return "<span>" + val.name + "</span>";
        });
        $(".character-info").html(listApiResults.join(""));



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
    

      runMapOnAPI( apiResults, 1, 2 );

    }) // then

    .catch((err) => { 
      console.log("Error");
      console.log(err);

    }); // catch

  }
//=================================
  createOneRegister () {

  }
//=================================
  updateOneRegister () {

  }
//=================================
  deleteOneRegister () {

  }
//=================================





} // class APIHandler


         // all arrays are objects but not all objects are arrays 
         // the charac. list give an array but with the id in the URL , it only give you one, Which means we are now NOT  dealing with an array but only dealing with an object.

// My Own Functions
    function runMapOnAPI( thenPlaceholder, sliceStartAt, sliceEndB4) {
      console.log(thenPlaceholder);
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


/*


  $(".pokeSearch").submit(() => {
  event.preventDefault(); // We want js to capture the submit on our Form... but we dont want the submit to go through, this "prevent default" method allows us to prevent the form from "refreshing" the page which then allows the ajax request to stay showing.

  const number = $("#poke-number").val();

  getPokemon(number);
});


*/