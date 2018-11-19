

// get all characters
  function fetchAll(){
  
    axios.get('https://ih-crud-api.herokuapp.com/characters')
    .then((response)=>{
        $('.character-info').html("<ul id='list'></ul>")
        response.data.forEach((eachCharacter)=>{

            $('#list').append(`
            <li>
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
