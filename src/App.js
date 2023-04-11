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
    <form className="App">
      <h1 className="header">Login_Page</h1>
      <Input
        onChangeEmail={HandleEmailChange}
        onChangePassword={HandlePasswordChange}
      />
      <Button onClickButton={HandleClick} />
    </form>
  );
}

export default App;
