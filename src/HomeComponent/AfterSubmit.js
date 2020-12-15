import React, { Component } from 'react';
import '../css/Home.css';
import Axios from 'axios';
import Form from './Form';
import Joi from 'joi-browser';
// import userinfo from './Userinfo';
class AfterSubmit extends Component {
    state = { 
      userDetail:{
        Enrollment_ID:"",
        Name_of_candidate:"",
        Email_ID:"",
        Mobile_No:"",
        Date_of_Birth:"",
        Gender:"",
        Name_of_Parent:"",
        Mobile_No_of_Parent:"",
        Nationality:"",
        Category:"",
        Person_with_disability:"",
        Country_of_Permanent_Residence:"",
        State_or_Union_Territory_of_Permanent_Residence:"",
        ID_Proof:"",
        ID_Proof_Number:""  
      },
      selectedFile:{},
      errors:{}
     }

     schema = {
      Enrollment_ID:Joi.string().required(),
      Name_of_candidate:Joi.string().required(),
      Email_ID:Joi.string().required(),
      Mobile_No:Joi.string().required(),
  
      Date_of_Birth:Joi.string().required(),
      Gender:Joi.string().required(),
      Name_of_Parent:Joi.string().required(),
      Mobile_No_of_Parent:Joi.string().required(),

      Nationality:Joi.string().required(),
      Category:Joi.string().required(),
      Person_with_disability:Joi.string().required(),
      Country_of_Permanent_Residence:Joi.string().required(),

      State_or_Union_Territory_of_Permanent_Residence:Joi.string().required(),
      ID_Proof:Joi.string().required(),
      ID_Proof_Number:Joi.string().required()
    }
    validate = ()=>{
      const  errors_result = Joi.validate(this.state.account,this.schema, { abortEarly:false });
      if(!errors_result.error) return null;

      const errors = {};
      for(let item of errors_result.error.details) errors[item.path[0]]=item.message;
      return errors;
    }

