import React from 'react';
import FeAttribute from './FeAttribute';

class FeTunedModule {
	id: number = 0;
	Nattributes: number = 0;
	attribute: Array<FeAttribute> = new Array();
	count: number = 0;
	
	constructor( data: Array<number>, count: number ) {
		let n = count;
		this.id = data[n++];
		this.Nattributes = data[n++];
		for( let i = 0; i < this.Nattributes; i++) {
		     let attr = new FeAttribute( data, n );
		     n = attr.count;
		     this.attribute.push( attr );
	    }
		this.count = n;
	}
}


export default FeTunedModule;
