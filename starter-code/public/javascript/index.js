

// get all characters
  function fetchAll(){
  
    axios.get('https://ih-crud-api.herokuapp.com/characters')
    .then((response)=>{
        $('.character-info').html("<ul id='list'></ul>")
        response.data.forEach((eachCharacter)=>{

            $('#list').append(`
            <li>
            Id:         ${eachCharacter.id}<br>
           name:        ${eachCharacter.name}
           occupation:  ${eachCharacter.occupation}
           weapon:      ${eachCharacter.weapon}
           debt:        ${eachCharacter.debt}
            </li>

            <br>
            `)
        })
    })
    .catch((err)=>{
        console.log(err)
    })
}

$('#fetch-all').click(fetchAll)
  

// get ONE character
function fetchOne(){

  let input = $("#oneInput").val();

  axios.get('https://ih-crud-api.herokuapp.com/characters/' + input)

  .then((response)=>{
    let oneChar = response.data;  
    
      $('.character-info').html("<ul id='list'></ul>")

      $('#list').append(`
        <li>
        Id:          ${oneChar.id}<br>
        name:        ${oneChar.name}<br>
        occupation:  ${oneChar.occupation}<br>
        weapon:      ${oneChar.weapon}<br>
        debt:        ${oneChar.debt}
        </li>

        <br>
        `)
  })
  .catch((err)=>{
      console.log(err)
  })
}

$('#fetch-one').click(fetchOne);



// delete ONE character
function deleteOne(){

  let input = $("#deleteInput").val();

  axios.delete('https://ih-crud-api.herokuapp.com/characters/' + input)

  .then((response)=>{
    console.log(response)
  })
  .catch((err)=>{
      console.log(err)
  })
}

$('#delete-one').click(deleteOne);


// create NEW character
$('#add-new').submit(function(e){
  e.preventDefault();

const nameFromHTML = $('#newName').val();
const occupationFromHTML = $('#newOcc').val();
const weaponFromHTML = $('#newWeapon').val();
const debtFromHTML = $('#newDebt').val()? true : false

  axios.post('https://ih-crud-api.herokuapp.com/characters', {
      name: nameFromHTML,
      occupation: occupationFromHTML, 
      weapon: weaponFromHTML, 
      debt: debtFromHTML
  })

  .then((result)=>{
      console.log(result);
      fetchAll();
      
  })
  .catch((err)=>{
      console.log(err)
  })
})


// edit ONE character
function editOne(e){
  e.preventDefault();
  let input = $("#updatedId").val();

const nameFromUpdate = $('#updatedName').val();
const occupationFromUpdate = $('#updatedOcc').val();
const weaponFromUpdate = $('#updatedWeapon').val();
const debtFromUpdate = $('#updatedDebt').val()? true : false

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

$('#edit-character-form').submit(editOne);



