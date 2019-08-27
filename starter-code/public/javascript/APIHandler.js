// class APIHandler {
//   constructor (baseUrl) {
//     this.BASE_URL = baseUrl;
//   }

//   getFullList (names) {

    
//     axios.get('http://localhost:8000/characters').then(response => {
//       // console.log(response.data);
//         let list = ``
//         for(let i = 0; i < response.data.length; i++) {
//           const characterName = response.data[i].name;
//           const characterOccupation = response.data[i].occupation;
//           const characterWeapon = response.data[i].weapon;
//           const characterCartoon = response.data[i].cartoon;

//         //   console.log(document.getElementsByClassName('name'))
//         //   console.log(document.getElementsByClassName('name').innerHTML)

//         // this runs once and grabs a character and all his info from the api and adds to list. then loop runs again and grabs another character.
//           list += `<div class="character-info">
//           <div class="name">${characterName}</div>
//           <div class="occupation">${characterOccupation}</div>
//           <div class="cartoon">${characterCartoon}</div>
//           <div class="weapon">${characterWeapon}</div>
//         </div>`

//         // the reason you can't do in in the way below is that it returns an array if you use ByClassName
//         // document.getElementsByClassName('name')[0].innerHTML = characterName;
//         // document.getElementsByClassName('occupation')[0].innerHTML = characterOccupation;
//         // document.getElementsByClassName('weapon')[0].innerHTML = characterWeapon;
//         // document.getElementsByClassName('cartoon')[0].innerHTML = characterCartoon;
//       }
//       // console.log(list)
//       // document.getElementsByClassName('characters-container')[0].innerHTML = list
//       document.querySelector('.characters-container').innerHTML = list
//     })
//     .catch(err => {
//       console.log(err);
//     })
//   }

  // we want to receive the ID input from the form box  
  // then retrieve that specific ID from the database.
  // probably use a .value to get the inputed ID and then take that information to retreive the correct index
  // prob loop through it and only take ID we want
  // getOneRegister (id) {
  //   // let id = document.querySelector(`body > section:nth-child(1) > section > div:nth-child(2) > input[type=text]`).value;

  //   axios.get(`http://localhost:8000/characters/${id}`)
  //   .then(response => {
  //     // console.log(response.data);

  //     // document.querySelector("body > section:nth-child(1) > section > div:nth-child(2) > input[type=text]")
  //     // <input type="text" name="character-id">

  //     const characterName = response.data.name;
  //     const characterOccupation = response.data.occupation;
  //     const characterWeapon = response.data.weapon;
  //     const characterCartoon = response.data.cartoon;

  //     let item = `<div class="character-info">
  //     <div class="name">${characterName}</div>
  //     <div class="occupation">${characterOccupation}</div>
  //     <div class="cartoon">${characterCartoon}</div>
  //     <div class="weapon">${characterWeapon}</div>
  //   </div>`
    
  //     document.querySelector('.characters-container').innerHTML = item
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }

  // createOneRegister (e) {
  //   e.preventDefault()

  //   axios.post('http://localhost:8000/characters')
  //   .then(response => {
  //     // console.log(response.data);
  //     // name
  //     // const characterName = document.querySelector("#new-character-form > div:nth-child(1) > input[type=text]").value;
  //     // // occupation:
  //     // const characterOccupation = document.querySelector("#new-character-form > div:nth-child(2) > input[type=text]").value;
  //     // // weapon 
  //     // const characterWeapon = document.querySelector("#new-character-form > div:nth-child(3) > input[type=text]").value;
  //     // // is cartoon checked?
  //     // const characterCartoon = document.querySelector("#new-character-form > div:nth-child(4) > input[type=checkbox]").value;
  //     const newCharacterName = document.querySelector(`#new-character-form > div:nth-child(1) > input[type=text]`).value
  //     const newOccupation = document.querySelector(`#new-character-form > div:nth-child(2) > input[type=text]`).value
  //     const newWeapon = document.querySelector(`#new-character-form > div:nth-child(3) > input[type=text]`).value
  //     const newCartoon = document.querySelector(`#new-character-form > div:nth-child(4) > input[type=checkbox]`).value

  //     let newItem = `<div class="character-info">
  //     <div class="name">${newCharacterName}</div>
  //     <div class="occupation">${newOccupation}</div>
  //     <div class="cartoon">${newCartoon}</div>
  //     <div class="weapon">${newWeapon}</div>
  //   </div>`
    
  //     document.querySelector('.characters-container').innerHTML = newItem
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }

  // updateOneRegister () {
  //   e.preventDefault()

  //   // axios.get('http://localhost:8000/characters/id')
  //   // .then(response => {
  //   //   console.log(response.data);
  //   // })
  //   // .catch(err => {
  //   //   console.log(err);
  //   // })
  // }

  // deleteOneRegister () {
  //   // axios.delete('http://localhost:8000/characters/id')
  //   // .then(response => {
  //   //   console.log(response.data);
  //   // })
  //   // .catch(err => {
  //   //   console.log(err);
  //   // })
  // }
}
