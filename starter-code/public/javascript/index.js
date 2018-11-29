const charactersAPI = new APIHandler("http://localhost:8000")


function fetchAll(){
    //charactersAPI.getFullList()
     // .then(result=>{
      //  console.log(result);
      //})


      axios.get('http://localhost:8000/characters')
      .then((response)=>{
          response.data.forEach((eachCharacter)=>{
            $('.characters-container').append(`
            <div class="character-info">
            <div class="name">Character Name: ${eachCharacter.name}</div>
            <div class="occupation">Character Occupation: ${eachCharacter.occupation}</div>
            <div class="cartoon">Is a Cartoon? ${eachCharacter.cartoon}</div>
            <div class="weapon">Character Weapon: ${eachCharacter.weapon}</div>
          </div>
              `)
          })
      })
      .catch((err)=>{
          console.log(err)
      })
  }
 
  $('#fetch-all').click(fetchAll)




  
  
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


  
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
    }
