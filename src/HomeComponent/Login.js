import React, { Component } from 'react';
import Form from './Form';
import {Redirect} from 'react-router-dom';
import Axios from 'axios';
import Joi from 'joi-browser';
// import AsideMenu from './AsideMenu';
class Login extends Component {
state = {  
    account:{ email:"",password:""},
    errors:{},
    userdata:null,
    login_status:"",
    email_error:"",
    pass_error:"",
    token_error:""
};
  
  schema = {
    email:Joi.string().required().label("Email"),
    password:Joi.string().required().label("Password")
  }

    validate = ()=>{
      const  errors_result = Joi.validate(this.state.account,this.schema, { abortEarly:false });
      if(!errors_result.error) return null;

      const errors = {};
      for(let item of errors_result.error.details) errors[item.path[0]]=item.message;
      return errors;
    }


  changehandler = (e) =>{
      const { account } =this.state
       account[e.currentTarget.name] = e.currentTarget.value;
       this.setState({ account });
  }

  handlesubmit = (e) =>{
    e.preventDefault();

    const errors= this.validate();
    this.setState({ errors: errors|| {} });
    if(errors) return null;
    
     Axios.post('http://localhost:5000/login',this.state.account)
    .then(result =>{
      this.setState({userdata:result.data})
      localStorage.setItem('rememberMe',result.data.tokens[0].token)
      if(result.status===200){

      }      
      })
    .catch(err =>{ 
     if(err.response.status===401) {
      const pass_err="incorrect password";
      this.setState({pass_error:pass_err})
      return null;
    }
    if(err.response.status===404) {
    const email_err="incorrect email and password";
    this.setState({email_error:email_err})
    return null;
      }
      if(err.response.status===406) {
       const token_err="Email is not registered";
       this.setState({token_error:token_err})
       return null;
     }
    });
  }
  
  userinformation =() =>{
    return this.state.userdata
  }
    render() {
        return (
          <React.Fragment>
          {this.state.userdata ? <Redirect to={{ 
            pathname:'/user',
            state:{data:this.state.userdata}

          }} /> : 
             
            <div className="Register">
            
            <div className="Register-header">
             <p>Login , If you are already registered ....</p>
           </div>
          <div className="form">
             <form onSubmit={this.handlesubmit}>
               {this.state.email_error ? <p className="invalid-email">Incorrect email and password.....</p>:""}
               {this.state.pass_error ? <p className="invalid-email">Incorrect password....</p>:""}
               {this.state.token_error ? <p className="invalid-email">Email is not verified....</p>:""}

               <Form 
               name="email"
               label="Email"
               type="text"
               id="email"
               placeholder="Enter your Email" 
               value={this.state.account.email}
               onChange={this.changehandler}
               error={this.state.errors.email}

               />

               <Form 
               name="password"
               label="Password"
               type="password"
               id="password"
               placeholder="Enter your Password" 
               value={this.state.account.password}
               onChange={this.changehandler}
               error={this.state.errors.password}

               />
               
               <input className="submit" type="submit" value="Login"></input>
            </form> 
          </div>
         </div> 

          } 
           </React.Fragment>
        );
    }
}

export default Login;

