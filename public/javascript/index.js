//import Axios from "axios";

const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {



  function fetchAll(){

    axios
    .get('http://localhost:8000/characters')
    .then((responseFromApi) => {
      document.getElementsByClassName('name')[0].innerText+=`: ${responseFromApi.data[0].name}`
      document.getElementsByClassName('occupation')[0].innerText+=`: ${responseFromApi.data[0].occupation}`
      document.getElementsByClassName('cartoon')[0].innerText+=`: ${responseFromApi.data[0].cartoon}`
      document.getElementsByClassName('weapon')[0].innerText+=`: ${responseFromApi.data[0].weapon}`
      for( let i=1; i < responseFromApi.data.length; i++ )
      {
      let addCharacter=document.getElementsByClassName("character-info")[0].cloneNode(true)
      let parent=document.getElementsByClassName("characters-container")[0]
      addCharacter.getElementsByClassName('name')[0].innerText=`Character Name: ${responseFromApi.data[i].name}`
      addCharacter.getElementsByClassName('occupation')[0].innerText=`Character Occupation: ${responseFromApi.data[i].occupation}`
      addCharacter.getElementsByClassName('cartoon')[0].innerText=`Is a cartoon?: ${responseFromApi.data[i].cartoon}`
      addCharacter.getElementsByClassName('weapon')[0].innerText=`Weapon: ${responseFromApi.data[i].weapon}`
      parent.appendChild(addCharacter)
      }
    })
  }


  function fetchOne(id)
  {
    axios
    .get('http://localhost:8000/characters/' + id)
    .then((responseFromApi) => {
      console.log("Response from API is: " + responseFromApi.data.name)
      let addCharacter=document.getElementsByClassName("character-info")[0].cloneNode(true)
      let parent=document.getElementsByClassName("operation")[1]
      addCharacter.getElementsByClassName('name')[0].innerText+=`: ${responseFromApi.data.name}`
      addCharacter.getElementsByClassName('occupation')[0].innerText+=`: ${responseFromApi.data.occupation}`
      addCharacter.getElementsByClassName('cartoon')[0].innerText+=`: ${responseFromApi.data.cartoon}`
      addCharacter.getElementsByClassName('weapon')[0].innerText+=`: ${responseFromApi.data.weapon}`
      parent.appendChild(addCharacter)
    })
  }

  function deleteOne(id)
  {
    axios
    .delete('http://localhost:8000/characters/' + id)
    .then(responseFromApi => {
      console.log(responseFromApi.data.name + "Has been removed")
    })
  }


  function createOne()
  {
    let name = document.querySelectorAll('.character-form input')[0].value
    let occupation = document.querySelectorAll('.character-form input')[1].value
    let weapon = document.querySelectorAll('.character-form input')[2].value
    let cartoon = document.querySelectorAll('.character-form input')[3].value

    axios
    .post('http://localhost:8000/characters', {name : name ,occupation : occupation , weapon : weapon, cartoon: cartoon})
    .then(() => {
      console.log('added')
    })
  }


  document.getElementById('fetch-all').addEventListener('click', function (event) {
    fetchAll()
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let idToFetch = document.querySelectorAll(".operation input")[0].value
    fetchOne(idToFetch)

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let idToDelete = document.querySelectorAll(".operations input")[1].value
    deleteOne(idToDelete)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    createOne()
  });


  
});
