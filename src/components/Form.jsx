import React, { useState } from 'react'

const Form = () => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  
  const handleSumbit=()=>{
    e.preventDefault();
    console.log(name, phone, email, password);
    
  }
  const handleName=(e)=>{
    let x = e.target.value;
    setName(x);
    if(x.length<2){
      setErrorName("*name must be longer than 2");
    }
    else{
      setErrorName("");
    }

  }

  const handlePhone=(e)=>{
    let x = e.target.value;
    setPhone(x);
    if(x.length<9){
      setErrorPhone("*phone number must be longer than 8 digits");
    }
    else{
      setErrorPhone("");
    }

  }

  return (
    <>
    <main>
      <div>
        <form onSubmit={handleSumbit} action="">
          <label htmlFor="">name</label>
          <input onChange={handleName} placeholder='Enter name..' type="text" />
          <div className='comment'>{errorName}</div>
          <label htmlFor="">phone</label>
          <input onChange={handlePhone} placeholder='Enter phone..' type="text" />
          <div className='comment'>{errorPhone}</div>
          <label htmlFor="">email</label>
          <input onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email..' type="email" />
          <label htmlFor="">password</label>
          <input onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password..' type="password" />
          <button className='BTNform'>sign up</button>
        </form>
      </div>
    </main>
    </>
  )
}

export default Form