const charactersAPI = new APIHandler("http://localhost:8000")


//get all

$(document).ready( () => {

  function changeElementRed(id) {
    var el = document.getElementById(id);
    el.style.backgroundColor = "red";
  }
  function changeElementGreen(id) {
    var el = document.getElementById(id);
    el.style.backgroundColor = "green";
  }

  document.getElementById('fetch-all').onclick = function(){
    axios.get('http://localhost:8000/characters')
    .then(response => {
        console.log('fetching all');
        console.log(response.data);
        //I had problems here figuring out how to edit the elements in the DOM
        //to add the DB info into the character cards. How can I grab this info??
        var updateChar = document.getElementsByClassName("character-info");
        console.log(updateChar[0].innerHTML);
        response.data.forEach(function(character){
          updateChar[0][0].innerHTML = response.data.name;
          updateChar.childNodes[1].innerHTML = response.data.occupation;
          updateChar.childNodes[2].innerHTML = response.data.debt;
          updateChar.childNodes[3].innerHTML = response.data.weapon;
        })
        //experiment end
        return response.data;
    })
    .catch(error => {
        console.log('Oh No! Error!');  
        console.log(error)
    })
  }

//get one

  document.getElementById('fetch-one').onclick = function(){
    const charId = document.getElementById("character-id").value;
    if(charId){
    axios.get(`http://localhost:8000/characters/${charId}`)
    .then(response => {
        console.log('fetching character by ID');
        console.log(response.data)
        changeElementGreen("fetch-one");
        return response.data;
    })
    .catch(error => {
        console.log('Oh No! Error!');  
        changeElementRed("fetch-one");
        console.log(error)
    })
  }
  }
  
//delete one

  document.getElementById('delete-one').onclick = function(){
    const charId = document.getElementById("character-id-delete").value;
    if(charId){
    axios.delete(`http://localhost:8000/characters/${charId}`)
    .then(response => {
        const charId = document.getElementById("character-id-delete").value;
        console.log('deleting character by ID');
        console.log(response.data);
        changeElementGreen("delete-one");
        return response.data;
    })
    .catch(error => {
        console.log('Oh No! Error!');  
        changeElementRed("delete-one");
        console.log(error)
    })
  }
  }
  
//patch one

  document.getElementById("edit-character-form").onsubmit = function(e) {
      e.preventDefault();
      const updateInfo = {
        name: e.target.name.value,
        occupation: e.target.occupation.value,
        weapon: e.target.weapon.value,
        debt: e.target.debt.value
      };
      const charId = e.target.chrId.value;
      axios.patch(`http://localhost:8000/characters/${charId}`, updateInfo)
      .then(response => {
        console.log("Update SUCCESS!");
        console.log(response.data);
        changeElementGreen("edit-button");
        return response.data;
      })
      .catch(error => {
        changeElementRed("edit-button");
        console.log(error)
      })
    } 

//post one
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();
    const addInfo = {
      name: e.target.name.value,
      occupation: e.target.occupation.value,
      weapon: e.target.weapon.value,
      debt: e.target.debt.value
    };
    if(addInfo.name && addInfo.occupation &&addInfo.weapon){
    axios.post(`http://localhost:8000/characters/`, addInfo)
    .then(response => {
      console.log("New Character Added: SUCCESS!");
      console.log(response.data);
      changeElementGreen("add-char-button");
      return response.data;
    })
    .catch(error => {
      console.log("OH NO!!!");
      changeElementGreen("add-char-button");
      console.log(error);
    })
  }
  } 
})
