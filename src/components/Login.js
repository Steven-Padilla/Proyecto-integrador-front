import {useState} from 'react';
import { getUser } from '../services/services';

export default function Login(){
    // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

 

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    getUser(uname.value,pass.value).then(function(data){
      // Compare user info
      console.log(data)
      if(data.message){
        if(data.error===1){
          setErrorMessages({ name: "uname", message: errors.uname });
        }else{
          setErrorMessages({ name: "pass", message: errors.pass });
        }
      }else{
        setIsSubmitted(true);
      }


    
    })
    
    
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? window.location.replace('http://localhost:3000/menu'): renderForm}
      </div>
    </div>
  );
}