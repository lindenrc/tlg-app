import React, {useState, useEffect} from 'react';
import 'react-tabs/style/react-tabs.css';
import FeSavedTimeline from '../../components/Model/FeSavedTimeline'
import FeSetup from '../../components/Model/FeSetup'
import FeTimelineNames from '../../components/Model/FeTimelineNames'
import FeModuleNames from '../../components/Model/FeModuleNames'

//Interface
interface MProps {
		setup: FeSetup;
		timelineNames: FeTimelineNames;
		moduleNames: FeModuleNames;
		timeline: FeSavedTimeline;
		handleChange: any;
}

const TimelineTop:React.FC<MProps> = (props:MProps) => {

	  var mylist = props.timelineNames.getNames().map( element => { 
	                                                   return ( <option value={element}> {element} </option> );
	  });
	
	return (
	  <div>
        <form>
		  <label className="tlnhead1">
		    Timeline Name
		  </label>
		  <select className="tlnrow1" value={props.timeline.name} onChange={props.handleChange}>
			  {mylist}
		  </select>
        </form>
	  </div>
    );
};


export default TimelineTop;
