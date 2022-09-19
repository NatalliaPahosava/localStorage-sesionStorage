import './App.css';

//sessionStorage-clears on browser/tab close

// local Storage-clears manually
//Javascript method (not only in React)
 
function App() {

  function addItemsLS(){
    localStorage.setItem('username', 'jiho')
    localStorage.setItem('password','mesa787888')
    localStorage.setItem('email','mesaJiho@gmail.com')
  }
  function removeItemLS(){
    localStorage.removeItem('username')
  }
const getItemLS=()=>{
  return username=localStorage.getItem('username')
  console.log(username)
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>LS and SS</h1>
        <button onClick={addItemsLS}>Add</button>
        <button onClick={removeItemLS}>Remove item</button> 
      </header>
    </div>
  );
}

export default App;
