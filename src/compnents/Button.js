import React from 'react'
import './button.css';
const Button = (props) => {



  
  return (
    <div>
      <button onClick={props.onClickButton} className="mybutton">
        Login
      </button>
    </div>
  );
}

export default Button;