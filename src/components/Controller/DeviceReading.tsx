import React from 'react';
import DPM, { DPMContext, RequestMap } from "@fnal/app-framework/components/DPM"; // Added
import Framework from "@fnal/app-framework"; // Added

//Interface
interface DProps {
	    count:number;
		deviceList: Array<string>;
		datamap: Map<string,string>;
}

const DeviceReading:React.FC<DProps> = (props:DProps) => {
		
  return (
   
        <DPM drf={props.deviceList}>
        {/* This is a comment inside JSX */}
        {/* The DPMContext.Consumer provides the data back to us */}
            <DPMContext.Consumer>
            {
              dpmContext => {
                             // dpmContext could be DPMState or RequestMap
                             // Here we insist that it is RequestMap
                             const localContext = dpmContext as RequestMap;
			                 //Generate list of device rows							 
	                         const mylist = props.deviceList.map(entry => {
                                   if (localContext && localContext[entry] && localContext[entry].info) {
	                                   props.datamap.set( entry, localContext[entry].data.data.toString() );
								   }
                             });
	

               return <div> </div>;
			  }
		    }
            </DPMContext.Consumer>
        </DPM>
  );
}

export default DeviceReading;