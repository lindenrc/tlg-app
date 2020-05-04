import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Framework from "@fnal/app-framework"; // Added

function App() {
  return (
    <Framework title="Timeline Generator">
	 
      <Tabs>
    <TabList>
      <Tab>Timeline</Tab>
      <Tab>Module</Tab>
    </TabList>
 
    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
    </Framework>
  );
}

export default App;
