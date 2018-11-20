const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {

    // get all the characters in the database

  document.getElementById('fetch-all').onclick = function(){
    fetchAll();
  }

  function fetchAll(){

    axios.get('https://ih-crud-api.herokuapp.com/characters')
    .then((response)=>{

        console.log(response.data);
        
        response.data.forEach((eachCharacter)=>{

            $("#charactersContainer").append(  
            
            
              `<div class="character-info">
              <div class="name">${eachCharacter.name}</div>
              <div class="occupation">${eachCharacter.occupation}</div>
              <div class="cartoon">${eachCharacter.debt}</div>
              <div class="weapon">${eachCharacter.weapon}</div>
              <div> ${eachCharacter.id}</div>
            </div> `);

        }) 

    })
    .catch((err)=>{
        console.log(err)
    })

  }

  
  // get one character in the database
  document.getElementById('fetch-one').onclick = function(){

    const getCharacter =  document.getElementById('oneCharacter').value;


    axios.get('https://ih-crud-api.herokuapp.com/characters/'+ getCharacter)
    .then((response)=>{

        console.log(response.data);

            $("#charactersContainer").append(  
            
            
              `<div class="character-info">
              <div class="name">${response.data.name}</div>
              <div class="occupation">${response.data.occupation}</div>
              <div class="cartoon">${response.data.debt}</div>
              <div class="weapon">${response.data.weapon}</div>
              <div class="id">${response.data.id}</div>
            </div>
          </div> `);

        })

    .catch((err)=>{
        console.log(err)
    })
    
  }
  
  // delete a character in the database
  document.getElementById('delete-one').onclick = function(){

    let inputDelete = $("#characterDeleteInput").val();

    axios.delete('https://ih-crud-api.herokuapp.com/characters/' + inputDelete)
  
    .then((response)=>{
      console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    })
        
  }
  
  //Edit an existing character in the database
  document.getElementById('edit-character-form').onsubmit = function(e){


          e.preventDefault();

      let input = document.getElementById('updateId').value;

      const nameFromUpdate = document.getElementById('updateName').value;
      const occupationFromUpdate = document.getElementById('updateOcc').value;
      const weaponFromUpdate = document.getElementById('updateWeapon').value;
      const debtFromUpdate = document.getElementById('updateDebt').value   ? true : false

        axios.put('https://ih-crud-api.herokuapp.com/characters/' + input, {
            name: nameFromUpdate,
            occupation: occupationFromUpdate,
            weapon: weaponFromUpdate, 
            debt: debtFromUpdate
        })

        .then((result)=>{
            console.log(result);
            fetchAll();
            
        })
        .catch((err)=>{
            console.log(err)
        })
            
  }





  
  document.getElementById('new-character-form').onsubmit = function(event){
    

      event.preventDefault();
  
  const nameFromHTML = $('#theName').val();
  const occupationFromHTML = $('#theOccupation').val();
  const weaponFromHTML = $('#theWeapon').val();



  
  const cartoonFromHTML = $('#debt:checked').val()? true : false
  
  
  
      axios.post('https://ih-crud-api.herokuapp.com/characters', {
          name: nameFromHTML,
          occupation: occupationFromHTML, 
          weapon: weaponFromHTML,
          debt: cartoonFromHTML
      })
  
      .then((result)=>{
          console.log(result);
          
      })
      .catch((err)=>{
          console.log(err)
      })
  

  }
})