import { useState,useEffect } from 'react';
import './App.css';

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
// const getItemLS=()=>{
 
// }

  return (
    <div className="App">
      <header className="App-header">
        <h1>LS and SS</h1>
        <p>Welcome user {username}!</p>
        <button onClick={addItemsLS}>Add</button>
        <button onClick={removeItemLS}>Remove item</button> 
        {/* <button onClick={getItemLS}>Get item</button> */}
      </header>
    </div>
  );
}

export default App;
