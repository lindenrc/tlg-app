import React from 'react';
import FeAttribute from './FeAttribute'
import FeTunedModule from './FeTunedModule'
import {mapName} from './ModelUtility'

class FeModuleName {
    id: number = 0;
	category: number = 0;
	state: number = 0;
	name: string = 'none';
	owners_name: string = 'none';
	approved_by: string = 'none';
	t_created: number = Date.now();
	t_modified: number = Date.now();
	t_downloaded: number = Date.now();
	t_approved: number = Date.now();
	is_approved: number = 0;
	is_deleted: number = 0;
    is_automatic: number = 0;
	unused1: number = 0;
	unused2: number = 0;
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
		     this.count = n; 
		}
	}
}

class FeModuleNames {
	map: Map<number, FeModuleName> = new Map();
	count: number = 0;
	nModules: number = 0;
	constructor( data: Array<number> , nModules: number) {
	   let n = 0;
	   this.nModules = nModules;
	   this.count = 0;
       for( var i = 0; i < nModules; i++ ) {
		    if ( data[n] == 0 ) {
				 break;
			}
            let name = new FeModuleName( data, n );
            n = name.count;
            this.map.set( name.id, name );
			this.count++;
	   }
	}
	
	add( data: Array<number> ) {
	   let n = 0;
       for( var i = this.count; i < this.nModules; i++ ) {
		    if ( data[n] == 0 ) {
				 break;
			}
            let name = new FeModuleName( data, n );
            n = name.count;
            this.map.set( name.id, name );
			this.count++;
	   }
	}
	getName( id:number ): string {
		if ( this.map !== undefined && this.map.has( id ) && this.map.get( id ) !== undefined) {
			 let nam = this.map.get( id );
			 return nam != undefined ? nam.name : "";
		}
		return "Module: " + id;
	}
}	
export default FeModuleNames;
