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

    let theForm = $('#edit-character-form');

    theForm.submit(function (e) {
      // TODO Not sure what this does?
      e.preventDefault();

      let searchID = $('#edit-id').val()
      // grab the value of the id from the input box

      axios.get(`https://ih-crud-api.herokuapp.com/characters/${searchID}`)
        .then((result) => {

          let foundCharacter = result.data;
          console.log(foundCharacter);

          //we make an axios request to the url + the searchID

          let name = foundCharacter.name;
          let occupation = foundCharacter.occupation;
          let weapon = foundCharacter.weapon;

          // we grab a bunch of values from the thing we get back from the axios call

          //then append a bunch of stuff to the div
          theDiv.append(`<h2> Name: ${theName} </h2>`);
          theDiv.append(`<br>`)
          theDiv.append(`<h5>Capital: ${capital} </h5> `)
          theDiv.append(`<p>Language: ${language} </p> `)
          theDiv.append('<h3>Borders</h3>')
          border.forEach((eachBorder) => {
            console.log(eachBorder)
            theDiv.append(`<li> ${eachBorder} </li>`)
          })

        })
        .catch((err) => {
          console.log(err);
        })

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
