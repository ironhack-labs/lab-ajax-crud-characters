let pushToContainer = (name, occ, wep, isCart) => {
    $('.characters-container').append(
        `<div class="character-info">
            <div class= "name"> ${name} </div >
            <div class="occupation">${occ}</div>
            <div class="cartoon">IsCart = ${isCart} </div>
            <div class="weapon">${wep}</div>
        </div>`)
}


