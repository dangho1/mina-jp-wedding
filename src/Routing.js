import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Main from "./Main";
import RSVP from "./RSVP";



function Routing() {
    return(
        <div>
            <Routes>
                <Route path="/">
                    <Main />
                </Route>

                <Route path="/RSVP">
                    <RSVP />
                </Route>
            </Routes>
        </div>
    )
}

export default Routing;