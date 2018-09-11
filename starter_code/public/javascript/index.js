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


window.onload = () => {
  document.getElementById('fetch-all').onclick = getAllCharacters;



  function getAllCharacters(){
    const theResultDiv = document.getElementsByClassName('character-info')


    axios.get('https://ih-crud-api.herokuapp.com/characters')
    .then((response)=>{
        const theArrayOfStuff = response.data;

        theResultDiv[0].innerHTML = "";

        response.data.forEach((eachThing)=>{
          theResultDiv[0].innerHTML += `
          <div class="char-component">
          <h2> Name:  ${eachThing.name} </h2>
          <h5> Occupation: ${eachThing.occupation} </h5>
          <p> Weapon: ${eachThing.weapon} </p>
          </div>
          `
        })
    })
    .catch((err)=>{
        console.log(err)
    })
}




//  let checkBox = document.getElementsByTagName('checkbox').value
document.getElementById('send-data').onclick = (e) => {
  e.preventDefault()
  
  console.log('-0-0-0-0-0-0-0')
  
   let theName = document.getElementById('name').value
   let theOccupation = document.getElementById('occupation').value
   let theWeapon = document.getElementById('weapon').value




console.log(theName,theOccupation,theWeapon)



  axios.post('https://ih-crud-api.herokuapp.com/characters',
   {name: theName, occupation: theOccupation, weapon: theWeapon, debt: false })
   .then((response)=>{
      getAllCharacters();
   })
   .catch((err)=>{
       console.log(err);
   })


 
}

document.getElementById('send-data-two').onclick = (e) => {
  e.preventDefault();

  let theID = document.getElementById('the-id').value

  console.log(theID);

  // let theNewName = document.getElementsByClassName('char-component').

  axios.post('https://ih-crud-api.herokuapp.com/characters', 
  {id: theID})
.then((response)=>{
  getAllCharacters();
})
.catch((err)=>{
  console.log(err);
})
}



document.getElementById('delete-one').onclick = () => {

  const theidone = document.getElementById('character-id-two').value

  

  axios.delete('https://ih-crud-api.herokuapp.com/characters/'+theidone, {})
.then((response)=>{
 
})
.catch((err)=>{
  console.log(err);
})
}




document.getElementById('fetch-one').onclick = () => {

  const theClassYeah = document.getElementById('fetch-one-yeah').value
  const theResultDiv = document.getElementsByClassName('character-info')
  

  axios.get('https://ih-crud-api.herokuapp.com/characters/'+theClassYeah, {})
.then((response)=>{
 console.log(response)
  theResultDiv.innerHTML += `
  <div class="char-component">
  <h2> Name:  ${theResultDiv.name} </h2>
  <h5> Occupation: ${theResultDiv.occupation} </h5>
  <p> Weapon: ${theResultDiv.weapon} </p>
  </div>
  `
})
.catch((err)=>{
  console.log(err);
})
}

}


