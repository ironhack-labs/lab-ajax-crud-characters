const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {

  document.getElementById('fetch-all').onclick = function(){
    
    $('#characters-div').empty();
    console.log('inside');
    axios.get('https://ih-crud-api.herokuapp.com/characters')
    .then((response)=>{
      response.data.forEach(oneCharacter => {
        console.log(oneCharacter);
        const newChar = `
        <div>
        <h5>Name: ${oneCharacter.name}</h5>
        <p>Occupation: ${oneCharacter.occupation}</p>
        <p>Weapon: ${oneCharacter.weapon}</p>
        <hr>
        </div>
        `
        $('#characters-div').append(newChar);
      });
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    
    $('#characters-div').empty();
    const theID = document.getElementById("character-id").value;

    axios.get(`https://ih-crud-api.herokuapp.com/characters/${theID}`)
      .then((theCharacter) => {

        console.log(theCharacter.data);
        const newChar = `
        <div>
        <h5>Name: ${theCharacter.data.name}</h5>
        <p>Occupation: ${theCharacter.data.occupation}</p>
        <p>Weapon: ${theCharacter.data.weapon}</p>
        <hr>
        </div>
        `
        $('#characters-div').append(newChar);
      })
      .catch((err) => {
        console.log(err);
      });

  }
  
  document.getElementById('delete-one').onclick = function(){
    $('#characters-div').empty();
    const theID = document.getElementById("character-id").value;

    axios.delete(`https://ih-crud-api.herokuapp.com/characters/${theID}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

        
  }
  
  document.getElementById('update').onclick = function(){

    const theID = document.getElementById("edit-id").value;

    const name        = $('#uname').val(); 
    const occupation  = $('#uoccupation').val();
    const weapon      = $('#uweapon').val();
    const debt        = $('#udebt').checked()
  
    const data = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      debt: debt,
    }
  
    console.log(data);
  
    axios.patch('https://ih-crud-api.herokuapp.com/characters/'+ theID, data)
    .then((response)=>{
      console.log(response);
    })
    .catch((err)=>{
      console.log(err);
    })

  }
  
  document.getElementById('create').onclick = function(){

    const name        = $('#name').val(); 
    const occupation  = $('#occupation').val();
    const weapon      = $('#weapon').val();
    // const debt        = $('#debt').checked.val()
    //need to change from checked on to true

    const data = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      debt: debt,
    }
  
    console.log(data);
  
    axios.post('https://ih-crud-api.herokuapp.com/characters', data)
    .then((response)=>{
      console.log(response);
    })
    .catch((err)=>{
      console.log(err);
    })
                
  }


})
