// const charactersAPI = new APIHandler("http://localhost:8000")

// $(document).ready( () => {
//   document.getElementById('fetch-all').onclick = function(){

//   }
  
//   document.getElementById('fetch-one').onclick = function(){
    
//   }
  
//   document.getElementById('delete-one').onclick = function(){
        
//   }
  
//   document.getElementById('edit-character-form').onsubmit = function(){
            
//   }
  
//   document.getElementById('new-character-form').onsubmit = function(){
                
//   }
// })





function FetchAll(){

  axios.get('https://ih-crud-api.herokuapp.com/characters')
  .then((eachChar)=>{
    console.log(eachChar.data)


    $('.characters-container').empty();

    eachChar.data.forEach((eachCharacter)=>{
     $('.characters-container').append(`
     
     <div class="character-info">
     <div class="name">Name: ${eachCharacter.name}</div>
     <div class="occupation">Occupation: ${eachCharacter.occupation}</div>
     <div class="cartoon">Is cartoon: ${eachCharacter.debt}</div>
     <div class="weapon">Weapon: ${eachCharacter.weapon}</div>
     </div>
     
     `)
    })
    
  })
  .catch((err)=>{
    console.log(err)
  })
}


// Fetch ALL
$('#fetch-all').click(FetchAll)

// Fetch ONe

$('#fetch-one').click(function(){
  let id  = $('#search-by-id').val();
  axios.get(`https://ih-crud-api.herokuapp.com/characters/${id}`)
  .then((singleChar)=>{

    
    $('.characters-container').empty();
    $('.characters-container').append(`
     
     <div class="character-info">
     <div class="name">Name: ${singleChar.data.name}</div>
     <div class="occupation">Occupation: ${singleChar.data.occupation}</div>
     <div class="cartoon">Is cartoon: ${singleChar.data.debt}</div>
     <div class="weapon">Weapon: ${singleChar.data.weapon}</div>
     </div>
     
     `)

    
  })
  .catch((err)=>{
    console.log(err)
  })
})

// Fetch Delete

$('#delete-one').click(function(){
  let id  = $('#delete-by-id').val();
  axios.delete(`https://ih-crud-api.herokuapp.com/characters/${id}`)
  .then((singleChar)=>{
    console.log(singleChar.data)
    $('#delete-one').css('background-color','green')
    FetchAll(); 

  })
  .catch((err)=>{
    console.log(err)
    $('#delete-one').css('background-color','red')
  })
})

// Create char 

$('#new-character-form').submit(function(e){
  
  e.preventDefault();


  let nameFromHTML = $('#name1').val();
  let occupation   = $('#occupation1').val();
  let weapon       = $('#weapon1').val();
  let isCartoon    = $('#cartoon1:checked').val()? true : false;

  console.log(nameFromHTML,occupation,weapon,isCartoon)

  axios.post('https://ih-crud-api.herokuapp.com/characters', {
    name: nameFromHTML,
    occupation: occupation,
    weapon: weapon, 
    debt: isCartoon
})
.then((result)=>{
  console.log(result);
  $('#send-data').css('background-color','green');
  FetchAll();

})
.catch((err)=>{
  console.log(err)
  $('#send-data').css('background-color','red');
})

})


// Update char


$('#edit-character-form').submit(function(e){
  e.preventDefault();
  let id = $('#updateID').val();
  // console.log(id)
  
  axios.patch(`https://ih-crud-api.herokuapp.com/characters/${id}`, 
  {
    name: $('#edit-name').val(),
    occupation: $('#edit-occupation').val() ,
    weapon: $('#edit-weapon').val() , 
    debt: $('#edit-checkbox:checked').val()? true : false 

  })
  .then((result)=>{
    // console.log(result)
    $('#send-data1').css('background-color','green');
    FetchAll();
  })
  .catch((err)=>{
    console.log(err)
    $('#send-data1').css('background-color','red');
  })


})