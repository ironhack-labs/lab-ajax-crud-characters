class APIHandler {
	constructor( baseUrl ) {
		this.api = axios.create( { baseURL: baseUrl } );
	}

	getFullList() {
		return this.api.get( '/characters' );
	}

	getOneRegister( characterId ) {
		return this.api.get( `/characters/${characterId}` );
	}

	createOneRegister( characterData ) {
		return this.api.post( '/characters', characterData );
	}

	updateOneRegister( characterId, characterData ) {
		return this.api.put( `/characters/${characterId}`, characterData );
	}

	deleteOneRegister( characterI ) {
		return this.api.delete( `/characters/${characterId}` );
	}
}
