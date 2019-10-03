const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList().then(responseFromAPI => {
        console.log("Response from API is: ", responseFromAPI.data);
        // return responseFromAPI.data;
      })
      .catch(err => console.log("Error is: ", err));;
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.getElementsByName("character-id")[0].value;

    charactersAPI.getOneRegister(id)
      .then(responseFromAPI => {
        console.log("Response from API is: ", responseFromAPI.data);
        const oneCharacter = responseFromAPI.data;
        console.log(oneCharacter.id)
        document.getElementsByName("chr-id")[0].value = oneCharacter.id;
        document.getElementsByName("name")[1].value = oneCharacter.name;
        document.getElementsByName("occupation")[1].value = oneCharacter.occupation;
        document.getElementsByName("weapon")[1].value = oneCharacter.weapon;
        document.getElementsByName("cartoon")[1].checked = oneCharacter.cartoon;
      })
      .catch(err => console.log("Error is: ", err));;
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.getElementsByName("character-id-delete")[0].value;
    const oneCharacter = charactersAPI.deleteOneRegister(id)
      .then(responseFromAPI => {
        console.log("Response from API is: ", responseFromAPI.data);
        document.getElementById('delete-one').classList.add("bg-green");
      })
      .catch(err => {
        console.log("Error is: ", err);
        document.getElementById('delete-one').classList.add("bg-red");
    })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const id = document.getElementsByName("chr-id")[0].value;

    const newChar = {
      name: document.getElementsByName("name")[1].value,
      occupation: document.getElementsByName("occupation")[1].value,
      weapon: document.getElementsByName("weapon")[1].value,
      cartoon: document.getElementsByName("cartoon")[1].value
    }
    charactersAPI.updateOneRegister(id, newChar)
      .then(responseFromAPI => {
        console.log("Response from API is: ", responseFromAPI.data)
        document.getElementById('send-data-update').classList.add("bg-green");
      })
      .catch(err => {
        console.log("Error is: ", err);
        document.getElementById('send-data-update').classList.add("bg-red");
      })
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const newChar = {
      name: document.getElementsByName("name")[0].value,
      occupation: document.getElementsByName("occupation")[0].value,
      weapon: document.getElementsByName("weapon")[0].value,
      cartoon: document.getElementsByName("cartoon")[0].value
    }
    charactersAPI.createOneRegister(newChar)
      .then(responseFromAPI => {
        console.log("Response from API is: ", responseFromAPI.data);
        document.getElementById('send-data').classList.add("bg-green");
      })
      .catch(err => {
        console.log("Error is: ", err);
        document.getElementById('send-data').classList.add("bg-green");
      })
  });
});