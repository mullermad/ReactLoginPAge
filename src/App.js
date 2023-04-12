import Input from './compnents/Input';
import { useState } from 'react';
import Button from './compnents/Button';
import './app.css';

function App() {
  const [email,setEmail]=useState('');
   const [password, setPassword] = useState("");

   const HandlePasswordChange = (event) => {
    setPassword(event.target.value);
   
   
   };
   const HandleEmailChange = (event) => {
    setEmail(event.target.value);
   
 
    
   };
const HandleClick = (event) => {
  event.preventDefault();
  console.log(`The email is ${email}`);
console.log(`The password is ${password}` );
setEmail('');
setPassword('');
};

  return (
    <form className="App" onSubmit={HandleClick}>
      <h1 className="header">Login_Page</h1>
      <Input
        onChangeEmail={HandleEmailChange}
        emailValue={email}
        onChangePassword={HandlePasswordChange}
        passwordValue={password}
      />
      <Button />
    </form>
  );
}

export default App;
