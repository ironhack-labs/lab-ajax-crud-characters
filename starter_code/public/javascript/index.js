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

  $('#fetch-one').on('click', (e) => {
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

  $('#delete-one').on('click', (e) => {
    event.preventDefault()
    const idForDelete = $("input[name='character-id-delete']").val()
    console.log(idForDelete)
    charactersAPI.deleteOneRegister(idForDelete).then(heroe => {
      console.log(`Deleted heroe with ID: ${idForDelete}`)
    })
  })

  $('#edit-character-form').on('submit', (e) => {

  })

  $('#new-character-form').on('submit', (e) => {
    event.preventDefault()
    const newCharacterName = $("input[name='character-id-delete']").val()

  })
})
