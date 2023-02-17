const charactersAPI = new APIHandler('http://localhost:8000/characters');
const parentDiv = document.querySelector(".characters-container");

window.addEventListener('load', () => {

document.getElementById('fetch-all').addEventListener('click', function (event) {
  let fetchAllElements = document.querySelectorAll(".character-info")
  fetchAllElements.forEach((element)=>{
    element.remove()
  })
    charactersAPI.getFullList()
    .then((data)=>{
      let result = data.data;
      result.forEach(element => {
        let oneCharacter = document.createElement("div");
        oneCharacter.className = "character-info";
        //Mostrar nombre
        let newDivName = document.createElement("div");
        newDivName.classList.add("name");
        newDivName.innerHTML = `<p>Id:</p><p>${element.id}</p><p>Name:</p><p>${element.name}</p><p>Occupation:</p><p>${element.occupation}</p><p>Is a Cartoon?</p><p>${element.cartoon}</p><p>Weapon:</p><p>${element.weapon}</p>`;
        oneCharacter.appendChild(newDivName);
        parentDiv.appendChild(oneCharacter);
      });
    }).catch((err)=>{
      let oneCharacter = document.createElement("h2");
      oneCharacter.innerHTML = "Oh Oh it's seems to be something wrong on the server side...";
      oneCharacter.className = "character-info";
      parentDiv.appendChild(oneCharacter);
    })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let fetchAllElements = document.querySelectorAll(".character-info")
    fetchAllElements.forEach((element)=>{
      element.remove()
    })
    let inputValue = document.getElementById("fetchOne").value
    if(inputValue){
      charactersAPI.getOneRegister(`/${inputValue}`)
      .then((result)=>{
        console.log(result)
        let element = result.data
        let oneCharacter = document.createElement("div");
        oneCharacter.className = "character-info";
        let newDivName = document.createElement("div");
        newDivName.classList.add("name");
        newDivName.innerHTML = `<p>Id:</p><p>${element.id}</p><p>Name:</p><p>${element.name}</p><p>Occupation:</p><p>${element.occupation}</p><p>Is a Cartoon?</p><p>${element.cartoon}</p><p>Weapon:</p><p>${element.weapon}</p>`
        oneCharacter.appendChild(newDivName);
        parentDiv.appendChild(oneCharacter);
      }).catch((err)=>{
        let oneCharacter = document.createElement("h2");
        oneCharacter.innerHTML = "We havent't found a match for the ID you provided...";
        oneCharacter.className = "character-info";
        parentDiv.appendChild(oneCharacter);
      })
    }else{
      let oneCharacter = document.createElement("div");
      oneCharacter.innerHTML = "The input ID field must be filled...";
      oneCharacter.className = "character-info";
      parentDiv.appendChild(oneCharacter);
    }
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
      let inputValue = document.getElementById("deleteInput").value
      let fetchAllElements = document.querySelectorAll(".character-info")
      fetchAllElements.forEach((element)=>{
        element.remove()
      })
      if(inputValue){
        charactersAPI.deleteOneRegister(`/${inputValue}`)
        .then((result)=>{
          document.getElementById('delete-one').style.backgroundColor = "green"
          let oneCharacter = document.createElement("h2");
          oneCharacter.innerHTML = "Character succesfully deleted!!!";
          oneCharacter.className = "character-info";
          parentDiv.appendChild(oneCharacter);
        })
        .catch((err)=>{
          document.getElementById('delete-one').style.backgroundColor = "red"
          let oneCharacter = document.createElement("h2");
          oneCharacter.innerHTML = "We havent't found a match for the ID you provided...";
          oneCharacter.className = "character-info";
          parentDiv.appendChild(oneCharacter);
        })
      }else{
        let oneCharacter = document.createElement("h2");
        oneCharacter.innerHTML = "The input ID field must be filled...";
        oneCharacter.className = "character-info";
        parentDiv.appendChild(oneCharacter);
      }
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let fetchAllElements = document.querySelectorAll(".character-info")
    fetchAllElements.forEach((element)=>{
      element.remove()
    })
    let nameValue = document.getElementById("name").value
    let idValue = document.getElementById("id").value
    let weaponValue = document.getElementById("weapon").value
    let cartoonValue = document.getElementById("cartoon").checked;
    let occupation = document.getElementById("occupation").value
    let obj = {name: nameValue, weapon: weaponValue, cartoon: cartoonValue, occupation}
    console.log(obj)
    charactersAPI.getOneRegister(`/${idValue}`)
    .then((data)=>{
      charactersAPI.updateOneRegister(idValue, obj)
      .then((result)=>{
        document.getElementById("send-dataUpdate").style.backgroundColor="green"
        let oneCharacter = document.createElement("div");
        oneCharacter.className = "character-info";
        //Mostrar nombre
        let newDivName = document.createElement("div");
        newDivName.classList.add("name");
        newDivName.innerHTML = `<p>Id:</p><p>${result.data.id}</p><p>Name:</p><p>${result.data.name}</p><p>Occupation:</p><p>${result.data.occupation}</p><p>Is a Cartoon?</p><p>${result.data.cartoon}</p><p>Weapon:</p><p>${result.data.weapon}</p>`;
        oneCharacter.appendChild(newDivName);
        parentDiv.appendChild(oneCharacter);
      })
    }).catch((err)=>{
      document.getElementById("send-dataUpdate").style.backgroundColor="red"
      let oneCharacter = document.createElement("h2");
      oneCharacter.innerHTML = "Oh Oh, we can't seem to find that character...";
      oneCharacter.className = "character-info";
      parentDiv.appendChild(oneCharacter);
    })
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let fetchAllElements = document.querySelectorAll(".character-info")
    fetchAllElements.forEach((element)=>{
      element.remove()
    })
      let cartoon = document.getElementById("newCartoon").checked
      let weapon = document.getElementById("newWeapon").value
      let name = document.getElementById("newName").value
      let occupation = document.getElementById("newOccupation").value
      console.log([cartoon, weapon, name, occupation])
      if(occupation===""|| weapon===""|| name===""){
        let fetchAllElements = document.querySelectorAll(".character-info")
        fetchAllElements.forEach((element)=>{
          element.remove()
        })
        let oneCharacter = document.createElement("h2");
        oneCharacter.innerHTML = "All input fields must be completed...";
        oneCharacter.className = "character-info";
        parentDiv.appendChild(oneCharacter);
      }else{
        charactersAPI.getFullList()
        .then((result)=>{
          let arrLength = result.data.length
          charactersAPI.createOneRegister ({name, occupation, cartoon, weapon})
          .then((result)=>{
            document.getElementById('send-data').style.backgroundColor= "green"
            let oneCharacter = document.createElement("div");
            oneCharacter.className = "character-info";
            let newDivName = document.createElement("div");
            newDivName.classList.add("name");
            newDivName.innerHTML = `<p>Id:</p><p>${result.data.id}</p><p>Name:</p><p>${result.data.name}</p><p>Occupation:</p><p>${result.data.occupation}</p><p>Is a Cartoon?</p><p>${result.data.cartoon}</p><p>Weapon:</p><p>${result.data.weapon}</p>`;
            oneCharacter.appendChild(newDivName);
            parentDiv.appendChild(oneCharacter);
          }).catch((err)=>{
            console.log(err)
            document.getElementById('send-data').style.backgroundColor= "red"
          })
        })
      }

  });
});
