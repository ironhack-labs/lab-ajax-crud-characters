// const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    console.log('hi');
    axios.get('https://ih-crud-api.herokuapp.com/characters')
    .then((response)=>{
        $('characters-info').empty();
        response.data.forEach((oneCharacter)=>{
            const newChar = `
            <div>
            <h5>Name: ${oneCharacter.name}</h5>
            <p>Occupation: ${oneCharacter.occupation}</p>
            <p>Weapon: ${oneCharacter.weapon}</p>
            <p>Id: ${oneCharacter.id}</p>
            <hr>
            </div>
            `
            //if this was not append, the foreach would be replacing each one and only see the last one....
            $('#characters-info').append(newChar)
        })
    })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    console.log("getone")
    const theId=document.getElementById('character-id').value;
    axios.get('https://ih-crud-api.herokuapp.com/characters/'+theId)
    .then((response)=>{
            document.getElementById('characters-info')
            .innerHTML = `
            <h5>Name: ${response.data.name}</h5>
            <p>Occupation: ${response.data.occupation}</p>
            <p>Weapon: ${response.data.weapon}</p>
            <p>Id: ${response.data.id}</p>
             `
      
    })
    .catch((err)=>
  console.log(err))
  }

 document.getElementById('delete-one').onclick = function(){
        
  const theId=document.getElementById('character-id-delete').value;
  axios.delete('https://ih-crud-api.herokuapp.com/characters/'+theId)
  .then((response)=>{
          document.getElementById('characters-info')
          .innerHTML = `
          <h1>You have deleted ${theId}<h1>
    `
  })
  .catch((err)=>
console.log(err))
}
  
  document.getElementById("edit-character-form").onsubmit = function(e){
    e.preventDefault();
    const theId=$('#chr-id').val();

    const theName       = $('#chr-name').val();
    const theOcc        = $('#chr-occ').val();
    const theWeapon     = $('#chr-wep').val();  
    const dataEdited = {
        name: theName,
        occupation: theOcc,
        weapon: theWeapon,
    }
  axios.patch('https://ih-crud-api.herokuapp.com/characters/'+theId, dataEdited)
      .then((response)=>{
              document.getElementById('characters-info')
              .innerHTML = `
              <h1>You have edited ${theId}<h1>
              <h5>Name: ${response.data.name}</h5>
              <p>Occupation: ${response.data.occupation}</p>
              <p>Weapon: ${response.data.weapon}</p>
              <p>Id: ${response.data.id}</p>

        `
      })

  
      .catch((err)=>
    console.log(err))
    }           

  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();
    const theName       = $('#new-name').val();
      const theOcc        = $('#new-occ').val();
      const theWeapon     = $('#new-wep').val();  
      const dataNew = {
          name: theName,
          occupation: theOcc,
          weapon: theWeapon,
      }         
      axios.post('https://ih-crud-api.herokuapp.com/characters', dataNew)
    .then((response)=>{
        $('#fetch-all').click()
    })
    .catch((err)=>{
        console.log(err)
    })
  }
} )
