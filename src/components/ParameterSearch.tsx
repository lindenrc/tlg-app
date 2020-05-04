import React from 'react';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';

//Interface
interface IProps {
	device: string;
	animate: boolean;
	merge: boolean;
	onDeviceChange: any;
	onDeviceSubmit: any;
	onAnimateChecked:any;
	onMergeChecked: any;
}
const ParameterSearch:React.FC<IProps> = (props:IProps) => {
	
	return (
		<form onSubmit={props.onDeviceSubmit}>
			<input type="text" placeholder="Enter Device Name PlotSize Precision" onChange = {props.onDeviceChange} value={props.device}/>
			<Button onClick={props.onDeviceSubmit}> 
			Add Device 
			</Button>
			&nbsp
			<ToggleButton className="checked" type="checkbox" checked={props.animate} value="1" onClick={props.onAnimateChecked}>
			Animate
			</ToggleButton>
			&nbsp
			<ToggleButton className="checked" type="checkbox" checked={props.merge}  defaultChecked value="2" onClick={props.onMergeChecked}>
			Merge
			</ToggleButton>
		</form>
	);
};

export default ParameterSearch;