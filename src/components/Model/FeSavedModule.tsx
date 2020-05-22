import React from 'react';
import FeAttribute from './FeAttribute'
import FeSavedElement from './FeSavedElement'

function mapName(data:Array<number>, start:number, size:number) {
	var str = "";
	var n;
	for( n = 0; n < size; n++ ) {
		var datum = data[start + n];
		var low = String.fromCharCode( datum%256 ) ;
		var high = String.fromCharCode( parseInt( "" + (datum/256 ) ) );
		str += "" + low +  "" + high;
	}
	return str;
}

class FeSavedModule {
    id: number = 0;
	category: number = 0;
	state: number = 0;
	name: string = 'none';
	owners_name: string = 'none';
	approved_by:string = 'none';
	t_created: number = Date.now();
	t_modified: number = Date.now();
	t_downloaded: number = Date.now();
	t_approved: number = Date.now();
	is_approved: number = 0;
	is_deleted: number = 0;
	is_automatic: number = 0;
	unused1: number = 0;
	unused2: number = 0;
	Nattributes: number = 0;
	Nelements: number = 0;
	attribute: Array<FeAttribute> = new Array();
	element: Array<FeSavedElement> = new Array();
	
	constructor(data: Array<number>) {
		if ( data !== undefined ) {
		
	        
		   	 var n = 0;
		     this.id = data[n++];
		     this.category = data[n++];
		     this.state = data[n++];
		     this.name = mapName( data, n, 32 );
			 n+= 32;
		     this.owners_name = mapName( data, n, 10 );
			 n += 10;
			 this.approved_by = mapName( data, n, 10 );
			 n += 10;
			 this.t_created = 65536*data[n] + data[n+1];
			 n += 2;
			 this.t_modified = 65536*data[n] + data[n+1];
			 n += 2;
			 this.t_downloaded = 65536*data[n] + data[n+1];
			 n += 2;
			 this.t_approved = 65536*data[n] + data[n+1];
			 n += 2;
			 this.is_approved = data[n++];
			 this.is_deleted = data[n++];
			 this.is_automatic = data[n++];
			 this.unused1 = data[n++];
			 this.unused2 = data[n++];
			 this.Nattributes = data[n++];
			 this.Nelements = data[n++];
			 for( let i = 0; i < this.Nattributes; i++) {
				  let attr = new FeAttribute( data, n );
				  n = attr.count;
				  this.attribute.push( attr );
			 }
             for( let i = 0; i < this.Nelements; i++) {
				  let ele = new FeSavedElement( data, n );
				  n = ele.count;
				  this.element.push( ele );
			 }			 
		}
	}
}
export default FeSavedModule;
