import React, { Component } from 'react';
import '../css/Home.css'
class Header extends Component {
 state = {  };
    
    render() {
        return (
            <div className="header">
             <div className="logo">

             </div>
             <div className="header-text">
             <p>GATE Online Application Processing System</p> 
              <p>(GOAPS)</p>
             </div>
             <div className="collage-logo">

             </div>
            </div>
        );
    }
}

export default Header;