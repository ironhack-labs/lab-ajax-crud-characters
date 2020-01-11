const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then( characters => {
        console.log( "getFullList RESPONSE", characters );
        createCharacterInfos( characters );
      })
      .catch( err => {
        
      });
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let oneRegisterId = document.getElementById('fetch-one-input').value;

    if( oneRegisterId !== "" ){
      charactersAPI.getOneRegister(oneRegisterId)
        .then( character => {
          console.log( "getOneRegister RESPONSE", character );
          createCharacterInfos( [character] );
        })
        .catch( err => {
        
        });
    }
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let oneRegisterId = document.getElementById('fetch-one-input').value;

    if( oneRegisterId !== "" ){
      charactersAPI.getOneRegister(oneRegisterId)
        .then( character => {
          console.log( "getOneRegister RESPONSE", character );
        })
        .catch( err => {
        
        });
    }

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    let updateCharacter = {
      "name": "Dirk",
      "occupation": "Actor",
      "weapon": "Hats",
      "cartoon": true
    };
    let id = 1;
    
    console.log("UPD");

    charactersAPI.updateOneRegister(id, updateCharacter)
      .then( character => {
        console.log( "updateOneRegister RESPONSE", character );
      })
      .catch( err => {
      
      });
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    let newCharacter = {
      "name": "Susanne",
      "occupation": "Actress",
      "weapon": "Shoes",
      "cartoon": false
    };

    charactersAPI.createOneRegister(newCharacter)
      .then( character => {
        console.log( "createOneRegister RESPONSE", character );
      })
      .catch( err => {
      
      });
  });
})

function createCharacterInfos( characters ){
  let charCont = document.getElementById('characterContainer');
  charCont.innerHTML = "";

  characters.forEach(element => {
    let div = null;

    let contInfoDiv = createDOMElement( { tag: "DIV", classNames: ["character-info"] } );

    contInfoDiv.appendChild( createInfoDiv( "ID", element.id, ["id"] ) );
    contInfoDiv.appendChild( createInfoDiv( "NAME", element.name, ["name"] ) );
    contInfoDiv.appendChild( createInfoDiv( "OCCUPATION", element.occupation, ["occupation"] ) );
    contInfoDiv.appendChild( createInfoDiv( "IS CARTOON", element.cartoon, ["cartoon"] ) );
    contInfoDiv.appendChild( createInfoDiv( "WEAPON", element.weapon, ["weapon"] ) );

    charCont.appendChild(contInfoDiv);
  });
}

function createInfoDiv( name, data, classNames ){
  let infoDiv = createDOMElement( { tag: "DIV", classNames: classNames} );

  infoDiv.appendChild( createDOMElement( { tag: "P", classNames: ["c-info-name"], data: name} ) );
  infoDiv.appendChild( createDOMElement( { tag: "P", classNames: ["c-info-data"], data: data} ) );

  return infoDiv;
}

function createDOMElement( opt ){
  let domElem = document.createElement(opt.tag);

  if( opt.classNames ) { 
    opt.classNames.forEach( className => { 
      domElem.classList.add(className); 
    });
  }
  if( opt.data ) { domElem.innerHTML = opt.data; }

  return domElem;
}

