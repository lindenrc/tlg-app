import React, {useState}  from 'react';
import logo from './logo.svg';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Framework from "@fnal/app-framework"; // Added
import Main from './components/View/Main'
import DeviceReading from './components/Controller/DeviceReading'

function App() {
	var deviceList = ["Z:TLGT02[0:1899]"];
	var [datamap, setdataMap] = useState( new Map() );
	var [count, setCount] = useState(0);
	
  return (
    <Framework title="Timeline Generator">
	    <DeviceReading deviceList={deviceList} datamap={datamap} count={count}/>
	    <Main datamap={datamap} count={count}/>      
    </Framework>
  );
}

export default App;
