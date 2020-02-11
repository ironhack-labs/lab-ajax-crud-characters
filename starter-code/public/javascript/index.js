import APIHandler from "./APIHandler.js"
const charactersAPI = new APIHandler('http://localhost:8000');


window.addEventListener('load', () => {

  document.getElementById('fetch-all').addEventListener('click', function (event) {

    document.querySelector(".characters-container").innerHTML = "";
    charactersAPI  
      .getFullList()
      .then(res => {
        res.data.forEach(data => {
            console.log("hey")
            document.querySelector(".characters-container").innerHTML += 
            `<div class='character-info'>
                <div class='name'>name: ${data.name}</div>
                <div class='occupation'>occupation: ${data.occupation}</div>
                <div class='cartoon'>Is it a cartoon? ${data.cartoon}</div>
                <div class='weapon'>Character Weapon: ${data.weapon}</div>
            </div>`
        });
      })
      .catch(err => {console.log(err)})
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    document.querySelector(".characters-container").innerHTML = "";
    charactersAPI  
      .getOneRegister(document.querySelector("#fetch-one-input").value)
      .then(res =>  {
            // console.log(getOneRegister(document.querySelector("#fetch-one-input").value))
            document.querySelector(".characters-container").innerHTML += 
            `<div class='character-info'>
                <div class='id'>name: ${id.id}</div>
                <div class='name'>name: ${id.name}</div>
                <div class='occupation'>occupation: ${id.occupation}</div>
                <div class='cartoon'>Is it a cartoon? ${id.cartoon}</div>
                <div class='weapon'>Character Weapon: ${id.weapon}</div>
            </div>`
      })
      .catch(err => {console.log(err)})
  });
  


  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
