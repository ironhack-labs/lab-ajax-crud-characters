function fetchAll(){
  charactersAPI.getFullList().then( data => {
    addCharactersToCards ( data )
    currentlyShow = data.map(i=>i.id)
  })
}

function createOne ( data ){
  let character = {
    name: '',
    occupation: '',
    weapon: '',
    debt: false
  }

  serializedArrayToObject ( data, character )

  charactersAPI.createOneRegister( character ).then( result => {
    console.log( result )
    fetchAll ()
  });
}

function modifyOne ( data ){
  let character = {
    
  }

  serializedArrayToObject ( data, character)

  console.log( data , character);

  charactersAPI.updateOneRegister ( character).then( result => {
    console.log (result)
    fetchAll ()
  })

}

function serializedArrayToObject ( array, object){
  array.forEach(( data) => {
    object[data.name] = data.value
  })
}
