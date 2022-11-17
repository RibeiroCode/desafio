import React, { InputHTMLAttributes }  from "react";
import "./styles.css";


const Input = ({name, password, label  }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{name}</label>
      <label htmlFor={password}>{password}</label>
      <label htmlFor={label}>{label}</label>
      <input type="text" id={name} />
      <input type ="password" id={password}/>
      <input type ="text" id={label}/>
    
      
    </div>
  );
};
export default Input;
