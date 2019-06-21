
import React, {useState} from 'react';

const  SignInMsgError = () =>  (
  <div>
  <span>
invalid user
  </span>
  </div>);



export default function SignIn() {
 const [signInEmail, setSignInEmail] = useState('');
 const [signInPassword, setSignInPassword] = useState('');
 const [isMsgHide, setIsMsgHide] = useState(true);

 const onSignInEmailChange = (event) => {
   setSignInEmail(event.target.value)
  }

 const onSignInPasswordChange = (event) => {
    setSignInPassword(event.target.value)
  }

 const onSubmitSignIn = () => {
    fetch('http://localhost:3001/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
              console.log(user)
        }  else (setIsMsgHide(false))
      })
  }

  return (
          <div>
          <form>
          <input type="email" name="email" placeholder="Email" onChange={(event)=>onSignInEmailChange(event)}/>
          <input type="password" name="password" placeholder="Password" onChange={(event)=>onSignInPasswordChange(event)}/>
          <button onClick={(event)=>{event.preventDefault(); setIsMsgHide(true); onSubmitSignIn() }}> sign in </button>
          </form>
          {!isMsgHide && <SignInMsgError/>}
          </div>

  	)

}




