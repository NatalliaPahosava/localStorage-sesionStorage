import { useState,useEffect } from 'react';
import './App.css';
import { Login } from './Login';

//sessionStorage-clears on browser/tab close

// local Storage-clears manually
//Javascript method (not only in React)
 
function App() {
const [username,setUsername]=useState('')
useEffect(()=>{
  const username=localStorage.getItem('username')
  setUsername(username)
},[])
  function addItemsLS(){
    localStorage.setItem('username', 'jiho')
    localStorage.setItem('password','mesa787888')
    localStorage.setItem('email','mesaJiho@gmail.com')
  }
  function removeItemLS(){
    localStorage.removeItem('username')
  }
  
  function addItemsSS(){
    sessionStorage.setItem('username', 'Rues1234556')
    sessionStorage.setItem('password','vweeee')
    sessionStorage.setItem('email','ruej@gmail.com')
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>LS and SS</h1>
        <p>Welcome user {username}!</p>
        <button onClick={addItemsLS}>Add</button>
        <button onClick={removeItemLS}>Remove item</button> 
        <button onClick={addItemsSS}>Add SS</button>
        <Login/>
      </header>
    </div>
  );
}

export default App;
