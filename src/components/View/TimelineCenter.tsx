import React, {useState, useEffect} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FeSetup from '../../components/Model/FeSetup'
import FeTimelineNames from '../../components/Model/FeTimelineNames'
import FeModuleNames from '../../components/Model/FeModuleNames'
import FeSavedTimeline from '../../components/Model/FeSavedTimeline'
import FeAttribute from '../../components/Model/FeAttribute'
import FeTunedModule from '../../components/Model/FeTunedModule'
import TimelineRow from './TimelineRow'
import {getModuleDelta, getModuleStart,getModuleEnd,getModuleType,getModuleRepetitions,getModuleTotal} from '../../components/Model/ModelUtility'

//Interface
//Interface
interface MProps {
		setup: FeSetup;
		timelineNames: FeTimelineNames;
		moduleNames: FeModuleNames;
		timeline: FeSavedTimeline;
}

const TimelineCenter:React.FC<MProps> = (props:MProps) => {
	
	
	var rowlist = props.timeline.module.map( element => { 
	                           return ( <TimelineRow id={element.id} 
							                         name={ props.moduleNames.getName( element.id ) }
													 repeat_rate={getModuleDelta(element.attribute)} 
													 start_time={getModuleStart(element.attribute)}
													 num_times={getModuleRepetitions(element.attribute)}
													 repeat_type={getModuleType(element.attribute)}
													 end_time={getModuleEnd(element.attribute)}
													 total_time={getModuleTotal(element.attribute)} />);
	});
    return (
	  <div>
        <form>
		  <label className="tlnhead1">Modules</label>
		  <label className="tlnhead2">Repeat</label>
		  <label className="tlnhead3">Start</label>
		  <label className="tlnhead4">#</label>
		  <label className="tlnhead5">Type</label>
		  <label className="tlnhead6">End</label>
		  <label className="tlnhead7">Total</label>
          {rowlist}		  
        </form>
	  </div>
    );
};


export default TimelineCenter;
