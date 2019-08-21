class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

 getFullList(){
const container = $('.characters-container')
axios.get('https://ih-crud-api.herokuapp.com/characters')
.then((result) => {
  container.html("");

  //SHOW THE INFORMATION WITH DATA 
  result.data.map((eachCharacter) => {
  let theList = `<div class="character-info">
  <div class="name">Id: <span>${eachCharacter.id}</span></div>
  <div class="name">Character Name: <span>${eachCharacter.name}</span></div>
  <div class="occupation">Character Occupation: <span>${eachCharacter.occupation}</span></div>
  <div class="cartoon">Is a Cartoon?</div>
  <div class="weapon">Character Weapon:  <span>${eachCharacter.weapon}</span></div>
</div>`
container.append(theList)
})
})
.catch((err) => {
  console.log("An error just happened ", err)
})
  }

  getOneRegister () {
    const mainContainer = $('.characters-container')
    const theId = $('input[name=character-id]').val();

axios.get(`https://ih-crud-api.herokuapp.com/characters/${theId}`)
.then((theCharacter) => {
  mainContainer.html("");
  
  //SHOW THE INFORMATION WITH DATA 
  let singleCharacter = `<div class="character-info">
  <div class="name">Id: <span>${theCharacter.data.id}</span></div>
  <div class="name">Character Name: <span>${theCharacter.data.name}</span></div>
  <div class="occupation">Character Occupation: <span>${theCharacter.data.occupation}</span></div>
  <div class="cartoon">Is a Cartoon?</div>
  <div class="weapon">Character Weapon: <span>${theCharacter.data.weapon}</span></div>
</div>`
mainContainer.append(singleCharacter);
$('input[name=character-id]').val('');
})
.catch((err) => {
  console.log("An error just happened ", err);
  $('input[name=character-id]').val('');
})

  }

  createOneRegister() {
let theName = $('.the-Name').val();
let theOccupation = $('.the-Occupation').val();
let theWeapon = $('.the-Weapon').val();

const characterInfo = {
  name: theName,
  occupation: theOccupation,
  weapon: theWeapon
}

axios.post('https://ih-crud-api.herokuapp.com/characters', characterInfo)
.then((newCharacter) => {
  document.getElementById('new-character-form').reset();
  console.log("New character succesfully added ", newCharacter)

    //CHANGE CSS GREEN COLOR TO BUTTON WHEN EVERYTHING IS OK
  $('#send-data').css('color', 'green');
        $('#send-data').css('border', '2px solid green');
        setTimeout(function(){
          $('#send-data').css('color', '#fff');
          $('#send-data').css('border', '2px solid #fff');
        }, 500)

})
.catch((err) => {
  console.log("An error just happened ", err);
  
  //CHANGE CSS RED COLOR TO BUTTON WHEN ERROR HAPPENS
  $('#send-data').css('color', 'red');
        $('#send-data').css('border', '2px solid red');
        setTimeout(function(){
          $('#send-data').css('color', '#fff');
          $('#send-data').css('border', '2px solid #fff');
        }, 500)
})
  }

  updateOneRegister () {
    let theId = $('.edit-id').val();
    let theName = $('.edit-name').val();
    let theOccupation = $('.edit-occupation').val();
    let theWeapon = $('.edit-weapon').val();
    
    const characterUpdated = {
      name: theName,
      occupation: theOccupation,
      weapon: theWeapon
    }

    axios.patch(`https://ih-crud-api.herokuapp.com/characters/${theId}`, characterUpdated)
    .then((characterUp) => {
      document.getElementById('edit-character-form').reset();
      console.log("New character succesfully updated ", characterUp);

      //MAKING THE DIV
      let characterChanged = `<div class="character-info">
      <div class="name">Id: <span>${characterUp.data.id}</span></div>
      <div class="name">Character Name: <span>${characterUp.data.name}</span></div>
      <div class="occupation">Character Occupation: <span>${characterUp.data.occupation}</span></div>
      <div class="cartoon">Is a Cartoon?</div>
      <div class="weapon">Character Weapon: <span>${characterUp.data.weapon}</span></div>
    </div>`
    
    //UPDATE SHOWING LIST IN WEBSITE
    document.getElementsByClassName('characters-container')[0].innerHTML = "";
    document.getElementsByClassName('characters-container')[0].innerHTML = characterChanged;

         //CHANGE CSS GREEN COLOR TO BUTTON WHEN EVERYTHING IS OK
      $('#update-data').css('color', 'green');
        $('#update-data').css('border', '2px solid green');
        setTimeout(function(){
          $('#update-data').css('color', '#fff');
          $('#update-data').css('border', '2px solid #fff');
        }, 500)
    })
    .catch((err) => {
      console.log("An error just happened ", err);

      //CHANGE CSS RED COLOR TO BUTTON WHEN ERROR HAPPENS
      $('#update-data').css('color', 'red');
      $('#update-data').css('border', '2px solid red');
      setTimeout(function(){
        $('#update-data').css('color', '#fff');
        $('#update-data').css('border', '2px solid #fff');
      }, 500)
    })
  }

  deleteOneRegister () {
    const theId = $('.characterToDelete').val();
    axios.delete(`https://ih-crud-api.herokuapp.com/characters/${theId}`)
    .then((characterDeleted) => {
      $('.characterToDelete').val('');
      console.log("Character succesfully removed", characterDeleted.data)

      //CHANGE CSS GREEN COLOR TO BUTTON WHEN EVERYTHING IS OK
      $('#delete-one').css('color', 'green');
        $('#delete-one').css('border', '2px solid green');
        setTimeout(function(){
          $('#delete-one').css('color', '#fff');
          $('#delete-one').css('border', '2px solid #fff');
        }, 500)

      }).catch((err) => {
        console.log("An error just happened ", err);
        $('.characterToDelete').val('');

        //CHANGE CSS RED COLOR TO BUTTON WHEN ERROR HAPPENS
        $('#delete-one').css('color', 'red');
        $('#delete-one').css('border', '2px solid red');
        setTimeout(function(){
          $('#delete-one').css('color', '#fff');
          $('#delete-one').css('border', '2px solid #fff');
        }, 500)
    })
  }
}
