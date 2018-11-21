const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList();
  };

  document.getElementById("fetch-one").onclick = function(event) {
    event.preventDefault();

    const id = document.querySelector('.operation input[name="character-id"]').value;
    charactersAPI.getOneRegister(id)

    .then (responseData =>{
        let printName = document.querySelector('.character-info .name')
        printName.innerHTML = responseData.name

        let printOccupation = document.querySelector('.character-info .occupation')
        printOccupation.innerHTML = responseData.occupation

        let printWeapon = document.querySelector('.character-info .weapon')
        printWeapon.innerHTML = responseData.weapon

        let printCartoon= document.querySelector('.character-info .cartoon')
        printCartoon.innerHTML = responseData.cartoon

      
        // var printContents = document.getElementById(divName).innerHTML;
        // var originalContents = document.body.innerHTML;
        // document.body.innerHTML = printContents;
        // window.print();
        // document.body.innerHTML = originalContents;
      
    })

  };

  document.getElementById("delete-one").onclick = function() {
    const id = xxxx
    charactersAPI.deleteOneRegister(id);
  };

  document.getElementById("edit-character-form").onsubmit = function() {};

  document.getElementById("new-character-form").onsubmit = function(event) {
    event.preventDefault();
    let name = document.querySelector('.field input[name="name"]').value;
    let occupation = document.querySelector('.field input[name="occupation"]').value;
    let weapon = document.querySelector('.field input[name="weapon"]').value;
    let cartoon = document.querySelector('.field input[name="cartoon"]').checked;

    charactersAPI.createOneRegister({ name, occupation, weapon, cartoon });
  };
});
