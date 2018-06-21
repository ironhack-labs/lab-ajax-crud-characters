function getHTMLForCharacterInfoCard(character) {
  const { id, name, occupation, cartoon, weapon } = character;
  return `<div class="character-info">
        <div class="id">Character id: <span class="value">${id}</span></div>
        <div class="name">Character Name: <span class="value">${name}</span></div>
        <div class="occupation">Character Occupation: <span class="value">${occupation}</span></div>
        <div class="cartoon">Is a Cartoon?: <span class="value">${cartoon}</span></div>
        <div class="weapon">Character Weapon: <span class="value">${weapon}</span></div>
      </div>`;
}

function clean(obj) {
  for (var propName in obj) {
    if (!obj[propName]) {
      delete obj[propName];
    }
  }
  return obj;
}

function getObjectFromHTMLInput(formjQuery) {
  return {
    name: formjQuery.find('input[name="name"]').val(),
    occupation: formjQuery.find('input[name="occupation"]').val(),
    weapon: formjQuery.find('input[name="weapon"]').val(),
    cartoon: formjQuery.find('input[name="cartoon"]').is(":checked")
  };
}
