
$(document).ready(function(){




$('#fetch-all').click(function(){
console.log("some");
  axios.get(`http://localhost:3000/characters`)
  .then(response => {
    console.log(response.data)
    // $('.characters-container').empty();
    response.data.forEach(function(oneCharacter){
      $('.characters-container').append(`
          <span><h3>Name: ${oneCharacter.name}</h3></span><br>
          <span><p> Occupation: ${oneCharacter.occupation} </p></span><br>
          <span><p> Weapon: ${oneCharacter.cartoon} </p></span><br>
         <span> <p> Weapon: ${oneCharacter.weapon} </p></span><br>  

        `)
    })
  })
  .catch(err => {
      console.log(err);
  })
}) //end click function



}); // end document ready