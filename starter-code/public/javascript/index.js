
$(document).ready( () => {

  function display(element){
    $('.characters-container').append(` <div class="character-info">
    <div class="id">Id: ${element.id}</div>
    <div class="name">Name: ${element.name}</div>
    <div class="occupation">Occupation: ${element.occupation}</div>
    <div class="cartoon">Is a cartoon? ${element.debt}</div>
    <div class="weapon">Weapon: ${element.weapon}</div>
    </div>`)  ;
  }

  function fetchAllCharacters(){
    axios.get('https://ih-crud-api.herokuapp.com/characters')
    .then(allChar=>{
      $('.characters-container').empty();
      allChar.data.forEach(element => {
        display(element)
      });
    })
    .catch(err=>console.log(err))
  }

  $('#fetch-all').click (function(){
    fetchAllCharacters();
  })
  
  $('#fetch-one').click(function(){
    let id = $('#characterId').val();
    $('.characters-container').empty();
    axios.get(`https://ih-crud-api.herokuapp.com/characters/${id}`)
    .then(char=>{
      display(char.data);
      $('#fetch-one').css('background-color','green');
    })
    .catch(error=>{ 
      $('#fetch-one').css('background-color','red');
      console.log('Error');
    })
  })

  $('#delete-one').click(function(){
    console.log('aaaa')
    let id = $('#delId').val();
    axios.delete(`https://ih-crud-api.herokuapp.com/characters/${id}`)
    .then(result=>{
      $('#delId').val('');
      $('#delete-one').css('background-color','green');
      fetchAllCharacters();
    })
    .catch(err=>{
      $('#delete-one').css('background-color','red');
      console.log(err);
    })
  })

  $('#getButton').click(function(){
    let id = $('#theCharId').val();
    axios.get(`https://ih-crud-api.herokuapp.com/characters/${id}`)
    .then(char=>{
      $('#nameE').val(char.data.name);         
      $('#occupationE').val(char.data.occupation);          
      $('#weaponE').val(char.data.weapon); 
      $('#cartoonE').val(char.data.debt);  
      if(char.data.debt =='true'){
          $('#cartoonE').prop('checked', true);
      }else{
        $('#cartoonE').prop('checked', false);
      }
      $('#getButton').css('background-color','green');
    })
    .catch(err=>{
      console.log(err)
      ('#getButton').css('background-color','red');
    })
  })
  
  $('#edit-character-form').submit(function(e){
    e.preventDefault()  
    let name = $('#nameE').val();          
    let occupation = $('#occupationE').val();          
    let weapon = $('#weaponE').val(); 
    $('#cartoonE').change(function () {
      if ($(this).is(':checked')) {
        $(this).attr('value', 'true');
      } else {
        $(this).attr('value', 'false');
      }
    });
    let cartoon = $('#cartoonE').val(); 

    const characterInfo = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      debt: cartoon
    } 
    let id = $('#theCharId').val();
    axios.put(`https://ih-crud-api.herokuapp.com/characters/${id}`,characterInfo)
    .then(result=>{
      $("#edit-character-form")[0].reset()
      $('#send-dataE').css('background-color','green');
      fetchAllCharacters();
    })
    .catch(err=>{
      console.log(err)
      ('#send-dataE').css('background-color','red');
    })
  })

  
$('#new-character-form').submit(function(e){
    e.preventDefault()
      let name = $('#name').val();          
      let occupation = $('#occupation').val();          
      let weapon = $('#weapon').val(); 
      let cartoon = $('#cartoon').prop('checked');  
      
    const characterInfo = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      debt: cartoon
    }
    axios.post(`https://ih-crud-api.herokuapp.com/characters`,characterInfo)
    .then(char=>{
      $('.characters-container').empty();
      display(char.data)
      $("#new-character-form")[0].reset()
      $('#send-data').css('background-color','green');
      fetchAllCharacters();
    })
    .catch((err)=>{
      console.log(err)
      $('#send-data').css('background-color','red');
    })
  })
})
