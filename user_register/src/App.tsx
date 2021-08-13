import React from 'react';
import './App.css';
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Register from "./pages/Register";

import {BrowserRouter,Route} from "react-router-dom";

function App() {
  return (  
    <div className ="App">
   <Nav/>
    <main className="form-signin">
      <BrowserRouter> 
      <Route path="/home" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      </BrowserRouter>
    
</main>
</div>
);
}

export default App;
