
document.getElementById("fetch-all").onclick= ()=>{
  axios.get("http://localhost:8000/characters").then((stuffFromAPI) => {
    document.getElementsByClassName("name")[0].innerHTML = "Character Name: "
    document.getElementsByClassName("occupation")[0].innerHTML = "Character Occupation: "
    document.getElementsByClassName("weapon")[0].innerHTML = "Character Weapon: " 
    document.getElementsByClassName("cartoon")[0].innerHTML = "Is a Cartoon?: "

      for(let i=0; i<stuffFromAPI.data.length; i++){
        document.getElementsByClassName("name")[0].innerHTML += stuffFromAPI.data[i].id +") " + stuffFromAPI.data[i].name + "  " 
      }
      for(let i=0; i<stuffFromAPI.data.length; i++){
      document.getElementsByClassName("occupation")[0].innerHTML +=  stuffFromAPI.data[i].id + ") " + stuffFromAPI.data[i].occupation + "  "
      }
    for (let i = 0; i < stuffFromAPI.data.length; i++) {
      document.getElementsByClassName("weapon")[0].innerHTML += stuffFromAPI.data[i].id + ") " + stuffFromAPI.data[i].weapon + "  "
    }
    for (let i = 0; i < stuffFromAPI.data.length; i++) {
      document.getElementsByClassName("cartoon")[0].innerHTML +=  stuffFromAPI.data[i].id + ") " + stuffFromAPI.data[i].cartoon +"  "
    }   
  })
}

document.getElementById("fetch-one").onclick= ()=>{
  axios.get("http://localhost:8000/characters").then((stuffFromAPI) => { 
  let searcher= document.getElementById("search").value
   for(let k=0; k<stuffFromAPI.data.length; k++){
      if(searcher== stuffFromAPI.data[k].id){
        document.getElementsByClassName("id")[0].innerHTML = "ID: " + stuffFromAPI.data[k].id
        document.getElementsByClassName("name")[0].innerHTML = "Name: " + stuffFromAPI.data[k].name
        document.getElementsByClassName("occupation")[0].innerHTML = "Occupation: " + stuffFromAPI.data[k].occupation
        document.getElementsByClassName("weapon")[0].innerHTML = "Weapon: " + stuffFromAPI.data[k].weapon
        document.getElementsByClassName("cartoon")[0].innerHTML = "Cartoon: " + stuffFromAPI.data[k].cartoon
      }}})}

 document.getElementById("delete-one").onclick= () => {
   let deleter = document.getElementById("delete").value
   axios.delete(`http://localhost:8000/characters/${deleter}`).then((stuffFromAPI) => {
   }
   )} 

 document.getElementById("send-data").onclick= (e) => {
   e.preventDefault()
    let characterInfo= {
      name: document.getElementById("name").value,
      occupation: document.getElementById("occupation").value,
      weapon: document.getElementById("weapon").value,
      cartoon: document.getElementById("cartoon").checked
    }
   axios.post(`http://localhost:8000/characters`, characterInfo).then((stuffFromAPI) => {
     console.log(e)
     }
   )}
    
   document.getElementById("send-data1").onclick = (e) =>{
    e.preventDefault()
    let identifier= document.getElementById("idd").value
     let newName = document.getElementById("namee").value
     let newOccupation = document.getElementById("occupationn").value
     let newWeapon = document.getElementById("weaponn").value
     let newCartoon = document.getElementById("cartoonn").checked

     let newCharacter = { newName, newOccupation, newWeapon, newCartoon}

     axios.put(`http://localhost:8000/characters/${identifier}`, newCharacter).then((apiStuff)=>{
       console.log(apiStuff)
     })
   }