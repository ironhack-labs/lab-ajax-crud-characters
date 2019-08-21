const charactersAPI = new APIHandler("https://ih-crud-api.herokuapp.com/characters")

$(document).ready(() => {

  document.getElementById('fetch-all').onclick = function () {

    axios.get('https://ih-crud-api.herokuapp.com/characters')
      .then((result) => {

        //we make an axios request to the url the geet an instance of the data

        let characterList = result.data;

        console.log(characterList);

        let theContainer = $('.characters-container');
        theContainer.html('')

        characterList.forEach(currentItem => {

          // For each character, create a new box with character-info class 

          let newBox = $('<div></div>');
          newBox.addClass('character-info');
          newBox.append(`<h2> Name: ${currentItem.name}  </h2>`);
          newBox.append('</br>');
          newBox.append(`<h2> Occupation: ${currentItem.occupation}  </h2>`);
          newBox.append('</br>');
          newBox.append(`<h2> Weapon: ${currentItem.weapon}  </h2>`);
          newBox.append('</br>');

          theContainer.append(newBox);

        })

      })
      .catch((err) => {
        console.log(err);
      })


  }

  document.getElementById('fetch-one').onclick = function () {

    // connect to container div then clear it of all character boxes
    let theContainer = $('.characters-container');
    theContainer.html('')

    // Get value inside the textbox we want to get value from 
    let characterID = $(`#character-search-id`).val();

    // use API request to get 1 character using the id from user
    axios.get(`https://ih-crud-api.herokuapp.com/characters/${characterID}`)
      .then((result) => {

        // TODO Why the .data? To get back what kind of useable object?
        let character = result.data;

        // create new box and give it proper css class then append it too container
        let newBox = $('<div></div>');
        newBox.addClass('character-info');
        newBox.append(`<h2>ID: ${character.id}</h2>`)
        newBox.append(`<h2> Name: ${character.name}  </h2>`);
        newBox.append('</br>');
        newBox.append(`<h2> Occupation: ${character.occupation}  </h2>`);
        newBox.append('</br>');
        newBox.append(`<h2> Weapon: ${character.weapon}  </h2>`);
        newBox.append('</br>');

        theContainer.append(newBox);

      })
      .catch((err) => {
        console.log(`Error pulling single character`, err);
      })


  }

  document.getElementById('delete-one').onclick = function () {

  }

  document.getElementById('edit-character-form').onsubmit = function () {

    // Prevents unwanted refreshing from form submission
    event.preventDefault();

    // First get id from input
    const theId = document.getElementById("edit-id").value;

    // get values from fields
    let name = $(`#edit-name`).val();
    let occ = $(`#edit-occupation`).val();
    let weapon = $(`#edit-weapon`).val();

    // create new info to place into exsisting character
    const updatedcharacterInfo = {

      name: name,
      occupation: occ,
      weapon: weapon

    };

    // Patch requests allow us to modify details in exsisting
    axios.patch(`https://ih-crud-api.herokuapp.com/characters/${theId}`, updatedcharacterInfo)
      .then(response => {

        console.log('update successful: ', response);

        // TODO What is this doing?
        document.getElementById("edit-character-form").reset();

      })
      .catch(error => {
        console.log(error);
      })

  }

  document.getElementById('new-character-form').onsubmit = function () {

    event.preventDefault();

    // get values from fields
    let name = $(`#new-char-name`).val();
    let occ = $(`#new-char-occ`).val();
    let weapon = $(`#new-char-weapon`).val();

    // create new object using the values
    const characterInfo = {
      name: name,
      occupation: occ,
      weapon: weapon
    };

    // pass object to api through post request
    axios.post('https://ih-crud-api.herokuapp.com/characters', characterInfo)
      .then(response => {

        console.log("You just created this character: ", response.data);

      })
      .catch(error => {
        console.log("Error is: ", error);
      })


  }

})
