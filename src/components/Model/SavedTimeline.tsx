import React from 'react';
import FeAttribute from './FeAttribute'
import FeTunedModule from './FeTunedModule'

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

class SavedTimeline {
    id: number = 0;
	category: number = 0;
	state: number = 0;
	name: string = 'none';
	owners_name: string = 'none';
	inservice_by: string = 'none';
	t_created: number = Date.now();
	t_modified: number = Date.now();
	t_downloaded: number = Date.now();
	t_inservice: number = Date.now();
	t_sequencer: number = Date.now();
	is_inservice: number = 0;
	is_deleted: number = 0;
	unused1: number = 0;
	unused2: number = 0;
	unused3: number = 0;
	Nattributes: number = 0;
	Nmodules: number = 0;
	attribute: Array<FeAttribute> = new Array();
	module: Array<FeTunedModule> = new Array();
	
	constructor(string_data: string) {
		if ( string_data !== undefined ) {
		
	         let data = [];
		     let split = string_data.split(",");
		     let n = 0;
		     for( n = 0; n < split.length; n++ ) {
		          data[n] = parseInt( split[n] );
		     }
		
             n = 0;		
		     this.id = data[n++];
		     this.category = data[n++];
		     this.state = data[n++];
		     this.name = mapName( data, n, 32 );
			 n+= 32;
		     this.owners_name = mapName( data, n, 10 );
			 n += 10;
			 this.inservice_by = mapName( data, n, 10 );
			 n += 10;
			 this.t_created = 65536*data[n] + data[n+1];
			 n += 2;
			 this.t_modified = 65536*data[n] + data[n+1];
			 n += 2;
			 this.t_downloaded = 65536*data[n] + data[n+1];
			 n += 2;
			 this.t_inservice = 65536*data[n] + data[n+1];
			 n += 2;
			 this.t_sequencer = 65536*data[n] + data[n+1];
			 n += 2;
			 this.is_inservice = data[n++];
			 this.is_deleted = data[n++];
			 this.unused1 = data[n++];
			 this.unused2 = data[n++];
			 this.unused3 = data[n++];
			 this.Nattributes = data[n++];
			 this.Nmodules = data[n++];
			 for( let i = 0; i < this.Nattributes; i++) {
				  let attr = new FeAttribute( data, n );
				  n = attr.count;
				  this.attribute.push( attr );
			 }
             for( let i = 0; i < this.Nmodules; i++) {
				  let mod = new FeTunedModule( data, n );
				  n = mod.count;
				  this.module.push( mod );
			 }			 
		}
	}
}
export default SavedTimeline;
