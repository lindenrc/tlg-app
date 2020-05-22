import React, {useState}  from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-tabs/style/react-tabs.css';
import Framework from "@fnal/app-framework"; // Added
import Main from './components/View/Main'

function App() {
	  var [count, setCount] = useState(0);
	  return (
              <Framework title="Timeline Generator">
	                     <Main count={count}/>      
              </Framework>
       );
}

export default App;
