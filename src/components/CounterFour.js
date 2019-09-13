import React, { useState } from "react";

const CounterFour = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 90) + 1 }
    ]);
  };

  const reset = () => {
      setItems([])
  }

//   const onDelete = (id) => {
//       setItems(...items, items.splice(id))
//       console.log("click")
//   }

  return (
    <div className="container">
      <button onClick={addItem}>Add a random number between 1 and 90</button><br/><br />
      <button onClick={reset}>Clear All</button>
      <ul>
        {items.map(item => (
          <li style={{listStyle: "none"}}key={item.id}>{item.value}
         {/* <button onClick={onDelete}>Delete</button> */}
         </li>
        ))}
      </ul>
    </div>
  );
};

export default CounterFour;
