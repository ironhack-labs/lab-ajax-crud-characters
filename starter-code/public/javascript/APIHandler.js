class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl
  }

  // -----------------
  // FETCH ALL
  // -----------------
  getFullList() {
    // Get characters container
    const container = $('.characters-container')
    // Get characters from DB
    axios.get('https://ih-crud-api.herokuapp.com/characters')
      .then((result) => {
        // Clear characters container
        container.html('')
        // Create each character one-by-one into new html character-info container
        result.data.map((eachCharacter) => {
          let theList = `
          <div class="character-info">
            <div class="name">Id: <span>${eachCharacter.id}</span></div>
            <div class="name">Character Name: <span>${eachCharacter.name}</span></div>
            <div class="occupation">Character Occupation: <span>${eachCharacter.occupation}</span></div>
            <div class="cartoon">Is a Cartoon?</div>
            <div class="weapon">Character Weapon:  <span>${eachCharacter.weapon}</span></div>
          </div>`
          // Add the newly created charcter to page
          container.append(theList)
        })
      })
      .catch((err) => { console.log('Error retriving character list', err) })
  }

  // ------------------------
  // SEARCH BY ID - FETCH ONE
  // ------------------------
  getOneRegister() {
    // Get characters container
    const mainContainer = $('.characters-container')
    // Get the text box input
    const theId = $('input[name=character-id]').val()

    // Access database
    axios.get(`https://ih-crud-api.herokuapp.com/characters/${theId}`)
      .then((theCharacter) => {
        // Clear the character container
        mainContainer.html('')

        // Create each character one-by-one into new html character-info container
        let singleCharacter = `
        <div class="character-info">
          <div class="name">Id: <span>${theCharacter.data.id}</span></div>
          <div class="name">Character Name: <span>${theCharacter.data.name}</span></div>
          <div class="occupation">Character Occupation: <span>${theCharacter.data.occupation}</span></div>
          <div class="cartoon">Is a Cartoon?</div>
          <div class="weapon">Character Weapon: <span>${theCharacter.data.weapon}</span></div>
        </div>`
        mainContainer.append(singleCharacter)
        $('input[name=character-id]').val('')
      })
      .catch((err) => {
        console.log('Error retriving character by ID', err)
        $('input[name=character-id]').val('')
      })
  }

  // --------------------
  // CREATE NEW CHARACTER
  // --------------------
  createOneRegister() {
    // Grab the data entered into form inputs
    let theName = $('.the-Name').val()
    let theOccupation = $('.the-Occupation').val()
    let theWeapon = $('.the-Weapon').val()

    // Build CharacterInfo object from inputs
    const characterInfo = {
      name: theName,
      occupation: theOccupation,
      weapon: theWeapon
    }

    // Connect to DB and POST new character object
    axios.post('https://ih-crud-api.herokuapp.com/characters', characterInfo)
      .then((newCharacter) => {
        document.getElementById('new-character-form').reset()
        console.log('New character succesfully added ', newCharacter)

        // If character was added successfully, turn button green
        $('#send-data').css('color', 'green')
        $('#send-data').css('border', '2px solid green')
        setTimeout(function () {
          $('#send-data').css('color', '#fff')
          $('#send-data').css('border', '2px solid #fff')
        }, 500)
      })
      .catch((err) => {
        console.log('An error just happened ', err)

        // If character was added unsuccessfully, turn button red
        $('#send-data').css('backgroundColor', 'red')
        $('#send-data').css('color', 'white')

        setTimeout(function () {
          $('#send-data').css('color', 'white')
          $('#send-data').css('border', '1px solid white')
        }, 500)
      })
  }

  // -----------------
  // EDIT CHARACTER
  // -----------------
  updateOneRegister() {
    // Grab the data entered into form inputs
    let theId = $('.edit-id').val()
    let theName = $('.edit-name').val()
    let theOccupation = $('.edit-occupation').val()
    let theWeapon = $('.edit-weapon').val()

    // Build CharacterInfo object from inputs
    const characterUpdated = {
      name: theName,
      occupation: theOccupation,
      weapon: theWeapon
    }

    // Connect to DB, get character by ID and EDIT
    axios.patch(`https://ih-crud-api.herokuapp.com/characters/${theId}`, characterUpdated)
      .then((characterUp) => {
        document.getElementById('edit-character-form').reset()
        console.log('Character updated successfully', characterUp)

        // Edit the character info and create new html with info from DB
        let characterChanged = `
          <div class="character-info">
            <div class="name">Id: <span>${characterUp.data.id}</span></div>
            <div class="name">Character Name: <span>${characterUp.data.name}</span></div>
            <div class="occupation">Character Occupation: <span>${characterUp.data.occupation}</span></div>
            <div class="cartoon">Is a Cartoon?</div>
            <div class="weapon">Character Weapon: <span>${characterUp.data.weapon}</span></div>
          </div>`

        // Output new data to page
        document.getElementsByClassName('characters-container')[0].innerHTML = ''
        document.getElementsByClassName('characters-container')[0].innerHTML = characterChanged

        // If character was added successfully, turn button green
        $('#update-data').css('backgroundColor', 'green')
        $('#update-data').css('color', 'white')

        setTimeout(function () {
          $('#update-data').css('color', '#fff')
          $('#update-data').css('border', '1px solid #fff')
        }, 500)
      })
      .catch((err) => {
        console.log('Error editing character', err)

        // If character was added unsuccessfully, turn button red
        $('#update-data').css('backgroundColor', 'red')
        $('#update-data').css('border', '1px solid red')
        setTimeout(function () {
          $('#update-data').css('color', '#fff')
          $('#update-data').css('border', '2px solid #fff')
        }, 500)
      })
  }

  // -----------------
  // DELETE BY ID
  // -----------------
  deleteOneRegister() {
    // Grab charcter ID from form input
    const theId = $('.characterToDelete').val()

    // Connect to DB and DELETE by ID
    axios.delete(`https://ih-crud-api.herokuapp.com/characters/${theId}`)
      .then((characterDeleted) => {
        $('.characterToDelete').val('')
        console.log('Character was deleted', characterDeleted.data)

        // If character was added successfully, turn button green
        $('#delete-one').css('backgroundColor', 'green')
        $('#delete-one').css('color', 'white')
        setTimeout(function () {
          $('#delete-one').css('color', '#white')
          $('#delete-one').css('border', '1px solid white')
        }, 500)
      }).catch((err) => {
        console.log('An error just happened ', err)
        $('.characterToDelete').val('')

        // If character was added unsuccessfully, turn button red
        $('#delete-one').css('backgroundColor', 'red')
        $('#delete-one').css('color', 'white')

        setTimeout(function () {
          $('#delete-one').css('color', 'white')
          $('#delete-one').css('border', '1px solid white')
        }, 500)
      })
  }
} // CLOSE API HANDLER
