import React from 'react';

import './input.css';
const Input = (props) => {
 
 
  return (
    <div className="inputs">
      <div className="emailfeild">
        <label>Email</label>
        <input
          type="email"
          onChange={props.onChangeEmail}
          value={props.emailValue}
        />
      </div>
      <div className="passwordfeild">
        <label>Password</label>
        <input
          type="password"
          onChange={props.onChangePassword}
          value={props.passwordValue}
        />
      </div>
    </div>
  );
}

export default Input;