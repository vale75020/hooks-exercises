import React, { useState } from "react";

const CounterThree = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div className="container">
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={e => setName({...name, firstName : e.target.value})} // ...name is to hold all the variables in the state
      />
      <input
        type="text"
        value={name.lastName}
        onChange={e => setName({...name, lastName : e.target.value})}
      />
      <h2>Your firstname is : {name.firstName}</h2>
      <h2>Your lastname is : {name.lastName}</h2>
    </form>
    </div>
  );
};

export default CounterThree;
