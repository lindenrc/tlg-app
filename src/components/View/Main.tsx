import React, {useState, useEffect} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FeSetup from '../../components/Model/FeSetup'
import FeSavedTimeline from '../../components/Model/FeSavedTimeline'
import FeAttribute from '../../components/Model/FeAttribute'
import FeTunedModule from '../../components/Model/FeTunedModule'
import FeTimelineNames from '../../components/Model/FeTimelineNames'
import FeModuleNames from '../../components/Model/FeModuleNames'
import {toArray} from '../../components/Model/ModelUtility'
import TimelinePage from './TimelinePage'
import DeviceReading from '../../components/Controller/DeviceReading'

//Interface
interface MProps {
	    count:number;
}

const Main:React.FC<MProps> = (props:MProps) => {
	
	//State variables
    var [deviceList, setDeviceList] = useState( [ "Setup Z:TLGSTP[0:32]", 
	                                              "TimelineNames1 Z:TLGMOD{0:3700}",
	                                              "TimelineNames2 Z:TLGMOD{2:3700}",
	                                              "TimelineNames3 Z:TLGMOD{4:3700}",  
	                                              "TimelineNames4 Z:TLGMOD{6:3700}",
	                                              "TimelineNames5 Z:TLGMOD{8:3700}",
    	                                          "ModuleNames1 Z:TLGMOD{32:3700}", 
    	                                          "ModuleNames2 Z:TLGMOD{34:3700}", 
    	                                          "ModuleNames3 Z:TLGMOD{36:3700}", 
    	                                          "ModuleNames4 Z:TLGMOD{38:3700}", 
    	                                          "ModuleNames5 Z:TLGMOD{40:3700}", 
    	                                          "ModuleNames6 Z:TLGMOD{42:3700}", 
					                              "Timeline Z:TLGT02[0:1899]" ] );
	var [datamap, setdataMap] = useState( new Map() );
	
    const [time, setTime] = useState(Date.now());
       
        //Effect to update component every second
        useEffect(() => {
              const interval = setInterval(() => setTime(Date.now()), 1000);
              return () => {
                            clearInterval(interval);
              };
    }, []);		
	
	
	var tabData = [ "Timeline", "Module:0" , "Events" ];
	
	var tablist = tabData.map( element => { 
	                           return ( <Tab> {element} </Tab> );
	});
	var isLoading = true;
	if ( datamap && 
	     datamap.has("Setup") && 
		 datamap.has("TimelineNames1") && 
		 datamap.has("TimelineNames2") && 
		 datamap.has("TimelineNames3") && 
		 datamap.has("TimelineNames4") && 
		 datamap.has("TimelineNames5") && 
		 datamap.has("ModuleNames1") && 
		 datamap.has("ModuleNames2") && 
		 datamap.has("ModuleNames3") && 
		 datamap.has("ModuleNames4") && 
		 datamap.has("ModuleNames5") && 
		 datamap.has("ModuleNames6")  
		 ) {
		 isLoading = false;
	}
	var panellist = tabData.map( element => {
		                         if ( isLoading ) {
									  return ( <TabPanel> <h2> Loading.....</h2> </TabPanel> );
							     }                        
		                         else if ( element === "Timeline" ) {
									  
									  let setup = new FeSetup( toArray( datamap.get("Setup") as string, "," ) );
									  let tln = new FeSavedTimeline( toArray( datamap.get("Timeline") as string, "," ) );
									  let tlnNames = new FeTimelineNames( toArray( datamap.get("TimelineNames1") as string, "," ), setup.Ntimelines );
									  let modNames = new FeModuleNames( toArray( datamap.get("ModuleNames1") as string, "," ), setup.Nmodules );
									  
									  tlnNames.add( toArray( datamap.get("TimelineNames2") as string, "," ) );
									  tlnNames.add( toArray( datamap.get("TimelineNames3") as string, "," ) );
									  tlnNames.add( toArray( datamap.get("TimelineNames4") as string, "," ) );
									  tlnNames.add( toArray( datamap.get("TimelineNames5") as string, "," ) );
									  
									  modNames.add( toArray( datamap.get("ModuleNames2") as string, "," ) );
									  modNames.add( toArray( datamap.get("ModuleNames3") as string, "," ) );
									  modNames.add( toArray( datamap.get("ModuleNames4") as string, "," ) );
									  modNames.add( toArray( datamap.get("ModuleNames5") as string, "," ) );
									  modNames.add( toArray( datamap.get("ModuleNames6") as string, "," ) );
	                                  //Handle change of text on add device	
                                      const handleTimelineChange = (e: React.FormEvent<HTMLInputElement>) => {
		                                    let  id = tlnNames.findNameId(e.currentTarget.value);
											let list = [];
											for( let n = 0; n < deviceList.length; n++ ) {
												 let datum = deviceList[n].split(" ");
												 if ( datum[0] === "Timeline") {
													  list[n] = "Timeline Z:TLGT"+id+"[0:1899]";
												 }
												 else {
													 list[n] = deviceList[n];
												 }
											}
											setDeviceList( list );
                                      };
									  
									  return ( 
									          <TabPanel>
    											  <TimelinePage 
													  setup={setup} 
													  timelineNames={tlnNames} 
													  moduleNames={modNames} 
													  timeline={tln} 
													  handleChange={handleTimelineChange}
													  /> 
											  </TabPanel> );
								 }
								 else if ( element === "Module:0" ) {
									  return ( <TabPanel> <h2> Module: {props.count} </h2> </TabPanel> );
								 }
								 else {
									  return ( <TabPanel> <h2> {element} </h2> </TabPanel> );
								 }
	});
  return (
	  <div>
	  	    <DeviceReading deviceList={deviceList} datamap={datamap} count={props.count}/>
            <Tabs>
                  <TabList>
		           {tablist}
                  </TabList>
 
                 {panellist}          
            </Tabs>
	  </div>
  );
}

export default Main;
