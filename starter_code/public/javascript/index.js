const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready(() => {
  $('#fetch-all').on('click', (event) => {
    event.preventDefault()
    charactersAPI.getFullList().then(heroes => {
      console.log(heroes)
      heroes.forEach(heroe => {
        const $generalContainer = $('.characters-container')
        const $heroeContainer = $('<div>').addClass('character-info')
        const $heroeId = $('<div>').addClass('id').text(`Id: ${heroe.id}`)
        const $heroeName = $('<div>').addClass('name').text(`Name: ${heroe.name}`)
        const $heroeOccupation = $('<div>').addClass('Occup:').text(`occupation: ${heroe.occupation}`)
        const $heroeWeapon = $('<div>').addClass('weapon').text(`Weapon: ${heroe.weapon}`)

        $heroeContainer
          .append($heroeId)
          .append($heroeName)
          .append($heroeOccupation)
          .append($heroeWeapon)
        $generalContainer.append($heroeContainer)
      })
    })
  })

  $('#fetch-one').on('click', (event) => {
    event.preventDefault()
    const idForSearch = $("input[name='character-id']").val()
    console.log(idForSearch)
    charactersAPI.getOneRegister(idForSearch)
      .then(heroe => {
        const $searchById = $('.searchById')
        const $heroeSearchContainer = $('<div>').addClass('character-info')
        const $heroeSearchId = $('<div>').addClass('id').text(`Id: ${heroe.id}`)
        const $heroeSearchName = $('<div>').addClass('name').text(`Name: ${heroe.name}`)
        const $heroeSearchOccupation = $('<div>').addClass('Occup:').text(`occupation: ${heroe.occupation}`)
        const $heroeSearchWeapon = $('<div>').addClass('weapon').text(`Weapon: ${heroe.weapon}`)

        $heroeSearchContainer
          .append($heroeSearchId)
          .append($heroeSearchName)
          .append($heroeSearchOccupation)
          .append($heroeSearchWeapon)
        $searchById.append($heroeSearchContainer)
      })
  })

  $('#delete-one').on('click', (event) => {
    event.preventDefault()
    const idForDelete = $("input[name='character-id-delete']").val()
    console.log(idForDelete)
    charactersAPI.deleteOneRegister(idForDelete).then(heroe => {
      console.log(`Deleted heroe with ID: ${idForDelete}`)
    })
  })

  $('#edit-character-form').on('submit', (event) => {
    event.preventDefault()
    const editCharacterId = $("input[id='edit-character-id']").val()
    const editCharacterName = $("input[id='edit-character-name']").val()
    const editCharacterOccupation = $("input[id='edit-character-occupation']").val()
    const editCharacterWeapon = $("input[id='edit-character-weapon']").val()
    const editCharacterDebt = $("input[id='edit-character-debt']").val()
    const editCharInfo = {
      id: editCharacterId,
      name: editCharacterName,
      occupation: editCharacterOccupation,
      debt: editCharacterDebt,
      weapon: editCharacterWeapon
    }
    charactersAPI.updateOneRegister(editCharInfo).then(response => {
      console.log("Personaje editado");
    })
  })

  $('#new-character-form').on('submit', (event) => {
    event.preventDefault()
    const newCharacterName = $("input[id='new-character-name']").val()
    const newCharacterOccupation = $("input[id='new-character-occupation']").val()
    const newCharacterWeapon = $("input[id='new-character-weapon']").val()
    const newCharacterDebt = $("input[id='new-character-debt']").val()
    const newCharInfo = {
      name: newCharacterName,
      occupation: newCharacterOccupation,
      debt: newCharacterDebt,
      weapon: newCharacterWeapon
    }
    charactersAPI.createOneRegister(newCharInfo).then(response => {
      console.log(` New Character Created:
        Name: ${newCharacterName}
        Occupation: ${newCharacterOccupation}
        Weapon: ${newCharacterWeapon}
        Debt: ${newCharacterDebt}`);
    })
  })
})
