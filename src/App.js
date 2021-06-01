import React, {useState, useEffect} from 'react';

import Navbar from './Components/Navbar';
import './App.css';
import Footer from './Components/Footer';  

import Home from './Pages/Index';
import { Switch, Route } from 'react-router-dom';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Dropdown from './Components/Dropdown';


function App() {
  return (
    <>
    
    <Navbar />
    <Dropdown />
    <Switch>
    
    <Route path="/"  exact component={Home} />
    <Route path="/Menu"   component={Menu} />
    <Route path="/About"   component={About} />
    </Switch>
    
    <Footer />

    </>
  );
}

export default App;
