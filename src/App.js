import React, {useEffect, useState} from 'react';
import {
  // BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';


import List from './components/Listado';
import Comic from './components/Comic';
function App() {
  
  return (
     <Switch>
      <Route exact path="/" ><List/></Route>
      <Route path="/comic/:id" component={Comic} />
    </Switch>
  );
}

export default App;
