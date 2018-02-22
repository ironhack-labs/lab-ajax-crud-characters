const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList();
  }
  
  document.getElementById('fetch-one').onclick = function(){
    const id = document.getElementsByName("character-id")[0];
    console.log("the one element id:", id)
    charactersAPI.getOneRegister(id);

  }
  
  document.getElementById('delete-one').onclick = function(){
    var id = document.getElementsByName("character-id-delete")[0].value;
    console.log("deleted element has id:", id)
    charactersAPI.deleteOneRegister(id);
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){

    event.preventDefault();
    const id = document.getElementsByName("chr-id")[0].value;
    console.log("id of updated char", id);


    const name = document.getElementsByName("name")[1].value;
    const occupation = document.getElementsByName("occupation")[1].value;
    const debt = document.getElementsByName("debt")[1].value;
    const weapon = document.getElementsByName("weapon")[1].value;

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

  console.log("updated:", updatedChar);
  charactersAPI.updatedOneRegister(id, updatedChar);
  
  document.getElementById('new-character-form').onsubmit = function(){

    event.preventDefault();

    const name = document.getElementsByName("name")[0].value;
    const occupation = document.getElementsByName("occupation")[0].value;
    const debt = document.getElementsByName("debt")[0].value;
    const weapon = document.getElementsByName("weapon")[0].value;
    
    if(name === "") {
      console.log("Please input the name")
    } else if (occupation === "") {
      console.log("Please input the occupation");
    } else if (debt === "") {
      console.log("Please input the debt")
    } else if (weapon === "") {
      console.log("Please input the weapon");
    } else {
      const newChar = {
        name: document.getElementsByName("name")[0].value,
        occupation: document.getElementsByName("occupation")[0].value,
        debt: document.getElementsByName("debt")[0].value,
        const: document.getElementsByName("weapon")[0].value
      }
      console.log("new Char", newChar);
      charactersAPI.createOneRegister(newChar);

    }

  }
  }
})