import React, { Component } from 'react';
import Header from './HomeComponent/Header';
import './css/Home.css';
import Navbar from './HomeComponent/Navbar';
import Register from './HomeComponent/Register';
import {BrowserRouter,Route} from 'react-router-dom';
import AfterSubmit from './HomeComponent/AfterSubmit';
import Login from './HomeComponent/Login';
import User from './HomeComponent/User';
import Footer from './HomeComponent/Footer';
import Token from './HomeComponent/Token';
import Userinfo from './HomeComponent/Userinfo';
class App extends Component {
  state = { 
    
   }
  render() {
    return (
      <div className="App">
         <Header />        
         <Navbar />
         <BrowserRouter basename={ window.location.pathname || " "}>
         <Route path="/user" exact component={User} />
         <Route path="/userinfo" exact component={Userinfo} />
         <Route path="/" exact component={Register} />
         <Route path="/aftersubmit" component={AfterSubmit}/>
         <Route path="/login" component={Login} />
         <Route path="/token" component={Token} />
         
         <Footer />
         </BrowserRouter>
      </div>
    );
  }
}

export default App;