import './App.css';
import Main from './Main';
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import RSVP from "./RSVP";


function App() {
  return(
    <div className="app">
        <Routes>
            <Route exact path="/" element={<Main />}/>

            <Route exact path="/rsvp" element={<RSVP />}/>
        </Routes>
    </div>
)
}
    

export default App;
