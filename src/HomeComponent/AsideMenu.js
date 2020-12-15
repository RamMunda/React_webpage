import React, { Component } from 'react';

class AsideMenu extends Component {
state = {  };
    
    render() {
        return (
           <div className="aside-menu">
               <ul>
                   <li>Information Broucher</li>
                   <li>Document For Application</li>
                   <li>Important Dates</li>
                   <li>Eligibility</li>
                   <li>Important Notice<div className="imp-notice"></div></li>
               </ul>
           </div> 
        );
    }
}

export default AsideMenu;