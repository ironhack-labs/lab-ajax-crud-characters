const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    event.preventDefault()
    charactersAPI.getFullList()

    .then(list => {
    
      const listHtml = document.querySelector('.characters-container')

      listHtml.innerHTML =""

        list.forEach(elm => {
        
        

        listHtml.innerHTML += `<div class='character-info'>  
        <div class='id'>Id :  ${elm.id}  </div> 
        <div class='name'>Name :  ${elm.name} </div>
        <div class='occupation'>Occupation :  ${elm.occupation} </div> 
        <div class='cartoon'>Cartoon :  ${elm.cartoon} </div> 
        <div class='weapon'>Weapon :  ${elm.weapon} </div> 
        </div>`

        })

      })
    .catch(err => console.log(err))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    const id = document.querySelector('.operation input').value

    charactersAPI.getOneRegister(id)
    .then(response => {

      const listHtml = document.querySelector('.characters-container')

      listHtml.innerHTML =""

      listHtml.innerHTML += `<div class='character-info'>  
        <div class='id'>Id :  ${response.id}  </div> 
        <div class='name'>Name :  ${response.name} </div>
        <div class='occupation'>Occupation :  ${response.occupation} </div> 
        <div class='cartoon'>Cartoon :  ${response.cartoon} </div> 
        <div class='weapon'>Weapon :  ${response.weapon} </div> 
        </div>`

    })

    .catch(err => console.log(err))

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    const idDel = document.querySelector('.operation-delete input').value

    event.preventDefault(idDel)
    charactersAPI.deleteOneRegister()
    // .then(() =>{
    //   document.querySelector('.operation-delete button').style.backgroundColor = "green"
    // })

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault()
    charactersAPI.updateOneRegister()

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()
    charactersAPI.createOneRegister()

  });
});
