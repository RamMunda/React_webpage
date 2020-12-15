import React, { Component } from 'react';
// import { Link} from 'react-router-dom';
class Navbar extends Component {
state = { 

 };
  
    render() {
        return (
       
          <div className="navbar">
              <ul>
              <li><a href="/login">Login</a></li>
              <li><a href="#.js">FAQs</a></li>
              <li><a href="#.js">Gate 2019</a></li>
              <li><a href="/">Home</a></li>
          
              </ul>
          </div>  
         

        );
    }
}

export default Navbar;