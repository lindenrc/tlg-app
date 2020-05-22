import React from 'react';
import FeAttribute from './FeAttribute'
import FeTunedModule from './FeTunedModule'
import {mapName} from './ModelUtility'


class FeTimelineName {
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
	count: number = 0;
	
	constructor(data: Array<number>, count: number) {
		if ( data !== undefined ) {
		
	         
		     let n = count;
		     		
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
		     this.count = n; 
		}
	}
}

class FeTimelineNames {
	map: Map<string, FeTimelineName> = new Map();
	count: number = 0;
	nTimelines: number = 0;
	constructor( data: Array<number> , nTimelines: number) {
	   let n = 0;
	   this.nTimelines = nTimelines;
	   this.count = 0;
       for( var i = 0; i < nTimelines; i++ ) {
		    if ( data[n] == 0 ) {
				 break;
			}
            let name = new FeTimelineName( data, n );
            n = name.count;
            this.map.set( ""+name.id, name );
            this.map.set( ""+name.name, name );
			this.count++;
	   }
	}
	
	add( data: Array<number> ) {
	   let n = 0;
       for( var i = this.count; i < this.nTimelines; i++ ) {
		    if ( data[n] == 0 ) {
				 break;
			}
            let name = new FeTimelineName( data, n );
            n = name.count;
            this.map.set( ""+name.id, name );
            this.map.set( ""+name.name, name );
			this.count++;
	   }
	}
	
	getName( id:number ): string {
		if ( this.map !== undefined && this.map.has( ""+id ) && this.map.get( ""+id ) !== undefined) {
			 let nam = this.map.get( ""+id );
			 return nam != undefined ? nam.name : "None: " + id;
		}
		return "Timeline: " + id;
	}
	getNames(): Array<string> {
	    var out = new Array<string>();
		if ( this.map !== undefined && this.map.values() != undefined ) {
			 this.map.forEach( (value, key) => { out.push( value.name); } );
		}
	    return out;
	}
	findNameId( name: string ): string {
		if ( this.map !== undefined && this.map.has( ""+name ) && this.map.get( ""+name ) !== undefined) {
			 let nam = this.map.get( ""+name );
			 let id = nam !== undefined ? nam.id : 0;
			 return ( (id < 16 ? "0" : "" ) + id.toString(16) );
		}
		return "02";
	}
	
}	
export default FeTimelineNames;
