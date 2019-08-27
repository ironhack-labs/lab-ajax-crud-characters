$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    axios.get('http://localhost:8000/characters').then(response => {
        // console.log(response.data);
        let list = ``
        for (let i = 0; i < response.data.length; i++) {
          const characterName = response.data[i].name;
          const characterOccupation = response.data[i].occupation;
          const characterWeapon = response.data[i].weapon;
          const characterCartoon = response.data[i].cartoon;

          //   console.log(document.getElementsByClassName('name'))
          //   console.log(document.getElementsByClassName('name').innerHTML)

          // this runs once and grabs a character and all his info from the api and adds to list. then loop runs again and grabs another character.
          list += `<div class="character-info">
          <div class="name">${characterName}</div>
          <div class="occupation">${characterOccupation}</div>
          <div class="cartoon">${characterCartoon}</div>
          <div class="weapon">${characterWeapon}</div>
        </div>`

          // the reason you can't do in in the way below is that it returns an array if you use ByClassName
          // document.getElementsByClassName('name')[0].innerHTML = characterName;
          // document.getElementsByClassName('occupation')[0].innerHTML = characterOccupation;
          // document.getElementsByClassName('weapon')[0].innerHTML = characterWeapon;
          // document.getElementsByClassName('cartoon')[0].innerHTML = characterCartoon;
        }
        // console.log(list)
        // document.getElementsByClassName('characters-container')[0].innerHTML = list
        document.querySelector('.characters-container').innerHTML = list
      })
      .catch(err => {
        console.log(err);
      })
    charactersAPI.getFullList()
  }



  document.getElementById('fetch-one').onclick = function () {
    let id = document.querySelector(`body > section:nth-child(1) > section > div:nth-child(2) > input[type=text]`).value;

    axios.get(`http://localhost:8000/characters/${id}`)
      .then(response => {
        // console.log(response.data);

        // document.querySelector("body > section:nth-child(1) > section > div:nth-child(2) > input[type=text]")
        // <input type="text" name="character-id">

        const characterName = response.data.name;
        const characterOccupation = response.data.occupation;
        const characterWeapon = response.data.weapon;
        const characterCartoon = response.data.cartoon;

        let item = `<div class="character-info">
      <div class="name">${characterName}</div>
      <div class="occupation">${characterOccupation}</div>
      <div class="cartoon">${characterCartoon}</div>
      <div class="weapon">${characterWeapon}</div>
    </div>`

        document.querySelector('.characters-container').innerHTML = item
      })
      .catch(err => {
        console.log(err);
      })
    charactersAPI.getOneRegister(id);
  }




  document.getElementById('delete-one').onclick = function () {
    
    const id = document.querySelector("body > section:nth-child(1) > section > div.operation.delete > input[type=text]").value;
    
    axios.delete(`http://localhost:8000/characters/${id}`)
      .then(response => {

      })
      .catch(err => {
        console.log(err);
      })
  }




  document.getElementById('edit-character-form').onsubmit = function () {
    // charactersAPI.updateOneRegister() 
    event.preventDefault();

    const editCharacter = {
      id: `${document.querySelector("#edit-character-form > div:nth-child(1) > input[type=text]").value}`,
      name: `${document.querySelector("#edit-character-form > div:nth-child(2) > input[type=text]").value}`,
      occupation: `${document.querySelector("#edit-character-form > div:nth-child(3) > input[type=text]").value}`,
      weapon: `${document.querySelector("#edit-character-form > div:nth-child(4) > input[type=text]").value}`,
      cartoon: `${document.querySelector("#edit-character-form > div:nth-child(5) > input[type=checkbox]").checked}`
    };

    const id = document.querySelector("#edit-character-form > div:nth-child(1) > input[type=text]").value;

    axios.put(`http://localhost:8000/characters/${id}`, editCharacter)
      .then(response => {

      //   const { name, occupation, cartoon, weapon } = response.data;
      //   const newCharacterHTML = `<div class="character-info">
      //   <div class="name">${name}</div>
      //   <div class="occupation">${occupation}</div>
      //   <div class="weapon">${weapon}</div>
      //   <div class="cartoon">${cartoon}</div>
      // </div>`

      //   document.querySelector('.characters-container').innerHTML += newCharacterHTML;

        document.getElementById("character-form").reset();
      })
      .catch(err => {
        console.log(err);
      })
  }



  document.getElementById('new-character-form').onsubmit = function () {

    event.preventDefault();

    const newCharacter = {
      name:       `${document.querySelector("#new-character-form > div:nth-child(1) > input[type=text]").value}`,
      occupation: `${document.querySelector("#new-character-form > div:nth-child(2) > input[type=text]").value}`,
      weapon:     `${document.querySelector("#new-character-form > div:nth-child(3) > input[type=text]").value}`,
      cartoon:    `${document.querySelector("#new-character-form > div:nth-child(4) > input[type=checkbox]").checked}`
    };

    axios.post('http://localhost:8000/characters/', newCharacter)
      .then(response => {

        const { name, occupation, cartoon, weapon } = response.data;
        const newCharacterHTML = `<div class="character-info">
        <div class="name">${name}</div>
        <div class="occupation">${occupation}</div>
        <div class="cartoon">${cartoon}</div>
        <div class="weapon">${weapon}</div>
      </div>`

        document.querySelector('.characters-container').innerHTML += newCharacterHTML;

        document.getElementById("character-form").reset();
      })
      .catch(err => {
        console.log(err);
      })
    // charactersAPI.createOneRegister();
  }



})