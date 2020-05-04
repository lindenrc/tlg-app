import React from 'react';
import DPM, { DPMContext, RequestMap } from "@fnal/app-framework/components/DPM"; // Added
import Framework from "@fnal/app-framework"; // Added
import ParameterRow from './ParameterRow';

//Interface
interface DProps {
	    title:string;
		animate: boolean;
		merge: boolean;
		deviceList: Array<string>;
		datamap: Map<string,string>;
		plotdata: Array<any>;
		removehandler:any;
		plothandler:any;
}

const ParameterView:React.FC<DProps> = (props:DProps) => {
		
  return (
   
    <Framework title="">
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
                                   if (localContext && localContext[entry] && localContext[entry].info && props.datamap.get(entry)) {
                                       return (
                                               <ParameterRow id = {entry}
											                 name = {localContext[entry].info.name} 
				                                             description = {localContext[entry].info.description} 
						        	                         data = {localContext[entry].data.data.toString()}
															 param = {props.datamap.get(entry) as string}
															 animate = {props.animate}
															 merge = {props.merge}
															 plotdata = {props.plotdata}
                                                             onremove = {props.removehandler}															 
							                                 onplot = {props.plothandler}/>

                                               );
		                           }
                                   else {
                                       return (
                                               <ParameterRow id = {entry}
											                 name = {entry} 
				                                             description = {"Invalid Device"} 
						        	                         data = {"Error"}
															 param = {props.datamap.get(entry) as string}
															 animate = {props.animate}
															 merge = {props.merge}
															 plotdata = {props.plotdata}
                                                             onremove = {props.removehandler}															 
							                                 onplot = {props.plothandler}/>

                                               );                                   }
                             });
	
		 	                 return ( 
							     <div>
								
								   <thead>
									  <tr>
									      <td className="name">
										      <b>Name</b>
									      </td>
									      <td className="description">
										      <b>Description</b>
									      </td>
									      <td className="data">
										      <b>Data</b>
									      </td>
								          <td className="remove">
										     <b>Remove</b>
									      </td>
									      <td className="plot">
										     <b>Plot</b>
									      </td>
								      </tr>
								    </thead>
								   {mylist}
                                   								
								</div>	  
							 );
			  }
		    }
            </DPMContext.Consumer>
        </DPM>
	</Framework>
  );
}

export default ParameterView;