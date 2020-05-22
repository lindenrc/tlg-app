import React, {useState, useEffect} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FeSavedTimeline from '../../components/Model/FeSavedTimeline'
import FeAttribute from '../../components/Model/FeAttribute'
import FeTunedModule from '../../components/Model/FeTunedModule'

//Interface
interface TRProps {
	    id: number;
		name: string;
		repeat_rate: number;
		start_time: number;
		num_times: number;
		repeat_type: string;
		end_time: number;
		total_time: number;
}


const TimelineRow:React.FC<TRProps> = (props:TRProps) => {
	
	
  return (
     <div>
	    <label className="tlnrow1">
		  {props.name}
		  </label>
		  <input className="tlnrow2" type="text" value={props.repeat_rate} />
		  <input className="tlnrow3" type="text" value={props.start_time} />
		  <input className="tlnrow4" type="text" value={props.num_times} />
		  <select className="tlnrow5" value={props.repeat_type} >
		    <option value="fixed">fixed</option>
		    <option value="even">even</option>
		    <option value="pack">pack</option>
		  </select>
		  <input className="tlnrow6" type="text" value={props.end_time} />
		  <input className="tlnrow7" type="text" value={props.total_time} />
		<br />
     </div>
  );
}

export default TimelineRow;
