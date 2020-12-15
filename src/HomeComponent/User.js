import React from 'react';
import '../css/Home.css';
const User = (props) => {
  const  resetLocalstorage = ()=>{
        localStorage.removeItem('rememberMe')
    }
    return (
    <>
        <div className="logout">
        <a href="/login" onClick={resetLocalstorage}>Logout</a>
        </div>
        <div className="user">
          <div className="user-information">
          <div className="user-detail">
              <h1>Candidate Detail</h1>
              <p>
                 <span>Enrollment no:</span><span>{props.location.state.data.Enrollment_ID}</span>
              </p>
              <p><span>Name:</span>
                 <span>{props.location.state.data.Name_of_candidate}</span>
              </p>
              <p>
                 <span>Email:</span> <span>{props.location.state.data.email}</span>  
              </p>
              <p>
                 <span>Date of Birth:</span>
                 <span>{props.location.state.data.Date_of_Birth}</span>
              </p>
              <p>
                  <span>Mobile No</span>
                  <span>{props.location.state.data.Mobile_No}</span>
              </p>
              <p>
                  <span>Category:</span>
                  <span>{props.location.state.data.Category}</span>
              </p>
              <h1>parent Details</h1>
              <p>
                  <span>Name of Parent:</span>
                  <span>{props.location.state.data.Name_of_Parent}</span>
              </p>
              <p>
                  <span>Mobile No of Parent:</span>
                  <span>{props.location.state.data.Mobile_No_of_Parent}</span>
              </p>
              <p>
                  <span>Parmanent Address:</span>
                  <span>{props.location.state.data.Country_of_Permanent_Residence}</span>
              </p>
       </div>
   </div>
  
    </div>
    </>
     );
}
 
export default User;