import React from 'react';

const Nav =()=>{
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <a  className="navbar-brand" href="/home">Home</a>
         
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item active"> 
                <a className="nav-link " href="/login">Login</a>
                </li>   
                <li className="nav-item active">
                <a className="nav-link" href="#">Register</a>
                </li>   
              
           
            </ul>
        
          </div>
        </div>
      </nav>
    );
};

export default Nav;