axios.get(`http://localhost:9000/characters`).then(fullList => {

  $(document).ready(() => {
    document.getElementById('fetch-all').onclick = function () {


      document.querySelector("body > section:nth-child(1) > div > div").remove

      for (var i = 0; i < fullList.data.length; i++) {
        let currentCharacter = fullList.data[i];
        console.log(currentCharacter)
        let characterName = fullList.data[i].name;
        let occupation = fullList.data[i].occupation;
        let cartoon = fullList.data[i].cartoon;
        let weapon = fullList.data[i].weapon;


        let newHTML =
          `<div class="characters-container">
      <div class="character-info">
        <div class="name">${characterName}</div>
        <div class="occupation">${occupation}</div>
        <div class="cartoon">${cartoon}</div>
        <div class="weapon">${weapon}</div>
      </div>
    </div>`

        document.querySelector("body > section:nth-child(1) > div").innerHTML += newHTML;
      }
      document.querySelector("body > section:nth-child(1) > div > div").remove();
    }

    document.getElementById('fetch-one').onclick = function () {

      // Remove function
      document.querySelector("body > section:nth-child(1) > div > div").remove();
     
      let selection = document.querySelector("body > section:nth-child(1) > section > div:nth-child(2) > input[type=text]").value;

      selection = parseInt(selection, 10);

      characterName = fullList.data[selection - 1].name;
      occupation = fullList.data[selection - 1].occupation;
      cartoon = fullList.data[selection - 1].cartoon;
      weapon = fullList.data[selection - 1].weapon;

      newHTML = `<div class="characters-container">
      <div class="character-info">
        <div class="name">${characterName}</div>
        <div class="occupation">${occupation}</div>
        <div class="cartoon">${cartoon}</div>
        <div class="weapon">${weapon}</div>
      </div>
    </div>`

      document.querySelector("body > section:nth-child(1) > div").innerHTML += newHTML;
      
    }

    document.getElementById('delete-one').onclick = function () {

      // Remove function
      document.querySelector("body > section:nth-child(1) > div > div").remove();
     
      let selection = document.querySelector("body > section:nth-child(1) > section > div:nth-child(2) > input[type=text]").value;

      selection = parseInt(selection, 10);

      characterName = fullList.data[selection - 1].name;
      occupation = fullList.data[selection - 1].occupation;
      cartoon = fullList.data[selection - 1].cartoon;
      weapon = fullList.data[selection - 1].weapon;

      newHTML = `<div class="characters-container">
      <div class="character-info">
        <div class="name">${characterName}</div>
        <div class="occupation">${occupation}</div>
        <div class="cartoon">${cartoon}</div>
        <div class="weapon">${weapon}</div>
      </div>
    </div>`

    document.querySelector("body > section:nth-child(1) > div").innerHTML - newHTML;
    }

    document.getElementById('edit-character-form').onsubmit = function () {

    }

    // New Character Button

    document.getElementById('new-character-form').onsubmit = function () {

      let userName = document.querySelector("#new-character-form > div:nth-child(1) > input[type=text]").value;
      let userOccupation = document.querySelector("#new-character-form > div:nth-child(2) > input[type=text]").value;
      let userWeapon = document.querySelector("#new-character-form > div:nth-child(3) > input[type=text]").value;
      let userCartoon = document.querySelector("#new-character-form > div:nth-child(4) > input[type=checkbox]").checked;

      const characterInfo = {
        name:       userName,
        occupation: userOccupation,
        weapon:     userWeapon,
        cartoon: userCartoon
    }
      axios.post('http://localhost:9000/characters',characterInfo)
      .then(response => {
          console.log('post successful and the response is: ', );
      })

      .catch(error => {
        console.log('Oh No! Error is: ', error);  
    })
    }
  })


})





// const charactersAPI = new APIHandler("http://localhost:9000/characters")