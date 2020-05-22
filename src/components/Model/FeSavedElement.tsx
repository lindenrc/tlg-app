import React from 'react';

class FeSavedElement {
	destination: number = 0;
	event: number = 0;
	state: Array<number> = new Array();
	count: number = 0;
	
	constructor( data: Array<number>, count: number ) {
		let n = count;
		this.destination = data[n++];
		this.event = data[n++];
		for( let i = 0; i < 16; i++) {
		     this.state.push( data[n++] );
	    }
		this.count = n;
	}
}


export default FeSavedElement;
