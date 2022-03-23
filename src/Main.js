
import { useEffect, useState } from "react";
import Navbar from './Navbar/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Information from "./Navbar/Information";
import Register from "./Navbar/Register";

export default function Main() {

    return(
        <div className="main_container">
            <header className="main_header">
                <h1>Mina & Juan-Pablos Bröllop</h1>
            </header>
            <Router>
                <Navbar />
                <Routes>
                <Route path='/information' element={<Information />} />
                <Route path='/register' element={<Register />} />
                </Routes>
            </Router>
        hallo
        </div>
    );
}