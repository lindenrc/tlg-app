import React from 'react';

class FeAttribute {
	id: number = 0;
	device_index: number = 0;
	element_index: number = 0;
	subsystem_index: number = 0;
	source: number = 0;
	parameter: number = 0;
	count: number = 0;
	
	constructor( data: Array<number>, count: number ) {
		
		
	    let n = count;		
		this.id = data[n++];
		this.device_index = data[n++];
		this.element_index = data[n++];
		this.subsystem_index = data[n++];
		this.source = data[n++];
		this.parameter = data[n++];
	    this.count = n;
		
		
	}
}


export default FeAttribute;
