import { useState } from "react"

export const Login = () => {
  const [form,setForm]=useState({})
  console.log(form) /// user {email:'jonathan',password:'1873838'}
  function handleLogin(){
    localStorage.setItem('user',form)
  }
  return (
    <>
      <h3>login here</h3>
      <form action=''>
        <label htmlFor=''>Email</label>
        <input type='text' placeholder="your email" onChange={ e =>setForm({...form,email:e.target.value})}/>
        <br />
        <label htmlFor=''>Password</label>
        <input type='password' onChange={(e)=>setForm({...form, password: e.target.value})}/>
        <br />
        <button onClick={handleLogin}>Login</button>
      
      </form>
    </>
  )
}
