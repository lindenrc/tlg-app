import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

//Interface
interface IProps {
	id: string;
	name: string;
	description: string;
	data: string;
	param: string;
	animate: boolean;
	merge: boolean;
	plotdata: Array<any>;
	onremove:any;
	onplot: any;
}
const ParameterRow:React.FC<IProps> = (props:IProps) => {

        //State variables
        var [ readings, setReadings ] = useState( new Array() );
       	
		//Local variables
		var split = props.param.split(" ");
		var period = parseInt(split[0]);
	    var plotsize = parseInt(split[1]);
		var precision = parseInt(split[2]);
	    var tim = ( new Date()).getTime();
	    var flt = parseFloat( props.data ).toFixed(precision);
	    var datum = tim + " " + flt;
		var mult = period/1000;
		var updated = false;
		
		//Add new reading to array of device readings
	    if ( props.data === "Error") {
		}
		else if ( readings.length === 0 ) {
			updated = true;
			readings.push( datum );
		}
		else {
			var last = readings[ readings.length - 1].toString();
			split = last.split(" ");
			var lastTime = parseInt( split[0]);
			if ( (tim-lastTime) >= (0.9*period) ) {
			      if ( readings.length >= plotsize ) { 
		               readings.shift();
		          }
				  updated = true;
                  readings.push(datum);
			}
		}
	
	    if ( props.animate && updated ) {
			for( var i = 0; i < props.plotdata.length; i++ ) {
			     var list  = props.plotdata[i];
				 if ( list[0] === props.id ){
					  list.length = 0;
					  list.push( props.id );
					  for( var j = 0; j < readings.length; j++) {
			               split = readings[j].split(" ");
						   var xval = new Date( parseInt( split[0] ) );
		                   var yval = parseFloat(split[1]);
                           list.push( {x: xval, y: yval});
	                  }
				 }
			}
	    }
        return <div>
            <tr key={props.name}>
                <td className="name">{props.name} </td>
                <td className="description"> {props.description} </td>
                <td className="data"> {parseFloat(props.data).toFixed(precision)} </td>
				<td className="remove">
				   <Button onClick = {() => props.onremove(props.id)}>
				   Remove
				   </Button>
				</td>
				<td className="plot">
				   <Button onClick = {() => props.onplot(props.id, readings)}>
				   Plot
				   </Button>
				</td>
            </tr>
            </div>;
};
export default ParameterRow;
