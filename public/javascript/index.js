const charactersAPI = new APIHandler( 'http://localhost:7555' );

// update the html. will be called twice in: getAll() and getOne()
const updateView = ( characterData ) => {
	document.querySelector( '.characters-container' ).innerHTML +=
		`
		<div class="character-info">
			<div class="id">Id: <span>${characterData.id}</span> </div>
			<div class="name">Name: <span>${characterData.name}</span> </div>
			<div class="occupation">Occupation: <span>${characterData.occupation}</span> </div>
			<div class="cartoon">Is a Cartoon? <span>${characterData.cartoon}</span> </div>
			<div class="weapon">Weapon: <span>${characterData.weapon}</span> </div>
		</div>
		`;
};

window.addEventListener( 'load', () => {
	// NOTE: getAll
	document.getElementById( 'fetch-all' ).addEventListener( 'click', function( event ) {
		// get data from api database
		const getAll = async () => {
			try {
				const response = await charactersAPI.getFullList();
				const characters = await response.data;

				document.querySelector( '.characters-container' ).innerHTML = '';

				characters.forEach( ( character ) => updateView( character ) );
			} catch ( e ) {
				console.log( e );
				document.querySelector( '#delete-one' ).style.backgroundColor = 'red';
			}
		};
		getAll();
	} );

	// NOTE: getOne
	document.getElementById( 'fetch-one' ).addEventListener( 'click', function( event ) {
		// get id from input field
		const characterId = document.querySelector( '[name=character-id]' ).value;

		// get data from api database
		const getOne = async () => {
			try {
				const response = await charactersAPI.getOneRegister( characterId );
				const character = await response.data;

				document.querySelector( '.characters-container' ).innerHTML = '';

				updateView( character );
			} catch ( e ) {
				console.log( e );
				document.querySelector( '#delete-one' ).style.backgroundColor = 'red';
			}
		};
		getOne();
	} );

	// NOTE: delete
	document.getElementById( 'delete-one' ).addEventListener( 'click', function( event ) {
		// get id from input field
		const characterId = document.querySelector( '[name=character-id-delete]' ).value;

		// delete from api database
		const deleteOne = async () => {
			try {
				await charactersAPI.deleteOneRegister( characterId );
				document.querySelector( '#delete-one' ).style.backgroundColor = 'green';
			} catch ( e ) {
				console.log( e );
				document.querySelector( '#delete-one' ).style.backgroundColor = 'red';
			}
		};
		deleteOne();
	} );

	// NOTE: edit
	document.getElementById( 'edit-character-form' ).addEventListener( 'submit', function( event ) {
		// prevent page refresh
		event.preventDefault();

		// get values from input field
		const id = document.querySelector( '#edit-character-form input[name=chr-id]' ).value;
		const name = document.querySelector( '#edit-character-form input[name=name]' ).value;
		const occupation = document.querySelector( '#edit-character-form input[name=occupation]' ).value;
		const weapon = document.querySelector( '#edit-character-form input[name=weapon]' ).value;
		const cartoon = document.querySelector( '#edit-character-form input[name=cartoon]' ).checked;
	
		// fields cannot be empty => show message
		if ( name === '' || occupation === '' || weapon === '' ) {
			const div = document.createElement( 'div' );
			div.innerHTML += '*fields cannot be empty';
			div.style.color = 'red';
			document.querySelector( '#edit-character-form #send-data' ).after( div );
			return;
		}

		// store data in api database
		const updateOne = async () => {
			try {
				await charactersAPI.updateOneRegister( id, { name, occupation, weapon, cartoon } );
				document.querySelector( '#edit-character-form #send-data' ).style.backgroundColor = 'green';
			} catch ( e ) {
				console.log( e );
				document.querySelector( '#edit-character-form #send-data' ).style.backgroundColor = 'red';
			}
		};
		updateOne();
	} );

	// NOTE: create
	document.getElementById( 'new-character-form' ).addEventListener( 'submit', function( event ) {
		// prevent page refresh
		event.preventDefault();

		// get values from input field
		const name = document.querySelector( '#new-character-form input[name=name]' ).value;
		const occupation = document.querySelector( '#new-character-form input[name=occupation]' ).value;
		const weapon = document.querySelector( '#new-character-form input[name=weapon]' ).value;
		const cartoon = document.querySelector( '#new-character-form input[name=cartoon]' ).checked;

		// fields cannot be empty => show message
		if ( name === '' || occupation === '' || weapon === '' ) {
			const div = document.createElement( 'div' );
			div.innerHTML += '*fields cannot be empty';
			div.style.color = 'red';
			document.querySelector( '#new-character-form #send-data' ).after( div );
			return;
		}

		// store data in api database
		const createOne = async () => {
			try {
				await charactersAPI.createOneRegister( { name, occupation, weapon, cartoon } );
				document.querySelector( '#new-character-form #send-data' ).style.backgroundColor = 'green';
			} catch ( e ) {
				console.log( e );
				document.querySelector( '#new-character-form #send-data' ).style.backgroundColor = 'red';
			}
		};
		createOne();
	} );
} );
