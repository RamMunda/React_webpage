import React, { Component } from 'react';
import Form from './Form';
import Axios from 'axios';
import Joi from 'joi-browser';
import AsideMenu from './AsideMenu';
class Register extends Component {
state = {  
    account:{ name:"",email:"",password:"",confirm_password:""},
    errors:{},
    password_error:"",
    registered_info:null,
    email_error:"",
    pass_error:"",
    exits_email_error:""
};
  
  schema = {
    name:Joi.string().required().trim().label("Name"),
    email:Joi.string().required().trim().label("Email"),
    password:Joi.string().required().trim().label("Password"),
    confirm_password:Joi.string().required().trim().label("Confirm Password")

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
    
    const {password,confirm_password} = this.state.account;
    if(password!==confirm_password){
      const password_err_content = "password and confirm password are not matching";
      this.setState({password_error:password_err_content})
      console.log("password mark")
      return null;
    }
     
  

     Axios.post('http://localhost:5000',this.state.account)
      .then(result =>{
        if(result.status===200) {window.location.href="/token"}

    })
    .catch(
      err =>{ 
        if(err.response.status===405) {
          console.log('password error');
         const pass_err="password should be atleast 6 character";
         this.setState({pass_error:pass_err})
         return null;
       }
       if(err.response.status===404) {
       console.log('err 404')
       const email_err="Email already exist....";
       this.setState({email_error:email_err})
       return null;
         }
         if(err.response.status===400) {
          console.log('err 404')
          const email_err="Please enter valid email";
          this.setState({exits_email_error:email_err})
          return null;
            }
       }
    );
    

  }
    render() {
      const style={
        "color":"red",
        "font-size":"14px"
      }
        return (
          <>
          <AsideMenu />
           <div className="Register">
            
            <div className="Register-header">
            <p>REGISTER , iF YOU ARE NEW ....</p>
            {this.state.password_error && <h5 style={style}>password and confirm password are not matching</h5>}
            </div>
            {this.state.email_error ? <p className="invalid-email">Email already exist....</p>:""}
            {this.state.pass_error ? <p className="invalid-email">Password incorrect....</p>:""}
            {this.state.exits_email_error ? <p className="invalid-email">Email does noe exist....</p>:""}
            <div className="form">
               <form onSubmit={this.handlesubmit}>


                 <Form 
                 name="name"
                 label="Name"
                 type="text"
                 id="name"
                 placeholder="Enter your Name" 
                 value={this.state.account.name}
                 onChange={this.changehandler}
                 error={this.state.errors.name}
                 />

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

                <Form 
                 name="confirm_password"
                 label="Confirm Password"
                 type="password"
                 id="confirm_password"
                 placeholder="Enter your Confirm Password" 
                 value={this.state.account.confirm_password}
                 onChange={this.changehandler}
                 error={this.state.errors.confirm_password}

                 />
                 
                 <input className="submit" type="submit" value="Submit"></input>
              </form> 
            </div>
           </div> 
           </>
        );
    }
}

export default Register;

// const Mycontext = React.createContext();

// class Myprovider extends Component {
//   state = { 

//    }
//   render() { 
//       return ( 
//       <div>
//        <Mycontext.Provider value={}>

//            {this.props.children}
//        </Mycontext.Provider>
//       </div> 
//       );
//   }
// }

// export default Myprovider;