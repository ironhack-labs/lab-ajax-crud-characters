let allData = (name, occupation, weapon, cartoon) => {
  $( ".characters-container" ).append( `<div class='character-info'><div class='name'><strong>Name:</strong> ${name}</div><div class='occupation'><strong>Occupation:</strong> ${occupation}</div><div class='cartoon'><strong>Is cartoon?</strong> ${cartoon}</div><div class='weapon'><strong>Has weapon?</strong> ${weapon}</div></div>` )
}

// let oneData = (name, occupation, weapon, cartoon) => {
//   $(".characters-container" ).append( `<div class='character-info'><div class='name'>${name}</div><div class='occupation'>${occupation}</div><div class='cartoon'>${cartoon}</div><div class='weapon'>${weapon}</div></div>` )
// }