    changehandler = (e) =>{
      const { userDetail } =this.state
      userDetail[e.currentTarget.name] = e.currentTarget.value;
       this.setState({ userDetail });
  }
  handleuserdateSubmit = (e) =>{
    e.preventDefault();

    const errors= this.validate();
    this.setState({ errors: errors|| {} });
    if(errors) return null;

    const fd = new FormData();
    fd.append('file',this.state.selectedFile)

     Axios.post('http://localhost:5000/usercomplete_detail',this.state.userDetail)
      .then(result =>{
        console.log(result)
      // if(result.status===400) {return ("your data is not submitted successfully")}
      if(result.status===200) {window.location.href="/userinfo"}
    })
    .catch(err =>console.log(err));
    

  }
  fileselectHandler = event =>{
    // const filedata = this.state.userDetail;
    console.log(event.target);
    this.setState({selectedFile:event.target.files[0]})
  }
  uploadfileHandler = () =>{
     const fd = new FormData();
     fd.append('file',this.state.selectedFile)
        Axios.post('http://localhost:5000/imageuploader',fd)
      .then(result =>{
        console.log(result);
      if(result.status===200) return('image uploaded successfully')
      if(result.status===401) {return ("image is not valid")}
    })
    .catch(err =>console.log(err)); 
  }
    render() { 
        return ( 
            <div className="after-submit">
              <div className="automatic-field">
              <Form 
                 name="Enrollment_ID"
                 label="Enrollment ID"
                 type="text"
                 id="Enrollment_ID"
                 value={this.state.userDetail.Enrollment_ID}
                 onChange={this.changehandler}
                 error={this.state.errors.Enrollment_ID}
                 />
              <Form 
                 name="Name_of_candidate"
                 label="Name of candidate"
                 type="text"
                 id="Name_of_candidate"
                 value={this.state.userDetail.Name_of_candidate}
                 onChange={this.changehandler}
                 error={this.state.errors.Name_of_candidate}
                 />
                <Form 
                 name="Email_ID"
                 label="Email ID"
                 type="text"
                 id="Email_ID"
                 value={this.state.userDetail.Email_ID}
                 onChange={this.changehandler}
                 error={this.state.errors.Email_ID}
                 />
                <Form 
                 name="Mobile_No"
                 label="Mobile No"
                 type="number"
                 id="Mobile_No"
                 value={this.state.userDetail.Mobile_No}
                 onChange={this.changehandler}
                 error={this.state.errors.Mobile_No}
                 />
              </div>

              <div className="other_detail">
              <Form 
                 name="Date_of_Birth"
                 label="Date of Birth"
                 type="date"
                 id="Date_of_Birth"
                 value={this.state.userDetail.Date_of_Birth}
                 onChange={this.changehandler}
                 error={this.state.errors.Date_of_Birth}
                 />
              <Form 
                 name="Gender"
                 label="Gender"
                 type="text"
                 id="Gender"
                 value={this.state.userDetail.Gender}
                 onChange={this.changehandler}
                 error={this.state.errors.Gender}
                 />
                <Form 
                 name="Name_of_Parent"
                 label="Name of Parent/Guardian"
                 type="text"
                 id="Name_of_Parent"
                 value={this.state.userDetail.Name_of_Parent}
                 onChange={this.changehandler}
                 error={this.state.errors.Name_of_Parent}
                 />
                <Form 
                 name="Mobile_No_of_Parent"
                 label="Mobile No of Parent/Guardian"
                 type="number"
                 id="Mobile_No_of_Parent"
                 value={this.state.userDetail.Mobile_No_of_Parent}
                 onChange={this.changehandler}
                 error={this.state.errors.Mobile_No_of_Parent}
                 />
                <Form 
                 name="Nationality"
                 label="Nationality"
                 type="text"
                 id="Nationality"
                 value={this.state.userDetail.Nationality}
                 onChange={this.changehandler}
                 error={this.state.errors.Nationality}
                 />
                <Form 
                 name="Category"
                 label="Category"
                 type="text"
                 id="Category"
                 value={this.state.userDetail.Category}
                 onChange={this.changehandler}
                 error={this.state.errors.Category}
                 />
                <Form 
                 name="Person_with_disability"
                 label="Person with disability"
                 type="text"
                 id="Person_with_disability"
                 value={this.state.userDetail.Person_with_disability}
                 onChange={this.changehandler}
                 error={this.state.errors.Person_with_disability}
                 />
                <Form 
                 name="Country_of_Permanent_Residence"
                 label="Country of Permanent Residence"
                 type="text"
                 id="Country_of_Permanent_Residence"
                 value={this.state.userDetail.Country_of_Permanent_Residence}
                 onChange={this.changehandler}
                 error={this.state.errors.Country_of_Permanent_Residence}
                 />
                <Form 
                 name="State_or_Union_Territory_of_Permanent_Residence"
                 label="State/Union Territory of Permanent Residence"
                 type="text"
                 id="State_or_Union_Territory_of_Permanent_Residence"
                 value={this.state.userDetail.State_or_Union_Territory_of_Permanent_Residence}
                 onChange={this.changehandler}
                 error={this.state.errors.State_or_Union_Territory_of_Permanent_Residence}
                 />
                <Form 
                 name="ID_Proof"
                 label="ID Proof"
                 type="text"
                 id="ID_Proof"
                 value={this.state.userDetail.ID_Proof}
                 onChange={this.changehandler}
                 error={this.state.errors.ID_Proof}
                 />
                <Form 
                 name="ID_Proof_Number"
                 label="ID Proof Number"
                 type="text"
                 id="ID_Proof_Number"
                 value={this.state.userDetail.ID_Proof_Number}
                 onChange={this.changehandler}
                 error={this.state.errors.ID_Proof_Number}
                 /> 
              </div>
              <div className="certificate_upload">
                <input type="file" onChange={this.fileselectHandler} />
                <button onClick={this.uploadfileHandler}>upload</button>
              </div>
              <form onSubmit={this.handleuserdateSubmit}>
                <input className="submit" type="submit" value="Submit" />
              </form>
            </div>
         );
    }
}
 
export default AfterSubmit;
