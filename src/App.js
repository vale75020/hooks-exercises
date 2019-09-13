import React, { useState } from 'react';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import CounterFour from './components/CounterFour';
import './App.css';

const App = () => {
  const [count, setCount] = useState(10);
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  return (
    <div className="App">
      <div className="container">
      <br />
      <button onClick={() => setCount(count + 1)}> + 1 </button>
      <button onClick={() => setCount(currentCount => currentCount - 1)}> - 1 </button>
      <br /><br />
      {count}
      <br /><br />
      </div>
      <br /><br />
      <CounterOne />
      <br /><br />
      <CounterTwo />
      <br /><br />
      <CounterThree />
      <br /><br />
      <CounterFour />
      <br /><br />
      <div className="container">
        <input placeholder="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
        <br /><br />
        <input placeholder="password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
        <br /><br />
        <h6>Email : {email}</h6>
        <h6>Password : {password}</h6>
      </div>
    </div>
  );
}

export default App;
