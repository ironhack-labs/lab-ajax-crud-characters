const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList();
  }
  
  document.getElementById('fetch-one').onclick = function(){
    const id = document.getElementById("character-id").value;

    charactersAPI.getOneRegister(id);
  }
  
  document.getElementById('delete-one').onclick = function(){
    const id = document.getElementsByName("character-id-delete")[0].value

    charactersAPI.deleteOneRegister(id);
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    // Follow along
    event.preventDefault();
    // ------------
    const id = document.getElementsByName("chr-id")[0].value

    // Follow along
    const name = document.getElementByName("name")[0].value;
    const occupation = document.getElementByName("occupation")[0].value;
    const debt = document.getElementByName("debt")[0].checked;
    const weapon = document.getElementByName("weapon")[0].value;

    const updatedChar = {};
    if (name !== "") {
      updatedChar.name = name;
    }
    if (occupation !== "") {
      updatedChar.occupation = occupation;
    }
    if (debt !== true) {
      updatedChar.debt = debt;
    }
    if (weapon !== "") {
      updatedChar.weapon = weapon;
    }
    // ------------
    
    charactersAPI.updateOneRegister(id, updatedChar);
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    // const characterInfo = {
    //   name: document.getElementById("the-name-input").value,
    //   occupation: document.getElementById("the-occupation-input").value,
    //   debt: document.getElementById("the-debt-input").checked,
    //   weapon: document.getElementById("the-weapon-input").value
    // };

    // Follow along
    const name = document.getElementByName("name")[0].value;
    const occupation = document.getElementByName("occupation")[0].value;
    const debt = document.getElementByName("debt")[0].checked;
    const weapon = document.getElementByName("weapon")[0].value;

    if(name === "") {
      console.log("please input the name")
    } else if (occupation === "") {
      console.log("please input the occupation")
    } else if (debt === "") {
      console.log("please input the debt")
    } else if (weapon === "") {
      console.log("please input the weapon")
    } else {
        const characterInfo = {
          name: document.getElementByName("name")[0].value,
          occupation: document.getElementByName("occupation")[0].value,
          debt: document.getElementByName("debt")[0].checked,
          weapon: document.getElementByName("weapon")[0].value
        };
      }
    // ------------


    charactersAPI.createOneRegister(characterInfo);
  }
})
