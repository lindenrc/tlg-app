import React, {useState, useEffect} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FeSavedTimeline from '../../components/Model/FeSavedTimeline'
import FeAttribute from '../../components/Model/FeAttribute'
import FeTunedModule from '../../components/Model/FeTunedModule'
import TimelineRow from './TimelineRow'
import {getModuleDelta, getModuleStart,getModuleEnd,getModuleType,getModuleRepetitions} from '../../components/Model/ModelUtility'

//Interface
interface MProps {
	    count:number;
		timeline: FeSavedTimeline;
}

const TimelineHeader:React.FC<MProps> = (props:MProps) => {
	
	
	var rowlist = props.timeline.module.map( element => { 
	                           return ( <TimelineRow id={0} 
							                         name={"Module " + element.id}
													 repeat_rate={getModuleDelta(element.attribute)} 
													 start_time={getModuleStart(element.attribute)}
													 num_times={getModuleRepetitions(element.attribute)}
													 repeat_type={getModuleType(element.attribute)}
													 end_time={getModuleEnd(element.attribute)}
													 total_time={0} />);
	});
    return (
	  <div>
        <form>
		  <label>Name</label>
		  <label>Repeat</label>
		  <label>Start</label>
          {rowlist}		  
        </form>
	  </div>
    );
};


export default TimelineHeader;
