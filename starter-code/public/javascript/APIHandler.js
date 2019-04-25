class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get('http://localhost:8000/characters')
    .then((res)=>{
      console.log(res.data)
        let myHtmlThatICreated = ''
      
      
        res.data.forEach((character)=>{
          console.log(character)
          let info = 
          `<div class="eachGuyFromStarWars">
            ${character.id}
            ${character.name}
            ${character.occupation}
            ${character.cartoon}
            ${character.weapon}
            </div>
          `
          // console.log(info)
          myHtmlThatICreated += info
           //add it to the DOM from here.  document.querySelector(?).innerHTML += res.data
        })

        document.getElementById('fetch-all').innerHTML=myHtmlThatICreated

    })
}

  getOneRegister (id) {
    axios.get (`http://localhost:8000/characters/${id}`)
    .then((res)=>{
      console.log(res.data)
      let { id, name, occupation, cartoon, weapon } = {...res.data}
      let characterID=
      `
        ${id}
        ${name}
        ${occupation}
        ${cartoon}
        ${weapon}
      
      `
      let character = document.getElementById("fetch-one")
      // console.log("this is", character)
      character.innerHTML = `
      <div>Name : ${name}</div>
      <div>Occupation : ${occupation}</div>
      <div>Weapon : ${weapon}</div>
      <div>Cartoon : ${cartoon}</div>`;
      
    
      //add it to html
    }).catch(err=>{
      alert(err)
    })
    // document.getElementById('character-id').innerHTML=myHtmlThatICreated
  }

  createOneRegister () {

    let thisName = document.querySelector('#new-character-form > div:nth-child(1) > input[type="text"]').value
    let thisOccupation = document.querySelector('#new-character-form > div:nth-child(2) > input[type="text"]').value
    let thisWeapon = document.querySelector('#new-character-form > div:nth-child(3) > input[type="text"]').value
    let thisCartoon = document.querySelector('#new-character-form > div:nth-child(4) > input[type="checkbox"]').checked
    let characterInfo = {

    name: thisName,
    occupation: thisOccupation,
    weapon: thisWeapon,
    cartoon: thisCartoon
  }
   
    axios.post(`http://localhost:8000/characters`, characterInfo)
    .then(res=>{
       console.log(res.data) 
      // let { name, occupation, cartoon, weapon } = {...res.data};
      // let newCharacterHtml=
      // `
      //   ${name}
      //   ${occupation}
      //   ${cartoon}
      //   ${weapon}
      // `
      // document.getElementById("new-character-form").innerHTML += newCharacterHtml;
    })
  .catch(error => {
    console.log("Error is: ", error);
})
}


updateOneRegister () {
    let theID=document.querySelector('#edit-character-form > div:nth-child(1) > input[type="text"]').value
    // axios.get(`http://localhost:8000/characters/${theID}`)
//     .then(res=>{
//       console.log(res.data);
// let theNames = document.querySelector('#edit-character-form > div:nth-child(2) > input[type="text"]')
// let theOccupations = document.querySelector('#edit-character-form > div:nth-child(3) > input[type="text"]')
// let theWeapons = document.querySelector('#edit-character-form > div:nth-child(4) > input[type="text"]')
// let theCartoons = document.querySelector('#edit-character-form > div:nth-child(5) > input[type="checkbox"]')

//       theNames.value=res.data.name;
//       theOccupations.value=res.data.occupation;
//       theWeapons.value=res.data.weapon;
//       theCartoons.checked=res.data.cartoon;

//       let updatedCharacterInfo = {
        
        
//       }
// });
   
let updatedCharacterInfo = {
name : document.querySelector('#edit-character-form > div:nth-child(2) > input[type="text"]').value,
occupation : document.querySelector('#edit-character-form > div:nth-child(3) > input[type="text"]').value,
weapon : document.querySelector('#edit-character-form > div:nth-child(4) > input[type="text"]').value,
cartoon : document.querySelector('#edit-character-form > div:nth-child(5) > input[type="checkbox"]').checked
}
   axios.patch(`http://localhost:8000/characters/${theID}`, updatedCharacterInfo)
    .then(res=>{
      console.log(res);
      // document.getElementById("edit-character-form".reset())
    })
  
   .catch(error => {
      alert(error)
    })
  }


  deleteOneRegister (id) {
    axios.delete(`http://localhost:8000/characters/${id}`)
    .then((res)=>{
      console.log(res)
    }).catch(err=>{
      alert(err)
    })
}
}
