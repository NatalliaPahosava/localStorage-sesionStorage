import { useEffect, useState } from 'react'

export const Login = () => {
  const [form, setForm] = useState({})
  const [email, setEmail] = useState('')

  useEffect(() => {
    const user = localStorage.getItem('user')
    const formatedUser = JSON.parse(user) 
    setEmail(formatedUser.email)
  }, [])

  console.log(form) /// user {email:'jonathan',password:'1873838'}

  function handleLogin() {
    const formatedForm = JSON.stringify(form)
    localStorage.setItem('user', formatedForm)
  }

  return (
    <>
      <h3>login,mr.{email}</h3>
      <form action=''>
        <label htmlFor=''>Email</label>
        <input
          type='text'
          placeholder='your email'
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <br />
        <label htmlFor=''>Password</label>
        <input
          type='password'
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
      </form>
    </>
  )
}
