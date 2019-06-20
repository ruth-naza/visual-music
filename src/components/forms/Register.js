import React, {useState} from 'react';

const  RegisterMsgError = () =>  (
  <div>
  <span>
invalid regisrertion
  </span>
  </div>);

export default function Register() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [isHide, setIsHide] = useState(true);

	const onNameChange = (event) => {
    setName(event.target.value)
  }

   const onEmailChange = (event) => {
    setEmail(event.target.value)
  }

    const onPasswordChange = (event) => {
     setPassword(event.target.value)
  }

   const onSubmitRegister = () => {
    fetch('http://localhost:3001/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        password: password,
        name: name
      })
    })
       .then(response => response.json())
      .then(user => {
        if (user.id) {
          console.log(user)
        } else (setIsHide(false))
      })
  }

    return (
          <div>
          <form>
          <input type="text" name="name" placeholder="Name" onChange={(event)=>onNameChange(event)}/>
          <input type="email" name="email" placeholder="Email" onChange={(event)=>onEmailChange(event)}/>
          <input type="password" name="password" placeholder="Password" onChange={(event)=>onPasswordChange(event)}/>
          <button onClick={(event)=>{event.preventDefault();setIsHide(true); onSubmitRegister() }}> register </button>
          </form>
          {!isHide && <RegisterMsgError/>}
          </div>

  	)
}