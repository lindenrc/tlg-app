import React from 'react';
import FeAttribute from './FeAttribute'
import FeTunedModule from './FeTunedModule'

const ATTR_MODULE_START = 2;
const ATTR_MODULE_DELTA = 3;
const ATTR_MODULE_REPETITIONS = 4;
const ATTR_MODULE_PLACEMENT_TYPE = 5;
const ATTR_MODULE_END = 6;

export function toArray( data: string, sep: string ): Array<number> {
	let array = new Array();
	let split = data.split( sep );
	for( var n = 0; n < split.length; n++ ) {
		 array.push( parseInt( split[ n ] ) );
	}
	return array;
}
export function mapName(data:Array<number>, start:number, size:number) {
	var str = "";
	var n;
	for( n = 0; n < size; n++ ) {
		var datum = data[start + n];
        var l = datum%256;
		var h = parseInt( "" + (datum/256 ) );
		var low = l == 0 ? "" : String.fromCharCode( l ) ;
		var high = h == 0 ? "" : String.fromCharCode( h );		str += "" + low +  "" + high;
	}
	return str;
}

export function getAttribute( id: number, attributes: Array<FeAttribute> ): number {
	for( var n = 0; n < attributes.length; n++ ) {
		 if ( attributes[n].id == id ) {			 
			  return attributes[n].parameter;			 
		 }
	}
	return -1;
}

export function convertToHz(value: number): number {
	var result = parseFloat( "" + ( value/15 ) );
	return result;
}

export function getModuleStart( attributes: Array<FeAttribute> ): number {
	var param = getAttribute( ATTR_MODULE_START, attributes );
	return convertToHz( param );
}

export function getModuleEnd( attributes: Array<FeAttribute> ): number {
	var param = getAttribute( ATTR_MODULE_END, attributes );
	return convertToHz( param );
}

export function getModuleDelta( attributes: Array<FeAttribute> ): number {
	var param = getAttribute( ATTR_MODULE_DELTA, attributes );
	return convertToHz( param );
}

export function getModuleRepetitions( attributes: Array<FeAttribute> ): number {
	return getAttribute( ATTR_MODULE_REPETITIONS, attributes );
}

export function getModuleType( attributes: Array<FeAttribute> ): string {
	var param = getAttribute( ATTR_MODULE_PLACEMENT_TYPE, attributes );
	if ( param == 1 ) {
		 return "fixed";
	}
	else if ( param == 2 ) {
		 return "even";
	}
	else if ( param == 3 ) {
		 return "pack";
	}
	else {
		return "????";
	}
}

export function getModuleTotal( attributes: Array<FeAttribute> ): number {
	var param = getAttribute( ATTR_MODULE_END, attributes );
	return convertToHz( param );
}