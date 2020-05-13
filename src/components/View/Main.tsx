import React, {useState, useEffect} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SavedTimeline from '../../components/Model/SavedTimeline'
import FeAttribute from '../../components/Model/FeAttribute'
import FeTunedModule from '../../components/Model/FeTunedModule'

//Interface
interface MProps {
	    count:number;
		datamap: Map<string,string>;
}

const Main:React.FC<MProps> = (props:MProps) => {
	
	//State variables
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
	var panellist = tabData.map( element => {
		                         if ( element === "Timeline" && props.datamap) {
									  let str = props.datamap.get("Z:TLGT02[0:1899]");
									  let tln = new SavedTimeline( str as string );
									  return ( <TabPanel> 
									           <h2> Reading: {tln.name} </h2> 
									           <h2> Reading: {tln.Nattributes ? tln.attribute[0].id : 0} </h2> 
									           <h2> Reading: {tln.Nattributes ? tln.attribute[0].parameter : 0} </h2> 
									           <h2> Reading: {tln.Nmodules ? tln.module[0].id : 0} </h2> 
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
	 
      <Tabs>
           <TabList>
		   {tablist}
           </TabList>
 
           {panellist}          
      </Tabs>
  );
}

export default Main;
