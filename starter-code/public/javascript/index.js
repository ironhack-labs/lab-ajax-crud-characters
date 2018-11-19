const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {


  document.getElementById('fetch-all').onclick = function(){



    $("#charactersContainer").empty();
    

   
    
    axios.get('https://ih-crud-api.herokuapp.com/characters')
    .then((response)=>{
        console.log(response.data);

        response.data.forEach((eachCharacter)=>{
          $("#charactersContainer").append('<div class="character-info"><div class="name">Name: ' + eachCharacter.name + '</div><div class="occupation">Occupation: ' + eachCharacter.occupation + '</div><div class="cartoon">Debt: ' + eachCharacter.debt + '</div><div class="weapon">Weapon: '+ eachCharacter.weapon + '</div><div class="charactersID">ID: '+ eachCharacter.id + '</div></div>');
        })

        
    //     response.data.forEach((eachCharacter)=>{

    //         $('#list').append(`
    //         <li>
    //        name:  ${eachCharacter.name}
    //        weapon:  ${eachCharacter.weapon}
    //         </li>
    //         <br>
    // //         `)
    //     })

    })
    .catch((err)=>{
        console.log(err)
    })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    
    $("#charactersContainer").empty();

    let writtenCharacter = $('#searchbyID').val();
    
    axios.get('https://ih-crud-api.herokuapp.com/characters/' + writtenCharacter)
    .then((response)=>{
        console.log(response.data);

    
          $("#charactersContainer").append('<div class="character-info"><div class="name">Name: ' + response.data.name + '</div><div class="occupation">Occupation: ' + response.data.occupation + '</div><div class="cartoon">Debt: ' + response.data.debt + '</div><div class="weapon">Weapon: '+ response.data.weapon + '</div><div class="charactersID">ID: '+ response.data.id + '</div></div>');
        
    })
    .catch((err)=>{
        console.log(err)
    })

  }
  
  document.getElementById('delete-one').onclick = function(){
        
    $("#charactersContainer").empty();

    let writtenIDToGetDeleted = $('#searchAndDeleteByID').val();
    
    axios.delete('https://ih-crud-api.herokuapp.com/characters/' + writtenIDToGetDeleted)
    .then((response)=>{
        console.log(response.data);
        $('#searchAndDeleteByID').val('');
        alert('Deleted character with ID: ' + writtenIDToGetDeleted);
    })
    .catch((err)=>{
        console.log(err)
    })





  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(event){

    event.preventDefault();


    const nameFromHTML = $('#theName').val();
    const occupationFromHTML = $('#theOccupation').val();
    const weaponFromHTML = $('#theWeapon').val();
    const debtFromHTML = $('#debt:checked').val() || false;


    axios.post('https://ih-crud-api.herokuapp.com/characters', {
        name: nameFromHTML,
        occupation: occupationFromHTML, 
        weapon: weaponFromHTML, 
        debt: debtFromHTML
    })

    .then((result)=>{
      $('#theName').val('');
      $('#theOccupation').val('');
      $('#theWeapon').val('');

      alert(nameFromHTML + ' was created');
      
        console.log(result);
        // fetchAll();
        // calling the other function to show the new character on the list after we add it to the api
    })
    .catch((err)=>{
        console.log(err)
    })
  }
})
