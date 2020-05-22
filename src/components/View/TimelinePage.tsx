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
import {getModuleDelta, getModuleStart,getModuleEnd,getModuleType,getModuleRepetitions} from '../../components/Model/ModelUtility'
import TimelineTop from './TimelineTop'
import TimelineCenter from './TimelineCenter'

//Interface
interface MProps {
		setup: FeSetup;
		timelineNames: FeTimelineNames;
		moduleNames: FeModuleNames;
		timeline: FeSavedTimeline;
		handleChange: any;
}

const TimelinePage:React.FC<MProps> = (props:MProps) => {
	
	
	
    return (
	  <div>
        <TimelineTop setup={props.setup} timelineNames={props.timelineNames} moduleNames={props.moduleNames} timeline={props.timeline} handleChange={props.handleChange}/>
		<TimelineCenter setup={props.setup} timelineNames={props.timelineNames} moduleNames={props.moduleNames} timeline={props.timeline} />
	  </div>
    );
};


export default TimelinePage;
