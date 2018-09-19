let allData = (name, occupation, weapon, cartoon) => {
  $( ".characters-container" ).append( `<div class='character-info'><div class='name'>${name}</div><div class='occupation'>${occupation}</div><div class='cartoon'>${cartoon}</div><div class='weapon'>${weapon}</div></div>` )
}