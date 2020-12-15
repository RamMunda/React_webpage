import React from 'react';
import "../css/Home.css";
function Form({name,label,type,placeholder,onChange,value,error}) {

    return (
        <div className="form">
                 <div className={name}>
                 <label htmlFor={name}>{label}</label>
                <input type={type} name={name}
                id={name} 
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
                    />
                {error && <p className="error">{error}</p> }
                 </div>    
        </div>
    )
}

export default Form;
